import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import smoothscroll from 'smoothscroll-polyfill'
import { connect } from 'react-redux'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Sticky from '../components/sticky'
import CategoriesList, { allCategory } from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import Collapsible from '../components/collapsible'
import HubspotForm from '../components/hubspot-form'
import GradientImageColumns from '../components/gradient-image-columns'

import config from '../../config'

import {
  extractWorkItemLinkDetails,
  concatCaseStudiesAndFeatures,
} from '../helpers'

import Caret from '../assets/images/icon-caret.inline.svg'

import CATEGORIES_LIST from '../data/categories.json'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const lgBreakPointPx =
  parseInt(config.mediaQueries.lg, 10) * parseInt(config.baseFontSize, 10)

const upNextList = [
  {
    link: '/services/',
    image: '/images/services/shr-completeness.jpg',
    title: 'Learn more about our services',
    caption:
      'No matter the size or structure of your team, we integrate to magnify your efforts.',
  },
  {
    link: '/vision/',
    image: '/images/homepage/standardized-health-data-preview-2.jpg',
    title: 'Explore our research',
    caption:
      'We investigate the future of healthcare through our podcast, features, books, and articles. Check it out!',
  },
  {
    link: '/about/',
    image: '/images/about/bowling.jpg',
    title: 'Meet the team',
    caption:
      'We bring together the very best people and deploy them on your hardest digital problems.',
  },
]

const getWorkItemsOfCategory = (workItems, catId, initial = false) => {
  let newWorkItems = []

  if (catId === allCategory.id) {
    newWorkItems = initial ? workItems.slice(0, 4) : workItems
  } else {
    newWorkItems = workItems.filter(item => {
      return item.categories.filter(cat => {
        return cat === catId
      }).length
    })
  }

  return newWorkItems
}

class WorkPage extends Component {
  constructor(props) {
    super(props)

    const workItems = concatCaseStudiesAndFeatures(props.data)
    const query =
      props.location && props.location.search ? props.location.search : null
    const categoryId =
      query && query.includes('category')
        ? query.substr(query.indexOf('=') + 1)
        : allCategory.id
    const expanded =
      query && query.includes('expanded')
        ? query.substr(query.indexOf('=') + 1)
        : false
    const selectedCategory =
      CATEGORIES_LIST.find(cat => cat.id === categoryId) ||
      props.selectedCategory ||
      allCategory
    const activeWorkItems = getWorkItemsOfCategory(
      workItems,
      selectedCategory.id,
      !expanded
    )

    this.state = {
      workItems,
      selectedCategory,
      activeWorkItems,
      heroPadding: 0,
      categoriesStuck: false,
      categoriesCollapsed: false,
      suppressCollapseTransition: false,
      hasUsedFilter: false,
      partialView: !expanded,
      viewMoreCount: workItems.length - activeWorkItems.length,
    }

    this.categoryDropdownButton = React.createRef()
  }

  handleCategoriesStickyStateChange = (isStuck, stickyBasedOnWidth) => {
    this.setState(
      {
        suppressCollapseTransition: true,
        categoriesStuck: isStuck,
        categoriesCollapsed: isStuck,
      },
      () => {
        let heroPadding = 0
        if (this.categoryDropdownButton.current && stickyBasedOnWidth) {
          heroPadding = this.categoryDropdownButton.current.offsetHeight
        }
        this.setState({
          heroPadding,
          suppressCollapseTransition: false,
        })
      }
    )
  }

  toggleCategories = () => {
    this.setState({ categoriesCollapsed: !this.state.categoriesCollapsed })
  }

