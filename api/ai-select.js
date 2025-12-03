// Vercel API wrapper that adapts our Netlify `ai-select` function
// to Vercel's (req, res) interface so the same logic works on both hosts.

module.exports = async (req, res) => {
  try {
    // Lazy-require to avoid bundling issues
    const { handler } = require('../netlify/functions/ai-select.js')

    // Vercel parses JSON automatically, but Netlify expects a string
    let bodyString = ''
    if (req.body) {
      bodyString = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
    }

    const event = {
      httpMethod: req.method,
      headers: req.headers || {},
      body: bodyString
    }

    const result = await handler(event, {})

    // Set headers from Netlify function response
    if (result && result.headers) {
      Object.entries(result.headers).forEach(([key, value]) => {
        if (typeof value !== 'undefined') res.setHeader(key, String(value))
      })
    }

    // Parse the JSON string body from Netlify function and send as JSON
    const statusCode = result && result.statusCode ? result.statusCode : 200
    if (result && result.body) {
      const parsedBody = typeof result.body === 'string' ? JSON.parse(result.body) : result.body
      res.status(statusCode).json(parsedBody)
    } else {
      res.status(statusCode).json({})
    }
  } catch (error) {
    console.error('ai-select wrapper error:', error)
    res.status(500).json({ error: 'ai-select wrapper error', message: error.message })
  }
}


