import React, { Component } from 'react'

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

import Caret from '../assets/images/icon-caret.inline.svg'

import CATEGORIES_LIST from '../data/categories.json'
import caseStudies from '../data/case-study-list.json'

const upNextList = [
  {
    link: "/services/",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Learn more about our services",
    caption: "No matter the size or structure of your team, we integrate to magnify your efforts."
  },
  {
    link: "/vision/",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Explore our research",
    caption: "We investigate the future of healthcare through our podcast, features, books, and articles. Check it out!"
  },
  {
    link: "/about/",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Meet the team",
    caption: "We bring together the very best people and deploy them on your hardest digital problems."
  }
];

const getCaseStudiesOfCategory = (catId) => {
  let newCaseStudies = [];

  if (catId === allCategory.id) {
    newCaseStudies = caseStudies;
  } else {
    newCaseStudies = caseStudies.filter(study => {
      const matches = study.categories.filter(cat => {
        return cat.id === catId;
      });

      return matches.length;
    });
  }

  return newCaseStudies;
}

// TODO:
// - Correct sorting (by featured, date?)

class WorkPage extends Component {
  constructor(props) {
    super(props);

    const query = props.location && props.location.search ? props.location.search : null;
    const categoryId = query ? query.substr(query.indexOf("=") + 1) : allCategory.id;

    const selectedCategory = CATEGORIES_LIST.find(cat => cat.id === categoryId) || allCategory;

    this.state = {
      selectedCategory,
      caseStudies: getCaseStudiesOfCategory(categoryId),
      categoriesStuck: false,
      categoriesCollapsed: false,
      suppressCollapseTransition: false,
    };
  }

  handleCategoriesStickyStateChange = (isStuck) => {
    this.setState({
      suppressCollapseTransition: true,
      categoriesStuck: isStuck,
      categoriesCollapsed: isStuck
    }, () => {
      this.setState({ suppressCollapseTransition: false })
    });
  }

  toggleCategories = () => {
    this.setState({ categoriesCollapsed: !this.state.categoriesCollapsed });
  }

  setSelectedCategory = (cat) => {
    this.setState({
      selectedCategory: cat,
      caseStudies: getCaseStudiesOfCategory(cat.id),
      categoriesCollapsed: this.state.categoriesStuck ? true : false,
    });
  }

  render() {
    return (
      <Layout>
        <Hero image="home/family-doctor-visit-diabetes.jpg">
          <h1 className="header--xl">
            Patient tested<span className="text--serif text--primary">.</span><br/>
            Clinician approved<span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <Sticky top={50}
                scrollOffset={50}
                target="#target-stick"
                zIndex={500}
                onStateChange={this.handleCategoriesStickyStateChange}>
          {
            this.state.categoriesStuck ?
              <button className="button button--primary button--bg-white button--block" onClick={this.toggleCategories}>
                {this.state.selectedCategory.title}
                <Caret className={`icon icon--md margin-left flip ${!this.state.categoriesCollapsed ? 'flip--is-flipped' : ''}`} style={{ marginTop: '-1px' }} />
              </button>
            : null
          }
          <Collapsible collapsed={this.state.categoriesCollapsed} suppressTransition={this.state.suppressCollapseTransition}>
          <div className="background--gray pad-top pad-bottom--double" id="categories-list">
            <div className="max-width content-padding">
                <CategoriesList columns={3} selectedCategoryId={this.state.selectedCategory.id} onSelectCategory={this.setSelectedCategory} includeAll />
            </div>
          </div>
          </Collapsible>
        </Sticky>
        <div id="target-stick"></div>
        <Collapsible collapsed={this.state.selectedCategory.id === 'open-source' ? false : true} transitionSpeed="slow">
          <div className="background--blue">
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl">Open source healthcare matters</h2>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--double">
                  <h3 className="header--lg">We live in a closed healthcare system.</h3>
                  <p className="text--gray">The algorithms that drive our care, to our clinical and life data, to hospital and treatment pricing, are governed by blackbox services.</p>
                  <p className="text--gray">By using these closed systems, we are actively designed out of the decision-making process, in favor of corporate “optimized care” for optimized returns (vs optimized health outcomes).</p>
                  <p className="text--gray">The biases built into software, implemented with intent or accidentally, need interrogation, citizen collaboration, and correction.</p>
                  <p className="text--gray">It’s our health.</p>
                  <p className="text--gray">Our very lives are at stake.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--double">
                  <h3 className="header--lg">We demand that our healthcare services be open.</h3>
                  <p className="text--gray">
                    1. to inspect and correct bias,<br/>
                    2. to be accessible for rapid innovation and evolution,<br/>
                    3. and to become more valuable as more patients, clinicians, clinics, companies, and governments engage in healthcare for all.
                  </p>
                  <button className="button button--primary margin-top">Check out our open source journal</button>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
        <div className="max-width content-padding">
          <div className="margin-top--double">
            <Columns columns={2}>
              { this.state.caseStudies.map(study => {
                return (
                  <Card key={study.slug} link={`/work/${study.slug}`}>
                    <ImageBlock
                      title={study.title}
                      image={study.image}
                      client={study.client}
                      categories={study.categories}
                      caption={study.caption}
                      hoverable />
                  </Card>
                )
              })}
            </Columns>
          </div>
          {
            this.state.selectedCategory.id === allCategory.id ?
              <div className="margin-top margin-bottom--double">
                <button className="button button--primary button--block">View more</button>
              </div>
            : null
          }
        </div>
        <Quote quotee="Igor Gershfang" quoteeSub="Walgreens Emerging Tech Director">
          Invo beautifully helped shape our next generation clinician and patient experience.
        </Quote>
        <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="black" gradient offsetContent reverse>
          <h2 className="header--xl text--white">Want to take your healthcare product to the next level?</h2>
          <HubspotForm formId={config.hubspotContactFormId} title="Get in touch" />
        </GradientImageColumns>
        <div className="background--blue">
          <div className="max-width content-padding pad-vertical pad-top--crazy">
            <h4 className="header--sm">Up next</h4>
            <Columns columns={3}>
              { upNextList.map(item => {
                return (
                  <Card key={item.link} link={item.link}>
                    <ImageBlock
                      title={item.title}
                      image={item.image}
                      caption={item.caption}
                      hoverable />
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

export default WorkPage
