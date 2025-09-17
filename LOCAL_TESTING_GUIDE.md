# Local Testing Guide for AI-Enhanced Search

## Quick Start

```bash
# 1) Install Netlify CLI
npm install -g netlify-cli

# 2) Create .env with your OpenAI key (optional for basic testing)
echo "OPENAI_API_KEY=sk-your-key-here" > .env

# 3) Install deps (root and functions)
npm install && cd netlify/functions && npm install && cd ../..

# 4) Generate the search index (required once per clean)
npm run generate-minimal-search-index

# 5) Start local dev with functions
netlify dev
```

Your site will be available at http://localhost:8888 with functions proxied. Gatsby runs on 8000 behind the proxy.

Health check:

```bash
curl http://localhost:8888/.netlify/functions/ai-select
# → {"ok":true,"model":"text-embedding-3-small"}
```

## Detailed Steps

### Prerequisites
- Node.js v18+
- OpenAI API key from https://platform.openai.com/api-keys (optional for keyword-only testing)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Set Up Environment
Create a `.env` file in your project root (optional but recommended):
```
OPENAI_API_KEY=sk-...your-actual-key...
```

### Step 3: Install All Dependencies
```bash
npm install
cd netlify/functions && npm install && cd ../..
```

### Step 4: Generate Search Index
The UI and functions read `public/search-index.json`. Ensure it exists after a clean:

```bash
npm run generate-minimal-search-index
```

Optional: precompute embeddings cache to speed up first AI query (runs automatically during `develop`/`build` if an API key is present):

```bash
node scripts/precompute-embeddings.js
```

### Step 5: Start Development Server
```bash
netlify dev
```

This starts:
- Gatsby on port 8000
- Netlify Functions on port 8888
- Unified proxy on port 8888

### Step 6: Test the Feature
1. Go to http://localhost:8888/work
2. Search for something (e.g., "patient monitoring")
3. Click "Enable AI"
4. Select a persona
5. See AI-enhanced results!

## Testing Without OpenAI Credits

- `ai-select` will automatically fall back to keyword ranking when `OPENAI_API_KEY` is not set.
- `ai-search` requires an API key and returns `503` if missing. For UI testing without AI, simply do not enable AI in the search UI.
- If you want to force mocked AI descriptions locally, you may add a guard in `netlify/functions/ai-search.js` inside `generateAIResponse` to return canned data when `MOCK_AI=true`.

## Troubleshooting

### "Function not found" error
```bash
# Ensure you're in project root
ls netlify/functions/ai-search.js
ls netlify/functions/ai-select.js
```

### OpenAI key not working
```bash
# Test your key
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

### CORS errors
- Clear browser cache
- Try incognito mode
- Check console for details

### Rate limiting test
Make 6 quick searches - the 6th should show a rate limit error.

## Direct Function Testing

ai-select (Stage 1 — ranking with embeddings, keyword fallback if no key):
```bash
curl -X POST http://localhost:8888/.netlify/functions/ai-select \
  -H "Content-Type: application/json" \
  -d '{
    "query": "patient monitoring",
    "topK": 10
  }'
```

ai-search (Stage 2 — persona descriptions and relevance filtering):
```bash
curl -X POST http://localhost:8888/.netlify/functions/ai-search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "patient monitoring",
    "projects": [{
      "slug": "infobionic-heart-monitoring",
      "title": "Infobionic Heart Monitoring",
      "caption": "Remote cardiac monitoring",
      "categories": ["health"]
    }],
    "preset": "healthcare_executive",
    "useAI": true,
    "autoDetectPersona": true
  }'
```

## Monitor Logs

The Netlify CLI shows all function logs in your terminal:
- Request received
- OpenAI API calls  
- Errors and responses
- Execution time

Rate limits (local & prod):
- ai-select: 5 requests/minute per IP
- ai-search: 3 requests/minute per IP, max 50/day per IP

## Pre-deployment Checklist

✅ `public/search-index.json` exists  
✅ AI selection works (ai-select health check OK)  
✅ `ai-search` returns persona descriptions with `aiRelevant` flags  
✅ Rate limiting respected (3/min for ai-search)  
✅ Search works without AI enabled  
✅ Response time < 3 seconds for typical queries