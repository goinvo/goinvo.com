import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import Image from '../../components/image'
import BackgroundImage from '../../components/background-image'
import config from '../../../config'

const frontmatter = {
  metaTitle: 'Our Studio Timeline - GoInvo',
  metaDescription: "An interactive timeline of GoInvo's history, including events, projects, and people.",
  heroImage: '/images/about/studio-timeline/morninglight.jpg',
}

class StudioTimelinePage extends Component {
  render() {
    return (
      <div className="timeline-page">
        <Layout frontmatter={frontmatter}>
          <Hero image={frontmatter.heroImage}>
            <h1 className="header--xl">
              Our studio timeline
              <span className="text--serif text--primary">.</span>
            </h1>
            <p>The events, people, and clients who shaped GoInvo over the past 20 years and today.</p>
          </Hero>
          <div className="max-width content-padding pad-vertical--double">
            <iframe
              title="Invo Studio Timeline"
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1N0aoZHt8082QBIge4a3bgn8kfOG3njTgHktR3-78Ooc&font=Default&lang=en&initial_zoom=2&height=650&start_at_slide=308"
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
          <div className="max-width content-padding pad-vertical--quad timeline-row">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg timeline-card">
                <a
                  href="https://ChurchOfDesign.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BackgroundImage
                    src="/images/about/studio-timeline/goInvo_projects_timeline.jpg"
                    className="image-block__image"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                    alt={'GoInvo project timeline'}
                  />
                  <p className="text--bold header--lg">GoInvo Project Timeline</p>
                  <p className="text--gray">The landscape of open and closed source projects since 2009.</p>
                </a>
                <a
                  href="https://ChurchOfDesign.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg timeline-card">
                <a
                  href="https://www.goinvo.com/features/an-oral-history/"
                >
                  <BackgroundImage
                    src="/images/features/oral-history-goinvo/oral-history-goinvo-featured.jpg"
                    className="image-block__image"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                    alt={'Involution from the past'}
                  />
                  <p className="text--bold header--lg">Oral History</p>
                  <p className="text--gray">Inside the early days of GoInvo, from the people who lived it.</p>
                </a>
                <a
                  href="https://www.goinvo.com/features/an-oral-history/"
                >
                  Oral History
                </a>
              </div>

            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default StudioTimelinePage
