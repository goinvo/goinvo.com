# AI TL;DR + Description System

## Overview

The AI search now generates **two separate pieces of content** for each project:

1. **TL;DR** (15-25 words): A punchy, one-sentence summary
2. **Description** (60-100 words): A detailed explanation with context

This allows for flexible UI presentation with visual hierarchy.

## Response Format

### Example Response

```json
{
  "results": [
    {
      "slug": "mount-sinai-consent",
      "title": "Consent Management for Research",
      "caption": "...",
      "categories": [...],
      "keywords": [...],
      "client": "Mount Sinai",
      "score": 1,
      "aiTldr": "Built a <strong>consent management system</strong> that lets patients control their research data with <strong>clear, simple choices</strong>.",
      "aiDescription": "Patients often struggle to understand complex research consent forms. We designed a digital consent workflow that breaks down options into plain language, shows what data will be used, and lets people change their mind anytime. Now patients make informed choices about their healthcare data, and researchers get clearer consent records.",
      "aiRelevant": true,
      "aiEnhanced": true
    }
  ],
  "aiGenerated": true,
  "searchInsight": "Relevant projects based on your search criteria"
}
```

## Response Fields

### Project Fields

- **`aiTldr`** (string | null): Short one-sentence summary (15-25 words)
  - HTML `<strong>` tags on 1-2 key terms
  - Null if no AI content was generated
  
- **`aiDescription`** (string | null): Longer detailed explanation (60-100 words)
  - HTML `<strong>` tags on 2-3 key terms
  - 2-3 sentences
  - Null if no AI content was generated
  
- **`aiRelevant`** (boolean): Whether the project is relevant to the search query

- **`aiEnhanced`** (boolean): Whether AI content was successfully generated

### Response Metadata

- **`aiGenerated`** (boolean): Whether the response includes AI-generated content
- **`searchInsight`** (string | null): Overall search context
- **`debug`** (object): Diagnostic information (only if errors occurred)

## Frontend Implementation

### Recommended HTML Structure

```jsx
{results.map(project => (
  <div className="project-card">
    {/* Show TL;DR prominently if available */}
    {project.aiTldr && (
      <p className="project-tldr" dangerouslySetInnerHTML={{ __html: project.aiTldr }} />
    )}
    
    {/* Show description with less prominence */}
    {project.aiDescription && (
      <p className="project-description" dangerouslySetInnerHTML={{ __html: project.aiDescription }} />
    )}
    
    {/* Fallback to caption if no AI content */}
    {!project.aiTldr && !project.aiDescription && (
      <p className="project-caption">{project.caption}</p>
    )}
  </div>
))}
```

### Recommended CSS

```css
/* TL;DR - Prominent styling */
.project-tldr {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.project-tldr strong {
  color: #0066cc;
  font-weight: 700;
}

/* Description - Subdued styling */
.project-description {
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.6;
  color: #555555;
  margin-bottom: 1rem;
}

.project-description strong {
  color: #333333;
  font-weight: 600;
}

/* Fallback caption */
.project-caption {
  font-size: 1rem;
  line-height: 1.5;
  color: #333333;
}
```

## Fallback Behavior

### Case 1: Both TL;DR and Description Available
✅ **Best case** - Show both with visual hierarchy

### Case 2: Only TL;DR Available
Show TL;DR prominently (rare, but possible if description generation fails)

### Case 3: Only Description Available
Show description as main content (rare, but possible if TL;DR generation fails)

### Case 4: Neither Available
Fall back to the original `caption` field from the project data

### Example Fallback Logic

```jsx
const getProjectSummary = (project) => {
  // Best: both available
  if (project.aiTldr && project.aiDescription) {
    return {
      type: 'dual',
      tldr: project.aiTldr,
      description: project.aiDescription
    };
  }
  
  // Good: TL;DR only
  if (project.aiTldr) {
    return {
      type: 'tldr',
      content: project.aiTldr
    };
  }
  
  // Good: Description only
  if (project.aiDescription) {
    return {
      type: 'description',
      content: project.aiDescription
    };
  }
  
  // Fallback: original caption
  return {
    type: 'caption',
    content: project.caption
  };
};
```

