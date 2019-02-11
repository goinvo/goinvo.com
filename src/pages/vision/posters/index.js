import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import { mediaUrl } from '../../../helpers'

const frontmatter = {
  metaTitle:
    '',
  metaDescription:
    '',
  heroImage:
    '/images/features/posters/poster-hero.jpg',
}

class Posters extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="posters-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">GoInvo Posters</h1>
              <h4 className="header--sm">We must set healthcare free</h4>

              <div className="determinants-downloads">
                <div className="poster margin-top--double">
                  <Image
                    src="/images/features/determinants-of-health/determinants-of-health-poster.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </div>
                <div className="pure-g button-group margin-bottom--double">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary margin-top--double margin-bottom--half button--block margin-right"
                    >
                      Download
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Buy Print
                    </a>
                  </div>
                  <h2 className="margin-top--double">
                    Working Draft of Determinants Compared to Spending
                  </h2>
                  <Image
                    src="/images/features/determinants-of-health/sdoh-spend-mockup.jpg"
                    className="image--max-width margin-top--half"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                  <div className="button-group">
                    <div className="pure-u-1 pure-u-lg-1-2">
                      <a
                        href="https://github.com/goinvo/HealthDeterminants/raw/master/sdoh-spend/SDOH_to_spend_v12-01.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--primary margin-top--half margin-bottom--half  button--block"
                      >
                        Full Size Poster
                      </a>
                    </div>
                </div>
                <Divider />
              </div>

              <div className="oshc-downloads">
                <Image
                  src="/images/features/open-source-healthcare/open-source-healthcare-hero.jpg"
                  className="image--max-width margin-top--half"
                  sizes={config.sizes.fullInsideMediumMaxWidth}
                />
                <div className="button-group margin-bottom--double">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                      )}
                      className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                    >
                      Download 25 MB PDF
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="http://www.blurb.com/b/8980724-open-source-healthcare-journal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                    >
                      $12 Blurb Magazine
                    </a>
                  </div>
                </div>
                <Divider />
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Posters
