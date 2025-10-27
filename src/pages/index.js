import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Video from '../components/video'
// import Quote from '../components/quote'
import ContactForm from '../components/form-contact'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Divider from '../components/divider'
import TEAM from '../data/team.json'
import ProjectSearch from '../components/project-search'
import headerData from '../data/homepage-headers.json'
import Marquee from 'react-fast-marquee'

import config from '../../config'
import {
  extractWorkItemLinkDetails,
  concatCaseStudiesAndFeatures,
} from '../helpers'

//Load the header data from the JSON file
const categories = headerData ? Object.keys(headerData) : [];
if (categories.length === 0) {
  throw new Error("No categories found in headerData.");
}
// Select a random category
const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
// console.log("Selected category: ", selectedCategory);
const categoryData = headerData[selectedCategory];
// Use a single consistent hero image
const heroImage = '/images/homepage/facto.jpg'

const frontmatter = {
  metaTitle: 'Boston UX Design Agency | GoInvo Boston',
  metaDescription:
    'GoInvo is a Boston area product and user experience design agency with deep expertise creating software for Enterprise, Government, Health, and AI services.',
  category: selectedCategory,
  title: categoryData.title, // Add title from the selected category
  tagline: categoryData.tagline, // Add tagline from the selected category
  heroImage: heroImage,
  heroButtonText: 'See Our Work',
}

class IndexPage extends Component {
  constructor(props) {
    super(props)

    const workItems = concatCaseStudiesAndFeatures({ caseStudies: props.data, filterFeatures: false }).slice(0, 4)
    const allProjects = concatCaseStudiesAndFeatures({ caseStudies: props.data, filterFeatures: false })

    this.state = {
      image: null,
      workItems,
      allProjects,
      frontmatter,
      hideSpotlights: false,
      selectedPersona: null,
      homeSearchQuery: '',
      homeInputDefault: ''
    }
  }

  componentDidMount() {
    // Listen for AI search results to toggle Spotlights visibility
    this._aiSearchHandler = (evt) => {
      try {
        const hasResults = !!(evt && evt.detail && evt.detail.hasResults)
        // Keep spotlights visible when there are zero results (show no-results + spotlights)
        this.setState({ hideSpotlights: hasResults })
      } catch (_) { }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('ai-search-results', this._aiSearchHandler)
    }
    try {
      // Prefer session restore flag path; otherwise, show last saved as input seed (but don't mark as submitted)
      const savedQuery = JSON.parse(localStorage.getItem('ai_search_query') || 'null')
      if (savedQuery && typeof savedQuery === 'string') {
        this.setState({ homeInputDefault: savedQuery, homeInputValue: savedQuery })
      }
    } catch (e) {
      // ignore
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined' && this._aiSearchHandler) {
      window.removeEventListener('ai-search-results', this._aiSearchHandler)
    }
  }

