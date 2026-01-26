import React, { Component, createRef } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Card from '../components/card'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import TEAM from '../data/team.json'
import Marquee from 'react-fast-marquee'
import { mediaUrl } from '../helpers'

const frontmatter = {
  metaTitle: 'Boston UX Design Agency | GoInvo Boston',
  metaDescription:
    'GoInvo is a Boston area product and user experience design agency with deep expertise creating software for Enterprise, Government, Health, and AI services.',
}

// Header height constant (matches $header-height in SCSS)
const HEADER_HEIGHT = 50

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frontmatter,
      heroHeight: null, // Will be calculated
    }
    this.caseStudyCardRef = createRef()
    // Refs for alignment debugging
    this.heroHeaderRef = createRef()
    this.backlogZeroRef = createRef()
    this.ericTopolRef = createRef()
    this.millionServedRef = createRef()
  }

  componentDidMount() {
    this.calculateHeroHeight()
    window.addEventListener('resize', this.handleResize)
    this.printLeftPositions()
  }

  printLeftPositions = () => {
    // Print the x-position of the left edge of each text section
    const sections = [
      { name: 'Hero Header', ref: this.heroHeaderRef },
      { name: 'Backlog: Zero', ref: this.backlogZeroRef },
      { name: 'Eric Topol', ref: this.ericTopolRef },
      { name: '1 Million Served', ref: this.millionServedRef },
    ]

    console.log('=== Left Edge X-Positions ===')
    sections.forEach(({ name, ref }) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        console.log(`${name}: x=${rect.left}px`)
      }
    })
    console.log('================================')
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    // Debounce resize calculations
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout)
    }
    this.resizeTimeout = setTimeout(() => {
      this.calculateHeroHeight()
    }, 100)
  }

  calculateHeroHeight = () => {
    if (typeof window === 'undefined') return

    const viewportHeight = window.innerHeight
    const caseStudyCard = this.caseStudyCardRef.current

    if (!caseStudyCard) return

    // Get the full height of the case study card (including padding from parent section)
    // We need to account for the section's padding-top (quad = 4rem = 64px)
    const sectionPaddingTop = 64 // pad-vertical--quad top
    const cardHeight = caseStudyCard.offsetHeight

    // Total height needed for the case study section to show the full card
    const caseStudySectionHeight = sectionPaddingTop + cardHeight

    // Hero height = viewport - header - full case study card section
    // This positions the bottom of the card at the bottom of the viewport
    const heroHeight = viewportHeight - HEADER_HEIGHT - caseStudySectionHeight

    // Set minimum height to prevent hero from being too small
    const viewportWidth = window.innerWidth
    const minHeight = viewportWidth >= 1024 ? 250 : 200

    // Cap hero height: 30% of viewport on all devices
    const maxHeight = viewportHeight * 0.30
    const finalHeight = Math.min(Math.max(heroHeight, minHeight), maxHeight)

    this.setState({ heroHeight: finalHeight })
  }

  render() {
    const { heroHeight } = this.state

    // Style for dynamic hero height
    const heroStyle = heroHeight ? { height: `${heroHeight}px`, minHeight: `${heroHeight}px` } : {}

    return (
      <Layout frontmatter={this.state.frontmatter} isHomepage>
        {/* Page-level class for V2 alignment overrides */}
        <div className="index-page">
          {/* 1. Hero Section */}
          <div
            className="hero--dynamic-height"
            style={{
              ...heroStyle,
              backgroundImage: `url(${mediaUrl('/images/homepage/bg-wavy-lines.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="hero--dynamic-height__content">
              <h1 ref={this.heroHeaderRef} className="header--xl hero-title--lg">
                <strong>We design the future of software</strong>
                <span className="text--serif text--primary">.</span>
                <br />
                <span className="text--gray">For complex systems and real constraints.</span>
              </h1>
              <div className="hero-buttons">
                <Link to="/contact/" className="button button--primary">
                  START A CONVO
                </Link>
                <Link to="/work/" className="button button--outline-primary">
                  VIEW OUR WORK
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Backlog: Zero - 3M Case Study */}
          <div
            className="case-study-highlight case-study-highlight--with-background pad-vertical--quad"
            style={{
              backgroundImage: `url(${mediaUrl('/images/homepage/bg-storycard-3m.jpg')})`
            }}
          >
            <div className="max-width content-padding">
              <div ref={this.caseStudyCardRef}>
                <Card className="case-study-card case-study-card--compact" noShadow>
                  <div className="case-study-card__content">
                    <h2 ref={this.backlogZeroRef} className="header--xl">
                      Backlog: Zero
                    </h2>
                    <p
                      className="text--serif header--lg text--gray"
                      style={{ fontStyle: 'italic', fontWeight: 'bold' }}
                    >
                      "The system is down."
                    </p>
                    <p className="text--gray">
                      That was the call we got two weeks after launch, from Memorial
                      Hermann hospital in Houston, CodeRyte's largest customer.
                    </p>
                    <p className="text--gray">
                      30 minutes later, we found the issue. The new system was operating so efficiently that there were zero patients left to code and for a brief period, zero work to do.
                    </p>
                    <p className="text--gray">
                      A backlog that typically measured in thousands of charts and weeks of delay had been cleared. This had never happened before.
                    </p>
                    <Link to="/work/3m-coderyte" className="button button--primary" style={{ marginTop: '1rem' }}>
                      3M CASE STUDY
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* 3. Eric Topol Testimonial */}
          <div
            className="testimonial-section testimonial-section--with-image pad-vertical--quad"
            style={{
              backgroundImage: `url(${mediaUrl('/images/homepage/eric-topol-2.jpg')})`
            }}
          >
            <div className="max-width content-padding">
              <p ref={this.ericTopolRef} className="testimonial-quote">
                "The GoInvo studio is one of the most talented groups of designers I have
                ever met in the healthcare space. Not only are their ideas, designs, and
                graphics remarkable, but I haven't yet figured out how they know so much
                about medicine and its future."
              </p>
              <p className="testimonial-attribution">
                <span className="testimonial-attribution__name">Eric Topol, MD</span>
                <br />
                <span className="testimonial-attribution__title">Scripps Research Translational Institute</span>
              </p>
            </div>
          </div>

          {/* 4. Weeks to Hours - Ipsos Case Study */}
          <div
            className="case-study-highlight case-study-highlight--with-background case-study-highlight--align-right pad-vertical--quad"
            style={{
              backgroundImage: `url(${mediaUrl('/images/homepage/bg-storycard-ipsos.jpg')})`
            }}
          >
            <div className="max-width content-padding">
              <Card className="case-study-card case-study-card--compact" noShadow>
                <div className="case-study-card__content">
                  <h2 className="header--xl">
                    Weeks to Hours
                  </h2>
                  <p className="text--gray">
                    From Rube Goldberg workflows to enterprise info at your fingertips.
                  </p>
                  <p className="text--gray">
                    <strong>90%+ adoption across Ipsos.</strong>
                    <br />
                    <strong>700,000+ prompts per month.</strong>
                    <br />
                    <strong>10M+ API calls</strong> driving real research, not toys.
                  </p>
                  <p className="text--gray">
                    This wasn't novelty. <br />
                    It was transformation. <br />
                    Research that once took weeks now
                    yields cited insights in hours.
                  </p>
                  <Link to="/work/ipsos-facto" className="button button--primary" style={{ marginTop: '1rem' }}>
                    IPSOS CASE STUDY
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          {/* 5. Partner Logos */}
          <div className="partners-section pad-vertical--double">
            <div className="max-width content-padding">
              <p className="partners-section__title">
                Trusted by ambitious startups and Fortune 500's:
              </p>
              <div className="partners-section__logos">
                <ClientLogos />
              </div>
            </div>
          </div>

          {/* 6. 1 Million Served - SNAP Impact */}
          <div
            className="case-study-highlight case-study-highlight--with-background pad-vertical--quad"
            style={{
              backgroundImage: `url(${mediaUrl('/images/homepage/bg-storycard-snap.jpg')})`
            }}
          >
            <div className="max-width content-padding">
              <Card className="case-study-card case-study-card--compact" noShadow>
                <div className="case-study-card__content">
                  <h2 ref={this.millionServedRef} className="header--xl">
                    <em>10x increase</em>
                    <span className="text--primary text--serif">.</span>
                  </h2>
                  <div className="impact-timeline text--gray">
                    <div className="impact-item">
                      <p><strong>In 2017:</strong></p>
                      <p>
                        750,000 Massachusetts residents relied on SNAP.
                        <br />
                        Just 7% applied online.
                      </p>
                    </div>
                    <div className="impact-item">
                      <p>Fax. Mail. Walk-ins.</p>
                    </div>
                    <div className="impact-item">
                      <p><strong>Two years after redesign:</strong></p>
                      <p>
                        Online applications hit ~44%.
                      </p>
                    </div>
                    <div className="impact-item">
                      <p><strong>Today:</strong></p>
                      <p>
                        Nearly <strong>1,000,000</strong> people rely on SNAP.
                        <br />
                        <strong>70% apply online.</strong>
                      </p>
                    </div>
                    <div className="impact-item">
                      <p>
                        A million people didn't change.
                        <br />
                        <strong><em>The digital system did.</em></strong>
                      </p>
                    </div>
                  </div>
                  <Link to="/work/mass-snap" className="button button--primary" style={{ marginTop: '1.5rem' }}>
                    SNAP CASE STUDY
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          {/* 7. Contact Form */}
          <div className="pad-vertical--double contact-section">
            <div className="max-width content-padding">
              <div className="contact-section__content">
                <h2 className="header--xl">
                  Let's work together
                  <span className="text--primary text--serif">.</span>
                </h2>
                <p className="text--gray">
                  Send us a message or{' '}
                  <a href="https://calendly.com/goinvo/open-office-hours" className="link" target="_blank" rel="noopener noreferrer">
                    visit our open office hours
                  </a>.
                </p>
              </div>
              <iframe
                id="JotFormIFrame-contact-home"
                className="jotform-form contact-form"
                title="Contact"
                allowTransparency="true"
                frameBorder="0"
                scrolling="no"
                src="https://form.jotform.com/251276832519159?background=1"
                style={{ width: '100%', height: '700px', border: 'none', background: 'transparent' }}
              />
            </div>
          </div>

          {/* 8. We are GoInvo */}
          <div className="we-are-goinvo">
            <div className="content-padding">
              <div className="team-marquee" aria-hidden="true">
                <Marquee direction="right" speed={30} gradient={false} pauseOnHover={false} autoFill>
                  {TEAM.slice(0, 5).map(member => (
                    <div key={`top-${member.name}`} className="team-marquee__tile">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                      />
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
                  <Link to="/about/" className="button button--outline-primary button--padded">
                    MEET OUR TEAM
                  </Link>
                </div>
              </div>
            </div>
            <div className="content-padding">
              <div className="team-marquee" aria-hidden="true">
                <Marquee direction="left" speed={30} gradient={false} pauseOnHover={false} autoFill>
                  {TEAM.slice(5, 10).map(member => (
                    <div key={`bottom-${member.name}`} className="team-marquee__tile">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
