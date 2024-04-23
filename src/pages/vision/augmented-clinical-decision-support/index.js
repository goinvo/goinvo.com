import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Augmented Clinical Decision Support - GoInvo',
  metaDescription:
    'Real-time, augmented decision support and guidance for mobile health workers, to better training and repeatable health outcomes.',
  heroImage:
    '/images/features/augmented-clinical-decision-support/augmented-clinical-decision-support-hero.jpg',
}

let carousels = {
  pregnancy: 'pregnancyCarousel',
  // paper: 'paperCarousel',
}

class AugmentedClinicalDecisionSupportFeature extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    Object.keys(carousels).forEach(key => {
      let carouselId = carousels[key]

      this.state[carouselId] = 0

      this[carouselId] = React.createRef()
    })
  }

  setCarouselSlide = (id, currentSlide) => {
    let updatedState = {}
    updatedState[id] = currentSlide

    this.setState(updatedState)
  }

  goToCarouselSlide = (id, i) => {
    let updatedState = {}
    updatedState[id] = i

    this.setState(updatedState, () => {
      this[id].current.slickGoTo(i, true)
    })
  }

  renderCarousel = (id, slides, path, imageType) => {
    return (
      <div>
        <SlickCarousel
          ref={this[id]}
          infinite={false}
          dots={false}
          arrows={false}
          afterChange={i => this.setCarouselSlide(id, i)}
        >
          {slides.map((n, i) => {
            return (
              <div key={n}>
                <div className="acds-image-max-width">
                  <Image
                    src={`/images/features/augmented-clinical-decision-support/${path}${i +
                      1}.${imageType}`}
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMaxWidth}
                  />
                </div>
              </div>
            )
          })}
        </SlickCarousel>
        <div className="acds-carousel-nav">
          <button
            className={`button button--link acds-carousel-prev ${
              this.state[id] === 0 ? 'disabled' : ''
            }`}
            onClick={() => this.goToCarouselSlide(id, this.state[id] - 1)}
          ></button>
          {slides.map((n, i) => {
            return (
              <button
                key={n}
                className={`button button--link acds-carousel-button ${
                  this.state[id] === i ? 'active' : ''
                }`}
                onClick={() => this.goToCarouselSlide(id, i)}
              >
                <Image
                  src={`/images/features/augmented-clinical-decision-support/${path}${i +
                    1}.${imageType}`}
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </button>
            )
          })}
          <button
            className={`button button--link acds-carousel-next ${
              this.state[id] === slides.length - 1 ? 'disabled' : ''
            }`}
            onClick={() => this.goToCarouselSlide(id, this.state[id] + 1)}
          ></button>
        </div>
      </div>
    )
  }

  render() {
    const sixSlides = Array.from(Array(21), (x, i) => i)
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="augmented-clinical-decision-support-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Real-time clinical guidance for mobile health workers
              </h1>

              <p>...</p>

              <h2 class="header--lg margin-top--trip">
                The future of rural healthcare is...
              </h2>

              <ul>
                <li>Care at home, in your neighborhood</li>
                <li>The clinician comes to you</li>
                <li>Worry-free, urgent care</li>
                <li>Clinic on wheels w/CT, imaging </li>
                <li>Realtime augmented CDS support tools (for mobile clinic clinicians and community healthcare workers)</li>
                <li>With a phone, 24-365 access to primary care, broadband everywhere</li>
              </ul>

              <h2 class="header--lg margin-top--trip">
                Pregnancy Scenario
              </h2>

              {this.renderCarousel(carousels.pregnancy, sixSlides, 'pregnancy-', 'jpg')}

              <div className="margin-bottom--double">
                <div className="pure-g button-group margin-bottom--double">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half button--block margin-right"
                  >
                    Download Pregnancy Scenario
                  </a>
                </div>
              </div>

              <h2 className="header--lg margin-bottom--half margin-top--double">
                Let's build the future of healthcare together!
              </h2>
              <p className="text--gray">
                We can help you design and ship your own version of augmented clinical decision support.<br />
                Contact us to discuss your project.<br />
                <a href="mailto:hello@goinvo.com"> hello@goinvo.com</a>
              </p>

              <h4 className="header--sm margin-bottom--half margin-top--double">
                About GoInvo
              </h4>
              <p className="text--gray">
                GoInvo is a healthcare design company that crafts innovative
                digital and physical solutions. Our deep expertise in Health IT,
                Genomics, and Open Source health has delivered results for the
                National Institutes of Health, Walgreens, Mount Sinai, and
                Partners Healthcare.
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our open source healthcare newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Katerina Labrou" />
                <Author name="Mandy Liu" />
                <Author name="Jonathan Follett" />
                <Author name="Juhan Sonin" />
                Cagri Zaman<br />
                Mollie Williams
              </div>

              <div className="pad-vertical--double">
                <h3 className="header--md">Contributors</h3>
                <p>
                  Mediate<br />
                  Massachusetts General Hospital Family Van<br />
                  John Brownstein and Sarah Scalia, Boston Children's Hospital<br />
                  Eric Benoit, GoInvo
                </p>
              </div>

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        '...',
                      link:
                        '',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AugmentedClinicalDecisionSupportFeature
