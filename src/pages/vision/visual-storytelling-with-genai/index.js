import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import MailerLiteForm from '../../../components/mailerlite-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import Divider from '../../../components/divider'
import ModelViewer from '../../../components/model-viewer'
//import FloorPlanWithHotspots from '../../../components/floor-plan-hotspots'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Reimagining Visual Storytelling with GenAI',
  metaDescription:
    '',
  heroImage: '/images/features/visual-storytelling-with-genai/genai-hero-2.jpg',
}

let carousels = {
  paper: 'paperCarousel',
  digital: 'digitalCarousel',
  appendix: 'appendixCarousel',
}

class GenAIFeature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Isometric view: elevated but angled position
      cameraPosition: [25, 12, 4],           // Positioned at an angle, elevated
      cameraRotation: [-Math.PI / 4, Math.PI / 4, 0], // 45° down, 45° turn for isometric angle
      activeHotspotTitle: '', // Add this to track the active hotspot title
    }

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

  // Update handleHotspotClick to accept title parameter
  handleHotspotClick = (cameraPosition, cameraRotation = [0, 0, 0], title = '') => {
    console.log('Hotspot clicked - Input rotation:', cameraRotation)
    this.setState({
      cameraPosition,
      cameraRotation,
      activeHotspotTitle: title
    }, () => {
      console.log('State updated - New rotation:', this.state.cameraRotation)
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
                <div className="lhl-image-max-width">
                  <Image
                    src={`/images/features/living-health-lab/${path}${i +
                      1}.${imageType}`}
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMaxWidth}
                  />
                </div>
              </div>
            )
          })}
        </SlickCarousel>
        <div className="lhl-carousel-nav">
          <button
            className={`button button--link lhl-carousel-prev ${this.state[id] === 0 ? 'disabled' : ''
              }`}
            onClick={() => this.goToCarouselSlide(id, this.state[id] - 1)}
          ></button>
          {slides.map((n, i) => {
            return (
              <button
                key={n}
                className={`button button--link lhl-carousel-button ${this.state[id] === i ? 'active' : ''
                  }`}
                onClick={() => this.goToCarouselSlide(id, i)}
              >
                <Image
                  src={`/images/features/living-health-lab/${path}${i +
                    1}.${imageType}`}
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMaxWidth}
                />
              </button>
            )
          })}
          <button
            className={`button button--link lhl-carousel-next ${this.state[id] === slides.length - 1 ? 'disabled' : ''
              }`}
            onClick={() => this.goToCarouselSlide(id, this.state[id] + 1)}
          ></button>
        </div>
      </div>
    )
  }

  render() {
    const sixSlides = Array.from(Array(6), (x, i) => i)
    const threeSlides = Array.from(Array(3), (x, i) => i)

    return (
      <Layout frontmatter={frontmatter}>
        <div className="living-health-lab visual-storytelling">
          <Hero image={frontmatter.heroImage} position={'top center'} isLarge />
          <div className="max-width pad-all">
            <h1 className="header--xl">Reimagining Visual Storytelling with GenAI</h1>

            <p>Visual storytelling is at the heart of how we share ideas at GoInvo, but creating visuals by hand is slow and demanding. This led us to ask: <em>How might GenAI help us move faster and communicate more ambitious ideas?</em></p>
            <p>Our process starts with research and interviews, followed by rounds of brainstorming, sketching, and vector refinement. Whether it’s static posters, animations, or software, visual elements can take days to develop, and small changes can require redrawing scenes from scratch. This slows iteration, limits experimentation, and restricts the scale and complexity of what we can achieve on tight timelines.</p>
            <p>This is where our 3D and GenAI-assisted workflow comes in.</p>

            <Divider />

            <h2 className="header--lg text--center margin-top--trip">A Faster, Smarter Workflow.</h2>
            <p>We’re developing a digital library of 3D environments including hospitals, clinics, and care homes to use as virtual sandboxes. Using <strong>Rhinoceros 3D</strong>, a modeling software, we can freely explore different compositions in these virtual environments and endlessly capture varying perspectives to apply in our work. </p>

            <div className="model-viewport">
              {typeof window !== "undefined" && (
                <ModelViewer
                  url='/visual-storytelling-with-genai/hospital-3d-model.glb'
                  cameraPosition={this.state.cameraPosition}
                  cameraRotation={this.state.cameraRotation}
                />
              )}
            </div>
            <div className="hotspot-caption">
              <p>{this.state.activeHotspotTitle}</p>
            </div>

            <div className="hotspot-image-container">
              <div className="hotspot-overlay">
                <button
                  className="hotspot-button button-one"
                  onClick={() => this.handleHotspotClick(
                    [3, 1, -3],
                    [0, -Math.PI / 24, 0],
                    '1. Waiting Room'
                  )}
                  title="Waiting Room"
                >
                </button>
                <button
                  className="hotspot-button button-two"
                  onClick={() => this.handleHotspotClick(
                    [5, 1, -9],
                    [0, -Math.PI / 6, 0],
                    '2. Exam Room'
                  )}
                  title="Exam Room"
                >
                </button>
                <button
                  className="hotspot-button button-three"
                  onClick={() => this.handleHotspotClick(
                    [5, 1, -18],
                    [0, -Math.PI / 2, 0],
                    '3. Emergency Room'
                  )}
                  title="Emergency Room"
                >
                </button>
                <button
                  className="hotspot-button button-four"
                  onClick={() => this.handleHotspotClick(
                    [12, 1, -18],
                    [0, Math.PI / 6 + Math.PI + Math.PI / 18, 0],
                    '4. Emergency Room'
                  )}
                  title="Emergency Room"
                >
                </button>
                <button
                  className="hotspot-button button-five"
                  onClick={() => this.handleHotspotClick(
                    [12, 1, -1],
                    [0, Math.PI / 4, 0],
                    '5. Emergency Room'
                  )}
                  title="Emergency Room"
                >
                </button>
              </div>

              <Image
                src="/images/features/visual-storytelling-with-genai/genai-3d-model-2.jpg"
                className="image--max-width"
                alt="Hospital 3D Model"
              />
            </div>

            <p>Model images are then styled using GenAI tools like <strong>Midjourney</strong> and are guided by prompts tailored to each project’s visual direction. What once took days to illustrate can now be completed in a matter of hours. Scene changes and revisions take a quick camera pivot in the model and an entirely new scene is generated.</p>
            <p>The time investment thus shifts from redrawing each scene by hand to a one-time effort of constructing a detailed 3D model. Once built, these virtual environments become reusable and flexible assets that can support new stories and future projects.</p>

            {/* image / 3js panning / video with caption */}

            {/* image / 3js panning / video with caption */}

            {/* image / 3js panning / video with caption */}

            {/* text */}
            <h2 className="header--lg text--center margin-top--trip">GenAI motivates creative experimentation.</h2>
            <p>This workflow doesn’t just save us time, it also unlocks new creative possibilities that might have been previously out of reach. GenAI tools like Midjourney allow us to explore a wide range of visual styles such as surrealist, graphic novel-inspired, or painterly, and rapidly iterate our ideas in real-time. Where ideas were once narrowed by a project’s timeline or the limits of what we could achieve by hand, GenAI allows our ideas to expand in scale and ambition, no longer limited by traditional methods.</p>
            <p>The examples below offer a small taste of the vastly different outputs GenAI can generate with various prompts.</p>
          </div>

          <div className="max-width pad-all">
            <div className="diagram-large">
              <div className="diagram-row">
                <div className="col-3">Rhino 3d Model Render</div>
                <div className="col-spacer"></div>
                <div className="col-3">Midjourney Re-texturizing Prompt</div>
                <div className="col-spacer"></div>
                <div className="col-3">Midjourney Output</div>
              </div>

              <div className="diagram-row">
                <div className="col-3">Rhino 3d Model Render</div>
                <div className="col-spacer"></div>
                <div className="col-3">Midjourney Re-texturizing Prompt</div>
                <div className="col-spacer"></div>
                <div className="col-3">Midjourney Output</div>
              </div>
            </div>
            {/* equation thingy -- will need a special mobile layout likely , or maybe a carousel -- outside of content container */}
            {/* {this.renderCarousel(carousels.prompt, fiveSlides, 'paper-', 'png')} */}
            {/* how to add text or multiple images to a slider */}
            {this.renderCarousel(
              carousels.paper,
              threeSlides,
              'lhl_paper_test_',
              'jpg'
            )}
          </div>

          <div className="max-width pad-all">
            <h2 className="header--lg text--center margin-top--trip">Why does this matter?</h2>
            <p>This workflow is designed for storytelling at scale. For complex systems and stories, we need hundreds of custom visuals. GenAI allows us to move faster and empowers us to lead with ideas rather than limit them. It helps us sketch crazy ideas, try wild graphics, and show real stories without getting stuck in every pixel and every tool.</p>
            <p>The concept takes the lead, not the toolset &emdash; bringing bold ideas to life and more prototypes to the table. The more we can make and the less time it takes to do so, the better the ideas we can bring to the work.</p>
          </div>

          <div className="max-width pad-all">
            <Divider />
            <h2 className="header--lg text--center margin-top--trip">
              Authors
            </h2>
            <Author name="Maverick Chan" />
            <Author name="Claire Lin" />
            <Author name="Shirley Xu" />
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <MailerLiteForm />
            </div>
          </div>

        </div>
      </Layout >
    )
  }
}

export default GenAIFeature
