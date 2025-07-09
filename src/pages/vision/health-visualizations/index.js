import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Columns from '../../../components/columns'
import PosterCard from '../../../components/vision/health-visualizations/poster-card'
////import { mediaUrl } from '../../../helpers'

import posters from '../../../data/vision/health-visualizations/posters.json'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Open Source Healthcare Visualizations',
  metaDescription:
    'A repo of open source health visualizations and graphics available to all for use or modification, under a Creative Commons Attribution v3 license or MIT license.',
  heroImage: '/images/features/posters/health-visualizations-hero-2.jpg',
}

class Posters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posterItems: posters,
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="poster-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-bottom--none">
                Health Visualizations
              </h1>
              <p className="text--gray text--sm margin-top--none margin-bottom--double">
                These infographics are open source, available to all under a{' '}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Commons Attribution v3
                </a>{' '}
                license or for the SHR Journey Map and HIE diagram, under a{' '}
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT
                </a>{' '}
                license.
              </p>

              <Columns columns={3}>
                {this.state.posterItems.map((poster, i) => {
                  return (
                    <PosterCard
                      title={poster.title}
                      image={poster.image}
                      learnMoreLink={poster.learnMoreLink}
                      id={poster.id}
                      downloadLink={poster.downloadLink}
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  )
                })}
              </Columns>
            </div>
          </div>
          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Posters
