# AI Search Troubleshooting Guide

## Issue: "AI search unavailable" on deployment

When AI search works locally but fails on deployment with `aiGenerated: false` and `reason: "no-descriptions-generated"`, follow this guide.

## Quick Diagnosis Steps

### 1. Test OpenAI Connection Locally

First, verify your OpenAI API key works:

```bash
# Export your API key
export OPENAI_API_KEY=sk-...

# Run the connection test
npm run test:openai
```

This will test:
- API key validity
- Model availability (gpt-4.1-nano)
- Network connectivity
- Response parsing

### 2. Check Deployment Logs

After deploying with enhanced logging, check for:

```
✅ Initializing OpenAI client with key: sk-proj-...
✅ OpenAI client initialized successfully
```

If you see:
```
❌ OpenAI API key not found in environment
```
→ The API key is not set in your deployment environment

If you see error messages like:
```
✗ 3m-coderyte error: { message: '...', status: 401, ... }
```
→ There's an authentication or API issue

### 3. Check the Debug Response

The enhanced AI search now returns detailed error information in the debug section:

```json
{
  "aiGenerated": false,
  "debug": {
    "reason": "no-descriptions-generated",
    "errors": [
      {
        "slug": "project-slug",
        "error": "Invalid API key",
        "errorCode": "invalid_api_key",
        "errorStatus": 401,
        "errorType": "invalid_request_error"
      }
    ]
  }
}
```

## Common Issues and Solutions

### Issue 0: API Key Contains Newlines (Invalid Header Error)

**Symptoms:**
```json
{
  "error": "Headers.append: \"Bearer sk-proj-...\\nOTHER_VAR=...\" is an invalid header value."
}
```

**Cause:**
The `OPENAI_API_KEY` environment variable in Vercel contains extra content - typically the API key followed by a newline and another environment variable. This happens when copy-pasting multiple lines from a `.env` file.

**Solutions:**
1. **Fix in Vercel (Required):**
   - Go to Project Settings → Environment Variables
   - Edit `OPENAI_API_KEY`
   - Ensure the value is ONLY the API key (starts with `sk-`)
   - Remove any newlines, quotes, or additional text
   - Should look like: `sk-proj-xxxxx...xxxx`
   - Save and redeploy

2. **Verify the fix:**
   - The enhanced code now automatically strips newlines
   - Check logs for: `⚠️ API key contains newlines - extracting first line only`
   - If you see this warning, the code is working around the issue
   - But you should still fix the environment variable properly

### Issue 1: Authentication Error (401)

**Symptoms:**
```json
{
  "errorStatus": 401,
  "error": "Incorrect API key provided"
}
```

**Solutions:**
1. Verify the API key is set correctly in Vercel:
   - Go to Project Settings → Environment Variables
   - Check `OPENAI_API_KEY` exists and is correct
   - Make sure it's enabled for your deployment environment (Production/Preview)

2. Regenerate the API key:
   - Go to https://platform.openai.com/api-keys
   - Create a new key
   - Update it in Vercel

3. Check API key format:
   - Should start with `sk-proj-` (new format) or `sk-` (legacy)
   - No spaces or extra characters

### Issue 2: Model Not Found (404)

**Symptoms:**
```json
{
  "errorStatus": 404,
  "error": "Model 'gpt-4.1-nano' not found"
}
```

**Solutions:**
1. Check model availability:
   - Visit https://platform.openai.com/docs/models
   - Verify `gpt-4.1-nano` is available for your account tier

2. Try alternative model:
   - Edit `netlify/functions/ai-search.js`
   - Replace `gpt-4.1-nano` with `gpt-4o-mini` or `gpt-4o`

3. Check account limits:
   - Some models require higher tier accounts
   - Check your OpenAI dashboard for available models

### Issue 3: Rate Limit (429)

**Symptoms:**
```json
{
  "errorStatus": 429,
  "error": "Rate limit exceeded"
}
```

**Solutions:**
1. Check OpenAI usage:
   - Visit https://platform.openai.com/usage
   - Verify you haven't exceeded quota

2. Adjust rate limits in code:
   - Edit `netlify/functions/ai-search.js`
   - Lines 56-58: Modify rate limit settings

3. Add billing to your OpenAI account:
   - Free tier has very limited quota
   - Add payment method for higher limits

### Issue 4: Timeout Errors

**Symptoms:**
```json
{
  "error": "ai-search-timeout-... after 15000ms"
}
```

**Solutions:**
1. Increase timeout:
   - Edit `netlify/functions/ai-search.js`
   - Line 909: Change `15000` to `30000` (30 seconds)

2. Check network connectivity:
   - Verify Vercel can reach OpenAI API
   - Check for firewall/network restrictions

### Issue 5: OpenAI API Outage

**Symptoms:**
- Intermittent failures
- All requests failing suddenly

**Solutions:**
1. Check OpenAI status:
   - Visit https://status.openai.com/
   - Look for ongoing incidents

2. Wait and retry:
   - Temporary outages usually resolve within minutes

## Testing Process

### Local Testing

1. **Test OpenAI connection:**
   ```bash
   npm run test:openai
   ```

2. **Test AI search locally:**
   ```bash
   npm run test:ai
   ```

3. **Check function logs:**
   ```bash
   netlify dev
   # Then make a search request and check console logs
   ```

### Deployment Testing

1. **Deploy with enhanced logging:**
   ```bash
   git add .
   git commit -m "Add enhanced AI search error logging"
   git push
   ```

2. **Check deployment logs:**
   - Vercel: Visit your deployment → Functions → ai-search → Logs
   - Netlify: Visit Site → Functions → ai-search → Logs

3. **Test search on deployment:**
   - Make a search request
   - Check the response's `debug.errors` field
   - Cross-reference with function logs

## Enhanced Debug Output

The updated function now provides detailed diagnostics:

```json
{
  "results": [...],
  "aiGenerated": false,
  "debug": {
    "HAS_OPENAI_KEY": true,
    "hasOpenAIClient": true,
    "reason": "no-descriptions-generated",
    "enhancedCount": 10,
    "generatedCount": 0,
    "errors": [
      {
        "slug": "project-slug",
        "error": "Error message",
        "errorCode": "error_code",
        "errorStatus": 401,
        "errorType": "error_type"
      }
    ]
  }
}
```

**Key fields:**
- `HAS_OPENAI_KEY`: Is the API key set?
- `hasOpenAIClient`: Did the client initialize?
- `enhancedCount`: How many projects were attempted?
- `generatedCount`: How many succeeded?
- `errors`: Detailed error info for each failure

## Vercel-Specific Notes

Since you're deploying to Vercel:

1. **Environment Variables:**
   - Set in Project Settings → Environment Variables
   - Must redeploy after changing env vars
   - Check which environments they apply to (Production/Preview/Development)

2. **Function Logs:**
   - Go to Deployment → Functions → ai-search
   - Click on a function invocation to see logs
   - Look for `✅` or `❌` emoji indicators

3. **Function Timeout:**
   - Vercel has a 10-second default timeout for serverless functions
   - Pro plan allows up to 60 seconds
   - Consider upgrading if hitting timeouts

## Next Steps

1. Deploy the enhanced error logging
2. Make a search request on your deployment
3. Check the `debug.errors` field in the response
4. Review deployment logs for detailed error messages
5. Follow the solution for the specific error code you're seeing

## Need More Help?

If the issue persists:

1. Share the complete `debug` object from the response
2. Include relevant logs from your deployment
3. Note which deployment platform (Vercel/Netlify)
4. Check OpenAI dashboard for API errors

