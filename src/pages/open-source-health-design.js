import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import ClientLogos from '../components/client-logos'
import Columns from '../components/columns'
import ImageBlock from '../components/image-block'
import Card from '../components/card'
import Quote from '../components/quote'
import OpenSourceDesktop from '../assets/images/os-desktop.inline.svg'
import OpenSourceMobile from '../assets/images/os-mobile.inline.svg'
import SmartImage, { LazyImage, HeroCriticalImage } from '../components/optimized-image'

const frontmatter = {
  metaTitle: 'Open Source Health Design',
  metaDescription:
    "Healthcare needs to be open. We've built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.",
  heroImage: '/images/open_source/open-source.jpg',
}

const openSourceConversations = [
  {
    link: 'https://designmuseumfoundation.org/open-source-healthcare/',
    image: '/images/open_source/Artboard-1_4-techtalks.jpg',
    title: "It's Time for Open Source Healthcare",
    caption:
      'Designers can and should shape the future of healthcare, from how products and systems work to the underlying infrastructure and standards these products and services are built upon.',
  },
  {
    link: 'https://www.youtube.com/watch?v=vvnE6HyMY3E',
    image: '/images/open_source/Artboard-1_3-techtalks.jpg',
    title: 'NEHIMSS 2019 ANNUAL CONFERENCE Juhan Sonin',
    caption:
      'We demand open source healthcare. Because healthcare is too important to be closed. We, the atomic units of the health system, can bend it back to the light.',
  },
  {
    link:
      'https://opensourcehealthcare.org/static/open-source-healthcare-journal-557dd9ec213f654508564592e1ec74e8.pdf',
    image:
      '/images/features/open-source-healthcare/open-source-healthcare-featured.jpg',
    title: 'Open Source Healthcare Journal',
    caption:
      'Here is the debut issue of our Open Source Health Journal, advocating open source ideas to change healthcare for the better.',
  },
]

class OpenSourcePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDesktop: false,
    }

    this.setScreenLayout = this.setScreenLayout.bind(this)
  }

  componentDidMount() {
    this.setScreenLayout()
    window.addEventListener('resize', this.setScreenLayout)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenLayout)
  }

  setScreenLayout() {
    this.setState({ isDesktop: window.innerWidth > 600 })
  }

  render() {
    const { isDesktop } = this.state

    return (
      <Layout frontmatter={frontmatter}>
        <div className="open-source-health-design landing-page">
          <div className="pad-horizontal text--teal background-image ">
            <div className="max-width content-padding pad-vertical LayoutCenter">
              <div className="pad-horizontal flip-parent container-spacing">
                <div className="flip-child container-spacing">
                  <h1 className="header--xl ">
                    Open Source Health Design
                    <span className="text--serif text--primary">.</span>
                  </h1>
                  <p>
                    Bringing Trust, Openness, Innovation, &amp; Design to
                    Healthcare
                  </p>
                  <Link
                    to="/contact"
                    className="button button--primary button--lg ctaLayout marginTop"
                  >
                    Get Involved
                  </Link>
                </div>

                <div className="flip-child mainImg">
                  <HeroCriticalImage
                    src="/images/open_source/open-source-bgd.png"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="background--light-orange">
            <div className="max-width content-padding pad-vertical LayoutCenter text--teal">
              <div className="pure-u-lg-1-2">
                <h2 className="header--xl headerStyle ">
                  We envision a world where patients can be cared for with
                  technology that can be trusted
                  <span className="text--serif text--primary">.</span>
                </h2>
              </div>
              <div className="pure-u-lg-1-2">
                <p className="text--text--teal textLayout">
                  Our open source health design mission is to make our patterns,
                  code, scripts, graphics, ideas, documents available to any
                  designer, to any engineer, to any world citizen, to use and
                  modify without restriction.
                  <p className="marginTop">
                    We demand Open Source Health Design. <br /> Because
                    healthcare is too important to be closed. <br />
                    When you use a healthcare service, <br />
                    you don't know how it works,
                    <br /> why it works,
                    <br /> who it works best for, or if the results are true.
                  </p>
                  It's our health. Our very lives are at stake.
                </p>
              </div>

              <div className="container--justify-center">
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="number-large">$1.8M</span>
                    <span className="center text--teal">
                      GoInvo investment <br /> in open source projects
                    </span>
                  </p>
                </div>
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="number-large">$2.5M</span>
                    <span className="center text--teal">
                      Clients' investment <br /> in open source projects
                    </span>
                  </p>
                </div>
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="number-large">65+</span>
                    <span className="center text--teal">
                      Sponsored open source
                      <br />
                      projects since 2010
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical LayoutCenter text--teal">
            <h2 className="header--xl center ">
              Open Source Health Design Projects
            </h2>
            <p className="text--gray pad-horizontal--double center ">
              In the past 10 years, we've partnered with federal and nonprofit
              organizations to address the most pressing healthcare issues—with
              over 65 open source projects.
            </p>
            <div className="chartLayout">
              {isDesktop ? <OpenSourceDesktop /> : <OpenSourceMobile />}
            </div>
          </div>

          <div className="LayoutCenter background--light-orange text--teal">
            <div>
              <div className="max-width content-padding pad-vertical">
                <div className="pure-u-lg-1-2">
                  <h2 className="header--xl headerStyle ">
                    Open Source Health Design is an initiative to drive
                    transparency and innovation in healthcare
                    <span className="text--serif text--primary">.</span>
                  </h2>
                </div>

                <div className="pure-u-lg-1-2">
                  <p className="text textLayout">
                    Open Source Health Design is the design, testing, and
                    deployment of healthcare services
                    <br />
                    from strategy to user interfaces to operational code,
                    <br /> open to inspection, <br /> open to critique, <br />
                    and open to continuous improvement. <br />
                    <p>
                      Open Source Healthcare Design
                      <br />
                      drives software transparency, <br />
                      builds greater trust, <br />
                      creates more reliable healthcare services, <br />
                      and generates higher quality health outcomes for all.
                    </p>
                  </p>
                </div>
                <div className="pad-vertical">
                  <div className="max-width content-padding">
                    <h3 className="header--md">We've worked with...</h3>
                    <ClientLogos openSource="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double text--teal">
            <Quote
              quotee="Eric Topol"
              quoteeSub="MD, Director, Scripps Translational Science Institute"
            >
              The GoInvo studio is one of the most talented groups of designers
              I have ever met in the healthcare space. Not only are their ideas,
              designs, and graphics remarkable, but I haven't yet figured out
              how they know so much about medicine and its future.
            </Quote>
          </div>

          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical container--justify-center center ">
              <div className="paddingBottom">
                <div>
                  <h2 className="header--xl">
                    We're looking for funding
                    <span className="text--serif text--primary">.</span>
                  </h2>
                </div>

                <div className="pad-horizontal pure-u-sm-1-3">
                  <LazyImage
                    src="/images/open_source/trust.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    Build trust and make healthcare truly accessible and open to
                    a large community.
                  </p>
                </div>
                <div className="pad-horizontal pure-u-sm-1-3">
                  <LazyImage
                    src="/images/open_source/innovation.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    Innovate by leveraging validated, user-centric design that
                    has been improving for years.
                  </p>
                </div>

                <div className="pad-horizontal pure-u-sm-1-3">
                  <LazyImage
                    src="/images/open_source/public-good.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    Invest in projects in public health and pioneer cutting-edge
                    design for the common good.
                  </p>
                </div>

                <div className="pure-u-1 card marginTop">
                  <Card link="/vision/living-health-lab">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 text--teal textCard flip-child">
                        <h4 className="header--xl headerCard">
                          Living Health Lab
                        </h4>
                        <p className="text">
                          Living Health Lab is a tool that combines personal
                          science, data visualization, and community to empower
                          individuals as they explore their own health questions
                          and pursue their healthiest lives.
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child imgMaxWidth">
                        <LazyImage
                          src="/images/open_source/health-lab.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="https://open-health-manager.github.io/Design/">
                    <div className="wrap-parent">
                      <div className="pure-u-md-1-2 wrap imgMaxWidth">
                        <LazyImage
                          src="/images/open_source/health-manager.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>

                      <div className="pure-u-md-1-2 text--teal textCard wrap">
                        <h4 className="header--xl headerCard">
                          Health Manager
                        </h4>
                        <p className="text">
                          Rosie is an open source health manager to support
                          people aggregate all their health data into a single
                          location and share that data with their care team to
                          meet their health goals.
                          <br />
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/hgraph">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          Health Picture
                        </h4>
                        <p className="text">
                          hGraph can help healthcare professionals closely
                          monitor their patient population while giving their
                          patients a meaningful picture of their health.
                        </p>
                      </div>

                      <div className="pure-u-md-1-2 flip-child imgMaxWidth">
                        <LazyImage
                          src="/images/open_source/health-picture.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/vision/own-your-health-data/">
                    <div className="wrap-parent">
                      <div className="pure-u-md-1-2 wrap imgMaxWidth">
                        <LazyImage
                          src="/images/open_source/health-data-ownership.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>

                      <div className="pure-u-md-1-2 text--teal textCard wrap">
                        <h4 className="header--xl headerCard">
                          Health Data Ownership
                        </h4>
                        <p className="text">
                          Establishing data ownership rights is critical to
                          protecting patient care. We've mapped out the changes
                          that need to happen and illustrated them to be
                          accessible for both policy makers and the general
                          public.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <Link
                  to="/contact/"
                  className="button button--tertiary button--lg ctaLayout"
                >
                  Get in touch
                </Link>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <div className=" max-width content-padding pad-vertical text--teal">
              <div className="pure-u-lg-1-2 ">
                <h2 className="header--xl headerStyle">
                  Our design work, health research, and code are open source
                  <span className="text--serif text--primary">.</span>
                </h2>
              </div>
              <div className="pure-u-lg-1-2">
                <p className="text textLayout">
                  They are freely available for anyone to see, download, change,
                  and redistribute (licensed under Creative Commons Attribution
                  v4 or Apache v2). Just as the Internet is built on open source
                  technologies, open source healthcare democratizes the
                  infrastructure of healthcare (healthIT) and allows for a
                  global healthcare operating system.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical text--teal">
            <div className="paddingBottom">
              <h3 className="header--lg">
                Open Source Health Design conversations
              </h3>
              <Columns columns={3}>
                {openSourceConversations.map(item => {
                  return (
                    <Card
                      key={item.link}
                      link={item.link}
                      externalLink={item.externalLink}
                      suppressNewTab={item.suppressNewTab}
                    >
                      <ImageBlock
                        isSmall={true}
                        title={item.title}
                        image={item.image}
                        caption={item.caption}
                        sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        hoverable
                      />
                    </Card>
                  )
                })}
              </Columns>
            </div>
          </div>
          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical--double">
              <div className="pure-u-md-1-2">
                <h2 className="header--xl noTopMargin">
                  Let's build better care together!
                </h2>
                <p className="text">
                  Interested in using, contributing to, or funding these
                  projects?
                  <br />
                  We help organizations and individuals set up and use our open
                  source work.
                  <br /> Reach out to know more about the current partnership
                  opportunities available!
                </p>

                <Link
                  to="/contact"
                  className="button button--primary button--lg ctaLayout"
                >
                  Get Involved
                </Link>
              </div>

              <div className="pure-u-md-1-2 hidden--sm">
                <LazyImage
                  src="/images/open_source/cta-community.png"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const openSourcePageQuery = graphql`
  query OpenSourcePageQuery {
    allMdx(filter: { frontmatter: { hidden: { eq: false } } }) {
      nodes {
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
      }
    }
  }
`

export default OpenSourcePage
