# Semantic Search Setup Guide

This guide explains how to set up and use the new AI-powered semantic search system for the GoInvo portfolio.

## Overview

The semantic search system uses OpenAI's embedding models to understand the meaning of user queries and find the most relevant projects. It includes:

- **AI-powered metadata extraction** from project descriptions
- **Vector embeddings** for true semantic understanding
- **Real-time similarity search** using cosine similarity
- **Advanced filtering** by project type, industry, and complexity
- **Cost-effective architecture** (~$0.50 per 1000 searches)

## Prerequisites

1. **OpenAI API Key** - Get one from [OpenAI Platform](https://platform.openai.com/api-keys)
2. **Node.js 18+** - Required for the embedding generation script
3. **Netlify Functions** - For the serverless search API

## Setup Instructions

### 1. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# OpenAI API Key for Semantic Search
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Set to 'development' to skip regenerating embeddings
NODE_ENV=production
```

### 2. Generate Search Index

Run the embedding generation script to create the search index:

```bash
npm run generate-embeddings
```

This script will:
- Load all case studies and features
- Extract metadata using GPT-3.5-turbo
- Generate embeddings using text-embedding-3-small
- Save the search index to `src/data/search-index.json`

**Note:** This process requires an OpenAI API key and will make API calls costing approximately $2-5 for ~73 projects.

### 3. Deploy Netlify Function

The search API is implemented as a Netlify Function in `netlify/functions/search.js`. When you deploy to Netlify:

1. Add your `OPENAI_API_KEY` to Netlify environment variables
2. The function will automatically be available at `/.netlify/functions/search`

### 4. Test the Search

Once deployed, you can test the search:

```bash
curl -X POST https://your-site.netlify.app/.netlify/functions/search \
  -H "Content-Type: application/json" \
  -d '{"query": "I need a UI for an AI platform for therapists"}'
```

## How It Works

### Architecture

```
User Query → Frontend → Netlify Function → OpenAI Embedding → Vector Search → Results
```

1. **User enters query** in natural language
2. **Frontend calls** the `/search` function
3. **Function embeds query** using OpenAI API
4. **Cosine similarity search** finds most relevant projects
5. **Results returned** with similarity scores

### Search Features

- **Natural Language**: "I need a UI for an AI platform for therapists"
- **Metadata Filtering**: Filter by project type, industry, complexity
- **Similarity Scores**: See percentage match for each result
- **Smart Enhancement**: Query expansion for better matching

### Cost Structure

Based on your analysis document, costs are minimal:

- **Embedding Generation**: ~$2-5 one-time for 73 projects
- **Search Queries**: ~$0.0001 per query (almost free)
- **Total Cost**: Well under $20 per 1000 users

## File Structure

```
scripts/
  generate-embeddings.js     # Generates search index
netlify/functions/
  search.js                  # Serverless search API
src/
  components/
    project-search.js        # Frontend search component
  data/
    search-index.json        # Generated search index (not in git)
  styles/components/
    _project-search.scss     # Search component styles
```

## Maintenance

### Adding New Projects

When you add new case studies or features:

1. Run `npm run generate-embeddings` to update the search index
2. Redeploy your site to update the search function

### Monitoring Performance

Watch for:
- **API costs** in OpenAI dashboard
- **Function execution time** in Netlify analytics  
- **Search accuracy** from user feedback

### Updating Search Terms

To improve search accuracy, update the `searchMappings` in the search function:

```javascript
const designTerms = {
  'ui': 'user interface design',
  'therapist': 'therapy mental health counseling',
  // Add more mappings as needed
}
```

## Troubleshooting

### Common Issues

**Search not working**: Check OpenAI API key in Netlify environment variables

**Poor results**: Regenerate embeddings with updated project content

**High costs**: Monitor usage in OpenAI dashboard, adjust rate limits if needed

**Function timeout**: Increase Netlify function timeout for complex queries

### Performance Optimization

- **Caching**: Results are cached client-side for repeated queries
- **Throttling**: 500ms debounce prevents excessive API calls
- **Filtering**: Metadata filters reduce search space

## Example Queries

Try these natural language queries:

- "I need a UI for an AI platform for therapists"
- "Healthcare dashboard for government use"
- "Mobile app design for patient engagement"
- "Data visualization for medical research"
- "Enterprise software for clinical workflows"

## Security Notes

- OpenAI API key is server-side only (never exposed to clients)
- Search index contains no sensitive data
- Rate limiting prevents API abuse
- CORS headers configured for your domain

## Future Enhancements

Possible improvements based on usage:

1. **Search Analytics**: Track popular queries and results
2. **Machine Learning**: Improve relevance based on user interactions
3. **Advanced Filters**: Add date ranges, client types, etc.
4. **Search History**: Remember recent searches for users
5. **Saved Searches**: Allow bookmarking of complex queries

---

For technical details, see the original analysis in `search-engine-info.md`. 