## Content Characteristics

### TL;DR (15-25 words)
- One sentence
- Leads with outcome or key capability
- Action-oriented
- 1-2 emphasized terms with `<strong>`
- Example: "Built a <strong>consent management system</strong> that lets patients control their research data with <strong>clear, simple choices</strong>."

### Description (60-100 words)
- 2-3 sentences
- Provides context and impact
- Explains problem → solution → benefit
- Shows human beneficiaries
- 2-3 emphasized terms with `<strong>`
- Includes metrics when available (cited once)
- Example: "Patients often struggle to understand complex research consent forms. We designed a digital consent workflow that breaks down options into plain language, shows what data will be used, and lets people change their mind anytime. Now patients make informed choices about their healthcare data, and researchers get clearer consent records."

## Lens-Based Generation

The AI uses a **lens scoring system** to determine relevance and focus:

### Design Lenses
- **L1 Alignment** — reconcile goals/teams into one path
- **L2 Learning** — updates from real use/data; scales with feedback
- **L3 Capability** — what people can do now
- **L4 Clarity** — honest visuals; legibility; trust
- **L5 Governance** — shared ownership; coordination
- **L6 Ethics** — consent, privacy, dignity, fairness
- **L7 Efficiency** — speed, reliability, resilience

The system automatically selects 2-3 relevant lenses based on the search query and project keywords, then generates content that implicitly addresses those themes.

## Testing

### Test Locally

```bash
# Start dev server
npm run dev:ai

# Make a search request
curl -X POST http://localhost:8888/.netlify/functions/ai-search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "consent management",
    "projects": [...],
    "useAI": true
  }'
```

### Check Response Structure

```javascript
// Verify response has both fields
response.results.forEach(project => {
  console.log('TL;DR:', project.aiTldr);
  console.log('Description:', project.aiDescription);
  console.log('---');
});
```

## Migration Notes

### If You Were Using `aiDescription` Only

**Before:**
```jsx
{project.aiDescription && (
  <p dangerouslySetInnerHTML={{ __html: project.aiDescription }} />
)}
```

**After:**
```jsx
{/* Show TL;DR prominently */}
{project.aiTldr && (
  <p className="tldr" dangerouslySetInnerHTML={{ __html: project.aiTldr }} />
)}

{/* Show description below */}
{project.aiDescription && (
  <p className="description" dangerouslySetInnerHTML={{ __html: project.aiDescription }} />
)}
```

### Backward Compatibility

For backward compatibility during migration:
- If you only check `project.aiDescription`, it will still work
- The description field contains the longer content
- You can gradually adopt the TL;DR field for better visual hierarchy

## Content Guidelines

### Writing Style
- Plain English
- Short sentences
- Natural tone
- No hype words ("innovative", "revolutionary", "game-changing")
- Show human beneficiaries
- Cite metrics once if available (never invent)

### Emphasis Guidelines
- Use `<strong>` for key terms only
- TL;DR: 1-2 emphasized terms
- Description: 2-3 emphasized terms
- Don't over-emphasize

### Example Emphasis

✅ **Good:**
```html
Built a <strong>consent management system</strong> that lets patients control their data.
```

❌ **Too much:**
```html
Built a <strong>revolutionary</strong> <strong>consent management system</strong> that <strong>completely transforms</strong> how patients control their <strong>research data</strong>.
```

## Questions?

See also:
- [AI Search Feature Documentation](./AI_SEARCH_FEATURE.md)
- [AI Search Troubleshooting](./AI_SEARCH_TROUBLESHOOTING.md)
- [Local Testing Guide](./LOCAL_TESTING_GUIDE.md)

