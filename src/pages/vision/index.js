import React, { useState, useEffect, useCallback, useRef } from 'react'

import Layout from '../../components/layouts/layout'
import Card from '../../components/card'
import ImageBlock from '../../components/image-block'
import Columns from '../../components/columns'
import Image from '../../components/image'
import Quote from '../../components/quote'
import SubscribeForm from '../../components/form-subscribe'
import Carousel from '../../components/carousel'
import GradientImageColumns from '../../components/gradient-image-columns'
import { Link } from 'gatsby'

import atlantic from '../../assets/images/publication-logos/logo-atlantic.png'
import forbes from '../../assets/images/publication-logos/logo-forbes.png'
import lancet from '../../assets/images/publication-logos/logo-lancet.png'
import newScientist from '../../assets/images/publication-logos/logo-new-scientist.png'
import npr from '../../assets/images/publication-logos/logo-npr.png'
import ted from '../../assets/images/publication-logos/logo-ted.png'
import wired from '../../assets/images/publication-logos/logo-wired.png'

import features from '../../data/features.json'

import config from '../../../config'

const spotlightFeature = features.find(
  feature => feature.id === 'visual-storytelling-with-genai'
)

const frontmatter = {
  metaTitle: 'Our vision on the future of health - GoInvo',
  metaDescription:
    'Our thoughts on the intersection of design, technology, and healthcare.',
  heroImage: '/images/vision/vision-illustration-preview.jpg',
}

// Configuration for chunked loading
const INITIAL_CHUNK_SIZE = 12 // Load 12 items initially (4 rows of 3)
const CHUNK_SIZE = 9 // Load 9 more items per chunk (3 rows of 3)
const LOAD_MORE_THRESHOLD = 2 // Start loading when 2 items from bottom

// Skeleton loader component for loading states
const FeatureSkeleton = () => (
  <div className="feature-skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-text">
      <div className="skeleton-line skeleton-line--title"></div>
      <div className="skeleton-line skeleton-line--date"></div>
      <div className="skeleton-line skeleton-line--caption"></div>
      <div className="skeleton-line skeleton-line--caption skeleton-line--short"></div>
    </div>
    <style jsx>{`
      .feature-skeleton {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        animation: pulse 1.5s ease-in-out infinite;
      }
      .skeleton-image {
        width: 100%;
        height: 200px;
        background: #e9ecef;
        border-radius: 4px;
        margin-bottom: 1rem;
      }
      .skeleton-line {
        height: 1rem;
        background: #e9ecef;
        border-radius: 4px;
        margin-bottom: 0.5rem;
      }
      .skeleton-line--title {
        height: 1.5rem;
        width: 80%;
      }
      .skeleton-line--date {
        height: 0.875rem;
        width: 30%;
      }
      .skeleton-line--caption {
        width: 100%;
      }
      .skeleton-line--short {
        width: 60%;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
    `}</style>
  </div>
)

