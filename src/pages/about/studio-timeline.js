import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import ImageBlock from '../../components/image-block'
import config from '../../../config'

const frontmatter = {
  metaTitle: 'Our Studio Timeline - GoInvo',
  metaDescrition: "An interactive timeline of GoInvo's history.",
  heroImage: '/images/about/studio-timeline/morninglight.jpg',
}

class StudioTimelinePage extends Component {
  render() {
    return (
      <div>
        <Layout frontmatter={frontmatter}>
          <Hero image={frontmatter.heroImage}>
            <h1 className="header--xl">
              Our studio timeline
              <span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="max-width content-padding pad-vertical--double">
            <iframe
              title="Invo Studio Timeline"
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1N0aoZHt8082QBIge4a3bgn8kfOG3njTgHktR3-78Ooc&font=Default&lang=en&initial_zoom=2&height=650&start_at_slide=186"
              width="100%"
              height="650"
              //start_at_slide="186"
              //start_at_end="true"
              webkitAllowFullscreen
              mozAllowFullscreen
              allowFullscreen
              frameBorder="0"
            />
          </div>
          <div className="max-width content-padding pad-vertical--quad">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                <ImageBlock
                  key={'2'}
                  image="/images/about/studio-timeline/goInvo_projects_timeline.jpg"
                  title="GoInvo Project Timeline"
                  caption="View the landscape of projects we have worked on."
                  sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                >
                  <a
                    href="https://ChurchOfDesign.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </ImageBlock>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                <ImageBlock
                  key={'2'}
                  image="/images/about/studio-timeline/invoSV_dirk_andrei.jpg"
                  title="Oral History"
                  caption="Former leaders of GoInvo reminisce together the ups and downs of our studio beginnings."
                  sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                >
                  <a
                    href="https://www.goinvo.com/features/an-oral-history/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oral History
                  </a>
                </ImageBlock>
              </div>

            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default StudioTimelinePage
