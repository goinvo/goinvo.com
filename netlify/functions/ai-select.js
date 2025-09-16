// Server-side selection (Stage 1): rank projects using embeddings
// Input: { query: string, topK?: number }
// Output: { results: Array<{ slug, title, caption, categories, image, score }>, selectionMode: 'server-embeddings' }

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const OpenAI = require('openai')

// Load root .env in local dev
try {
  const rootEnvPath = path.join(__dirname, '..', '..', '.env')
  if (fs.existsSync(rootEnvPath)) {
    require('dotenv').config({ path: rootEnvPath })
  }
} catch {}

// Prefer explicit env var; fallback to a widely available model
const EMBEDDING_MODEL = process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small'

// Initialize OpenAI client
const hasOpenAIKey = !!process.env.OPENAI_API_KEY
const openai = hasOpenAIKey ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null

// In-memory cache for embeddings to reduce API calls
const embeddingCache = new Map() // key: slug, value: { vector, ts }
const CACHE_TTL_MS = 24 * 60 * 60 * 1000

// Persistent cache on disk (best-effort; may not persist on some hosts)
const PERSIST_DIR = path.join(__dirname, '..', '..', '.embeddings-cache')
const PERSIST_FILE = path.join(PERSIST_DIR, 'server-embeddings.json')
let persistentCache = null

function hashText(text) {
  return crypto.createHash('sha256').update(text || '').digest('hex')
}

function loadPersistentCache() {
  if (persistentCache) return persistentCache
  try {
    if (fs.existsSync(PERSIST_FILE)) {
      const raw = fs.readFileSync(PERSIST_FILE, 'utf-8')
      const json = JSON.parse(raw)
      // Reset cache if model changed
      if (json && json.model === EMBEDDING_MODEL && json.items && typeof json.items === 'object') {
        persistentCache = json
        return persistentCache
      }
    }
  } catch (e) {
    // ignore
  }
  persistentCache = { version: 1, model: EMBEDDING_MODEL, items: {} }
  return persistentCache
}

function savePersistentCacheSafe() {
  try {
    fs.mkdirSync(PERSIST_DIR, { recursive: true })
    fs.writeFileSync(PERSIST_FILE, JSON.stringify(persistentCache, null, 2))
  } catch (e) {
    // Not fatal if we cannot persist (e.g., read-only FS)
  }
}

// Simple rate limiting (per IP)
const rateLimiter = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

function checkRateLimit(ip) {
  const now = Date.now()
  const requests = rateLimiter.get(ip) || []
  const recent = requests.filter(t => now - t < RATE_LIMIT_WINDOW)
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false
  }
  recent.push(now)
  rateLimiter.set(ip, recent)
  return true
}

function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length) return 0
  let dot = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i]
    dot += x * y
    na += x * x
    nb += y * y
  }
  if (na === 0 || nb === 0) return 0
  return dot / (Math.sqrt(na) * Math.sqrt(nb))
}

function buildProjectText(project) {
  const buyerText = project.buyerDescriptions ? Object.values(project.buyerDescriptions).join(' ') : ''
  const modularText = project.modularDescriptions
    ? Object.values(project.modularDescriptions).flat().map(d => d.description).join(' ')
    : ''
  return [
    project.title,
    project.caption,
    project.client,
    ...(project.categories || []),
    buyerText,
    modularText
  ].filter(Boolean).join(' ')
}

async function embedText(text) {
  if (!openai) return null
  try {
    const res = await openai.embeddings.create({ model: EMBEDDING_MODEL, input: text })
    return res.data[0].embedding
  } catch (e) {
    console.error('ai-select embedding error:', e?.message || e)
    return null
  }
}

async function embedBatch(items) {
  // items: Array<{ key: string, text: string }>
  if (!openai || !Array.isArray(items) || items.length === 0) return {}
  try {
    const input = items.map(i => i.text)
    const res = await openai.embeddings.create({ model: EMBEDDING_MODEL, input })
    const out = {}
    res.data.forEach((row, idx) => {
      const itm = items[idx]
      if (itm && row && Array.isArray(row.embedding)) out[itm.key] = row.embedding
    })
    return out
  } catch (e) {
    console.error('ai-select batch embedding error:', e?.message || e)
    return {}
  }
}

