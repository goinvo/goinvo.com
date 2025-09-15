// Netlify Function: Forward contact submissions to Acumbamail Subscribers API
// Requires env: ACUMBAMAIL_KEY, ACUMBAMAIL_LIST_ID (list id to store contacts)

// Load local environment variables from project root .env when available (local dev)
try {
  const path = require('path')
  const fs = require('fs')
  const rootEnvPath = path.join(__dirname, '..', '..', '.env')
  if (fs.existsSync(rootEnvPath)) {
    require('dotenv').config({ path: rootEnvPath })
  }
} catch {}

const fetch = global.fetch || require('node-fetch')

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    },
    body: JSON.stringify(body)
  }
}

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}')

    if (!name || !email || !message) {
      return jsonResponse(400, { error: 'Missing required fields' })
    }

    // Prefer Incoming Webhooks (no auth token required)
    const WEBHOOK_URL = process.env.ACUMBAMAIL_WEBHOOK_URL || process.env.ACUMBA_WEBHOOK_URL
    if (WEBHOOK_URL) {
      // Build a payload that matches the docs and can be mapped in Acumbamail Incoming Webhooks
      // For "Send transactional email" map:
      // body <- message, to_email <- to_email, from_email <- from_email, subject <- subject
      const payload = {
        name,
        email,
        message,
        subject: 'Website contact form',
        to_email: 'info@goinvo.com',
        from_email: email
      }
      let res, bodyText
      try {
        res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload)
        })
        bodyText = await res.text()
      } catch (e) {
        console.error('Acumbamail webhook request failed:', e)
        return jsonResponse(502, { error: 'Webhook request failed' })
      }
      let parsed
      try { parsed = JSON.parse(bodyText) } catch { parsed = { raw: bodyText } }
      if (!res.ok) {
        return jsonResponse(res.status || 502, { error: 'Webhook returned error', details: parsed })
      }
      return jsonResponse(200, { ok: true, provider: 'acumbamail-webhook', result: parsed })
    }

    // Fallback to API token flow if webhook not configured
    const API_KEY = process.env.ACUMBAMAIL_KEY || process.env.ACUMBAMAIL_API_KEY || process.env.ACUMBA_API_KEY
    const LIST_ID = process.env.ACUMBAMAIL_LIST_ID
    if (!API_KEY) {
      return jsonResponse(503, { error: 'Acumbamail not configured', missingEnv: ['ACUMBAMAIL_WEBHOOK_URL','ACUMBAMAIL_KEY'], tried: ['ACUMBAMAIL_WEBHOOK_URL','ACUMBAMAIL_KEY','ACUMBAMAIL_API_KEY','ACUMBA_API_KEY'] })
    }

    const params = new URLSearchParams()
    params.append('auth_token', API_KEY)
    if (LIST_ID) params.append('list_id', LIST_ID)
    params.append('email', email)
    params.append('name', name)
    params.append('fields[message]', message)
    params.append('double_optin', '0')

    const endpoint = 'https://acumbamail.com/api/1/subscribers/insert/'
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    const text = await res.text()
    let json
    try { json = JSON.parse(text) } catch { json = { raw: text } }
    if (!res.ok) return jsonResponse(res.status || 502, { error: 'API returned error', details: json })
    return jsonResponse(200, { ok: true, provider: 'acumbamail-api', result: json })
  } catch (error) {
    console.error('acumbamail-contact error:', error)
    return jsonResponse(500, { error: 'Submission failed' })
  }
}


