import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Augmented Clinical Decision Support - GoInvo',
  metaDescription:
    'Real-time, augmented decision support and guidance for mobile health workers, to better training and repeatable health outcomes.',
  heroImage:
    '/images/features/augmented-clinical-decision-support/augmented-clinical-decision-support-hero-1.jpg',
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

              <p>
              Our aim is to enhance healthcare accessibility for people in rural or remote regions by minimizing the skill gap among health workers, thereby empowering them to deliver high-quality care effectively. We design a virtual medical agent that assists real-time communication and decision making for both patients and the medical staff.
              </p>

              <p>
                Specifically, the system offers:
              </p>
              
              <ul>
                <li>Seamless communication between patients and the Care Delivery Platform (CDP) for scheduling and confirming with mobile health units.</li>
                <li>Patient check-in automation to alleviate the administrative workload on staff, onsite or virtual (extending to scheduling and pre-appointment interactions).</li>
                <li>Guidance for healthcare professionals during patient consultations to ensure more effective, safer examinations, diagnoses, and treatments.</li>
                <li>Secure health data collection for continuous service improvement and scaling of healthcare services.</li>
              </ul>

              <p>
                Our proposed system facilitates the entire healthcare journey, from a patient's initial engagement with our digital platform to their ongoing treatment and health management. It includes documenting medical histories and symptoms, establishing differential diagnoses, performing clinical assessments, and determining suitable treatment pathways.
              </p>

              <p>
              A virtual medical agent with advanced capabilities in language processing and generation that enable intuitive dialogues between patients is accessible to initiate a consultation anytime via smartphone. The agent offers features like registering patient incidents, initiating clinical dialogues for assessing condition severity and scheduling appointments with a mobile health unit or a local clinic. It can also provide initial medical guidance to patients pending their in-person consultations. The gathered information is recorded and made accessible to healthcare workers, streamlining the intake process.
              </p>

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/arpa-h-proposal.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download ARPHA-H Proposal
                </a>
              </div>

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
                Primary Care Process
              </h2>

              <Image
                src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-primary-care.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/augmented-cds-process-map-primary-care.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Primary Care Process
                </a>
              </div>

              <h2 class="header--lg margin-top--trip">
                Clinical Task Guidance System Diagram
              </h2>

              <Image
                src="/images/features/augmented-clinical-decision-support/clinical-task-guidance-system-diagram.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/clinical-task-guidance-system-diagram.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Clinical Task Guidance System Diagram
                </a>
              </div>

              <h2 class="header--lg margin-top--trip">
                Pregnancy Storyboard
              </h2>

              {this.renderCarousel(carousels.pregnancy, sixSlides, 'pregnancy-', 'jpg')}

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/augmented-cds-pregnancy-storyboard.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Pregnancy Storyboard
                </a>
              </div>

              <h2 class="header--lg margin-top--trip">
                Process Maps
              </h2>

              <h3 className="header--md">Pregnancy Process Map</h3>

              <Image
                src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-pregnancy.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/augmented-cds-process-map-pregnancy.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Pregnancy Process Map
                </a>
              </div>

              <h3 className="header--md">Head Injury Process Map</h3>

              <Image
                src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-head-injury.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/augmented-cds-process-map-head-injury.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Head Injury Process Map
                </a>
              </div>

              <h3 className="header--md">Cancer Process Map</h3>

              <Image
                src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-cancer.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />

              <div>
                <a
                  href={mediaUrl(
                    '/pdf/vision/augmented-clinical-decision-support/augmented-cds-process-map-cancer.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Cancer Process Map
                </a>
              </div>

              <h2 className="header--lg margin-bottom--half margin-top--double">
                Let's build the future of healthcare together!
              </h2>
              <p className="text--gray">
                We can help you design and ship your own version of augmented clinical decision support.<br />
                Contact us to discuss your project.<br />
                <a href="mailto:hello@goinvo.com">hello@goinvo.com</a>
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
                Cagri Zaman, Mediate<br />
                Mollie Williams, Harvard Medical School
              </div>

              <div className="pad-vertical--double">
                <h3 className="header--md">Contributors</h3>
                <p>
                  Massachusetts General Hospital Family Van<br />
                  John Brownstein and Sarah Scalia, Boston Children's Hospital<br />
                  Eric Benoit, GoInvo
                </p>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AugmentedClinicalDecisionSupportFeature
