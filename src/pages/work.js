import React, { Component } from 'react'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'

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

  if (catId === 'all') {
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
    const categoryId = query ? query.substr(query.indexOf("=") + 1) : 'all';

    this.state = {
      categoryId,
      caseStudies: getCaseStudiesOfCategory(categoryId)
    };
  }

  setSelectedCategory = (catId) => {
    this.setState({
      categoryId: catId,
      caseStudies: getCaseStudiesOfCategory(catId)
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
        <div className="pad-all pad-bottom--double background--gray">
          <div className="max-width content-padding">
            <CategoriesList columns={3} selectedCategoryId={this.state.categoryId} onSelectCategory={this.setSelectedCategory} includeAll />
          </div>
        </div>
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
            this.state.categoryId === 'all' ?
              <div className="margin-top margin-bottom--double">
                <button className="button button--primary button--block">View more</button>
              </div>
            : null
          }
        </div>
        <Quote quotee="Igor Gershfang" quoteeSub="Walgreens Emerging Tech Director">
          Invo beautifully helped shape our next generation clinician and patient experience.
        </Quote>
        <div className="background--blue">
          <div className="max-width content-padding pad-vertical">
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
