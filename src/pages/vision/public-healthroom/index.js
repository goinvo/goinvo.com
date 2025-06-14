import React, { Component } from 'react'

import SlickCarousel from 'react-slick'
import Scrollspy from 'react-scrollspy'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import Author from '../../../components/author'
import References from '../../../components/references'
import Reference from '../../../components/reference'
import SubscribeForm from '../../../components/form-subscribe'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'
import { LazyImage } from '../../../components/optimized-image'

const frontmatter = {
  metaTitle: 'Public Restroom to Public Healthroom - GoInvo',
  metaDescription: 'Preventative Health Infrastructure for cities and towns.',
  heroImage: '/images/features/public-healthroom/pubhrm-hero-1.jpg',
}

const prototypeFrames = [
  {
    id: 1,
    image: 'entry',
    transform: 'scale(1)',
  },
  {
    id: 2,
    image: 'entry',
    transform: 'scale(2.5) translate(0px, -8%)',
    overlay: 'enter',
  },
  {
    id: 3,
    image: 'entry',
    transform: 'scale(2.5) translate(0px, -8%)',
    overlay: 'default',
  },
  {
    id: 4,
    image: 'entry',
    transform: 'scale(2.5) translate(0px, -8%)',
    overlay: 'exit',
  },
  {
    id: 5,
    image: 'entry',
    transform: 'scale(1) translate(0px, 0px)',
  },
  {
    id: 6,
    image: 'entry-open-door',
  },
  {
    id: 7,
    image: 'entry-lidar',
  },
  {
    id: 8,
    image: 'body-scan',
    overlay: 'default',
  },
  {
    id: 9,
    image: 'body-scan-active',
  },
  {
    id: 10,
    image: 'body-scan',
    overlay: 'default',
  },
  {
    id: 11,
    image: 'body-scan-open-door',
  },
  {
    id: 12,
    image: 'toilet',
    backgroundPosition: 'right 10% bottom 0vw',
    transform: 'scale(1)',
  },
  {
    id: 13,
    image: 'toilet',
    backgroundPosition: 'right 40% bottom 2vw',
    transform: 'scale(1.5)',
  },
  {
    id: 14,
    image: 'using-toilet',
  },
  {
    id: 15,
    image: 'toilet',
    backgroundPosition: 'left 30% top 3vw',
    transform: 'scale(1.2)',
    overlay: 'default',
  },
  {
    id: 16,
    image: 'toilet',
    backgroundPosition: 'left 0% bottom 0vw',
    transform: 'scale(2) translate(0%, -24%)',
  },
  {
    id: 17,
    image: 'toilet-door-open',
  },
  {
    id: 18,
    image: 'blood-vision',
  },
  {
    id: 19,
    image: 'blood-vision',
  },
  {
    id: 20,
    image: 'blood-vision',
    backgroundPosition: 'right -75% top -3vw',
    transform: 'scale(1.8)',
  },
  {
    id: 21,
    image: 'blood-vision',
    backgroundPosition: 'right 31% top 0vw',
    transform: 'scale(1.8)',
  },
  {
    id: 22,
    image: 'blood-vision',
    backgroundPosition: 'left -40% top -5vw',
    transform: 'scale(1.8)',
  },
  {
    id: 23,
    image: 'blood-vision',
    backgroundPosition: 'left -40% top -5vw',
    transform: 'scale(1.8)',
  },
  {
    id: 24,
    image: 'blood-vision',
    backgroundPosition: 'left -66% top -3vw',
    transform: 'scale(1.8)',
    overlay: 'enter',
  },
  {
    id: 25,
    image: 'exit',
  },
  {
    id: 26,
    image: 'exit',
    transform: 'scale(3) translate(-32%, -9%)',
    overlay: 'default',
  },
  {
    id: 27,
    image: 'exit',
  },
  {
    id: 28,
    image: 'none',
    overlay: 'default',
  },
]

const prototypeFrameIds = prototypeFrames.map(frame => frame.id.toString())

const prototypeImages = [...new Set(prototypeFrames.map(frame => frame.image))]

