import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import MailerLiteForm from '../../../components/mailerlite-form'
import Image from '../../../components/image'
import Author from '../../../components/author'

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
            className={`button button--link acds-carousel-prev ${this.state[id] === 0 ? 'disabled' : ''
              }`}
            onClick={() => this.goToCarouselSlide(id, this.state[id] - 1)}
          ></button>
          {slides.map((n, i) => {
            return (
              <button
                key={n}
                className={`button button--link acds-carousel-button ${this.state[id] === i ? 'active' : ''
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
            className={`button button--link acds-carousel-next ${this.state[id] === slides.length - 1 ? 'disabled' : ''
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
                Across the rural US, healthcare is<br />
                sometimes overlooked,<br />
                often understaffed,<br />
                always vital,<br />
                and mostly stretched thin.
              </p>

              <p>
                Rural healthcare needs an adrenaline shot.
              </p>

              <p>
                <a href="https://arpa-h.gov/research-and-funding/programs/paradigm" target="_blank">ARPA-H's Paradigm</a> program takes one bite of the problem by funding a high-tech mobile health truck, armed with skilled staff, advanced technology, and new healthcare funding models to get better care to the people that need it.
              </p>

              <p>
                Our concept for an onboard truck assistant is <strong>Field Guider</strong>, an open source software service that:
              </p>

              <ul>
                <li>lives on the mobile health truck, phone, and AR goggles,</li>
                <li>works with healthcare workers in real-time to co-diagnose, co-treat patients for better health outcomes,</li>
                <li>and provides in-encounter training, through visual and aural clinical decision support nudges to up-skill staff.</li>
              </ul>

              <div className="pure-g button-group margin-bottom">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href="https://github.com/goinvo/arpa-h/blob/main/TA5/arpa-h-paradigm-field-guider-proposal.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half margin-right"
                  >
                    Download ARPHA-H Proposal
                  </a>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href="https://github.com/goinvo/arpa-h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half  button--block margin-right"
                  >
                    Github
                  </a>
                </div>
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

              <a
                href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-primary-care.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-primary-care.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </a>

              <div>
                <a
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-primary-care.pdf"
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

              <a
                href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-clinical-task-guidance-system-diagram.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/features/augmented-clinical-decision-support/clinical-task-guidance-system-diagram-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </a>

              <div>
                <a
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-clinical-task-guidance-system-diagram.pdf"
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
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-pregnancy-storyboard.pdf"
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

              <a
                href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-pregnancy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-pregnancy.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </a>

              <div>
                <a
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-pregnancy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Pregnancy Process Map
                </a>
              </div>

              <h3 className="header--md">Head Injury Process Map</h3>

              <a
                href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-head-injury.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-head-injury.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </a>

              <div>
                <a
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-head-injury.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--half margin-right"
                >
                  Download Head Injury Process Map
                </a>
              </div>

              <h3 className="header--md">Cancer Process Map</h3>

              <a
                href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-cancer.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/features/augmented-clinical-decision-support/augmented-cds-process-map-cancer.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </a>

              <div>
                <a
                  href="https://github.com/goinvo/arpa-h/blob/main/TA5/augmented-cds-process-map-cancer.pdf"
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

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Katerina Labrou" />
                <Author name="Mandy Liu" />
                <Author name="Jonathan Follett" />
                <Author
                  name="Cagri Zaman"
                  company="Mediate"
                  image="/images/about/headshot-cagri-zaman.jpg"
                >
                  Dr. Cagri Hakan Zaman is the Director of Virtual Collaboration Research (Mediate Labs) as well as the founder and former director of the MIT Virtual Experience Design Lab at the Massachusetts Institute of Technology. His research is highly interdisciplinary, focusing on developing immersive media tools for engineering and design by studying human spatial experiences in both virtual and physical environments. Dr. Zaman's innovative approach to spatial experience from a story-understanding perspective is showcased in his dissertation titled "Spatial Experience in Humans and Machines." With extensive research experience in embodied intelligence, computational design, and immersive media, Dr. Zaman has conducted research at both the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) and the MIT Design Lab (formerly MIT Mobile Experience Lab).
                </Author>
                <Author
                  name="Mollie Williams"
                  company="Harvard Medical School"
                  image="/images/about/headshot-mollie-williams.jpg"
                >
                  Mollie is a visionary and purposeful leader dedicated to advancing health equity and justice. Strategic thinker who gracefully transitions between big picture impact and day-to-day operations. Trusted collaborator and champion of high- performing, inclusive teams. Thought-leader, ambassador, and influencer in local, national, and international conversations about equitable access to compassionate, high-quality care for all.
                </Author>
                <Author name="Juhan Sonin" />
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

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <MailerLiteForm />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AugmentedClinicalDecisionSupportFeature
