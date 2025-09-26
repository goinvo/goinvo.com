#!/bin/bash

echo "🚀 Setting up AI-Enhanced Search for local testing..."
echo ""

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
else
    echo "✅ Netlify CLI is installed"
fi

# Check for .env file
if [ ! -f .env ]; then
    echo ""
    echo "❌ No .env file found."
    echo "Please create one with your OpenAI API key:"
    echo ""
    echo "OPENAI_API_KEY=sk-your-key-here"
    echo ""
    echo "Get your key from: https://platform.openai.com/api-keys"
    exit 1
else
    echo "✅ .env file found"
fi

# Check if OPENAI_API_KEY is set
if ! grep -q "OPENAI_API_KEY" .env; then
    echo "❌ OPENAI_API_KEY not found in .env"
    echo "Add: OPENAI_API_KEY=sk-your-key-here"
    exit 1
else
    echo "✅ OpenAI API key configured"
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Install function dependencies
echo ""
echo "📦 Installing function dependencies..."
cd netlify/functions && npm install && cd ../..

# Check if search index exists
if [ ! -f public/search-index.json ]; then
    echo ""
    echo "🔍 Generating search index..."
    npm run generate-embeddings
else
    echo "✅ Search index exists"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Starting local development server..."
echo "- Site will be available at: http://localhost:8888"
echo "- Go to http://localhost:8888/work to test search"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the dev server
netlify dev 