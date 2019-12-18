import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import References from '../../../components/references'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Vapepocolypse',
  metaDescription: 'Vapepocolypse',
  heroImage: '/images/features/vapepocolypse/vapepocolypse-hero.jpg',
}

class VapepocolypseFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="vapepocolypse">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--half">Vapepocolypse</h1>

              <div className="poster margin-top--double">
                <a
                  href={mediaUrl('/pdf/vision/vapepocolypse/Vapepocolypse.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/vapepocolypse/vapepocolypse-full.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
              </div>

              <div className="button-group">
                <a
                  href={mediaUrl('/pdf/vision/vapepocolypse/Vapepocolypse.pdf')}
                  className="button button--primary margin-top--double margin-bottom--double"
                >
                  Download Poster
                </a>
              </div>
              <References
                references={[
                  {
                    title:
                      'Centers for Disease Control and Prevention. (October 2019). CDC, states update number of cases of lung injury associated with use of e-cigarette, or vaping, products',
                    link:
                      'https://www.cdc.gov/media/releases/2019/s-1010-vaping-injury-update.html',
                  },
                  {
                    title:
                      'Rowan, H.B. (2019). Vaping By The Numbers. Kaiser Health News',
                    link: 'https://khn.org/news/vaping-by-the-numbers/',
                  },
                  {
                    title:
                      'Truth Initiative. (April 2018). JUUL e-cigarettes gain popularity among youth, but awareness of nicotine presence remains low',
                    link:
                      'https://truthinitiative.org/press/press-release/juul-e-cigarettes-gain-popularity-among-youth-awareness-nicotine-presence',
                  },
                  {
                    title:
                      'MASSLIVE. (June 2019). ‘Mom! It’s a USB drive!’ Maura Healey lawsuit scrutinizes Eonsmoke’s social media advertising',
                    link:
                      'https://www.masslive.com/politics/2019/06/mom-its-a-usb-drive-maura-healey-lawsuit-scrutinizes-eonsmokes-social-media-advertising.html',
                  },
                  {
                    title:
                      'Mammoser. (November 2018). Chemicals Used in E-Cig Flavors Are Toxic and We’ve Known for Decades. Healthline',
                    link:
                      'https://www.healthline.com/health-news/vaping-may-be-worse-for-your-lungs-than-you-think',
                  },
                  {
                    title:
                      'Truth Initiative. (February 2019). How much nicotine is in JUUL?',
                    link:
                      'https://truthinitiative.org/research-resources/emerging-tobacco-products/how-much-nicotine-juul',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default VapepocolypseFeature
