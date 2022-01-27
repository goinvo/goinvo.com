import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import smoothscroll from 'smoothscroll-polyfill'
import { connect } from 'react-redux'
import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Sticky from '../components/sticky'
import CategoriesList, { allCategory } from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Carousel from '../components/carousel'
import Divider from '../components/divider'
import Image from '../components/image'
import Quote from '../components/quote'
import ClientLogos from '../components/os-client-logos'
import Collapsible from '../components/collapsible'
import HubspotForm from '../components/hubspot-form'
import GradientImageColumns from '../components/gradient-image-columns'

import CATEGORIES_LIST from '../data/os-categories.json'
import featuresApp from '../data/os-features-app.json'

import featuresDesign from '../data/os-features-design.json'
import config from '../../config'
import { concatCaseStudiesAndFeatures } from '../helpers'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const lgBreakPointPx =
  parseInt(config.mediaQueries.lg, 10) * parseInt(config.baseFontSize, 10)

const mediaList = [
  {
    link: 'https://designmuseumfoundation.org/open-source-healthcare/',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'It’s Time for Open Source Healthcare, we must set healthcare free.',
    caption:
      'Designers can and should shape the future of healthcare, from how products and systems work to the underlying infrastructure and standards these products and services are built upon.',
  },
  {
    link:
      'https://marcus-baw.medium.com/open-source-is-the-only-way-for-medicine-9e698de0447e',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'Open source is the only way for Medicine',
    caption:
      'We must educate other clinicians in open source software, and advocate openness in all areas — open governance, open algorithms, open standards, open data, and open organisations.',
  },
  {
    link:
      'https://www.npr.org/sections/health-shots/2014/03/28/295734262/if-a-pictures-worth-1-000-words-could-it-help-you-floss?t=1642515653876',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'If A Picture is Worth 1,000 Words, Could It Help You Floss?',
    caption:
      'A deck of cards that aims to help people to change their health habits for the better.',
  },
  {
    link: 'https://open.spotify.com/episode/5h69zFxQHdEXVTBg8oDt0f',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'Own your experience, an Open Source Path',
    caption:
      'Podcast Episode with Juhan Sonin about the importance of open source in healthcare',
  },
  {
    link: 'https://www.youtube.com/watch?v=mpyuTRAy7ds/',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'Own Your Health An Open Source Path',
    caption:
      'Juhan Sonin discussed the importance of healthcare data and explaines what is included in health data and why people should demand to own their data and control access to it.',
  },
  {
    link: 'https://www.youtube.com/watch?v=vvnE6HyMY3E',
    image: '/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg',
    title: 'Open Source Healthcare at HIMSS',
    caption: 'NEHIMSS 2019 ANNUAL CONFERENCE Juhan Sonin',
  },
]

const getWorkItemsOfCategory = (workItems, catId) => {
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

  return newWorkItems
}

const frontmatter = {
  metaTitle: 'Open Source in Healthcare & GoInvo',
  metaDescription:
    'Healthcare needs to be open. We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.',
  heroImage: '/images/open_source/os-hero-2.jpg',
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      backgroundColor: color,
      height: 0.03,
      borderColor: 'transparent',
    }}
  />
)

class OpenPage extends Component {
  constructor(props) {
    super(props)

    const workItems = concatCaseStudiesAndFeatures(props.data)
    const query =
      props.location && props.location.search ? props.location.search : null
    const categoryId =
      query && query.includes('category')
        ? query.substr(query.indexOf('=') + 1)
        : allCategory.id

    const selectedCategory =
      CATEGORIES_LIST.find(cat => cat.id === categoryId) ||
      props.selectedCategory ||
      allCategory
    const activeWorkItems = getWorkItemsOfCategory(
      workItems,
      selectedCategory.id
    )

    this.state = {
      workItems,
      selectedCategory,
      activeWorkItems,
      featuresApp: featuresApp.filter(
        feature => feature.id !== !feature.external
      ),
      featuresDesign: featuresDesign.filter(
        feature => feature.id !== !feature.external
      ),
      heroPadding: 0,
      categoriesStuck: false,
      categoriesCollapsed: false,
      suppressCollapseTransition: false,
      hasUsedFilter: false,
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
        selectedCategory: cat,
        activeWorkItems: getWorkItemsOfCategory(this.state.workItems, cat.id),
        categoriesCollapsed: this.state.categoriesStuck ? true : false,
      },
      () => {
        if (typeof window !== 'undefined') {
          window.history.replaceState(
            null,
            null,
            `/open-source-healthcare/?category=${cat.id}`
          )
        }
        if (this.state.categoriesCollapsed) {
          this.scrollWorkItemsIntoView()
        }
        this.props.setCategory(cat)
      }
    )
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
      <Layout frontmatter={frontmatter}>
        <Hero
          image={frontmatter.heroImage}
          position="center top"
          style={{ marginTop: this.state.heroPadding }}
        ></Hero>

