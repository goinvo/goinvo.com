import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Card from '../components/card'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import SubscribeForm from '../components/form-subscribe'
import TEAM from '../data/team.json'
import Marquee from 'react-fast-marquee'

const frontmatter = {
  metaTitle: 'Boston UX Design Agency | GoInvo Boston',
  metaDescription:
    'GoInvo is a Boston area product and user experience design agency with deep expertise creating software for Enterprise, Government, Health, and AI services.',
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { frontmatter }
    this.sectionObserver = null
  }

  componentDidMount() {
    if (typeof window === 'undefined') return

    const nodes = document.querySelectorAll('.index-page .home-reveal')
    if (!nodes.length) return

    const revealAll = () => {
      nodes.forEach(el => el.classList.add('home-reveal--visible'))
    }

    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    this.sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('home-reveal--visible')
            this.sectionObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )

    nodes.forEach(el => this.sectionObserver.observe(el))
  }

  componentWillUnmount() {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect()
    }
  }

  render() {
    return (
      <Layout frontmatter={this.state.frontmatter} isHomepage>
        <div className="index-page">
          <section className="home-hero" aria-labelledby="home-hero-heading">
            <div className="home-hero__bg" aria-hidden="true">
              <div className="home-hero__mesh" />
              <div className="home-hero__orbs" />
              <Image
                src="/images/homepage/bg-wavy-lines.jpg"
                className="home-hero__photo"
                sizes="100vw"
                alt=""
              />
            </div>
            <div className="home-hero__inner">
              <p className="home-hero__eyebrow">Product &amp; UX · Boston</p>
              <h1 id="home-hero-heading" className="home-hero__title">
                Design to grow your business and de-risk your biggest bets
                <span className="text--serif text--primary">.</span>
              </h1>
              <p className="home-hero__lead">
                Healthcare, enterprise, AI, and public-sector teams partner with us to ship
                beautiful products—where stakes are high and the problem space is messy.
              </p>
              <ul className="home-hero__metrics">
                <li className="home-hero__metric">
                  <span className="home-hero__metric-value">15+ yrs</span>
                  <span className="home-hero__metric-label">
                    Shipping in regulated and high-stakes domains
                  </span>
                </li>
                <li className="home-hero__metric">
                  <span className="home-hero__metric-value">Gov &amp; Fortune 500</span>
                  <span className="home-hero__metric-label">
                    From research through delivery with your teams
                  </span>
                </li>
                <li className="home-hero__metric">
                  <span className="home-hero__metric-value">AI-ready UX</span>
                  <span className="home-hero__metric-label">
                    Interfaces and systems people trust in production
                  </span>
                </li>
              </ul>
              <div className="home-hero__actions">
                <Link to="/contact/" className="button button--primary">
                  Start a conversation
                </Link>
                <Link to="/work/" className="button button--outline-primary">
                  View our work
                </Link>
              </div>
            </div>
          </section>

          <div className="home-case-spotlight pad-vertical--quad home-reveal">
            <div className="home-case-spotlight__ambient" aria-hidden="true" />
            <div className="max-width content-padding">
              <div className="home-case-spotlight__grid">
                <div className="home-case-spotlight__lead">
                  <p className="home-case-spotlight__eyebrow">Case study · 3M CodeRyte</p>
                  <h2 className="home-case-spotlight__title">Backlog: Zero</h2>
                  <p className="home-case-spotlight__hook">&ldquo;The system is down.&rdquo;</p>
                  <ul className="home-case-spotlight__meta">
                    <li>Memorial Hermann</li>
                    <li>Post-launch</li>
                    <li>Clinical coding</li>
                  </ul>
                  <Link to="/work/3m-coderyte" className="button button--primary home-case-spotlight__cta">
                    Read the 3M story
                  </Link>
                </div>
                <div className="home-case-spotlight__panel">
                  <p>
                    That was the call we got two weeks after launch, from Memorial Hermann
                    hospital in Houston, CodeRyte&apos;s largest customer.
                  </p>
                  <p>
                    30 minutes later, we found the issue. The new system was operating so
                    efficiently that there were zero patients left to code and for a brief
                    period, zero work to do.
                  </p>
                  <p>
                    A backlog that typically measured in thousands of charts and weeks of
                    delay had been cleared. This had never happened before.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-section testimonial-section--with-image pad-vertical--quad home-reveal">
            <Image
              src="/images/homepage/eric-topol-2.jpg"
              className="section-bg-img"
              sizes="100vw"
              alt=""
              style={{ objectPosition: 'top right' }}
            />
            <div className="max-width content-padding">
              <p className="testimonial-quote">
                &ldquo;The GoInvo studio is one of the most talented groups of designers I
                have ever met in the healthcare space. Not only are their ideas, designs,
                and graphics remarkable, but I haven&apos;t yet figured out how they know so
                much about medicine and its future.&rdquo;
              </p>
              <p className="testimonial-attribution">
                <span className="testimonial-attribution__name">Eric Topol, MD</span>
                <br />
                <span className="testimonial-attribution__title">Scripps Research Translational Institute</span>
                <br />
                <span className="testimonial-attribution__title" style={{ opacity: 0.4 }}>
                  <small>
                    Photo by{' '}
                    <a href="https://www.flickr.com/photos/euthman/8197577252/" style={{ color: 'white' }}>
                      Ed Uthman
                    </a>
                    , licensed under{' '}
                    <a href="https://creativecommons.org/licenses/by/2.0/" style={{ color: 'white' }}>
                      CC BY 2.0
                    </a>
                  </small>
                </span>
              </p>
            </div>
          </div>

          <div className="case-study-highlight case-study-highlight--with-background case-study-highlight--align-right pad-vertical--quad home-reveal">
            <Image
              src="/images/homepage/bg-storycard-ipsos.jpg"
              className="section-bg-img"
              sizes="100vw"
              alt=""
              style={{ objectPosition: 'left center' }}
            />
            <div className="max-width content-padding">
              <Card className="case-study-card case-study-card--compact" noShadow>
                <div className="case-study-card__content">
                  <h2 className="header--xl">Weeks to Hours</h2>
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
                    This wasn&apos;t novelty. <br />
                    It was transformation. <br />
                    Research that once took weeks now yields cited insights in hours.
                  </p>
                  <Link to="/work/ipsos-facto" className="button button--primary" style={{ marginTop: '1rem' }}>
                    Ipsos case study
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="partners-section home-reveal">
            <div
              className="partners-section__marquee"
              role="region"
              aria-label="Client and partner organizations"
            >
              <ClientLogos marquee />
            </div>
          </div>

          <div className="home-snap-feature pad-vertical--quad home-reveal">
            <div className="max-width content-padding">
              <div className="home-snap-feature__grid">
                <div className="home-snap-feature__visual">
                  <div className="home-snap-feature__frame">
                    <Image
                      src="/images/case-studies/mass/snap/snap-cover.jpg"
                      className="home-snap-feature__img"
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      alt="People shopping for fresh produce—SNAP helps families afford food."
                    />
                  </div>
                  <p className="home-snap-feature__tagline">
                    Food security starts with a dignified front door to benefits.
                  </p>
                </div>
                <div className="home-snap-feature__main">
                  <p className="home-snap-feature__eyebrow">Massachusetts · SNAP access</p>
                  <h2 className="home-snap-feature__title">
                    10x increase
                    <span className="text--primary text--serif">.</span>
                  </h2>
                  <p className="home-snap-feature__lede">
                    More people get groceries on the table when enrollment isn&apos;t buried in fax
                    machines and mail-in forms. Here&apos;s what shifted when the experience met people
                    where they already are—on their phones, in a hurry, often stressed.
                  </p>
                  <ol className="home-snap-feature__timeline">
                    <li className="home-snap-feature__step">
                      <span className="home-snap-feature__step-label">2017</span>
                      <div className="home-snap-feature__step-body">
                        <p>
                          <strong>750,000</strong> Massachusetts residents relied on SNAP. Just{' '}
                          <strong>7%</strong> applied online.
                        </p>
                      </div>
                    </li>
                    <li className="home-snap-feature__step home-snap-feature__step--accent">
                      <span className="home-snap-feature__step-label">Then</span>
                      <div className="home-snap-feature__step-body">
                        <p>Fax. Mail. Walk-ins.</p>
                      </div>
                    </li>
                    <li className="home-snap-feature__step">
                      <span className="home-snap-feature__step-label">+2 yrs</span>
                      <div className="home-snap-feature__step-body">
                        <p>
                          Online applications hit <strong>~44%</strong>.
                        </p>
                      </div>
                    </li>
                    <li className="home-snap-feature__step">
                      <span className="home-snap-feature__step-label">Today</span>
                      <div className="home-snap-feature__step-body">
                        <p>
                          Nearly <strong>1,000,000</strong> people rely on SNAP.{' '}
                          <strong>70%</strong> apply online.
                        </p>
                      </div>
                    </li>
                    <li className="home-snap-feature__step home-snap-feature__step--closing">
                      <div className="home-snap-feature__step-body">
                        <p>
                          A million people didn&apos;t change. <strong>The digital system did.</strong>
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Link to="/work/mass-snap" className="button button--primary home-snap-feature__cta">
                    SNAP case study
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="home-newsletter pad-vertical--double home-reveal">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="we-are-goinvo home-reveal">
            <div className="content-padding">
              <div className="team-marquee" aria-hidden="true">
                <Marquee direction="right" speed={22} gradient={false} pauseOnHover={false} autoFill>
                  {TEAM.slice(0, 5).map(member => (
                    <div key={`top-${member.name}`} className="team-marquee__tile">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                        sizes="300px"
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
                    Meet our team
                  </Link>
                </div>
              </div>
            </div>
            <div className="content-padding">
              <div className="team-marquee" aria-hidden="true">
                <Marquee direction="left" speed={22} gradient={false} pauseOnHover={false} autoFill>
                  {TEAM.slice(5, 10).map(member => (
                    <div key={`bottom-${member.name}`} className="team-marquee__tile">
                      <Image
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="team-marquee__img"
                        sizes="300px"
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