const VisionPage = () => {
  // Filter out spotlight feature and external features
  const allFeatures = features.filter(
    feature => feature.id !== spotlightFeature.id && !feature.external
  )

  // State for chunked loading
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [currentChunk, setCurrentChunk] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMoreFeatures, setHasMoreFeatures] = useState(true)
  
  // Ref for intersection observer
  const loadMoreRef = useRef(null)

  // Initialize with first chunk
  useEffect(() => {
    const initialFeatures = allFeatures.slice(0, INITIAL_CHUNK_SIZE)
    setVisibleFeatures(initialFeatures)
    setHasMoreFeatures(allFeatures.length > INITIAL_CHUNK_SIZE)
  }, [])

  // Load more features function
  const loadMoreFeatures = useCallback(async () => {
    if (isLoading || !hasMoreFeatures) return

    setIsLoading(true)
    
    // Simulate network delay for better UX (remove in production if not needed)
    await new Promise(resolve => setTimeout(resolve, 300))

    const nextChunk = currentChunk + 1
    const startIndex = INITIAL_CHUNK_SIZE + (nextChunk - 1) * CHUNK_SIZE
    const endIndex = startIndex + CHUNK_SIZE
    
    const newFeatures = allFeatures.slice(startIndex, endIndex)
    
    if (newFeatures.length > 0) {
      setVisibleFeatures(prev => [...prev, ...newFeatures])
      setCurrentChunk(nextChunk)
      
      // Check if there are more features to load
      setHasMoreFeatures(endIndex < allFeatures.length)
    } else {
      setHasMoreFeatures(false)
    }
    
    setIsLoading(false)
  }, [currentChunk, isLoading, hasMoreFeatures, allFeatures])

  // Intersection Observer for automatic loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMoreFeatures && !isLoading) {
          loadMoreFeatures()
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before the element comes into view
        threshold: 0.1
      }
    )

    const currentRef = loadMoreRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [loadMoreFeatures, hasMoreFeatures, isLoading])

  return (
    <Layout frontmatter={frontmatter}>
      <div className="pure-g">
        <div className="pure-u-1-2 hidden--sm">
          <Image
            className="image--max-width"
            src="/images/vision/vision-illustration-desktop-left.jpg"
            alt=""
            aboveTheFold={true}
          />
        </div>
        <div className="pure-u-1-2 hidden--sm">
          <Image
            className="image--max-width"
            src="/images/vision/vision-illustration-desktop-right.jpg"
            alt=""
            aboveTheFold={true}
          />
        </div>
        <div className="pure-u-1 hidden--after-sm">
          <Image
            className="image--max-width"
            src="/images/vision/vision-illustration-mobile-home.jpg"
            alt=""
            aboveTheFold={true}
          />
        </div>
        <div className="pure-u-1 hidden--after-sm">
          <Image
            className="image--max-width"
            src="/images/vision/vision-illustration-mobile-practice.jpg"
            alt=""
            aboveTheFold={true}
          />
        </div>
        <div className="pure-u-1 hidden--after-sm">
          <Image
            className="image--max-width"
            src="/images/vision/vision-illustration-mobile-country.jpg"
            alt=""
            aboveTheFold={true}
          />
        </div>
      </div>
      <div className="max-width content-padding pad-vertical--double--only-lg">
        <h3 className="header--md pad-vertical--double">Spotlight</h3>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-2-3 pad-right--only-lg margin-bottom">
            <Card
              link={spotlightFeature.link}
              fillHeight
              // NOTE: `externalLink` is optional based on where the spotlight feature is located
              // externalLink
              suppressNewTab={true}
            >
              <ImageBlock
                title={spotlightFeature.title}
                image={spotlightFeature.image}
                client="Feature"
                date={spotlightFeature.date}
                caption={spotlightFeature.caption}
                sizes={config.sizes.fullToTwoThirdsAtLargeInsideMaxWidth}
                hoverable
              />
            </Card>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 margin-bottom">
            <Card
              link="/vision/health-visualizations"
              fillHeight
              suppressNewTab={true}
            >
              <ImageBlock
                title="Health Visualizations"
                image="/images/features/posters/health-viz-vision-preview-2.jpg"
                caption="Open source visualizations on health and the healthcare industry."
                sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                hoverable
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="background--blue pad-vertical pad-vertical--quad--only-lg">
        <div className="max-width content-padding">
          <h3 className="header--md pad-bottom--double">
            Features
            <span className="text--gray text--sm margin-left--half">
              ({visibleFeatures.length} of {allFeatures.length})
            </span>
          </h3>
          <Columns columns={3}>
            {visibleFeatures.map((feature, i) => {
              return (
                <Card
                  link={feature.link}
                  key={feature.id}
                  externalLink
                  suppressNewTab={true}
                >
                  <ImageBlock
                    title={feature.title}
                    image={feature.image}
                    client="Feature"
                    date={feature.date}
                    caption={feature.caption}
                    sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    position={feature.imagePosition}
                    hoverable
                  />
                </Card>
              )
            })}
            
            {/* Loading skeletons */}
            {isLoading && (
              <>
                {Array.from({ length: CHUNK_SIZE }).map((_, index) => (
                  <div key={`skeleton-${index}`}>
                    <FeatureSkeleton />
                  </div>
                ))}
              </>
            )}
          </Columns>
          
          {/* Load more trigger element */}
          {hasMoreFeatures && (
            <div 
              ref={loadMoreRef}
              className="load-more-trigger text--center pad-vertical--double"
            >
              {!isLoading && (
                <button 
                  onClick={loadMoreFeatures}
                  className="button button--secondary"
                  disabled={isLoading}
                >
                  Load More Features ({allFeatures.length - visibleFeatures.length} remaining)
                </button>
              )}
            </div>
          )}
          
          {/* End of content indicator */}
          {!hasMoreFeatures && visibleFeatures.length > INITIAL_CHUNK_SIZE && (
            <div className="text--center pad-vertical--double text--gray">
              <p>You've reached the end of our features! 🎉</p>
              <p className="text--sm">
                Showing all {allFeatures.length} features
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* About GoInvo Section */}
      <div className="max-width content-padding pad-vertical--quad">
        <h2 className="header--xl margin-bottom--double">About GoInvo</h2>
        
        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">What We Do</h3>
          <p className="text--gray">
            We design systems that people can live in.
            GoInvo helps health, policy, and civic organizations turn complexity into clarity — through research, UX design, illustration, data visualization, and ethical AI.
            Our work connects people, data, and decisions so technology becomes transparent, useful, and humane.
          </p>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">Who We Are</h3>
          <p className="text--gray">
            GoInvo is a design studio for complex, high-stakes systems.
            We're based in Arlington, Massachusetts, working with partners across government, research, and industry.
            We stay <strong>intentionally small</strong> so knowledge stays close to the work, feedback moves faster, and every project gets our full attention.
          </p>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">Our Approach</h3>
          <p className="text--gray">
            Each project runs as a self-contained studio — research, design, and engineering working together with the client.
            That structure lets us adapt quickly, minimize overhead, and integrate seamlessly into teams much larger than ours.
            Decisions happen where information is richest: close to the people doing the work and the users they serve.
            It's a model inspired by governance research showing that many small, connected units outperform single large ones in speed and quality.
          </p>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">Our Values</h3>
          <ul className="text--gray">
            <li><strong>Ethics aren't optional.</strong> Every interface and policy we design touches real lives.</li>
            <li><strong>Clarity builds trust.</strong> When people can see how a system works, they can use it — and question it — better.</li>
            <li><strong>Craft matters.</strong> Precision and beauty make complex ideas understandable.</li>
            <li><strong>Small scales smarter.</strong> Fewer layers mean faster learning and stronger relationships.</li>
            <li><strong>Data is human.</strong> Behind every dataset is someone's story. We design to keep that visible.</li>
          </ul>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">How We Use AI</h3>
          <p className="text--gray">
            AI helps us see more, not decide for us.
            We use it as an extension of research and synthesis — to search and summarize faster, as well as surface patterns, themes, insights, opportunities and contradictions across data and interviews.
            Designers remain the authors of every insight, reviewing, editing, and shaping what the machine finds.
            All AI use follows our ethics charter: transparency, privacy, and human oversight.
            When clients ask about AI, we show them how to integrate it responsibly — as a collaborator that amplifies judgment, not a replacement for it.
          </p>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">Why We Stay Small</h3>
          <p className="text--gray">
            Scale isn't headcount — it's how fast a team can learn, align, and deliver value.
            We organize around <strong>knowledge, not hierarchy.</strong> Each project functions as its own independent yet connected studio, collaborating through shared ethics and open communication.
            Research in organizational design and healthcare supports this approach: smaller, self-organizing teams consistently outperform large, centralized ones in both quality and adaptability.
            Being small is how we stay agile, thoughtful, and deeply human — the same principles we design into the systems we build.
          </p>
        </div>

        <div className="margin-bottom--double">
          <h3 className="header--lg margin-bottom">Bibliography</h3>
          <ul className="text--gray text--sm">
            <li>"Design Thinking and Teamwork — Measuring Impact: A Systematic Literature Review." <em>Journal of Organization Design</em> (2024).</li>
            <li>"Failure or Success of Self-Organizing Teams in Long-Term Care Organizations." <em>BMC Health Services Research</em> (2025).</li>
            <li>Friedrich Hayek. "The Use of Knowledge in Society." <em>American Economic Review</em> (1945).</li>
            <li>"High-Commitment Management." (Wikipedia summary).</li>
            <li>Herbert A. Simon. <em>The Sciences of the Artificial.</em> (1969).</li>
            <li>"Scaling or Growing Agile? Proposing a Manifesto for Agile Organization Development." <em>Journal of Organization Design</em> (2025).</li>
            <li>Elinor Ostrom. <em>Governing the Commons.</em> (1990).</li>
            <li>Amartya Sen. <em>Development as Freedom.</em> (1999).</li>
            <li>Edward Tufte. <em>The Visual Display of Quantitative Information.</em> (1983).</li>
            <li>"The Power of Shared Positivity: Organizational Psychological Capital and Firm Performance During Exogenous Crises." <em>Small Business Economics</em> (2021).</li>
          </ul>
        </div>
      </div>
      
      <div className="max-width content-padding pad-vertical--quad">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <Image
              src="/images/vision/emerging-tech-books.jpg"
              className="image--max-width"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
            />
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <h2 className="header--xl" id="books">
              Design and Tech Publications
            </h2>
            <p className="text--gray">
              Preview our books on product design, emerging technology,
              prototyping, and the internet of things, published by O'Reilly
              Media.
            </p>
            <div className="margin-bottom--half">
              <a
                href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designing for Emerging Technologies
              </a>
            </div>
            <div className="margin-bottom--half">
              <a
                href="https://www.oreilly.com/design/free/future-of-product-design.csp"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Future of Product Design
              </a>
            </div>
            <div className="margin-bottom--half">
              <a
                href="https://creativenext.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Next
              </a>{' '}
              podcast, on{' '}
              <a
                href="https://itunes.apple.com/us/podcast/creative-next/id1451673481?mt=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                iTunes
              </a>{' '}
              and{' '}
              <a
                href="https://open.spotify.com/show/3TEs0y2xkFhrdrftDj2LrH"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
            </div>
            <div className="margin-bottom--half">
              <a
                href="https://thedigitalife.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Digital Life
              </a>{' '}
              podcast, on{' '}
              <a
                href="https://soundcloud.com/involution-studios"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="background--gray">
        <div className="max-width content-padding">
          <div className="pure-g pad-vertical pad-vertical--quad--only-lg">
            <div className="pure-u-1 pure-u-lg-1-3">
              <h2 className="header--lg margin--none pad-right--double">
                Our design and analysis has been featured in
                <span className="text--serif text--primary">...</span>
              </h2>
            </div>
            <div className="pure-u-1 pure-u-lg-2-3 margin-top--until-lg">
              <ul className="publication-links list--unstyled container container--justify-space-around container--align-center container--fill-height">
                <li>
                  <a
                    href="https://www.npr.org/sections/health-shots/2014/03/28/295734262/if-a-pictures-worth-1-000-words-could-it-help-you-floss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={npr} alt="NPR logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.forbes.com/sites/oreillymedia/2014/03/07/defining-and-sculpting-interactions-between-man-and-technology/#23f6861d6571"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={forbes} alt="Forbes logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.theatlantic.com/health/archive/2013/01/the-future-of-medical-records/267202/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={atlantic} alt="The Atlantic logo" />
                  </a>
                </li>
                <li className="hidden--until-lg">
                  <a
                    href="https://www.ted.com/talks/stephen_friend_the_hunt_for_unexpected_genetic_heroes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ted} alt="TED logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)30154-X/fulltext"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={lancet} alt="The Lancet logo" />
                  </a>
                </li>
                <li className="hidden--until-lg">
                  <a
                    href="https://www.newscientist.com/article/dn25969-my-genes-could-help-cure-childhood-diseases/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={newScientist} alt="New Scientist logo" />
                  </a>
                </li>
                <li className="hidden--until-lg">
                  <a
                    href="https://www.wired.com/2013/01/medical-record-redesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={wired} alt="Wired logo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-width content-padding pad-top--double">
        <h2 className="header--xl margin-bottom--none">
          Reviews for
          <span className="text--serif text--primary">...</span>
        </h2>
        <Carousel>
          <Quote
            quotee="Blackford Middleton"
            quoteeSub="Former CTO, Vanderbilt University Medical Center"
          >
            Juhan and his team are one of the few groups that understand the
            complexity of healthcare and the need for beautiful, functional
            design. I go to them when I need to make sense of the hard
            problems.
          </Quote>
          <Quote
            quotee="Marla Erman"
            quoteeSub="Former CMO, UnitedHealth Group"
          >
            GoInvo's approach to design and user experience is both
            methodical and creative, and their work has been instrumental in
            helping us create more engaging and effective digital health
            solutions.
          </Quote>
          <Quote
            quotee="David Feinberg"
            quoteeSub="Former CEO, Google Health"
          >
            The team at GoInvo has a unique ability to translate complex
            healthcare challenges into elegant, user-centered design
            solutions that actually work in the real world.
          </Quote>
        </Carousel>
      </div>
      <div className="background--gray pad-vertical--double">
        <div className="max-width max-width--md content-padding">
          <SubscribeForm />
        </div>
      </div>
      <GradientImageColumns
        image="/images/vision/vision-collage.jpg"
        backgroundColor="blue"
      >
        <div className="pad-vertical--double">
          <h2 className="header--lg">
            Designing the future of healthcare
            <span className="text--primary text--serif">.</span>
          </h2>
          <p className="text--gray">
            We're always looking for new ways to improve healthcare through
            design. If you have an idea or want to collaborate, we'd love to
            hear from you.
          </p>
          <Link
            to="/contact/"
            className="button button--secondary button--lg margin-top"
          >
            Get in touch
          </Link>
        </div>
      </GradientImageColumns>
    </Layout>
  )
}

export default VisionPage
