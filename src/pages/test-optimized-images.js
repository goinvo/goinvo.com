import React from 'react'
import Layout from '../components/layouts/layout'
import SmartImage, { OptimizedImage, ExternalImage, HeroCriticalImage, LazyImage } from '../components/optimized-image'

const TestOptimizedImagesPage = () => {
  const frontmatter = {
    metaTitle: 'Test Optimized Images',
    metaDescription: 'Testing page for optimized image components with priority loading',
  }

  return (
    <Layout frontmatter={frontmatter}>
      <div className="max-width content-padding pad-vertical--double">
        <h1>Image Optimization & Priority Loading Test Page</h1>
        
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '2px solid #4a5e88', borderRadius: '8px' }}>
          <h2>🚀 HeroCriticalImage Component (High Priority - Loads First)</h2>
          <p style={{ color: '#666' }}>This image loads immediately with high priority (above-the-fold content)</p>
          <HeroCriticalImage
            src="/images/features/posters/design-axiom-make-things.jpg"
            alt="Design axiom poster - High Priority"
            className="image--max-width"
            style={{ maxWidth: '300px' }}
          />
          <p><small>Loading: eager, fetchpriority: high</small></p>
        </div>

        <div style={{ marginBottom: '2rem', padding: '1rem', border: '2px solid #28a745', borderRadius: '8px' }}>
          <h2>⚡ SmartImage with Priority</h2>
          <SmartImage
            src="/images/homepage/group-aug-2018-4.jpg"
            alt="Team photo with priority"
            className="image--max-width"
            style={{ maxWidth: '300px' }}
            priority={true}
          />
          <p><small>Manual priority: true</small></p>
        </div>

        <div style={{ marginBottom: '2rem', padding: '1rem', border: '2px solid #ffc107', borderRadius: '8px' }}>
          <h2>🐌 LazyImage Component (Lazy Loading - Loads Later)</h2>
          <p style={{ color: '#666' }}>This image lazy loads when it comes into view (below-the-fold content)</p>
          <LazyImage
            src="/images/vision/vision-hero.jpg"
            alt="Vision hero - Lazy loaded"
            className="image--max-width"
            style={{ maxWidth: '300px' }}
          />
          <p><small>Loading: lazy, fetchpriority: auto</small></p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Standard SmartImage (Default Lazy)</h2>
          <SmartImage
            src="/images/homepage/standardized-health-data-preview-2.jpg"
            alt="Health data preview"
            className="image--max-width"
            style={{ maxWidth: '300px' }}
          />
          <p><small>Default behavior: lazy loading</small></p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Optimized Local Image</h2>
          <p>This tries to find the image in src/assets/images for full optimization:</p>
          <OptimizedImage
            src="favicon.png"
            alt="GoInvo favicon"
            style={{ maxWidth: '64px' }}
          />
        </div>

        <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2>📊 Performance Strategy</h2>
          <h3>Loading Priority Order:</h3>
          <ol>
            <li><strong>Hero/Critical Images</strong> - Load immediately (HeroCriticalImage)</li>
            <li><strong>Above-the-fold content</strong> - Load with priority (priority={`{true}`})</li>
            <li><strong>Below-the-fold content</strong> - Lazy load (LazyImage or default)</li>
          </ol>
          
          <h3>Implementation Benefits:</h3>
          <ul>
            <li>✅ Critical content loads first for better perceived performance</li>
            <li>✅ Non-critical images don't block page rendering</li>
            <li>✅ Automatic WebP/AVIF format conversion for local images</li>
            <li>✅ Responsive image generation for different screen sizes</li>
            <li>✅ Blurred placeholders for smooth loading experience</li>
            <li>✅ Optimized caching and compression</li>
            <li>✅ Smart bandwidth usage - only loads what's needed</li>
          </ul>
        </div>

        <div style={{ height: '100vh', marginBottom: '2rem', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h3>Scroll down to test lazy loading</h3>
            <p>The image below will only load when it comes into view</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem', padding: '1rem', border: '2px dashed #6c757d', borderRadius: '8px' }}>
          <h2>🎯 Lazy Load Test Image</h2>
          <p>This image should only load when you scroll to it:</p>
          <LazyImage
            src="/images/features/health-design-thinking/health-design-thinking-book-thumbnail.jpg"
            alt="Health Design Thinking Book - Lazy loaded test"
            className="image--max-width"
            style={{ maxWidth: '300px' }}
          />
          <p><small>Check Network tab in DevTools to see when this loads!</small></p>
        </div>
      </div>
    </Layout>
  )
}

export default TestOptimizedImagesPage 