  setSelectedCategory = cat => {
    if (!this.state.hasUsedFilter) {
      this.setState({ hasUsedFilter: true })
    }
    this.setState(
      {
        partialView: false,
        selectedCategory: cat,
        activeWorkItems: getWorkItemsOfCategory(this.state.workItems, cat.id),
        categoriesCollapsed: this.state.categoriesStuck ? true : false,
      },
      () => {
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, null, `/work/?category=${cat.id}`)
        }
        if (this.state.categoriesCollapsed) {
          this.scrollWorkItemsIntoView()
        }
        this.props.setCategory(cat)
      }
    )
  }

  viewMore = () => {
    this.setState({
      partialView: false,
      selectedCategory: allCategory,
      activeWorkItems: getWorkItemsOfCategory(
        this.state.workItems,
        allCategory.id
      ),
    })
  }

  scrollWorkItemsIntoView = () => {
    if (typeof window !== 'undefined') {
      window.scroll({
        top: document.querySelector('#target-stick').offsetTop - 49,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="Work - GoInvo"
          meta={[
            {
              name: 'description',
              content:
                'We help healthcare organizations make clinical strength software for high-test, high stress environments.',
            },
            {
              name: 'keywords',
              content:
                'healthcare design, health design, healthcare UI design, healthcare UX design, designing healthcare systems, goinvo work',
            },
          ]}
        />
        <Hero
          image="/images/work/dr-emily.jpg"
          position="center top"
          style={{ marginTop: this.state.heroPadding }}
        >
          <h1 className="header--xl">
            Patient tested
            <span className="text--serif text--primary">.</span>
            <br />
            Clinician approved
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <Sticky
          top={50}
          scrollOffset={50}
          stickyUntilWidth={lgBreakPointPx}
          target="#target-stick"
          zIndex={500}
          onStateChange={this.handleCategoriesStickyStateChange}
        >
          {this.state.categoriesStuck ? (
            <button
              className="button button--primary button--bg-white button--block"
              onClick={this.toggleCategories}
              ref={this.categoryDropdownButton}
            >
              {this.state.categoriesCollapsed &&
              !this.state.hasUsedFilter &&
              this.state.selectedCategory.id === allCategory.id
                ? 'Add a filter'
                : this.state.selectedCategory.title}
              <Caret
                className={`icon icon--md margin-left flip ${
                  !this.state.categoriesCollapsed ? 'flip--is-flipped' : ''
                }`}
                style={{ marginTop: '-1px' }}
              />
            </button>
          ) : null}
          <Collapsible
            collapsed={this.state.categoriesCollapsed}
            suppressTransition={this.state.suppressCollapseTransition}
          >
            <div
              className="background--gray pad-top pad-bottom--double"
              id="categories-list"
            >
              <div className="max-width content-padding">
                <CategoriesList
                  columns={3}
                  selectedCategoryId={this.state.selectedCategory.id}
                  onSelectCategory={this.setSelectedCategory}
                  includeAll
                />
              </div>
            </div>
          </Collapsible>
        </Sticky>
        <div id="target-stick" />
        <Collapsible
          collapsed={
            this.state.selectedCategory.id === 'open-source' ? false : true
          }
          transitionSpeed="slow"
        >
          <div className="background--blue">
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl">Open source healthcare matters</h2>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <h3 className="header--lg">
                    We live in a closed healthcare system.
                  </h3>
                  <p className="text--gray">
                    The algorithms that drive our care, to our clinical and life
                    data, to hospital and treatment pricing, are governed by
                    blackbox services.
                  </p>
                  <p className="text--gray">
                    By using these closed systems, we are actively designed out
                    of the decision-making process, in favor of corporate
                    “optimized care” for optimized returns (vs optimized health
                    outcomes).
                  </p>
                  <p className="text--gray">
                    The biases built into software, implemented with intent or
                    accidentally, need interrogation, citizen collaboration, and
                    correction.
                  </p>
                  <p className="text--gray">It’s our health.</p>
                  <p className="text--gray">Our very lives are at stake.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                  <h3 className="header--lg">
                    We demand that our healthcare services be open.
                  </h3>
                  <p className="text--gray">
                    1. to inspect and correct bias,
                    <br />
                    2. to be accessible for rapid innovation and evolution,
                    <br />
                    3. and to become more valuable as more patients, clinicians,
                    clinics, companies, and governments engage in healthcare for
                    all.
                  </p>
                  <Link
                    to="/vision/open-source-healthcare/"
                    className="button button--primary button--lg margin-top"
                  >
                    Check out our open source journal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
        <div className="max-width content-padding pad-vertical--double--only-lg">
          <div className="margin-top--only-lg">
            <Columns columns={2}>
              {this.state.activeWorkItems.map(item => {
                const {
                  link,
                  externalLink,
                  suppressNewTab,
                } = extractWorkItemLinkDetails(item)

                return (
                  <Card
                    key={link}
                    link={link}
                    externalLink={externalLink}
                    suppressNewTab={suppressNewTab}
                  >
                    <ImageBlock
                      title={item.title}
                      image={item.image}
                      client={item.client || null}
                      categories={item.categories}
                      caption={item.caption}
                      sizes={config.sizes.fullToHalfAtMediumInsideMaxWidth}
                      hoverable
                    />
                  </Card>
                )
              })}
            </Columns>
          </div>
          {this.state.selectedCategory.id === allCategory.id &&
          this.state.partialView ? (
            <div className="margin-top margin-bottom--double">
              <button
                className="button button--primary button--block"
                onClick={this.viewMore}
              >
                View more ({this.state.viewMoreCount})
              </button>
            </div>
          ) : null}
        </div>
        <Quote
          background="gray"
          quotee="Igor Gershfang"
          quoteeSub="Walgreens Emerging Tech Director"
        >
          Invo beautifully helped shape our next generation clinician and
          patient experience.
        </Quote>
        <GradientImageColumns
          image="/images/work/eric-comp.jpg"
          backgroundColor="black"
          gradient
          offsetContent
          reverse
        >
          <h2 className="header--xl text--white">
            Want to take your healthcare product to the next level?
          </h2>
          <HubspotForm
            formId={config.hubspotContactFormId}
            title="Get in touch"
          />
        </GradientImageColumns>
        <div className="background--blue">
          <div className="max-width content-padding pad-vertical pad-vertical--quad--only-lg">
            <h4 className="header--md">Up next</h4>
            <Columns columns={3}>
              {upNextList.map(item => {
                return (
                  <Card key={item.link} link={item.link}>
                    <ImageBlock
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
      </Layout>
    )
  }
}

export const workPageQuery = graphql`
  query WorkQuery {
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

const mapStateToProps = ({ selectedCategory }) => {
  return { selectedCategory }
}

const mapDispatchToProps = dispatch => {
  return { setCategory: value => dispatch({ type: `SET_CATEGORY`, value }) }
}

const ConnectedWorkPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPage)

export default ConnectedWorkPage
