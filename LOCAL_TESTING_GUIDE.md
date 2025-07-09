# Local Testing Guide for AI-Enhanced Search

## Quick Start

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Create .env file with your OpenAI key
echo "OPENAI_API_KEY=sk-your-key-here" > .env

# 3. Install dependencies
npm install

# 4. Run local dev server with functions
netlify dev
```

Your site will be available at http://localhost:8888 with AI functions working!

## Detailed Steps

### Prerequisites
- Node.js v18+
- OpenAI API key from https://platform.openai.com/api-keys

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Set Up Environment
Create a `.env` file in your project root:
```
OPENAI_API_KEY=sk-...your-actual-key...
```

### Step 3: Install All Dependencies
```bash
# Main project
npm install

# Netlify functions
cd netlify/functions && npm install && cd ../..
```

### Step 4: Generate Search Index
```bash
npm run generate-embeddings
```

### Step 5: Start Development Server
```bash
netlify dev
```

This starts:
- Gatsby on port 8000
- Functions on port 8888
- Unified proxy on port 8888

### Step 6: Test the Feature
1. Go to http://localhost:8888/work
2. Search for something (e.g., "patient monitoring")
3. Click "Enable AI"
4. Select a persona
5. See AI-enhanced results!

## Testing Without OpenAI Credits

Add this to `.env` for mock responses:
```
MOCK_AI=true
```

Then modify `netlify/functions/ai-search.js`:
```javascript
// At the start of generateAIResponse function
if (process.env.MOCK_AI === 'true') {
  return {
    selectedProjects: projects.slice(0, 3).map(p => ({
      slug: p.slug,
      description: `Mock description for ${p.title}`
    })),
    searchInsight: "Mock AI insight"
  };
}
```

## Troubleshooting

### "Function not found" error
```bash
# Ensure you're in project root
ls netlify/functions/ai-search.js
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

```bash
# Test the function directly
curl -X POST http://localhost:8888/.netlify/functions/ai-search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "heart monitoring",
    "projects": [{
      "slug": "test",
      "title": "Test Project",
      "caption": "Test",
      "categories": ["health"],
      "score": 0.9
    }],
    "preset": "healthcare_executive",
    "useAI": true
  }'
```

## Monitor Logs

The Netlify CLI shows all function logs in your terminal:
- Request received
- OpenAI API calls  
- Errors and responses
- Execution time

## Pre-deployment Checklist

✅ AI search returns relevant results  
✅ Rate limiting blocks after 5 requests  
✅ Errors show user-friendly messages  
✅ Search works without AI enabled  
✅ All personas work correctly  
✅ Response time < 3 seconds 