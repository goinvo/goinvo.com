import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
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
            <div className="max-width content-padding">
              <div className="home-case-spotlight__grid">
                <div className="home-case-spotlight__visual">
                  <div className="home-case-spotlight__frame">
                    <Image
                      src="/images/case-studies/coderyte/coderyte-mockup2.jpg"
                      className="home-case-spotlight__img"
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      alt="CodeRyte clinical coding interface in use at scale."
                    />
                  </div>
                </div>
                <div className="home-case-spotlight__main">
                  <p className="home-case-spotlight__eyebrow">3M · CodeRyte</p>
                  <h2 className="home-case-spotlight__title">
                    Backlog: Zero
                    <span className="text--primary text--serif">.</span>
                  </h2>
                  <p className="home-case-spotlight__lede">
                    Two weeks after launch, Memorial Hermann hospital in Houston—CodeRyte&apos;s
                    largest customer—called with what sounded like a crisis. Here&apos;s what
                    happened when clinical coding met a system fast enough to outrun the backlog.
                  </p>
                  <ol className="home-case-spotlight__timeline">
                    <li className="home-case-spotlight__step">
                      <span className="home-case-spotlight__step-label">Post-launch</span>
                      <div className="home-case-spotlight__step-body">
                        <p>
                          The call came from Memorial Hermann—<strong>CodeRyte&apos;s largest</strong>{' '}
                          customer.
                        </p>
                      </div>
                    </li>
                    <li className="home-case-spotlight__step home-case-spotlight__step--accent">
                      <span className="home-case-spotlight__step-label">The line</span>
                      <div className="home-case-spotlight__step-body">
                        <p>&ldquo;The system is down.&rdquo;</p>
                      </div>
                    </li>
                    <li className="home-case-spotlight__step">
                      <span className="home-case-spotlight__step-label">30 min</span>
                      <div className="home-case-spotlight__step-body">
                        <p>
                          The new flow was running so efficiently there were{' '}
                          <strong>zero patients left to code</strong>—and for a brief window,{' '}
                          <strong>zero work</strong> in the queue.
                        </p>
                      </div>
                    </li>
                    <li className="home-case-spotlight__step home-case-spotlight__step--closing">
                      <div className="home-case-spotlight__step-body">
                        <p>
                          A backlog that typically measured in thousands of charts and weeks of
                          delay had cleared. That had never happened before.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Link to="/work/3m-coderyte" className="button button--primary home-case-spotlight__cta">
                    Read the 3M story
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="home-testimonial pad-vertical--quad home-reveal">
            <div className="home-testimonial__ambient" aria-hidden="true" />
            <div className="max-width content-padding">
              <div className="home-testimonial__grid">
                <div className="home-testimonial__panel">
                  <p className="home-testimonial__eyebrow">What leaders say</p>
                  <blockquote className="home-testimonial__quote">
                    <p>
                      &ldquo;The GoInvo studio is one of the most talented groups of designers I have
                      ever met in the healthcare space. Not only are their ideas, designs, and
                      graphics remarkable, but I haven&apos;t yet figured out how they know so much
                      about medicine and its future.&rdquo;
                    </p>
                  </blockquote>
                  <footer className="home-testimonial__footer">
                    <cite className="home-testimonial__name">Eric Topol, MD</cite>
                    <span className="home-testimonial__role">
                      Scripps Research Translational Institute
                    </span>
                  </footer>
                </div>
                <figure className="home-testimonial__figure">
                  <div className="home-testimonial__frame">
                    <Image
                      src="/images/homepage/eric-topol-2.jpg"
                      className="home-testimonial__photo"
                      sizes="(max-width: 1023px) 100vw, 38vw"
                      alt="Eric Topol, MD"
                    />
                  </div>
                  <figcaption className="home-testimonial__credit">
                    Photo by{' '}
                    <a href="https://www.flickr.com/photos/euthman/8197577252/">Ed Uthman</a>
                    ,{' '}
                    <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="home-ipsos-feature pad-vertical--quad home-reveal">
            <div className="max-width content-padding">
              <div className="home-ipsos-feature__grid">
                <div className="home-ipsos-feature__visual">
                  <div className="home-ipsos-feature__frame">
                    <Image
                      src="/images/case-studies/ipsos/facto/cover-584KB.jpg"
                      className="home-ipsos-feature__img"
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      alt="Ipsos Facto research tools—enterprise AI for real-world insights."
                    />
                  </div>
                  <p className="home-ipsos-feature__tagline">
                    Research that once took weeks now yields cited insights in hours.
                  </p>
                </div>
                <div className="home-ipsos-feature__main">
                  <p className="home-ipsos-feature__eyebrow">Ipsos · Research AI</p>
                  <h2 className="home-ipsos-feature__title">
                    Weeks to Hours
                    <span className="text--primary text--serif">.</span>
                  </h2>
                  <p className="home-ipsos-feature__lede">
                    From Rube Goldberg workflows to enterprise info at your fingertips.
                  </p>
                  <ol className="home-ipsos-feature__timeline">
                    <li className="home-ipsos-feature__step">
                      <span className="home-ipsos-feature__step-label">Adoption</span>
                      <div className="home-ipsos-feature__step-body">
                        <p>
                          <strong>90%+ adoption</strong> across Ipsos.
                        </p>
                      </div>
                    </li>
                    <li className="home-ipsos-feature__step home-ipsos-feature__step--accent">
                      <span className="home-ipsos-feature__step-label">Volume</span>
                      <div className="home-ipsos-feature__step-body">
                        <p>
                          <strong>700,000+ prompts</strong> per month.
                        </p>
                      </div>
                    </li>
                    <li className="home-ipsos-feature__step">
                      <span className="home-ipsos-feature__step-label">Scale</span>
                      <div className="home-ipsos-feature__step-body">
                        <p>
                          <strong>10M+ API calls</strong> driving real research, not toys.
                        </p>
                      </div>
                    </li>
                    <li className="home-ipsos-feature__step home-ipsos-feature__step--closing">
                      <div className="home-ipsos-feature__step-body">
                        <p>
                          This wasn&apos;t novelty. It was transformation.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Link to="/work/ipsos-facto" className="button button--primary home-ipsos-feature__cta">
                    Ipsos case study
                  </Link>
                </div>
              </div>
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