const transition = (carouselRef, index, frame, image) => {
  carouselRef.current.slickGoTo(index)
  image.style.transform = frame.transform
    ? frame.transform
    : 'scale(1) translate(0, 0)'
  image.style.backgroundPosition = frame.backgroundPosition
    ? frame.backgroundPosition
    : 'center'
}

class PublicHealthroom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentFrame: prototypeFrames[0],
      backwards: false,
      overlay: false,
      offset: -40,
    }

    this.imageRefsArray = prototypeImages.map(image => {
      return {
        id: image,
        ref: React.createRef(),
      }
    })

    this.systemRefsArray = prototypeFrames.map(frame => {
      return {
        id: frame.id,
        ref: React.createRef(),
      }
    })

    this.carousel = React.createRef()
    this.prototypeSystems = React.createRef()
  }

  componentDidMount() {
    this.setState({
      offset: -(window.innerHeight / 2),
    })
    this.calculateOffset()

    window.addEventListener('resize', this.calculateOffset)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateOffset)
  }

  calculateOffset = () => {
    const width = window.innerWidth
    const mqPixels =
      parseFloat(config.mediaQueries.lg) *
      parseFloat(getComputedStyle(document.body).fontSize)
    const height = window.innerHeight
    const percentage = width < mqPixels ? 0.75 : 0.5

    this.setState({
      offset: -(height * percentage),
    })
  }

  onScrollSpyUpdate = el => {
    if (el) {
      const frameId = parseInt(el['id'])
      const frame = prototypeFrames.find(frame => frame.id === frameId)
      let backwards = false
      let overlay = false

      const ref = this.imageRefsArray.find(ref => ref.id === frame.image).ref
      const index = ref.current
        .closest('[data-index]')
        .getAttribute('data-index')
      const image = ref.current.querySelector('div')

      if (frameId < this.state.currentFrame.id) {
        backwards = true
      }

      if (frame.overlay) {
        overlay = frame.overlay

        this.setState(
          {
            currentFrame: frame,
            backwards,
            overlay,
          },
          () => {
            setTimeout(() => {
              transition(this.carousel, index, frame, image)
            }, 0)
          }
        )
      } else {
        this.setState(
          {
            currentFrame: frame,
            backwards,
          },
          () => {
            setTimeout(() => {
              transition(this.carousel, index, frame, image)
            }, 0)

            setTimeout(() => {
              this.setState({
                overlay,
              })
            }, 500)
          }
        )
      }
    }
  }

  renderOverlay = frame => {
    const { id } = this.state.currentFrame
    return (
      <div
        className={`public-healthroom__overlay-container ${id === 28 ? 'public-healthroom__overlay-container--dimmed' : ''
          }`}
      >
        <div
          className={`public-healthroom__overlay-image public-healthroom__entry-menu ${id === 2 ? 'public-healthroom__overlay-image--visible' : ''
            }`}
        >
          <LazyImage
            src="/images/features/public-healthroom/menu-1.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
        <div
          className={`public-healthroom__overlay-image public-healthroom__entry-menu ${id === 3 ? 'public-healthroom__overlay-image--visible' : ''
            }`}
        >
          <LazyImage
            src="/images/features/public-healthroom/menu-2.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
        <div
          className={`public-healthroom__overlay-image public-healthroom__entry-menu ${id === 4 ? 'public-healthroom__overlay-image--visible' : ''
            }`}
        >
          <LazyImage
            src="/images/features/public-healthroom/menu-3.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
        <div
          className={`public-healthroom__overlay-image public-healthroom__holding-phone ${id === 4 ||
            id === 8 ||
            id === 10 ||
            id === 15 ||
            id === 26 ||
            id === 28
            ? 'public-healthroom__overlay-image--visible'
            : ''
            }
          ${id === 28 ? 'public-healthroom__holding-phone--center' : ''}`}
        >
          <LazyImage
            src="/images/features/public-healthroom/holding-phone.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
        <div
          className={`public-healthroom__overlay-image public-healthroom__vision-results ${id === 24 ? 'public-healthroom__overlay-image--visible' : ''
            }`}
        >
          <LazyImage
            src="/images/features/public-healthroom/vision-results.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
        <div
          className={`public-healthroom__overlay-image public-healthroom__message-2 ${id === 28 ? 'public-healthroom__overlay-image--visible' : ''
            }`}
        >
          <LazyImage
            src="/images/features/public-healthroom/message-2.png"
            className="image--max-width"
            sizes={config.sizes.fullToHalfAtLarge}
          />
        </div>
      </div>
    )
  }

  heroLoaded = () => { }

  getOverlayClass = () => {
    let className = ''

    switch (this.state.overlay) {
      case 'enter':
        className = this.state.backwards
          ? 'public-healthroom__prototype-frame--exit'
          : 'public-healthroom__prototype-frame--enter'
        break
      case 'exit':
        className = this.state.backwards
          ? 'public-healthroom__prototype-frame--enter'
          : 'public-healthroom__prototype-frame--exit'
        break
      default:
        className = ''
    }

    return className
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="public-healthroom">
          <Hero
            image={frontmatter.heroImage}
            position="center bottom"
            onLoad={this.heroLoaded}
          />
          <div className="max-width--md pad-horizontal margin-top pad-top margin-auto">
            <h1 className="header--xl">Public Restroom to Public Healthroom</h1>
            <h2 className="header--lg">
              As part of GoInvo's Design Vision Series on Health Futures, we
              explore preventative health infrastructure for cities and towns.
            </h2>
            <p>
              Infrastructure is public health, preventive health, and personal
              health. Historically, we see this relationship in everything from
              the reduction of waterborne disease through water sanitation
              systems to the one-year extension to New York City citizens’
              lifespan with added bike lanes.<Reference>1</Reference> As
              healthcare shifts from a focus on treatment to prevention, from
              quantity to quality, and from mega-medical campuses to local
              community centers, new infrastructural opportunities continue to
              arise.
            </p>
            <h3 className="header--md">The Public Healthroom Concept</h3>
            <p>
              One such opportunity is the screening and prevention of chronic
              illnesses—specifically by evolving the role of public restrooms in
              health. The public healthroom is a one-stop shop for US residents
              to access basic health screening through daily encounters. The
              room is composed of devices and communication tools that provide
              screening and risk assessment for common chronic diseases like
              diabetes and heart attacks. These devices collect the resident’s
              biometric data to generate a personal health “receipt” that can
              indicate health abnormalities, suggest further testing, and
              provide useful information for follow-up with a primary care
              physician.
            </p>
            <h3 className="header--md">
              The public healthroom follows four primary principles:
            </h3>
            <div className="max-width--80">
              <ol>
                <li>
                  Residents own their health data. The public healthroom is a
                  means for individuals to access and understand their key
                  physical health indicators, but it protects your privacy and
                  does not sell historical data to third-parties.
                </li>
                <li>
                  All residents should have easy access to preventive care. No
                  one should have to ignore health concerns because of
                  geographic or socioeconomic barriers.
                </li>
                <li>
                  Preventive care must meet residents where they are. The public
                  healthroom bridges the gap between complete self-care and
                  professional hospital care. Based on analysis of a resident’s
                  biometrics across time, the healthroom provides detailed
                  recommendations on seeking the appropriate level of care.
                </li>
                <li>
                  Personal health is relative. The public healthroom helps each
                  individual detect abnormalities in the context of their own
                  history (e.g., sudden weight fluctuation, height loss, vision
                  loss). Uncovering hidden signals can help prevent
                  deterioration of various diseases (e.g., changes to the skin
                  indicating risk for skin cancer).
                </li>
              </ol>
            </div>
            <Divider />
            <h2 className="max-width--sm header--lg text--center margin-auto">
              Who benefits from a Public Healthroom?
            </h2>
            <h3 className="header--md">Individuals</h3>
            <p>
              In 2015, only 8% of Americans age 35 or older received all
              high-priority preventive services recommended by providers, and
              nearly 5% received none. The year before, 60% of US residents had
              at least one chronic disease. (CDC)
            </p>
            <p>
              Lack of preventive care use is a long-established issue in the US,
              and little has changed despite increased coverage through the
              Affordable Care Act. A 2018 survey identified lack of trust in
              physicians, long wait times, and work and family obligations as
              reasons for missing care (Borsky et. al, 2018). The public
              healthroom can provide residents with easy access to health
              screening and assistance as they attempt to navigate the complex
              healthcare system and receive necessary care.
            </p>
            <h3 className="header--md">Cities/Towns</h3>
            <p>
              Instead of being a strictly clinical effort, preventive primary
              care should be integrated into the community.
            </p>
            <p>
              It is time to “shift delivery into the community, reaching people
              where they live, work, learn, and play.” (Krist et. al, 2015)
            </p>
            <h3 className="header--md">State/Federal Government</h3>
            <p>
              Responsible for setting data-driven national health objectives for
              the decade, Healthy People 2030 reported little progress when it
              came to increasing preventive care delivery and access. The target
              is to provide evidence-based preventive care to 11.5% of the
              population by 2030.<Reference>2</Reference>
            </p>
            <p>Currently, it is at 6.5%.</p>
            <Divider />
            <h2 className="max-width--sm header--lg text--center margin-auto">
              How does the Public Healthroom help?
            </h2>
            <h3 className="header--md">
              Health Screening as Daily Encounters:
            </h3>
            <ul>
              <li>
                Conducts primary care checkups in adherence to state guidelines
              </li>
              <li>Provides each patient with a snapshot of their health</li>
              <li>
                Increases access to screenings and further assistance when
                necessary
              </li>
            </ul>
            <h3 className="header--md">
              Increase Awareness for Preventative Health:
            </h3>
            <ul>
              <li>
                Informs individuals about next steps after health screening
              </li>
              <li>
                Promotes relevant, micro-lifestyle changes that could prevent
                illnesses
              </li>
            </ul>
            <Divider />
            <h2 className="max-width--sm header--lg text--center margin-auto">
              What should the Public Healthroom measure?
            </h2>
          </div>
          <div className="pad-top pad-horizontal--double max-width--">
            <div className="max-width">
              <iframe
                width="100%"
                height="600px"
                title="Public Healthroom Measurements Database"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPI3YSZRKH6QSzM5DO5oGjdAePOLgJK_Dx4_ehEyQjF9pi9Ed6EUj2JInu3tjr59yzEvBiEl0oy2Yy/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </div>
          </div>
          <div className="max-width--sm pad-horizontal margin-top pad-top margin-auto">
            <Divider />
            <h2 className="max-width--sm header--lg text--center margin-auto">
              Exploring Health Futures: Public Healthroom Design Vision
            </h2>
            <p>
              Among the various methods to accomplish measurement goals detailed
              above, the following is one possible version of the screening
              episode: a fully-guided, automated sequence. The room itself is
              built modularly, so components can be replaced after extended use
              or updated with newer technology. As a thought experiment, this
              focuses less on limitations and logistics and explores a
              futuristic, ideal experience.
            </p>
          </div>
          <div className="max-width">
            <LazyImage
              src={`/images/features/public-healthroom/pubhrm-plan.png`}
              className="image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            />
          </div>
          {this.heroLoaded ? (
            <div className="pad-all public-healthroom__prototype-wrapper">
              <div
                className={`public-healthroom__prototype-frame-sticky ${this.getOverlayClass()}`}
              >
                <SlickCarousel
                  ref={this.carousel}
                  infinite={false}
                  dots={false}
                  arrows={false}
                  fade={true}
                >
                  {prototypeImages.map((image, i) => {
                    const bgImage =
                      image === 'none'
                        ? ''
                        : mediaUrl(
                          `/images/features/public-healthroom/${image}.jpg`
                        )
                    return (
                      <div
                        className="public-healthroom__prototype-frame-container"
                        key={image}
                      >
                        <div
                          ref={this.imageRefsArray[i].ref}
                          className={`public-healthroom__prototype-frame ${this.state.backwards
                            ? 'public-healthroom__prototype-frame--backwards'
                            : ''
                            }`}
                        >
                          <div
                            className="public-healthroom__prototype-frame__image"
                            style={{ backgroundImage: `url(${bgImage}` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </SlickCarousel>
                {this.renderOverlay()}
              </div>
              <div className="public-healthroom__system-logic">
                <div className="public-healthroom__indicator"></div>
                <Scrollspy
                  items={prototypeFrameIds}
                  offset={this.state.offset}
                  onUpdate={this.onScrollSpyUpdate}
                  className="public-healthroom__section-container"
                >
                  {prototypeFrames.map((frame, i) => {
                    return (
                      <li
                        key={frame.id}
                        id={frame.id}
                        className="public-healthroom__section"
                        ref={this.systemRefsArray[i].ref}
                      >
                        <LazyImage
                          src={`/images/features/public-healthroom/logic/${frame.id}.jpg`}
                          className="image--max-width"
                          sizes={config.sizes.fullToHalfAtLarge}
                        />
                      </li>
                    )
                  })}
                </Scrollspy>
              </div>
            </div>
          ) : null}
          <div className="max-width--md pad-horizontal margin-top pad-top margin-auto">
            <Divider />
            <h2 className="max-width--sm header--lg text--center margin-auto">
              Final Thoughts
            </h2>
            <p>
              In the fiscal year 2021-2022, the operation cost of San Francisco
              Public Works was $12.7 million or $113,000 per year per public
              portable toilet open 40 hours/week.<Reference>3</Reference> With
              this as a baseline, the costs to engineer, build, and operate the
              public healthroom would be much higher—however, there is
              significant potential value in developing a preventive health
              infrastructure that transitions US healthcare spendings from
              quantity to quality. The next step would be developing a minimum
              viable product (MVP) with analysis on potential funding structures
              (private vs. public vs. hybrid).
            </p>
            <p>
              One possible MVP approach is to develop the lowest-cost version
              that aggregates current off-the-shelf technologies but maximizes
              ease of use. Another is to develop each tool separately:
            </p>
            <ul>
              <li>
                Refurbish public or community center (YMCA, Student Centers,
                retail toilets) restrooms with urine/stool analysis toilets
              </li>
              <li>
                Develop a software for screening recommendations based on age
                and sex for retail healthcare (CVS MinuteClinic, Walgreens
                Health, Walmart Health Center), and integrating with their
                screening/lab test services
              </li>
              <li>
                Aggregate at-home test/finger-prick test vendors into one
                physical vending machine at retailers and community health
                centers
              </li>
            </ul>
            <p>
              By promoting lifestyle changes and increasing preventive care
              awareness and access, policy makers and care providers are
              constantly striving to support better health outcomes for all—the
              Public Healthroom opens up a conversation around seamlessly
              integrating health into our daily encounters via the built
              environment. As emergent technologies develop and preventive care
              needs increase in the next five years, success in implementation
              and public utilization will rely heavily on design, and on how
              thoroughly we consider how the experience of engaging with one’s
              health can be seamless and timely without over-complications in
              technology.
            </p>
          </div>
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <Divider />
              <h2 className="header--lg text--center">Authors</h2>
              <Author name="Jenny Yi" company="GoInvo" />
              <Author name="Juhan Sonin" company="GoInvo" />

              <h3 className="header--md margin-top--double">Contributors</h3>
              <p>Samantha Wuu</p>
              <p>Craig McGinley</p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="references">
                <References
                  references={[
                    {
                      title: 'Bike lanes are a sound public health investment',
                      link:
                        'https://www.reuters.com/article/us-health-costbenefit-bike-lanes/bike-lanes-are-a-sound-public-health-investment-idUSKCN11Z23A',
                    },
                    {
                      title: 'Healthy People 2030',
                      link:
                        'https://health.gov/healthypeople/objectives-and-data/browse-objectives/preventive-care',
                    },
                    {
                      title:
                        'Two cities’ approaches to increasing public bathrooms',
                      link:
                        'https://www.smartcitiesdive.com/news/two-cities-approaches-to-increasing-public-bathrooms/628387/',
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

export default PublicHealthroom