        {/* NAVIGATION */}

        <Sticky
          top={50}
          scrollOffset={50}
          stickyUntilWidth={lgBreakPointPx}
          target="#target-stick"
          zIndex={500}
          onStateChange={this.handleCategoriesStickyStateChange}
        >
          <div
            className="pad-bottom"
            style={{ backgroundColor: '#fff' }}
            id="categories-list"
          >
            <div className="max-width content-padding pad-top">
              <CategoriesList
                categories={CATEGORIES_LIST}
                columns={4}
                selectedCategoryId={this.state.selectedCategory.id}
                onSelectCategory={this.setSelectedCategory}
              />
            </div>
          </div>
        </Sticky>

        <div id="target-stick" />

        {/* OPEN SOURCE HEALTHCARE VISION */}

        <Collapsible
          collapsed={
            this.state.selectedCategory.id === 'open-source-healthcare-vision'
              ? false
              : true
          }
          transitionSpeed="slow"
        >
          <div>
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl" style={{ color: '#E16226' }}>
                Building better care with Open Source technologies
              </h2>

              <div className="pure-u-1">
                <Image
                  src="/images/open_source/landing-page_4.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />

                <p className="text--gray">
                  Open-source software is a software released under a license
                  that make it freely available for anyone to see, download,
                  change, and redistribute. It’s open! Open source is a strong
                  driver for innovation. By democratising health technologies,
                  we grant easy access to highly developed and tested tools for
                  improving the medical practice
                </p>
              </div>

              <Divider />

              <h2 className="header--xl" style={{ color: '#E16226' }}>
                Solving the most pressing healtcare problems with Open Source
                Innovation
              </h2>

              <div className="pure-u-1">
                <div className="pure-g pure-g--reverse--only-lg">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg maring-bottom pad-bottom">
                      <Image
                        src="/images/open_source/community_5.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      />
                    </div>
                  </div>

                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg pad-top pad-bottom">
                      <p
                        style={{
                          margin: '0px',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          padding: '6px',
                          background: '#E16226',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 20,
                          color: '#fff',
                        }}
                      >
                        1
                      </p>
                      <h3 className="">Innovation from the community</h3>
                      <p className="text--gray">
                        The community working on open source platforms, have
                        countless ways and ideas on how to make it more
                        performant, more secure, more robust. They share these
                        ideas publicly and companies committed to open source
                        innovation take on these ideas, test them and make them
                        bullet-proof before integrating them to their solution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pure-g ">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg ">
                      <Image
                        src="/images/open_source/integration_6.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      />
                    </div>
                  </div>

                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg pad-bottom">
                      <p
                        style={{
                          margin: '0px',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          padding: '6px',
                          background: '#E16226',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 20,
                          color: '#fff',
                        }}
                      >
                        2
                      </p>
                      <h3 className="">Innovation from integration </h3>
                      <p className="text--gray">
                        Our current healthcare system is fragmented with siloed
                        application. Health data is abstructed, often outdated
                        or duplicated. This creates a heavy burden to patients,
                        care providers and hospitals,losing on resources and
                        productivity. Open Source software are interoperable by
                        design and can easily integrate with exsiting systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pure-g pure-g--reverse--only-lg">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg margin-top ">
                      <Image
                        src="/images/open_source/Custom.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      />
                    </div>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg pad-bottom ">
                      <p
                        style={{
                          margin: '0px',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          padding: '6px',
                          background: '#E16226',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 20,
                          color: '#fff',
                        }}
                      >
                        3
                      </p>
                      <h3 className="">Innovation from customisation </h3>
                      <p className="text--gray">
                        Each organisation, hopital, private practice or
                        community care has it’s own way of working. The duty of
                        any digital application is to swiftly adapt to processes
                        of care and the people delivering it. And this is
                        exaclty what is made possible with sotfware that are
                        made open. Health IT leaders can see through them, tweak
                        its parts, add and remove features as they see fit. IT
                        Leaders have sovereignty over their systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pad-top pad-bottom margin-top margin-bottom">
                <ColoredLine color="#E16226" />

