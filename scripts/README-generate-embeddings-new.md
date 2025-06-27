# Generate Embeddings NEW - With Confidence Scoring

## Setup Instructions

1. **Copy the original file manually**:
   ```bash
   # In your terminal/command prompt:
   cp scripts/generate-embeddings.js scripts/generate-embeddings-new.js
   # or on Windows:
   copy scripts\generate-embeddings.js scripts\generate-embeddings-new.js
   ```

2. **Apply the following modifications to `generate-embeddings-new.js`**:

### Key Changes to Make:

#### 1. Update the cache file name (line 8):
```javascript
// Change from:
const CACHE_FILE = path.join(__dirname, '..', '.embeddings-cache', 'cache.json')
// To:
const CACHE_FILE = path.join(__dirname, '..', '.embeddings-cache', 'cache-new.json')
```

#### 2. Add low confidence tracking (after line 8):
```javascript
// Low confidence entries tracking
const lowConfidenceEntries = []
```

#### 3. Add technical terms blacklist (after line 162):
```javascript
// Technical terms that should not appear in non-technical content
const TECHNICAL_TERMS_BLACKLIST = {
  'history-timeline': [
    'tensorflow', 'django', 'react', 'angular', 'vue', 'python', 'java',
    'api', 'database', 'cloud computing', 'machine learning', 'predictive modeling',
    'data compression', 'algorithms', 'frameworks', 'temporal physics'
  ],
  'company-info': [
    'tensorflow', 'django', 'predictive modeling', 'data compression',
    'machine learning', 'temporal physics', 'api development'
  ]
}
```

#### 4. Add confidence scoring function (after the blacklist):
```javascript
// Function to calculate confidence score
function calculateConfidenceScore(text, contentType, projectTitle) {
  let confidence = 1.0
  
  // Check for hallucination indicators
  const textLower = text.toLowerCase()
  const blacklist = TECHNICAL_TERMS_BLACKLIST[contentType] || []
  
  // Reduce confidence for each blacklisted term found
  blacklist.forEach(term => {
    if (textLower.includes(term)) {
      confidence -= 0.2
      console.warn(`    ⚠️  Found inappropriate term "${term}" in ${contentType} content`)
    }
  })
  
  // Check for overly generic or placeholder-like content
  const genericPhrases = [
    'leverages advanced',
    'cutting-edge technology',
    'state-of-the-art',
    'revolutionary approach',
    'temporal physics',
    'time machine',
    'time simulation'
  ]
  
  genericPhrases.forEach(phrase => {
    if (textLower.includes(phrase)) {
      confidence -= 0.1
    }
  })
  
  // Ensure confidence doesn't go below 0
  confidence = Math.max(0, confidence)
  
  // Track low confidence entries
  if (confidence < 0.7) {
    lowConfidenceEntries.push({
      project: projectTitle,
      contentType,
      confidence,
      text: text.substring(0, 200) + '...'
    })
  }
  
  return confidence
}
```

#### 5. Update generateBuyerDescriptions function to track confidence:

In the `generateBuyerDescriptions` function, add after line 315 (inside the prompt):
```javascript
IMPORTANT: For ${contentType} content, DO NOT include technical implementation details, programming languages, or frameworks unless they are explicitly mentioned in the content.
```

And modify the try block to calculate confidence:
```javascript
const description = response.choices[0].message.content.trim()
descriptions[scenario.role] = description

// Calculate confidence score
const confidence = calculateConfidenceScore(description, contentType, project.title)
if (confidence < 0.7) {
  console.warn(`    ⚠️  Low confidence (${(confidence * 100).toFixed(0)}%) for ${scenario.role} description`)
}
```

#### 6. Update extractProjectCapabilities to be content-aware:

Add content type parameter and instructions:
```javascript
async function extractProjectCapabilities(project, contentType) {
  // ... existing code ...
  
  // Add content type awareness to prevent hallucination
  const contentTypeInstructions = {
    'history-timeline': 'Focus on company milestones, cultural evolution, and historical achievements. DO NOT include technical implementation details unless explicitly mentioned.',
    'company-info': 'Focus on team capabilities, company values, and organizational strengths. Avoid technical specifics unless they define the team.',
    'thought-leadership': 'Focus on conceptual insights, vision, and strategic thinking. Technical details should only be included if they are central to the thought leadership.',
    'default': 'Extract actual technical and design capabilities demonstrated in the project.'
  }

  const instruction = contentTypeInstructions[contentType] || contentTypeInstructions['default']
  
  // Add to prompt:
  ${instruction}
  
  // Also add confidence scoring to the response
```

#### 7. Update main function to report low confidence entries:

In the `main()` function, add at the beginning:
```javascript
// Reset low confidence entries
lowConfidenceEntries.length = 0
```

And add after processing all projects:
```javascript
// Report low confidence entries
if (lowConfidenceEntries.length > 0) {
  console.log('\n⚠️  WARNING: Low confidence entries detected:')
  console.log('These may contain hallucinated or inappropriate content:\n')
  lowConfidenceEntries.forEach(entry => {
    console.log(`  Project: ${entry.project}`)
    console.log(`  Type: ${entry.contentType}`)
    console.log(`  Confidence: ${(entry.confidence * 100).toFixed(0)}%`)
    console.log(`  Sample: ${entry.text}`)
    console.log('  ---')
  })
  console.log('\n💡 Recommendation: Review these entries and consider using --file-input with accurate content.')
}
```

#### 8. Update the output file name:
```javascript
// Change from:
path.join(publicDir, 'search-index.json')
// To:
path.join(publicDir, 'search-index-new.json')
```

## Usage

```bash
# Generate embeddings with confidence scoring
npm run generate-embeddings-new

# For specific project with custom content
npm run generate-embeddings-new:id -- --id=goinvo-timeline --type=history-timeline --file-input="timeline-summary.txt"
```

## Benefits

1. **Hallucination Detection**: Identifies when AI generates inappropriate technical terms for non-technical content
2. **Confidence Scoring**: Each description gets a confidence score based on content appropriateness
3. **Low Confidence Reporting**: Summary of all low-confidence entries at the end
4. **Content-Type Awareness**: Different rules for different content types (timeline vs case study)
5. **Custom Content Support**: Use --file-input to provide accurate content for pages like timelines

## Example Low Confidence Report

```
⚠️  WARNING: Low confidence entries detected:
These may contain hallucinated or inappropriate content:

  Project: GoInvo Timeline
  Type: history-timeline
  Confidence: 30%
  Sample: GoInvo Timeline leverages TensorFlow and predictive modeling to showcase our temporal physics expertise...
  ---
  
💡 Recommendation: Review these entries and consider using --file-input with accurate content.
``` 