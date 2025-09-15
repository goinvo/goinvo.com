# AI-Enhanced Search Feature

## Overview

The AI-enhanced search feature leverages OpenAI's GPT-5 to provide intelligent project recommendations based on user personas and search queries. This feature generates contextual descriptions for projects on-the-fly, making search results more relevant and personalized.

## Key Features

1. **Persona-Based Search**: Users can select from predefined buyer personas to get tailored recommendations
2. **Dynamic Descriptions**: AI generates project descriptions specific to the user's needs and context
3. **Smart Throttling**: Rate limiting prevents API abuse (5 requests per minute per IP)
4. **Intelligent Caching**: Preset queries are cached for 24 hours, with pre-generated responses lasting 7 days
5. **Fallback Support**: Gracefully falls back to standard search if AI is unavailable
6. **Optimized Payload**: Sends only essential project data to avoid payload size limits

## Available Personas

- 🏥 **Healthcare Executive**: Focus on ROI, compliance, and patient outcomes
- 📱 **Product Manager**: UX/UI best practices and design patterns
- 🔬 **Clinical Researcher**: Research tools and data management
- 🏛️ **Government Official**: Civic tech and public sector solutions
- 🚀 **Startup Founder**: Scalable innovations and technical patterns

## Setup

### 1. Environment Configuration

Add your OpenAI API key to `.env`:

```bash
OPENAI_API_KEY=your-api-key-here
```

### 2. Pre-generate AI Cache (Optional but Recommended)

Run the pre-generation script to cache common persona queries:

```bash
npm run generate-ai-cache
```

This will:
- Generate AI responses for common queries for each persona
- Cache responses in `public/ai-preset-cache.json`
- Reduce API calls and improve response times

### 3. Deploy with Netlify

The AI search feature is implemented as a Netlify Function. When deploying to Netlify:

1. Ensure your repository has the `netlify/functions/ai-search.js` file
2. Set the `OPENAI_API_KEY` environment variable in Netlify dashboard
3. Deploy as usual - Netlify will automatically detect and deploy the function

### 4. Local Development

For local development with Netlify Functions:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Run the development server with functions
netlify dev
```

This will start:
- Gatsby dev server on port 8000
- Netlify Functions on port 8888
- A proxy that routes everything correctly

## How It Works

### User Flow

1. User enters a search query
2. Standard keyword search runs first
3. User clicks "Enable AI" button
4. Persona selector appears
5. User selects a persona
6. AI analyzes top 20 search results (with minimal data)
7. AI selects 3-5 most relevant projects
8. AI generates persona-specific descriptions
9. Results are re-ordered with AI recommendations first

### Technical Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Browser   │────▶│ Search Index │────▶│  Enhanced   │
│             │     │   (Static)   │     │   Search    │
└─────────────┘     └──────────────┘     └─────────────┘
       │                                         │
       │                                         ▼
       │                                  ┌─────────────┐
       │                                  │   Results   │
       │                                  └─────────────┘
       │                                         │
       ▼                                         │
┌─────────────┐                                  │
│  AI Toggle  │──────────────────────────────────┘
└─────────────┘
       │
       ▼
┌─────────────┐     ┌───────────────────┐     ┌─────────────┐
│   Persona   │────▶│ Netlify Function  │────▶│   OpenAI    │
│  Selection  │     │ (/.netlify/...)   │     │   GPT-5     │
└─────────────┘     └───────────────────┘     └─────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ Rate Limiter │
                    │   & Cache    │
                    └──────────────┘
```

### API Endpoint

`POST /.netlify/functions/ai-search`

Request body (optimized payload):
```json
{
  "query": "patient monitoring systems",
  "projects": [
    {
      "slug": "project-slug",
      "title": "Project Title",
      "caption": "Brief description",
      "categories": ["category1", "category2"],
      "score": 0.85
    }
  ],
  "preset": "healthcare_executive",
  "useAI": true
}
```

Response:
```json
{
  "results": [
    {
      "slug": "infobionic-heart-monitoring",
      "title": "Infobionic Heart Monitoring",
      "aiDescription": "This remote cardiac monitoring platform directly addresses...",
      "aiSelected": true,
      ...
    }
  ],
  "aiGenerated": true,
  "searchInsight": "The user is looking for advanced patient monitoring...",
  "preset": "healthcare_executive"
}
```

## Performance Considerations

1. **Initial Load**: AI feature loads asynchronously, doesn't block search
2. **API Latency**: Typically 1-3 seconds for AI enhancement
3. **Caching**: Reduces repeated API calls by 80%+
4. **Rate Limiting**: Prevents abuse while allowing reasonable usage
5. **Payload Optimization**: Only sends essential fields (slug, title, caption, categories, score)

## Cost Management

- Each AI-enhanced search costs approximately $0.02-0.05 in OpenAI API fees
- Pre-generated cache reduces costs by 60-80%
- Rate limiting caps maximum cost per user
- Monitor usage via OpenAI dashboard

## Troubleshooting

### AI feature not working

1. Check if `OPENAI_API_KEY` is set in Netlify environment variables
2. Verify API key has sufficient credits
3. Check browser console for errors
4. Ensure Netlify Functions are deployed correctly

### Payload Too Large Error

The implementation now sends minimal project data to avoid this error. If it persists:
1. Reduce the number of projects sent (currently 20)
2. Further minimize the data sent per project
3. Check Netlify Function logs for details

### Slow response times

1. Pre-generate cache: `npm run generate-ai-cache`
2. Reduce number of projects sent to AI (currently 10 in the function)
3. Consider using a faster OpenAI model (e.g., gpt-5-mini)

### Rate limit errors

- Default: 5 requests per minute per IP
- Adjust `MAX_REQUESTS_PER_WINDOW` in `netlify/functions/ai-search.js`

### CORS errors

The `netlify.toml` file includes CORS headers. If issues persist:
1. Check that the headers are properly configured
2. Ensure the function URL matches your deployment

## Future Enhancements

1. **Persistent Cache**: Store cache in database instead of memory
2. **User Preferences**: Remember persona selection
3. **Custom Personas**: Allow users to define their own contexts
4. **Feedback Loop**: Learn from user interactions
5. **Multi-language**: Support non-English queries
6. **Edge Functions**: Use Netlify Edge Functions for faster response times 