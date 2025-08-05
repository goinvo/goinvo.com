import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Image from '../../../components/image'
//import BackgroundImage from '../../../components/background-image'
import Author from '../../../components/author'
import Video from '../../../components/video'
import Divider from '../../../components/divider'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Precision Autism',
  metaDescription:
    'Our open source visual depiction of the history of autism, and how precision medicine will help to define, manage, and treat the condition.',
  heroImage: '/images/features/precision-autism/hero-precision-autism-2.jpg',
}

class PrecisionAutismFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="bottom center" />
        <div className="precision-autism">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Precision Autism</h1>
              <h3 className="header--md">Dynamic Tracking Concept for Families</h3>
              <p>Living with autism looks different for every family. By capturing real-world data and tailoring insights to the individual, a thoughtfully designed tool can support more personalized care, better communication with caregivers, educators, and providers. And ultimately, provide families with a more empowered and proactive approach for living with autism.</p>
              <div className="button-group">
                <a
                  href='https://www.handsfilm.org/'
                  className="button button--secondary margin-top margin-bottom--double button--block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out the Documentary
                </a>
              </div>

            </div>

            <div className="max-width max-width--md content-padding">
              <Video
                sources={[
                  {
                    src:
                      '/videos/features/precision-autism/autism_atmosphere_10_720.mp4',
                    format: 'mp4',
                  },
                  {
                    src:
                      '/videos/features/precision-autism/autism_atmosphere_10_720.webm',
                    format: 'webm',
                  },
                ]}
                width="100%"
                max-height="480"
                poster="/images/features/precision-autism/autism_data_display_spacey_v2.jpg"
                fallback="/images/features/precision-autism/autism_data_display_spacey_v2.jpg"
                loop
              />
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="pure-g button-group margin-bottom--double margin-top--half">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href='https://github.com/openAutism/openautism.github.io'
                    className="button button--secondary margin-top--half margin-bottom--half margin-right button--block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href='https://openautism.github.io/'
                    className="button button--secondary margin-top--half margin-bottom--half margin-right button--block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Concepts and Sketches
                  </a>
                </div>
              </div>

              <Divider />

              <div className="margin-top--double">
                <h3 className="header--md margin-top--double">A Brief History of Precision Medicine and Autism</h3>
                <a
                  href={mediaUrl(
                    '/pdf/vision/precision-autism/Precision-Autism-25.Aug.2020.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/precision-autism/precision-autism.jpg"
                    className="image--max-width image--interactive"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
              </div>

              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/precision-autism/Precision-Autism-25.Aug.2020.pdf'
                  )}
                  className="button button--secondary margin-top margin-bottom--half button--block"
                >
                  Download Poster
                </a>
              </div>
              <p className="text--center text--gray text--caption margin-top--none margin-bottom--none">
                Licensed under Creative Commons Attribution v4
              </p>
            </div>
            <div className="content-padding">
              <iframe
                src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1UaJB6GqmCOJ9mAaNzEark9Of4AIb7wTx346E7gNlhGE&font=Default&lang=en&initial_zoom=2&height=650"
                width="100%"
                height="650"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                frameborder="0"
                title="Precision Autism Timeline"
              ></iframe>
            </div>
            <div className="max-width max-width--md content-padding">
              <div className="text--center">
                <a
                  href="https://docs.google.com/spreadsheets/d/1UaJB6GqmCOJ9mAaNzEark9Of4AIb7wTx346E7gNlhGE/edit?ts=5c6f2046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary"
                >
                  Timeline Events and References
                </a>
              </div>
              <div>
                <div className="pad-vertical--double">
                  <h2 className="header--xl text--center">Authors</h2>
                  <Author name="Parsuree Vatanasirisuk" />
                  <Author name="Sharon Lee" />
                  <Author name="Juhan Sonin" />
                </div>
                <h2 className="header--lg text--center margin-top--quad">
                  Special thanks to...
                </h2>
                <ul className="ul">
                  <li>Elizabeth Horn</li>
                  <li>Clare Southern</li>
                  <li>Michael Snyder</li>
                </ul>
              </div>
            </div>

            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PrecisionAutismFeature
