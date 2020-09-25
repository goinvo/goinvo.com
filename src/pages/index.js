import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import HubspotForm from '../components/hubspot-form'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Divider from '../components/divider'

import config from '../../config'
import {
  extractWorkItemLinkDetails,
  concatCaseStudiesAndFeatures,
} from '../helpers'

const frontmatter = {
  metaTitle: 'Healthcare UX Design Agency | GoInvo Boston',
  metaDescription:
    'GoInvo is a healthcare UX design agency with deep expertise in Health IT, Genomics, and Open Source Health, located in the greater Boston area.',
  heroImage: '/images/homepage/hero-critical-mass-4.jpg',
  heroButtonText: 'See Our Work',
}

class IndexPage extends Component {
  constructor(props) {
    super(props)

    const workItems = concatCaseStudiesAndFeatures(props.data).slice(0, 4)

    this.state = {
      workItems,
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero
          className="hero--higher-text-contrast"
          link="/work/"
          image={frontmatter.heroImage}
          caption="We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, and governments."
          button={frontmatter.heroButtonText}
          isLarge
          position="top center"
        >
          <h1 className="header--xl">
            Designing
            <br />
            the future of
            <br />
            healthcare
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <div className="max-width content-padding pad-vertical--double--only-lg">
          <Divider animated className="hidden--lg" />
          <div className="pure-g margin-vertical--double">
            <div className="pure-u-1 pure-u-lg-1-3">
              <h2 className="header--xl margin--none pad-right--double">
                Our designs in healthcare are used every day
                <span className="text--serif text--primary">.</span>
              </h2>
            </div>
            <div className="pure-u-1 pure-u-lg-2-3">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p className="pad-right--only-lg">
                    <span className="text--bold">160 million US residents</span>
                    <br />
                    <span className="text--gray">
                      are analyzed, care planned, and risk adjusted with the
                      software we designed.
                    </span>
                    <br />
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p className="pad-left--only-lg">
                    <span className="text--bold">
                      700,000 Massachusetts residents
                    </span>
                    <br />
                    <span className="text--gray">
                      count on our service design.
                    </span>
                    <br />
                    <Link to="/work/mass-snap">Read the case study</Link>
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p className="pad-right--only-lg">
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
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p className="pad-left--only-lg">
                    <span className="text--bold">1 billion prescriptions</span>
                    <br />
                    <span className="text--gray">
                      will flow through the software we've designed in 2019.
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background--gray  pad-vertical--double">
          <div className="max-width content-padding">
            <h3 className="header--md" style={{ marginTop: 0 }}>
              We've worked with...
            </h3>
            <ClientLogos />
          </div>
        </div>
        <div className="max-width content-padding pad-bottom--double">
          <div className="pure-g margin-vertical--double pad-vertical--double">
            <div className="pure-u-1 pure-u-lg-1-3">
              <h2 className="header--xl margin--none pad-right--double">
                Our expertise in healthcare covers
                <span className="text--serif text--primary">...</span>
              </h2>
            </div>
            <div className="pure-u-1 pure-u-lg-2-3">
              <CategoriesList columns={2} />
            </div>
          </div>
          <Columns columns={2}>
            {this.state.workItems.map((item, i) => {
              const {
                link,
                externalLink,
                suppressNewTab,
              } = extractWorkItemLinkDetails(item)

              return (
                <Card
                  link={link}
                  key={link}
                  externalLink={externalLink}
                  suppressNewTab={suppressNewTab}
                  hidden={{ condition: i > 1, class: 'hidden--sm' }}
                >
                  <ImageBlock
                    title={item.title}
                    image={item.image}
                    client={item.client}
                    categories={item.categories}
                    caption={item.caption}
                    sizes={config.sizes.fullToHalfAtMediumInsideMaxWidth}
                    hoverable
                  />
                </Card>
              )
            })}
          </Columns>
          <div className="container container--justify-center margin-top margin-bottom--double">
            <Link
              to="/work/?expanded=true"
              className="button button--primary button--lg"
            >
              View all work
            </Link>
          </div>
        </div>
        <Quote
          background="gray"
          quotee="Eric Topol"
          quoteeSub="MD, Director, Scripps Translational Science Institute"
        >
          The GoInvo studio is one of the most talented groups of designers I
          have ever met in the healthcare space. Not only are their ideas,
          designs, and graphics remarkable, but I haven’t yet figured out how
          they know so much about medicine and its future.
        </Quote>
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
              image="/images/vision/microphone.jpg"
              title="The Digital Life podcast"
              caption="An online radio show that explores important, timely topics in the world of digital design and technology."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <a
                href="https://soundcloud.com/involution-studios/ai-and-knowledge-work"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI & Knowledge Work
              </a>
              <br />
              <a
                href="https://soundcloud.com/involution-studios/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore all episodes
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
                  <div className="pure-g">
                    <div className="pure-u-1-2">
                      <p>
                        Research
                        <br />
                        User interviews
                        <br />
                        Analysis
                        <br />
                        User mapping
                        <br />
                        Ideation
                        <br />
                        UI & UX Design
                        <br />
                      </p>
                    </div>
                    <div className="pure-u-1-2">
                      <p>
                        Prototyping
                        <br />
                        User testing
                        <br />
                        Front-end development
                        <br />
                        Strategy consulting
                        <br />
                        Workshop
                        <br />
                        Graphic facilitation
                        <br />
                      </p>
                    </div>
                  </div>
                  <a href="/services/">Learn more about our services</a>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 margin-vertical">
                <HubspotForm
                  formId={config.hubspotContactFormId}
                  title="Get in touch"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical--quad">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pad-right--only-lg">
                <Image
                  src="/images/homepage/group-aug-2018-4.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pad-left--only-lg">
                <h2 className="header--xl">
                  We are GoInvo
                  <span className="text--primary text--serif">.</span>
                </h2>
                <p className="text--gray margin-bottom--double">
                  Small by design.
                  <br />
                  Big thinkers.
                  <br />
                  Sweat the details.
                  <br />
                  Ethics not optional.
                  <br />
                  Hyperfocused on healthcare.
                  <br />
                </p>
                <Link
                  to="/about/"
                  className="button button--secondary button--lg margin-bottom"
                >
                  Meet our team
                </Link>
                <br />
                <Link to="/about/open-office-hours/">
                  Visit our open office hours
                </Link>
              </div>
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
      edges {
        node {
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
  }
`

export default IndexPage