                <h2 className="header--xl" style={{ color: '#E16226' }}>
                  Success Stories
                </h2>

                <Carousel>
                  <GradientImageColumns
                    image="/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg"
                    backgroundNotResponsive
                  >
                    <h4>FHIR Standars</h4>
                    <p>
                      Fast Healthcare Interoperability Resources (FHIR) is an
                      open source data format for healthcare. FHIR is developed
                      and maintained by HL7, a non-profit organization
                      responsible for some of the most widely-adopted standards
                      in healthcare technology around the world. Data sharing is
                      made simple between application, without the need for
                      custom integrations.
                    </p>
                  </GradientImageColumns>

                  <GradientImageColumns
                    image="/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg"
                    backgroundNotResponsive
                  >
                    <h4>Open Humans</h4>
                    <p>
                      Open Humans is a platform that allows citizen scientists
                      to share their health data. Participants' data is
                      aggregated and made available, empowering individuals to
                      engage in education and research.The data made available
                      stimulates cross-border collaboration, improves quality of
                      research and speed up scientific discoveries.
                    </p>
                  </GradientImageColumns>

                  <GradientImageColumns
                    image="/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg"
                    backgroundNotResponsive
                  >
                    <h4>OpenEMRs</h4>
                    <p>
                      An open source EHR that targets small to medium-sized
                      outpatient providers, openEMR is certified by the Office
                      of the National Coordinator for Health Information
                      Technology. OpenEMR enjoys broad adoption globally at over
                      15,000 healthcare facilities with over 45,000
                      practitioners serving over 90 million patients.
                    </p>
                  </GradientImageColumns>

                  <GradientImageColumns
                    image="/images/case-studies/goinvo/CareCards/care-cards-move-more.jpg"
                    backgroundNotResponsive
                  >
                    <h4>Standard Health Record</h4>
                    <p>
                      The Standard Health Record provides a single standard for
                      patient health data at a national level, enabling greater
                      transparency, empowerment, and clinical interoperability
                      that supports patients, clinicians and health
                      organizations. With a common open standard in place,
                      organizations can benefit from better care coordination,
                      and reductions in medical error.
                    </p>
                  </GradientImageColumns>
                </Carousel>
                <ColoredLine color="#E36216" />
              </div>

              {/* SECTION 2 */}
              <h2 className="header--xl" style={{ color: '#E16226' }}>
                Beyond Open Source software, we want an Open Healthcare System
              </h2>

              {/* SUB-SECTION 1 */}
              <div className="pure-g pure-g--reverse--only-lg">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg margin-top ">
                    <Image
                      src="/images/open_source/os-info.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>

                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg pad-bottom pad-top">
                    <h3 className="">Open Health Information</h3>
                    <p className="text--gray">
                      Health information must be open and available to the right
                      provider at the right time to deliver the best care for
                      the patient within a safe and secure data sharing
                      environment. Patients own their data and are able to
                      contribute to the decision making process. Finally,
                      anonymous health data should be available for public
                      scientific research
                    </p>
                  </div>
                </div>
              </div>

