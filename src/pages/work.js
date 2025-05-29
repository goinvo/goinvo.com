import React, { Component } from 'react'
import { graphql } from 'gatsby'
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
import ContactForm from '../components/form-contact'
import GradientImageColumns from '../components/gradient-image-columns'
import headerData from '../data/homepage-headers.json'

import config from '../../config'

import {
  extractWorkItemLinkDetails,
  concatCaseStudiesAndFeatures,
} from '../helpers'

import Caret from '../assets/images/icon-caret.inline.svg'

import CATEGORIES_LIST from '../data/categories-buckets.json'
import CASE_STUDY_ORDER from '../data/case-study-order.json';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const lgBreakPointPx =
  parseInt(config.mediaQueries.lg, 10) * parseInt(config.baseFontSize, 10)

const upNextList = [
  {
    link: '/enterprise/',
    image: '/images/enterprise/enterprise-hero-1.jpg',
    title: 'Design for the Enterprise',
    caption:
      'Beautiful software design for the Enterprise to catapult your business forward.',
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

const getWorkItemsOfCategory = (workItems, catId) => {
  const categoryOrder = CASE_STUDY_ORDER[catId] || [];

  let newWorkItems = []
  if (catId === allCategory.id) {
    newWorkItems = workItems
  } else {
    newWorkItems = workItems.filter(item => {
      return item.categories.filter(cat => {
        return cat === catId
      }).length
    })
  }
  // Get the order for the selected category from the case-study-order.json file


  // Filter work items based on the selected category
  const filteredWorkItems = catId === allCategory.id
    ? workItems // Include all work items for the "all" category
    : workItems.filter(item => item.categories.includes(catId));

  // Sort the filtered work items based on the order in case-study-order.json
  const orderedWorkItems = filteredWorkItems.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.id);
    const indexB = categoryOrder.indexOf(b.id);

    // Items not in the order list will appear at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });

  return orderedWorkItems;
}

class WorkPage extends Component {
  getCategoryData(categoryId) {
    // Get category data for the selected category
    const categoryData = headerData[categoryId] || headerData['all'] || {};
    const heroImages = categoryData.heroImages || [];

    // Select a random hero image from the category (fallback to a default image if none exist)
    const heroImage =
      heroImages.length > 0
        ? heroImages[Math.floor(Math.random() * heroImages.length)]
        : '/images/work/dr-emily.jpg'; // Replace with a valid default image path

    // Create the frontmatter dynamically
    const frontmatter = {
      metaTitle: 'Case Studies by UX Design Agency GoInvo',
      metaDescription:
        'We design and ship beautiful software for healthcare organizations as far-reaching as 3M, Johnson & Johnson, and Walgreens, to leading startups.',
      heroImage: heroImage,
      title: 'Design that Delivers', // Fallback title
      subtitle: 'Real projects, real users, real business outcomes.'
    }

    return { categoryData, heroImages, frontmatter, heroImage };
  }

  constructor(props) {
    super(props);

    // Default category is "all"
    const query =
      props.location && props.location.search ? props.location.search : null;
    const categoryId =
      query && query.includes('category')
        ? query.substr(query.indexOf('=') + 1)
        : allCategory.id;

    const selectedCategory =
      CATEGORIES_LIST.find(cat => cat.id === categoryId) ||
      props.selectedCategory ||
      allCategory;

    // Get work items for the selected category
    const workItems = concatCaseStudiesAndFeatures({
      caseStudies: props.data,
      selectedCategoryId: selectedCategory.id
    });

    // Get category data, hero images, and frontmatter
    const { categoryData, heroImages, frontmatter, heroImage } =
      this.getCategoryData(selectedCategory.id);

    this.state = {
      workItems,
      categoryData,
      heroImage,
      selectedCategory,
      frontmatter,
      heroPadding: 0,
      categoriesStuck: false,
      categoriesCollapsed: false,
      suppressCollapseTransition: false,
      hasUsedFilter: false,
    };

    this.categoryDropdownButton = React.createRef();
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
      this.setState({ hasUsedFilter: true });
    }

    // Get category data, hero images, and frontmatter
    const { categoryData, frontmatter, heroImage } = this.getCategoryData(cat.id);

    // Update the selected category and work items
    this.setState(
      {
        selectedCategory: cat,
        workItems: concatCaseStudiesAndFeatures({
          caseStudies: this.props.data,
          selectedCategoryId: cat.id,
        }),
        categoriesCollapsed: this.state.categoriesStuck ? true : false,
        categoryData,
        frontmatter,
        heroImage,
      },
      () => {
        if (typeof window !== 'undefined') {
          window.history.replaceState(null, null, `/work/?category=${cat.id}`);
        }
        if (this.state.categoriesCollapsed) {
          this.scrollWorkItemsIntoView();
        }
        this.props.setCategory(cat);
      }
    );
  };

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
    const { frontmatter, workItems, selectedCategory, categoryData } = this.state;

    return (
      <Layout frontmatter={frontmatter}>
        <Hero
          image={frontmatter.heroImage}
          position="center top"
          style={{ marginTop: this.state.heroPadding }}
        >
          <h1 className="header--xl">
            {frontmatter.title}
            <span className="text--serif text--primary">.</span>
            <br />
            <span className="text--serif text--lg">{frontmatter.subtitle}</span>
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
              className="button button--secondary button--bg-white button--block"
              onClick={this.toggleCategories}
              ref={this.categoryDropdownButton}
            >
              {this.state.categoriesCollapsed &&
                !this.state.hasUsedFilter &&
                this.state.selectedCategory.id === allCategory.id
                ? 'Add a filter'
                : this.state.selectedCategory.title}
              <Caret
                className={`icon icon--md margin-left flip ${!this.state.categoriesCollapsed ? 'flip--is-flipped' : ''
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
                  includeAll={true}
                  columns={5}
                  selectedCategoryId={this.state.selectedCategory.id}
                  onSelectCategory={this.setSelectedCategory}
                />
              </div>
            </div>
          </Collapsible>
        </Sticky>
        <div id="target-stick" />

        <div className="max-width content-padding pad-vertical--double--only-lg">
          <div className="margin-top--only-lg">
            <Columns columns={2}>
              {this.state.workItems.map((item, i) => {
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
          <ContactForm />
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

const mapStateToProps = ({ selectedCategory }) => {
  return { selectedCategory }
}

const mapDispatchToProps = dispatch => {
  return { setCategory: value => dispatch({ type: `SET_CATEGORY`, value }) }
}

const ConnectedWorkPage = connect(mapStateToProps, mapDispatchToProps)(WorkPage)

export default ConnectedWorkPage