function normalizeQuery(q) {
  if (!q) return ''
  let text = q.toLowerCase()
  // Map abbreviations and synonyms to canonical forms
  const replacements = [
    { pattern: /\bml\b/g, replace: 'machine learning' },
    { pattern: /\bai\b/g, replace: 'artificial intelligence' },
    { pattern: /\bnlp\b/g, replace: 'natural language processing' },
    { pattern: /\behr\b/g, replace: 'electronic health record' },
    { pattern: /\bemr\b/g, replace: 'electronic medical record' }
  ]
  replacements.forEach(r => { text = text.replace(r.pattern, r.replace) })
  return text
}

function fuzzyVariants(q) {
  // Simple variants to handle common typos: swap adjacent letters, replace common vowel, drop char
  const variants = new Set([q])
  const letters = q.split('')
  for (let i = 0; i < letters.length - 1; i++) {
    const arr = letters.slice()
    const tmp = arr[i]; arr[i] = arr[i+1]; arr[i+1] = tmp
    variants.add(arr.join(''))
  }
  // Replace common vowel mistakes
  variants.add(q.replace(/a/g, 'e'))
  variants.add(q.replace(/e/g, 'a'))
  variants.add(q.replace(/i/g, 'e'))
  // Drop a character
  if (q.length > 3) variants.add(q.slice(0, q.length - 1))
  return Array.from(variants)
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    if (event.httpMethod === 'GET') {
      // Simple health check
      return { statusCode: 200, body: JSON.stringify({ ok: true, model: EMBEDDING_MODEL }) }
    }
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown'
  if (!checkRateLimit(ip)) {
    return { statusCode: 429, body: JSON.stringify({ error: 'Rate limit exceeded' }) }
  }

  try {
    const { query, topK = 20, projects: providedProjects } = JSON.parse(event.body || '{}')
    if (!query || typeof query !== 'string' || query.trim().length < 2) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid query' }) }
    }

    // Load projects from provided payload (dev) or disk (prod)
    let projects = []
    if (Array.isArray(providedProjects) && providedProjects.length > 0) {
      projects = providedProjects
    } else {
      const indexPath = path.join(__dirname, '..', '..', 'public', 'search-index.json')
      if (!fs.existsSync(indexPath)) {
        return { statusCode: 503, body: JSON.stringify({ error: 'Search index unavailable' }) }
      }
      projects = JSON.parse(fs.readFileSync(indexPath, 'utf-8'))
    }

    // If no API key, fallback to simple keyword ranking
    if (!openai) {
      const q = query.toLowerCase()
      const scored = projects.map(p => {
        const text = buildProjectText(p).toLowerCase()
        let score = 0
        q.split(/\s+/).forEach(w => { if (w && text.includes(w)) score += 1 })
        return { p, score }
      })
      scored.sort((a, b) => b.score - a.score)
      const results = scored.slice(0, topK).map(({ p, score }) => ({
        slug: p.slug,
        title: p.title,
        caption: p.caption,
        categories: p.categories || [],
        image: p.image || '',
        score
      }))
      return { statusCode: 200, body: JSON.stringify({ results, selectionMode: 'server-fallback' }) }
    }

    // Embed query (may fail; we will fallback to keyword scoring)
    const normalized = normalizeQuery(query)
    const queryEmbedding = await embedText(normalized)

    // Prepare and embed projects (cache per slug)
    loadPersistentCache()
    const now = Date.now()
    const scored = []
    // Build list needing new embeddings
    const batchToEmbed = []
    const vectors = new Map()
    for (const p of projects) {
      const key = p.slug || p.id || p.title
      const text = buildProjectText(p)
      const contentHash = hashText(text)
      const persisted = persistentCache.items[key]
      if (persisted && persisted.hash === contentHash && Array.isArray(persisted.vector)) {
        vectors.set(key, persisted.vector)
        continue
      }
      const cached = embeddingCache.get(key)
      if (cached && (now - cached.ts) <= CACHE_TTL_MS && cached.hash === contentHash && Array.isArray(cached.vector)) {
        vectors.set(key, cached.vector)
        continue
      }
      batchToEmbed.push({ key, text, hash: contentHash })
    }

    // Batch embed missing vectors
    if (batchToEmbed.length > 0) {
      const embedded = await embedBatch(batchToEmbed.map(({ key, text }) => ({ key, text })))
      batchToEmbed.forEach(item => {
        const vec = embedded[item.key]
        if (Array.isArray(vec)) {
          vectors.set(item.key, vec)
          embeddingCache.set(item.key, { vector: vec, ts: now, hash: item.hash })
          persistentCache.items[item.key] = { hash: item.hash, vector: vec, updatedAt: new Date().toISOString() }
        }
      })
    }

    // Score
    for (const p of projects) {
      const key = p.slug || p.id || p.title
      const text = buildProjectText(p)
      const vector = vectors.get(key)
      let score = 0
      if (queryEmbedding && Array.isArray(vector)) {
        score = cosineSimilarity(queryEmbedding, vector)
      } else {
        const q = normalized.toLowerCase()
        const textLower = text.toLowerCase()
        q.split(/\s+/).forEach(w => { if (w && textLower.includes(w)) score += 1 })
      }
      if (score < 0.4) {
        const textLower2 = text.toLowerCase()
        for (const v of fuzzyVariants(normalized)) { if (textLower2.includes(v)) { score += 0.1; break } }
      }
      scored.push({ p, score })
    }

    scored.sort((a, b) => b.score - a.score)

    // Apply a relevance threshold to avoid returning unrelated results
    const hasEmbeddings = !!queryEmbedding
    const MIN_SCORE = hasEmbeddings ? 0.12 : 0.5 // require at least one keyword match in fallback

    const filtered = scored.filter(({ score }) => score >= MIN_SCORE)
    const limited = (filtered.length > 0 ? filtered : scored).slice(0, topK)

    const results = limited.map(({ p, score }) => ({
      slug: p.slug,
      title: p.title,
      caption: p.caption,
      categories: p.categories || [],
      image: p.image || '',
      score
    }))
    // Best-effort save cache
    savePersistentCacheSafe()

    const mode = queryEmbedding ? 'server-embeddings' : 'server-fallback'
    return { statusCode: 200, body: JSON.stringify({ results, selectionMode: mode, warning: mode !== 'server-embeddings' ? 'Embeddings unavailable, used keyword fallback' : undefined }) }
  } catch (error) {
    console.error('ai-select error:', error)
    // Graceful fallback: try simple keyword scoring over provided/disk projects
    try {
      const { query, topK = 20, projects: providedProjects } = JSON.parse(event.body || '{}')
      const indexPath = path.join(__dirname, '..', '..', 'public', 'search-index.json')
      const projects = Array.isArray(providedProjects) && providedProjects.length > 0
        ? providedProjects
        : (fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf-8')) : [])
      const q = (query || '').toLowerCase()
      const scored = projects.map(p => ({
        p,
        score: q.split(/\s+/).reduce((acc, w) => acc + (w && (buildProjectText(p).toLowerCase().includes(w) ? 1 : 0)), 0)
      }))
      scored.sort((a, b) => b.score - a.score)
      const results = scored.slice(0, topK).map(({ p, score }) => ({
        slug: p.slug,
        title: p.title,
        caption: p.caption,
        categories: p.categories || [],
        image: p.image || '',
        score
      }))
      return { statusCode: 200, body: JSON.stringify({ results, selectionMode: 'server-fallback', warning: 'Embedding exception; used keyword fallback' }) }
    } catch (e2) {
      console.error('ai-select fallback error:', e2)
      return { statusCode: 500, body: JSON.stringify({ error: 'Selection failed' }) }
    }
  }
}


