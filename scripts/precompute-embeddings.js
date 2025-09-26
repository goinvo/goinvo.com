#!/usr/bin/env node

// Precompute and persist project embeddings for ai-select
// Output: .embeddings-cache/server-embeddings.json

const fs = require('fs')
const fsp = require('fs').promises
const path = require('path')
const crypto = require('crypto')
let OpenAI
try { OpenAI = require('openai') } catch {}

const ROOT = path.join(__dirname, '..')
const OUT_DIR = path.join(ROOT, '.embeddings-cache')
const OUT_FILE = path.join(OUT_DIR, 'server-embeddings.json')
const EMBEDDING_MODEL = process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small'

function log(msg) { console.log(`[precompute-embeddings] ${msg}`) }

function hashText(text) {
  return crypto.createHash('sha256').update(text || '').digest('hex')
}

function buildProjectText(p) {
  return [p.title, p.caption, p.client, ...(p.categories || [])].filter(Boolean).join(' ')
}

async function ensureSearchIndex() {
  const idxPath = path.join(ROOT, 'public', 'search-index.json')
  if (fs.existsSync(idxPath)) return idxPath
  const gen = path.join(ROOT, 'scripts', 'generate-minimal-search-index.js')
  if (!fs.existsSync(gen)) throw new Error('generate-minimal-search-index.js not found')
  log('Generating minimal search index...')
  require('child_process').execFileSync(process.execPath, [gen], { stdio: 'inherit' })
  return idxPath
}

async function main() {
  // If no API key, skip gracefully
  if (!process.env.OPENAI_API_KEY) {
    log('No OPENAI_API_KEY found; skipping precompute (fast fallback will be used).')
    return
  }

  const idxPath = await ensureSearchIndex()
  const projects = JSON.parse(fs.readFileSync(idxPath, 'utf-8'))
  if (!Array.isArray(projects) || projects.length === 0) {
    log('No projects found in search index; nothing to embed.')
    return
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  // Load prior cache if present and model matches
  let cache = { version: 1, model: EMBEDDING_MODEL, items: {} }
  try {
    if (fs.existsSync(OUT_FILE)) {
      const raw = fs.readFileSync(OUT_FILE, 'utf-8')
      const json = JSON.parse(raw)
      if (json && json.model === EMBEDDING_MODEL && json.items) cache = json
    }
  } catch {}

  const toEmbed = []
  for (const p of projects) {
    const key = p.slug || p.id || p.title
    const text = buildProjectText(p)
    const h = hashText(text)
    const existing = cache.items[key]
    if (!existing || existing.hash !== h || !Array.isArray(existing.vector)) {
      toEmbed.push({ key, text, hash: h })
    }
  }

  if (toEmbed.length === 0) {
    log('Embeddings are up to date; nothing to do.')
    return
  }

  log(`Embedding ${toEmbed.length} items with ${EMBEDDING_MODEL}...`)

  // Batch in chunks to respect token limits
  const BATCH = 64
  for (let i = 0; i < toEmbed.length; i += BATCH) {
    const slice = toEmbed.slice(i, i + BATCH)
    const input = slice.map(s => s.text)
    const res = await openai.embeddings.create({ model: EMBEDDING_MODEL, input })
    res.data.forEach((row, idx) => {
      const it = slice[idx]
      if (it && row && Array.isArray(row.embedding)) {
        cache.items[it.key] = { hash: it.hash, vector: row.embedding, updatedAt: new Date().toISOString() }
      }
    })
    log(`Embedded ${Math.min(i + BATCH, toEmbed.length)} / ${toEmbed.length}`)
  }

  await fsp.mkdir(OUT_DIR, { recursive: true })
  await fsp.writeFile(OUT_FILE, JSON.stringify(cache, null, 2))
  log(`Wrote ${OUT_FILE}`)
}

main().catch(err => { console.error(err); process.exit(0) })