              {/* SUB-SECTION 2 */}
              <div className="pure-g pure-g--reverse--only-lg">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg margin-top ">
                    <Image
                      src="/images/open_source/os-app.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>

                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg pad-bottom pad-top">
                    <h3 className="">Open Health Applications</h3>
                    <p className="text--gray">
                      Healthcare systems must evolve towards a more transparent
                      and democratic development process. Applications should be
                      open for inspection, improvement, and correction of
                      biases. No more siloed systems, applications must
                      communicate between each other and integrate in the
                      existing care ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* SUB-SECTION 3 */}

              <div className="pure-g pure-g--reverse--only-lg">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg margin-top ">
                    <Image
                      src="/images/open_source/os-standards.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>

                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg pad-bottom pad-top">
                    <h3 className="">Open Health Standards</h3>
                    <p className="text--gray">
                      We need open standards for healthcare because our lives
                      depend on it. Standards for interoperability and data
                      format. Standardization of care plans will aid in
                      communication and collaboration across care team members
                      over time, providing high-quality longitudinal care with
                      reduced risk for medical error.
                    </p>
                  </div>
                </div>
              </div>

              {/* SUB-SECTION 4 */}

              <div className="pure-g pure-g--reverse--only-lg">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg margin-top ">
                    <Image
                      src="/images/open_source/os-process.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>

                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg pad-bottom pad-top margin-top--double">
                    <h3 className="">Open Health Processes</h3>
                    <p className="text--gray">
                      Encourage the participation of patients in their care
                      journey by supporting them to take control and engage in
                      their health and care. Open organiation collaborate
                      internally and externally and are committed to learning
                      and improvement. They provide care that does not vary in
                      quality because of a person’s characteristics.
                    </p>
                  </div>
                </div>
              </div>

              {/* END */}
              <Divider />

              {/* SECTION 3 */}
              <h2 className="header--xl pad-top" style={{ color: '#E16226' }}>
                A bold Mission for Open Source Healthcare
              </h2>
              <div className="pure-u-1 content-padding--double ">
                <p className="text--gray">
                  <span
                    className="header--xl"
                    style={{
                      color: '#E16226',
                      fontSize: '100px',
                      fontWeight: '900',
                    }}
                  >
                    W
                  </span>
                  e demand that our healthcare services be open to inspect and
                  correct bias, to be accessible for rapid innovation and
                  evolution, and to become more valuable as more patients,
                  clinicians, clinics, companies, and governments engage in
                  healthcare for all. It’s our health. Our very lives are at
                  stake.
                </p>

                <div className="container container margin-top margin-bottom--double"></div>
              </div>
            </div>
          </div>
        </Collapsible>

        {/* OPEN DESIGNS AND PRODUCTS */}

        <Collapsible
          collapsed={
            this.state.selectedCategory.id === 'open-designs-and-products'
              ? false
              : true
          }
          transitionSpeed="slow"
        >
          <div className="max-width content-padding pad-vertical">
            <h2 className="header--xl" style={{ color: '#E16226' }}>
              We made our best designs open and accessible for rapid innovation
            </h2>

            <div className="pure-u-1-3 pad-all--double">
              <Image
                src=""
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--gray">
                We provide hands-on support to our clients implementing our open
                source products
              </p>
            </div>

            <div className="pure-u-1-3 pad-all--double">
              <Image
                src=""
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--gray">
                We adapt our open source product to be mature enterprise
                services
              </p>
            </div>

            <div className="pure-u-1-3 pad-all--double">
              <Image
                src=""
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--gray">
                We partner with world-class organisations to develop open
                research and design projects
              </p>
            </div>

            <div className="background pad-vertical--double">
              <div className="max-width content-padding">
                <h3 className="header--md" style={{ marginTop: 0 }}>
                  We've worked with...
                </h3>
                <ClientLogos />
              </div>
            </div>
            <Divider />
          </div>

          <div className="background pad-bottom ">
            <div className="max-width content-padding">
              <h2>Open Applications</h2>
              <p>Customize and supplement open software to your platform.</p>

              <Columns columns={3}>
                {this.state.featuresApp.map((feature, i) => {
                  return (
                    <Card
                      link={feature.link}
                      key={feature.id}
                      externalLink
                      suppressNewTab={true}
                    >
                      <ImageBlock
                        title={feature.title}
                        image={feature.image}
                        client="Feature"
                        date={feature.date}
                        caption={feature.caption}
                        sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        hoverable
                      />
                    </Card>
                  )
                })}
              </Columns>
            </div>
          </div>

          <div className="max-width content-padding">
            <h2>Open Research and Design</h2>
            <p>Leverage existing material quickly with the right foundation.</p>

            <Columns columns={3}>
              {this.state.featuresDesign.map((feature, i) => {
                return (
                  <Card
                    link={feature.link}
                    key={feature.id}
                    externalLink
                    suppressNewTab={true}
                  >
                    <ImageBlock
                      title={feature.title}
                      image={feature.image}
                      client="Feature"
                      date={feature.date}
                      caption={feature.caption}
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                      hoverable
                    />
                  </Card>
                )
              })}
            </Columns>
          </div>
        </Collapsible>

        {/* GOINVO SOCIAL IMPACT */}

        <Collapsible
          collapsed={
            this.state.selectedCategory.id === 'goino-social-impact'
              ? false
              : true
          }
          transitionSpeed="slow"
        >
          <div>
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl" style={{ color: '#E16226' }}>
                Our Open Source products impact millions of people every day
              </h2>

              <div className="pure-g pad-left pad-bottom">
                <div className="pure-u-1-3 ">
                  <p>
                    <span
                      className="header--xl"
                      style={{ color: '#E16226', fontWeight: '900' }}
                    >
                      $1.8
                    </span>
                    <br />
                    <span
                      className="header--lg"
                      style={{
                        fontSize: '',
                        font: '',
                        color: '#E16226',
                        fontWeight: '900',
                      }}
                    >
                      Million
                    </span>
                    <br />
                    <span>
                      Studio internal investment <br /> in open source projects
                    </span>
                  </p>
                </div>
                <div className=" pure-u-1-3">
                  <p>
                    <span
                      className="header--xl"
                      style={{ color: '#E16226', fontWeight: '900' }}
                    >
                      $2.5
                    </span>
                    <br />
                    <span
                      className="header--lg"
                      style={{
                        fontSize: '',
                        font: '',
                        color: '#E16226',
                        fontWeight: '900',
                      }}
                    >
                      Million
                    </span>
                    <br />
                    <span>
                      Clients investment <br /> in open source projectss
                    </span>
                  </p>
                </div>
                <div className="pure-u-1-3">
                  <p>
                    <span
                      className="header--xl"
                      style={{ color: '#E16226', fontWeight: '900' }}
                    >
                      +65
                    </span>
                    <br />
                    <span
                      className="header--lg"
                      style={{
                        fontSize: '',
                        font: '',
                        color: '#E16226',
                        fontWeight: '900',
                      }}
                    >
                      Projects
                    </span>
                    <br />
                    <span className="padding-right">
                      Since 2010, we invested in <br /> more than 60 open source
                      projects
                    </span>
                  </p>
                </div>
              </div>

              {/* 
              <div className="max-width pad-top--double pad-bottom--double ">
                    <Quote
                background="blue"
                quotee="Eric Topol"
                quoteeSub="MD, Director, Scripps Translational Science Institute"
              >
                The GoInvo studio is one of the most talented groups of designers I
                have ever met in the healthcare space. Not only are their ideas,
                designs, and graphics remarkable, but I haven’t yet figured out how
                they know so much about medicine and its future.
              </Quote>
              </div> */}

              <Divider />

              <div className="pad-top">
                {/* <Image
                  src="/images/open_source/os-app.jpg"
                  className="image--max-width-half-only-lg"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                /> */}

                <p>
                  For all open source healthcare advocate, we wrote Nine
                  Organizing Principles for open source healthcare. A framework
                  for responsible use and management of patient health data and
                  information for the advancement of health quality, health
                  research, and data ownership. We also gathered points of view
                  of thought leaders and evidence around the world of nobable
                  Open Source projects in healthcare
                </p>

                <div className="pad-bottom">
                  <Link to="/about/open-office-hours/">
                    Nine Organizing Principles for open source healthcare{' '}
                  </Link>
                </div>

                <Link
                  to="https://opensourcehealthcare.org"
                  className="button button--secondary button--lg margin-bottom"
                >
                  View more evidence
                </Link>
              </div>
              <div>
                <h2 className="header--xl" style={{ color: '#E16226' }}>
                  Our Open Source products impact millions of people every day
                </h2>
                <Carousel
                  menuItems={[
                    'Own Your Health Data',
                    'Patient Data Manager',
                    'Open Healthcare Infrastructure',
                    'Open Source Healthcare',
                  ]}
                >
                  <GradientImageColumns
                    image="/images/services/inspired-ehrs-book.jpg"
                    backgroundColor="gray"
                    backgroundNotResponsive
                  >
                    <h4>FHIR Standars</h4>
                    <p>
                      Fast Healthcare Interoperability Resources is a standard
                      describing data formats and elements and an application
                      programming interface for exchanging electronic health
                      records.
                    </p>
                    <Link
                      to="/work/inspired-ehrs"
                      className="button button--secondary button--lg button--block"
                    >
                      Read the Case Study
                    </Link>
                  </GradientImageColumns>
                  <GradientImageColumns
                    image="/images/vision/emerging-tech-wood.jpg"
                    backgroundColor="gray"
                    backgroundNotResponsive
                  >
                    <h4>FHIR Standars</h4>
                    <p>
                      Fast Healthcare Interoperability Resources is a standard
                      describing data formats and elements and an application
                      programming interface for exchanging electronic health
                      records.
                    </p>
                    <a
                      href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary button--lg button--block"
                    >
                      Check out the Book
                    </a>
                  </GradientImageColumns>
                  <GradientImageColumns
                    image="/images/services/doh-preview.jpg"
                    backgroundColor="gray"
                    backgroundNotResponsive
                  >
                    <h4>FHIR Standars</h4>
                    <p>
                      Fast Healthcare Interoperability Resources is a standard
                      describing data formats and elements and an application
                      programming interface for exchanging electronic health
                      records.
                    </p>
                    <Link
                      to="/vision/determinants-of-health/"
                      className="button button--secondary button--lg button--block"
                    >
                      Read the Feature
                    </Link>
                  </GradientImageColumns>
                  <GradientImageColumns
                    image="/images/features/bathroom-to-healthroom/bathroom-to-healthroom-featured.jpg"
                    backgroundColor="gray"
                    backgroundNotResponsive
                  >
                    <h4>FHIR Standars</h4>
                    <p>
                      Fast Healthcare Interoperability Resources is a standard
                      describing data formats and elements and an application
                      programming interface for exchanging electronic health
                      records.
                    </p>
                    <a
                      href="https://www.goinvo.com/features/from-bathroom-to-healthroom/"
                      className="button button--secondary button--lg button--block"
                    >
                      Read the Feature
                    </a>
                  </GradientImageColumns>
                </Carousel>
              </div>

              {/* GET INVOLVED BUTTON */}

              {/* <HubspotStyle /> */}
            </div>

            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl" style={{ color: '#E16226' }}>
                Start making an impact today by starting on Github
              </h2>
              <div className="pure-u-1-2">
                <h3 className="">Design is technical</h3>
                <p className="text--gray">
                  Global communitites support our open source products.
                  Together, we contribute on writing better code, collaborate on
                  projects, and make greater impact in our healthcare system.We
                  want you to be part of our GoInvo community!
                </p>
                <Link
                  to="https://github.com/goinvo"
                  className="button button--secondary button--lg button--block"
                >
                  Contribute on github
                </Link>
              </div>
              <div className="pure-u-1-2">
                <Image
                  src="/images/open_source/os-standards.jpg"
                  className=""
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
            </div>
          </div>
        </Collapsible>

        {/* OPEN HEALTHCARE TECHTALKS */}

        <Collapsible
          collapsed={
            this.state.selectedCategory.id === 'open-healthcare-techtalks'
              ? false
              : true
          }
          transitionSpeed="slow"
        >
          <div className="max-width content-padding pad-vertical">
            <h2 className="header--xl" style={{ color: '#E16226' }}>
              Our Open Source products impact millions of people every day
            </h2>
          </div>

          <div className="max-width content-padding pad-all--half ">
            <Columns columns={2}>
              {mediaList.map(item => {
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
        </Collapsible>

        {/* CTA */}

        <div className="background--blue pad-vertical--quad--only-lg">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 ">
                <h2 className="header--xl" style={{ color: '#E16226' }}>
                  Join us to start your Open Source Healthcare journey
                  <span style={{ color: 'black' }}>.</span>
                </h2>
                <p className="text--gray">
                  We are actively looking for partners & sponsors to drive open
                  source projects.
                </p>
              </div>
              <div className="pure-u-1 margin-vertical">
                <HubspotForm
                  formId={config.hubspotContactFormId}
                  title="Get in touch"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const openPageQuery = graphql`
  query OpenQuery {
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

const ConnectedOpenPage = connect(mapStateToProps, mapDispatchToProps)(OpenPage)

export default ConnectedOpenPage
