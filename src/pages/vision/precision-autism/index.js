import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import MailerLiteForm from '../../../components/mailerlite-form'
import { LazyImage } from '../../../components/optimized-image'
import Author from '../../../components/author'

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
              <div className="poster margin-top--double">
                <a
                  href={mediaUrl(
                    '/pdf/vision/precision-autism/Precision-Autism-25.Aug.2020.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyImage
                    src="/images/features/precision-autism/precision-autism.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
              </div>

              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/precision-autism/Precision-Autism-25.Aug.2020.pdf'
                  )}
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Download Poster
                </a>
              </div>
              <p className="text--center text--gray">
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
                <MailerLiteForm />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PrecisionAutismFeature
