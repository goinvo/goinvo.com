import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import ContactForm from '../components/form-contact'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Divider from '../components/divider'
import headerData from '../data/homepage-headers.json'

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
// Select a random hero image from the category
const heroImage = categoryData.heroImages[Math.floor(Math.random() * categoryData.heroImages.length)];

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

    const workItems = concatCaseStudiesAndFeatures({ caseStudies: props.data }).slice(0, 4)

    this.state = {
      image: null,
      workItems,
      frontmatter,
    }
  }

  render() {
    return (
      <Layout frontmatter={this.state.frontmatter}>
        <Hero
          className="hero--higher-text-contrast"
          link="/work/"
          image={this.state.frontmatter.heroImage}
          caption={this.state.frontmatter.tagline}
          button={frontmatter.heroButtonText}
          buttonLink="/work/"
          isLarge
          position="top center"
        >
          <h1 className="header--xl">
            Designing
            <br />
            the future of
            <br />
            {this.state.frontmatter.category}
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <div className="max-width content-padding pad-vertical--double--only-lg">
          <Divider animated className="hidden--lg" />
          <div className="pure-g margin-vertical--double">
            <div className="pure-u-1 pure-u-lg-1-3">
              <h2 className="header--xl margin--none">Welcome Jacobin Readers!</h2>
              <div style={{ borderRadius: '20px', overflow: 'hidden', marginTop: '10px', marginBottom: '20px', marginRight: '30px', height: '270px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a
                  href="/vision/"
                  style={{ display: 'block', lineHeight: 0 }}
                >
                  <Image
                    src="/images/features/posters/design-axiom-make-things.jpg"
                    alt="Sugar Kills poster"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </a>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-2-3">
              <h2 className="header--xl margin--none pad-right--double">
                Our designs are used every day
                <span className="text--serif text--primary">.</span>
              </h2>
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
                      will flow through the software we've designed.
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
          <div className="margin-vertical--double pad-vertical--double">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <h2 className="header--xl margin--none pad-right--double">
                  Our practices
                </h2>
              </div>
            </div>

            <div className="pure-u-1 pure-u-lg-4-4">
              <CategoriesList includeAll={false} columns={4} />
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
              <div className="pure-u-1 pure-u-lg-1-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical--quad">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pad-right--only-lg">
                <a
                  href="https://my.matterport.com/show/?m=KDRR1E7jZwf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/homepage/group-aug-2018-4.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </a>
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
                  Hyperfocused on software.
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
