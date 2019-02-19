import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
//import Hero from '../../../components/hero'
//<Hero image={frontmatter.heroImage} />
import Columns from '../../../components/columns'
import PosterCard from '../../../components/vision/posters/PosterCard'
import Image from '../../../components/image'
import { mediaUrl } from '../../../helpers'

import posters from '../../../data/vision/posters/posters.json'

import config from '../../../../config'

const frontmatter = {
  metaTitle: '',
  metaDescription: '',
  heroImage: '/images/features/posters/poster-hero.jpg',
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
        <div className="poster-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Health Visualization Posters</h1>

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
        </div>
      </Layout>
    )
  }
}

export default Posters
