// Vercel API wrapper that adapts our Netlify `ai-search` function
// to Vercel's (req, res) interface so the same logic works on both hosts.

module.exports = async (req, res) => {
  try {
    // Lazy-require to avoid bundling issues
    const netlifyFn = require('../netlify/functions/ai-search.js')
    const handler = netlifyFn.handler || netlifyFn

    const event = {
      httpMethod: req.method,
      headers: req.headers || {},
      // Netlify expects a JSON string body; ensure we pass a string
      body: typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {})
    }

    const result = await handler(event, {})

    if (result && result.headers) {
      Object.entries(result.headers).forEach(([key, value]) => {
        if (typeof value !== 'undefined') res.setHeader(key, String(value))
      })
    }

    res.status(result && result.statusCode ? result.statusCode : 200)
      .send(result && typeof result.body !== 'undefined' ? result.body : '')
  } catch (error) {
    res.status(500).json({ error: 'ai-search wrapper error', message: error.message })
  }
}


