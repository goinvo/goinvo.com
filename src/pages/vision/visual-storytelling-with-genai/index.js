import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Image from '../../../components/image'
import Author from '../../../components/author'
import Divider from '../../../components/divider'
import ModelViewer from '../../../components/model-viewer'
import Video from '../../../components/video'
import config from '../../../../config'

import arrowDown from '../../../assets/images/icon-arrowDown.svg'

const frontmatter = {
  metaTitle: 'Reimagining Visual Storytelling with GenAI',
  metaDescription:
    '',
  heroImage: '/images/features/visual-storytelling-with-genai/genai-hero-3.jpg',
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
      cameraPosition: [25, 12, 4], // left/right, up/down, forward/backward
      cameraRotation: [-Math.PI / 4, Math.PI / 4, 0], // 45° down, 45° turn for isometric angle
      activeHotspotTitle: '', // Add this to track the active hotspot title
    }
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

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="visual-storytelling">
          <Hero image={frontmatter.heroImage} position={'top center'} isLarge />
          <div className="max-width pad-all">
            <h1 className="header--xl">Reimagining Visual Storytelling with GenAI</h1>

            <p>Visual storytelling is at the heart of how we share ideas at GoInvo, but creating visuals by hand is slow and demanding. This led us to ask: <em>How might GenAI help us move faster and communicate more ambitious ideas?</em></p>
            <p>Our process starts with research and interviews, followed by rounds of brainstorming, sketching, and vector refinement. Whether it’s static posters, animations, or software, visual elements can take days to develop, and small changes can require redrawing scenes from scratch. This slows iteration, limits experimentation, and restricts the scale and complexity of what we can achieve on tight timelines.</p>
            <p>This is where our 3D and GenAI-assisted workflow comes in.</p>

            <Divider />

            <h2 className="header--lg text--center margin-top--trip">A Faster, Smarter Workflow.</h2>
            <p>We’re developing a digital library of 3D environments including hospitals, clinics, and care homes to use as virtual sandboxes. Using <strong>Rhinoceros 3D</strong>, a modeling software, we can freely explore different compositions in these virtual environments and endlessly capture varying perspectives to apply in our work. </p>

            <div className="hotspot-image-container">
              <div className="hotspot-overlay">
                <button
                  className="hotspot-button button-one"
                  onClick={() => this.handleHotspotClick(
                    [3, 1, -3],
                    [0, -Math.PI / 24, 0],
                    'Scene 1: Entering emergency room'
                  )}
                  title="Scene 1: Entering emergency room"
                >
                </button>
                <button
                  className="hotspot-button button-two"
                  onClick={() => this.handleHotspotClick(
                    [5, 1, -9],
                    [0, -Math.PI / 6, 0],
                    'Scene 2: Emergency trauma room'
                  )}
                  title="Scene 2: Emergency trauma room"
                >
                </button>
                <button
                  className="hotspot-button button-three"
                  onClick={() => this.handleHotspotClick(
                    [5, 1, -18],
                    [0, -Math.PI / 2, 0],
                    'Scene 3: Emergency room'
                  )}
                  title="Scene 3: Emergency room"
                >
                </button>
                <button
                  className="hotspot-button button-four"
                  onClick={() => this.handleHotspotClick(
                    [12, 1, -19],
                    [0, Math.PI, -1],
                    'Scene 4: Emergency room treatment area'
                  )}
                  title="Scene 4: Emergency room treatment area"
                >
                </button>
                <button
                  className="hotspot-button button-five"
                  onClick={() => this.handleHotspotClick(
                    [12, 1, -1],
                    [0, Math.PI / 4, 0],
                    'Scene 5: Hospital waiting room'
                  )}
                  title="Scene 5: Hospital waiting room"
                >
                </button>
              </div>

              <Image
                src="/images/features/visual-storytelling-with-genai/genai-3d-model-3.jpg"
                className="image--max-width"
                alt="Hospital 3D Model"
              />
            </div>

            <div className="hotspot-caption">
              <p><strong>{this.state.activeHotspotTitle}</strong></p>
            </div>

            <div className="model-viewport">
              {typeof window !== "undefined" && (
                <ModelViewer
                  url='/visual-storytelling-with-genai/hospital-3d-model.glb'
                  cameraPosition={this.state.cameraPosition}
                  cameraRotation={this.state.cameraRotation}
                  enableInteraction={true} //true = users can interact with the model, false = users can't interact with the model
                />
              )}
            </div>

            <p>Model images are then styled using GenAI tools like <strong>Midjourney</strong> and are guided by prompts tailored to each project’s visual direction. What once took days to illustrate can now be completed in a matter of hours. Scene changes and revisions take a quick camera pivot in the model and an entirely new scene is generated.</p>
            <p>The time investment thus shifts from redrawing each scene by hand to a one-time effort of constructing a detailed 3D model. Once built, these virtual environments become reusable and flexible assets that can support new stories and future projects.</p>

            <Image
              src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-2-3.jpg"
              className="image--max-width"
              alt="Hospital 3D scene"
            />
            <p className="caption">1. Hospital trauma room render captured in <strong>Rhinoceros 3D</strong> model.</p>

            <img
              className="arrow-down"
              src={arrowDown}
              alt="arrow pointing down"
            />

            <div className="overlay-text-container">
              <div className="overlay-text">
                <p className="text--serif"><strong>Midjourney Prompt:</strong> <em>“A hospital trauma room, outlined in soft blue linework, overlaid with abstract health data visualizations, flat design with orange and cool blue color palette, minimalistic and light-filled background with circular gradient overlays, inspired by healthcare dashboards.”</em></p>
              </div>
              <Image
                src="/images/features/visual-storytelling-with-genai/genai-trauma-room-midjourney-3.jpg"
                className="image--max-width"
                alt="Hospital 3D scene"
              />
            </div>
            <p className="caption">2. Hospital trauma room render stylized in <strong>Midjourney</strong> with accompanying prompt.</p>

            <img
              className="arrow-down"
              src={arrowDown}
              alt="arrow pointing down"
            />

            <Image
              src="/images/features/visual-storytelling-with-genai/genai-trauma-room-characters-3.jpg"
              className="image--max-width"
              alt="Hospital 3D scene"
            />
            <p className="caption">3. Final image post-processing completed in <strong>Photoshop</strong> with additional characters added in <strong>Procreate.</strong></p>

            <img
              className="arrow-down"
              src={arrowDown}
              alt="arrow pointing down"
            />

            <Video
              sources={[
                {
                  src:
                    '/videos/features/visual-storytelling-with-genai/genai-trauma-room-characters-animation.mp4',
                  format: 'mp4',
                }
              ]}
              width="100%"
              height="560"
              poster="/images/case-studies/mass/snap/snap-emergency-benefits.jpg"
              fallback="/images/case-studies/mass/snap/snap-emergency-benefits.jpg"
              loop
            />
            <p className="caption">4. Animation created with <strong>Midjourney Video</strong> using the final post-processed image as the starting frame.</p>

            <h4 className="margin-top--trip">GenAI motivates creative experimentation.</h4>
            <p>This workflow doesn’t just save us time, it also unlocks new creative possibilities that might have been previously out of reach. GenAI tools like Midjourney allow us to explore a wide range of visual styles such as surrealist, graphic novel-inspired, or painterly, and rapidly iterate our ideas in real-time. Where ideas were once narrowed by a project’s timeline or the limits of what we could achieve by hand, GenAI allows our ideas to expand in scale and ambition, no longer limited by traditional methods.</p>
            <p>The examples below offer a small taste of the vastly different outputs GenAI can generate with various prompts.</p>
          </div>

          <div className="process-diagram">
            <div className="max-width pad-all">
              <div className="diagram-large">
                <div className="diagram-row title-row">
                  <div className="col col-3">Rhino 3d Model Render</div>
                  <div className="col col-spacer"></div>
                  <div className="col col-3">Midjourney Re-texturizing Prompt</div>
                  <div className="col col-spacer"></div>
                  <div className="col col-3">Midjourney Output</div>
                </div>

                <div className="diagram-row">
                  <div className="col col-3">
                    <div className="label sm-only">Rhino 3d Model Render</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-1-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                  <div className="col col-spacer text--center plus-sign">+</div>
                  <div className="col col-3">
                    <div className="label sm-only">Midjourney Re-texturizing Prompt</div>
                    <p className="prompt"><em>“Emergency waiting room, flat minimalistic, geometric shapes, pastel colors, brush pen, inspired by the visual style of Atey Ghailan.”</em></p>
                  </div>
                  <div className="col col-spacer text--center equal-sign">=</div>
                  <div className="col col-3 col-full">
                    <div className="label sm-only">Midjourney Output</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-midjourney-scene-1-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                </div>

                <div className="diagram-row">
                  <div className="col col-3">
                    <div className="label sm-only">Rhino 3d Model Render</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-2-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                  <div className="col col-spacer text--center plus-sign">+</div>
                  <div className="col col-3">
                    <div className="label sm-only">Midjourney Re-texturizing Prompt</div>
                    <p className="prompt"><em>“Hospital trauma room, cinematic lighting, hard-edged blocky brush strokes, rich color gradients with purples, oranges, and greens, high contrast, simplified forms with painterly texture, a moody yet vibrant atmosphere, inspired by the visual style of Joseph Iovescu.”</em></p>
                  </div>
                  <div className="col col-spacer text--center equal-sign">=</div>
                  <div className="col col-3 col-full">
                    <div className="label sm-only">Midjourney Output</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-midjourney-scene-2-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                </div>

                <div className="diagram-row">
                  <div className="col col-3">
                    <div className="label sm-only">Rhino 3d Model Render</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-3-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                  <div className="col col-spacer text--center plus-sign">+</div>
                  <div className="col col-3">
                    <div className="label sm-only">Midjourney Re-texturizing Prompt</div>
                    <p className="prompt"><em>“A high-contrast ink illustration of a hospital emergency room with multiple characters - healthcare providers and patients, expressive black ink lines, minimalist background, bold negative space, inspired by the visual style of Manuel Bortoletti.”</em></p>
                  </div>
                  <div className="col col-spacer text--center equal-sign">=</div>
                  <div className="col col-3 col-full">
                    <div className="label sm-only">Midjourney Output</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-midjourney-scene-3-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                </div>

                <div className="diagram-row">
                  <div className="col col-3">
                    <div className="label sm-only">Rhino 3d Model Render</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-4-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                  <div className="col col-spacer text--center plus-sign">+</div>
                  <div className="col col-3">
                    <div className="label sm-only">Midjourney Re-texturizing Prompt</div>
                    <p className="prompt"><em>“A minimalistic, surreal illustration of a hospital emergency room, clean thin linework, soft pastel color palette, flat texture, fine detail, elegant negative space, inspired by the visual style of Harriet Lee-Merrion.”</em></p>
                  </div>
                  <div className="col col-spacer text--center equal-sign">=</div>
                  <div className="col col-3 col-full">
                    <div className="label sm-only">Midjourney Output</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-midjourney-scene-4-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                </div>

                <div className="diagram-row">
                  <div className="col col-3">
                    <div className="label sm-only">Rhino 3d Model Render</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-3d-render-scene-5-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                  <div className="col col-spacer text--center">+</div>
                  <div className="col col-3">
                    <div className="label sm-only">Midjourney Re-texturizing Prompt</div>
                    <p className="prompt"><em>“A friendly and colour hospital waiting room, watercolor textures, playful and minimal detail, inspired by the visual style of Oliver Jeffers.” </em></p>
                  </div>
                  <div className="col col-spacer text--center">=</div>
                  <div className="col col-3 col-full">
                    <div className="label sm-only">Midjourney Output</div>
                    <Image
                      src="/images/features/visual-storytelling-with-genai/genai-midjourney-scene-5-3.jpg"
                      className="image--max-width"
                      alt="Hospital 3D scene"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="max-width pad-all">
            <h2 className="header--lg text--center margin-top--trip">Why does this matter?</h2>
            <p>This workflow is designed for storytelling at scale. For complex systems and stories, we need hundreds of custom visuals. GenAI allows us to move faster and empowers us to lead with ideas rather than limit them. It helps us sketch crazy ideas, try wild graphics, and show real stories without getting stuck in every pixel and every tool.</p>
            <p>The concept takes the lead, not the toolset —bringing bold ideas to life and more prototypes to the table. The more we can make and the less time it takes to do so, the better the ideas we can bring to the work.</p>
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
              <SubscribeForm />
            </div>
          </div>

        </div>
      </Layout >
    )
  }
}

export default GenAIFeature