  render() {
    return (
      <Layout frontmatter={this.state.frontmatter} isHomepage>
        <Hero
          className="hero--higher-text-contrast"
          link="/work/"
          image={this.state.frontmatter.heroImage}
          button={frontmatter.heroButtonText}
          buttonLink="/work/"
          isLarge
          position="top center"
        >
          <h1 className="header--xl hero-title--lg">
            Designing the Future
            <span className="text--serif text--primary">.</span>
          </h1>
          <p className="hero-subtitle text--black">
            We craft digital design through software, strategic thinking, and data visualization.
          </p>
        </Hero>
        
        {!this.state.hideSpotlights && (
          <div className="max-width content-padding pad-bottom--double" id="spotlights">
            <div className="margin-vertical--double pad-vertical--double">
              <div className="pure-g">
                <div className="pure-u-1">
                  <h2 className="header--xl margin--none pad-right--double spotlights-title">
                    Our expertise in design covers...
                  </h2>
                </div>
                <div className="pure-u-1 pure-u-lg-4-4">
                  <CategoriesList includeAll={false} columns={4} />
                </div>
              </div>
              {/* Spotlights (custom layout in a single grid) */}
              {(() => {
                const findItem = (key) => this.state.allProjects.find(p => p.slug === key || p.id === key)
                const TEXT_OVERRIDES = {
                  'ipsos-facto': { title: 'The Future of Research Intelligence', subtitle: 'AI, LLM Software' },
                  'eligibility-engine': { title: 'Eligibility Engine', subtitle: 'Open Source' },
                  'visual-storytelling-with-genai': { title: 'Decision Grade Viz', subtitle: 'Workflow Research' },
                  'determinants-of-health': { title: 'Determinants of Health', subtitle: 'Industry Analysis' },
                  'hgraph': { title: 'hGraph', subtitle: 'Clinical Decision Making' },
                  'prior-auth': { title: 'Prior Authorization for Cancer Care', subtitle: 'Healthcare Software' },
                  'precision-autism': { title: 'Precision Autism', subtitle: 'Precision Medicine & Genomics' },
                  'mass-snap': { title: 'Closing the SNAP Gap', subtitle: 'Digital Transformation for All' },
                  'inspired-ehrs': { title: 'Healthcare Best Practices', subtitle: 'Enterprise Software' }
                }
                const renderCard = (item, { useVideo = false, videoSrc = null, className = '' } = {}) => {
                  if (!item) return null
                  const { link, externalLink, suppressNewTab } = extractWorkItemLinkDetails(item)
                  const key = (item.slug || item.id)
                  const override = TEXT_OVERRIDES[key] || {}
                  const displayTitle = override.title || item.title
                  const displaySubtitle = override.subtitle || item.caption
                  return (
                    <Card
                      noShadow
                      link={link}
                      key={`spot-${(item.slug || item.id)}`}
                      externalLink={externalLink}
                      suppressNewTab={suppressNewTab}
                      className={className}
                    >
                      {useVideo && videoSrc ? (
                        <div className="spotlight-card">
                          <div className="spotlight-media">
                            <Video poster={item.image} loop sources={[{ format: 'mp4', src: videoSrc }]} />
                          </div>
                          <div className="image-block__text">
                            <p className={'header--lg'}>{displayTitle}</p>
                            <p className="text--gray">{displaySubtitle}</p>
                          </div>
                        </div>
                      ) : (
                        <ImageBlock
                          title={displayTitle}
                          image={item.image}
                          client={null}
                          categories={null}
                          caption={displaySubtitle}
                          sizes={config.sizes.fullToHalfAtMediumInsideMaxWidth}
                        />
                      )}
                    </Card>
                  )
                }

                return (
                  <div className="spotlights-grid spotlights-grid--four">
                    {/* Row A */}
                    {renderCard(findItem('ipsos-facto'), { className: 'spotlight--span-2' })}
                    {renderCard(findItem('eligibility-engine'))}
                    {renderCard(findItem('visual-storytelling-with-genai'), { useVideo: true, videoSrc: '/images/homepage/animated%20covers/storytelling_with_GenAI_trimmed.mp4' })}
                    {/* Row B */}
                    {renderCard(findItem('determinants-of-health'), { useVideo: true, videoSrc: '/images/homepage/animated%20covers/sdoh_herov2_lg_trimmed.mp4' })}
                    {renderCard(findItem('hgraph'), { useVideo: true, videoSrc: '/images/homepage/animated%20covers/hgraph_trimmed.mp4' })}
                    {renderCard(findItem('inspired-ehrs'), { className: 'spotlight--span-2' })}
                    {/* Row C */}
                    {renderCard(findItem('prior-auth'), { className: 'spotlight--span-2' })}
                    {renderCard(findItem('precision-autism'), { className: 'spotlight--span-2', useVideo: true, videoSrc: '/images/homepage/animated%20covers/austism_atmosphere_trimmed.mp4' })}
                    {/* Row D */}
                    {renderCard(findItem('mass-snap'), { className: 'spotlight--span-4' })}
                  </div>
                )
              })()}
              <div className="container container--justify-center margin-top margin-bottom--double">
                <Link
                  to="/work/?expanded=true"
                  className="button button--outline-primary button--padded"
                >
                  VIEW ALL WORK
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="partners-section pad-vertical--double">
          <div className="max-width content-padding">
            <h3 className="header--md partners-section__title" style={{ marginTop: 0 }}>
              PAST PARTNERS
            </h3>
            <div className="partners-section__logos">
              <ClientLogos />
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical--double--only-lg used-everyday">
          <div className="pure-g margin-vertical--double" style={{ alignItems: 'flex-start' }}>
            <div className="pure-u-1 pure-u-lg-1-3">
              <h2 className="header--xl margin--bottom pad-right--double">
                Our designs are used every day
                <span className="text--serif text--primary">.</span>
              </h2>
            </div>
            <div className="pure-u-1 pure-u-lg-2-3">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-bottom">
                  <p className="margin--none pad-right--only-lg">
                    <span className="text--bold">160 million US residents</span>
                    <br />
                    <span className="text--gray">
                      are analyzed, care planned, and risk adjusted with the
                      software we designed.
                    </span>
                    <br />
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-bottom">
                  <p className="margin--none pad-left--only-lg">
                    <span className="text--bold">
                      1M+ Massachusetts residents
                    </span>
                    <br />
                    <span className="text--gray">
                      count on our service design.
                    </span>
                    <br />
                    <Link to="/work/mass-snap">Read the case study</Link>
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-bottom">
                  <p className="margin--none pad-right--only-lg">
                    <span className="text--bold">Wikipedia</span>
                    <br />
                    <span className="text--gray">
                      relies on our data visualization to explain complex health
                      topics.
                    </span>
                    <br />
                    <a
                      href="https://en.wikipedia.org/wiki/Social_determinants_of_health"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Social determinants of health
                    </a>
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-bottom">
                  <p className="margin--none pad-left--only-lg">
                    <span className="text--bold">1 billion prescriptions</span>
                    <br />
                    <span className="text--gray">
                      will flow through the software we've designed.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <Divider animated className="" />
        <div className="max-width content-padding pad-bottom--double">
          <div className="container container--justify-center margin-vertical">
            <h2 className="header--xl">
              See the future
              <span className="text--serif text--primary">.</span>
            </h2>
          </div>
          <Columns columns={3}>
            <ImageBlock
              key={'1'}
              image="/images/homepage/standardized-health-data-preview-2.jpg"
              title="Health Reports"
              caption="Design concepts and objective analysis for grokking the evolving healthcare universe."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <a
                href="https://www.goinvo.com/features/determinants-of-health"
                target="_blank"
                rel="noopener noreferrer"
              >
                Determinants of health
              </a>
              <br />
              <Link to="/vision/">Explore all features</Link>
            </ImageBlock>
            <ImageBlock
              key={'2'}
              image="/images/vision/vision-hero.jpg"
              title="Publications"
              caption="Preview our books on product design, emerging technology, prototyping, and the internet of things."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <a
                href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designing for Emerging Technologies
              </a>
              <br />
              <Link to="/vision/#books">View all books</Link>
            </ImageBlock>
            <ImageBlock
              key={'3'}
              image="/images/features/health-design-thinking/health-design-thinking-book-thumbnail.jpg"
              title="Health Design Thinking Book"
              caption="Work from the past decade of the GoInvo Studio's practice is highlighted in the diverse case studies that make up the book 'Health Design Thinking', co-written by Ellen Lupton and Dr. Bon Ku."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <a href="/vision/health-design-thinking/">
                Health Design Thinking Book
              </a>
              <br />
            </ImageBlock>
          </Columns>
        </div>
        <div className="background--blue pad-vertical--quad--only-lg">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-bottom--double pad-right--double">
                  <h2 className="header--xl">
                    Let's work together
                    <span className="text--primary text--serif">.</span>
                  </h2>
                  <p className="text--gray">
                    We work across the entire production process, applying the
                    design method to reimagine your software, system, or
                    service.
                  </p>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <ContactForm showHeader={false} />
              </div>
            </div>
          </div>
        </div>
        {/* New We are GoInvo section */}
        <div className="we-are-goinvo">
          <div className="content-padding">
            <div className="team-marquee" aria-hidden="true">
              <Marquee direction="right" speed={30} gradient={false} pauseOnHover={false} autoFill>
                {TEAM.slice(0, 5).map(member => (
                  <div key={`top-${member.name}`} className="team-marquee__tile">
                    <Link to="/about">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                      />
                    </Link>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical--double">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-3">
                <h2 className="we-are-title header--xl">
                  We are <span className="text--primary text--serif">GoInvo</span>
                  <span className="text--primary text--serif">.</span>
                </h2>
                <p className="we-are-body text--gray">
                  Small by design. Big thinkers. Sweat the details. Ethics not optional.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 display--flex display--flex--align-center display--flex--justify-center">
                <Link to="/about/" className="button button--outline-primary button--padded">MEET OUR TEAM</Link>
              </div>
            </div>
          </div>
          <div className="content-padding">
            <div className="team-marquee" aria-hidden="true">
              <Marquee direction="left" speed={30} gradient={false} pauseOnHover={false} autoFill>
                {TEAM.slice(5, 10).map(member => (
                  <div key={`bottom-${member.name}`} className="team-marquee__tile">
                    <Link to="/about">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                      />
                    </Link>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const indexPageQuery = graphql`
  query IndexQuery {
    allMdx(filter: { frontmatter: { hidden: { eq: false } } }) {
      nodes {
        id
        parent {
          ... on File {
            name
          }
        }
        frontmatter {
          title
          image
          client
          categories
          caption
        }
        fields {
          slug
        }
      }
    }
  }
`

export default IndexPage
