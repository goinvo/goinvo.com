import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Columns from '../components/columns'
import ImageBlock from '../components/image-block'
import Card from '../components/card'
import Quote from '../components/quote'
import EnterpriseDesktop from '../assets/images/enterprise-desktop.inline.svg'
import EnterpriseMobile from '../assets/images/enterprise-mobile.inline.svg'

const frontmatter = {
  metaTitle: 'Design for Enterprise Software',
  metaDescription:
    '',
  heroImage: '/images/open_source/open-source.jpg',
}

const openSourceConversations = [
  {
    link: 'https://designmuseumfoundation.org/open-source-healthcare/',
    image: '/images/open_source/Artboard-1_4-techtalks.jpg',
    title: 'It’s Time for Open Source Healthcare',
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

class EnterprisePage extends Component {
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
        <div className="open-source-health-design">
          <div className="pad-horizontal teal background-image ">
            <div className="max-width content-padding pad-vertical LayoutCenter">
              <div className="pad-horizontal flip-parent container-spacing">
                <div className="flip-child container-spacing">
                  <h1 className="header--xl ">
                    Enterprise Software Design
                    <span className="text--serif text--primary">.</span>
                  </h1>
                  <p>
                    Bringing innovation to your mission critical software.
                  </p>
                  <Link
                    to="/contact"
                    className="button button--primary button--lg ctaLayout marginTop"
                  >
                    Let's Talk
                  </Link>
                </div>

                <div className="flip-child mainImg">
                  <Image
                    src="/images/open_source/open-source-bgd.png"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light">
            <div className="max-width content-padding pad-vertical LayoutCenter teal">
              <div className="pure-u-lg-1-2">
                <h2 className="header--xl headerStyle ">
                  We envision a world where patients can be cared for with
                  technology that can be trusted
                  <span className="text--serif text--primary">???</span>
                </h2>
              </div>
              <div className="pure-u-lg-1-2">
                <p className="text--teal textLayout">
                  ...?
                </p>
              </div>

              <div className="container--justify-center">
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="nbrStyle">160M+</span>
                    <span className="center teal">
                      People are impacted by<br />
                      the software we've designed
                    </span>
                  </p>
                </div>
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="nbrStyle">$#M</span>
                    <span className="center teal">
                      Clients' design investment <br /> with GoInvo since 2010
                    </span>
                  </p>
                </div>
                <div className="pure-u-sm-1-3">
                  <p>
                    <span className="nbrStyle">100+</span>
                    <span className="center teal">
                      Enterprise projects since 2010
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical LayoutCenter teal">
            <h2 className="header--xl center ">
              Enterprise Design Projects
            </h2>
            <p className="text--gray pad-horizontal--double center ">
              In the past 10 years, we've partnered with many
              organizations to address the most pressing enterprise software issues—with
              over 100 projects.
            </p>
            <div className="chartLayout">
              {isDesktop ? <EnterpriseDesktop /> : <EnterpriseMobile />}
            </div>
          </div>

          <div className="pad-vertical--double teal">
            <Quote
              quotee="Serban Georgescu, MD"
              quoteeSub="InfoBionic Director of Clinical Development"
            >
              With Invo, design wasn't just design. It impacted our IP portfolio. It changed our business.
            </Quote>
          </div>

          <div className="LayoutCenter teal">
            <div>
              <div className="max-width content-padding pad-vertical">
                <div className="pad-vertical">
                  <div className="max-width content-padding">
                    <h3 className="header--md">We've worked with...</h3>
                    <ClientLogos openSource="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light teal">
            <div className="max-width content-padding pad-vertical container--justify-center center ">
              <div className="paddingBottom">
                <div>
                  <h2 className="header--xl">
                    Reimagining software for business and customer goals
                    <span className="text--serif text--primary">.</span>
                  </h2>
                </div>

                <div className="pad-horizontal pure-u-sm-1-3">
                  <Image
                    src="/images/open_source/trust.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    You've acquired software and need to integrate it into your suite of services.
                  </p>
                </div>
                <div className="pad-horizontal pure-u-sm-1-3">
                  <Image
                    src="/images/open_source/innovation.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    Your customers needs are changing, and your software needs to adapt.
                  </p>
                </div>

                <div className="pad-horizontal pure-u-sm-1-3">
                  <Image
                    src="/images/open_source/public-good.png"
                    className="image--max-width-80"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="text">
                    You're heading into a new market and want validation before you invest.
                  </p>
                </div>

                <div className="pure-u-1 card marginTop">
                  <Card link="#">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 teal textCard flip-child">
                        <h4 className="header--xl headerCard">
                          clientName - Redesign
                        </h4>
                        <p className="text">
                          ...
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child imgMaxWidth">
                        <Image
                          src="/images/open_source/health-lab.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/3m-coderyte/">
                    <div className="wrap-parent">
                      <div className="pure-u-md-1-2 wrap imgMaxWidth">
                        <Image
                          src="/images/open_source/health-manager.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>

                      <div className="pure-u-md-1-2 teal textCard wrap">
                        <h4 className="header--xl headerCard">
                          CodeRyte – New product
                        </h4>
                        <p className="text">
                          ....
                          <br />
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="#">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          clientName – A suite of acquisitions
                        </h4>
                        <p className="text">
                          ...
                        </p>
                      </div>

                      <div className="pure-u-md-1-2 flip-child imgMaxWidth">
                        <Image
                          src="/images/open_source/health-picture.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="#">
                    <div className="wrap-parent">
                      <div className="pure-u-md-1-2 wrap imgMaxWidth">
                        <Image
                          src="/images/open_source/health-data-ownership.png"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>

                      <div className="pure-u-md-1-2 teal textCard wrap">
                        <h4 className="header--xl headerCard">
                          Mass General Brigham – ???
                        </h4>
                        <p className="text">
                          ...
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div className="bg-light teal">
            <div className="max-width content-padding pad-vertical--double">
              <div className="pure-u-md-1-2">
                <h2 className="header--xl noTopMargin">
                  Let's build together!
                </h2>
                <p className="text">
                  Interested in having GoInvo help your organization?
                  <br />Reach out to learn more about our services and how we can help!
                </p>

                <Link
                  to="/contact"
                  className="button button--primary button--lg ctaLayout"
                >
                  Let's Talk
                </Link>
              </div>

              <div className="pure-u-md-1-2 hidden--sm">
                <Image
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

export default EnterprisePage
