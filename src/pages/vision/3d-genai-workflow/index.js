import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import MailerLiteForm from '../../../components/mailerlite-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import Divider from '../../../components/divider'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Reimagining Visual Storytelling with GenAI',
  metaDescription:
    '',
  heroImage: '/images/features/living-health-lab/hero.jpg',
}

let carousels = {
  comic: 'comicCarousel',
  paper: 'paperCarousel',
  digital: 'digitalCarousel',
  appendix: 'appendixCarousel',
}

class LivingHealthLabFeature extends Component {
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
        <div className="living-health-lab">
          <Hero image={frontmatter.heroImage} position={'top center'} isLarge />
          <div className="max-width pad-all">
            <h1 className="header--xl">Reimagining Visual Storytelling with GenAI</h1>

            {/* text */}

            <Divider />

            {/* text */}

            {/* carousel */}
            {/* {this.renderCarousel(carousels.rhino, fiveSlides, 'comic-', 'png')} */}

            {this.renderCarousel(carousels.comic, sixSlides, 'comic-', 'png')}

            {/* image */}

            {/* text */}

            {/* image / 3js panning / video with caption */}

            {/* image / 3js panning / video with caption */}

            {/* image / 3js panning / video with caption */}

            {/* text */}
          </div>

          <div className="max-width pad-all">
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
            {/* text */}
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

export default LivingHealthLabFeature
