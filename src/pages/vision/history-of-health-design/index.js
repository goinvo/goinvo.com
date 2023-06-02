import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'The History of Health Design Timeline',
  metaDescription: 'Bleh.',
  heroImage: '/images/features/precision-autism/hero-precision-autism-2.jpg',
}

class HistoryOfHealthDesignFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="bottom center" />
        <div className="history-of-health-design">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding"></div>
            <div className="content-padding">
              <iframe
                src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1qa0ZwX09I8ON2YuHXaigZ8M7p_wnImQALPFyd8fVN98&font=Default&lang=en&initial_zoom=10&height=650"
                width="100%"
                height="650"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                frameborder="0"
                title="History of Health Design"
              ></iframe>
            </div>
            <div className="max-width max-width--md content-padding">
              <div className="text--center">
                <a
                  href="https://docs.google.com/spreadsheets/d/1qa0ZwX09I8ON2YuHXaigZ8M7p_wnImQALPFyd8fVN98/edit#gid=301364053"
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
                  <Author name="Samantha Wuu" />
                  <Author name="Juhan Sonin" />
                </div>
                {/* <h2 className="header--lg text--center margin-top--quad">
                  Special thanks to...
                </h2>
                <ul className="ul">
                  <li>Elizabeth Horn</li>
                  <li>Clare Southern</li>
                  <li>Michael Snyder</li>
                </ul> */}
              </div>
            </div>

            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <HubspotForm
                  formId={config.hubspotNewsletterFullFormId}
                  title="Subscribe to our open source healthcare newsletter."
                  submitButtonText="Subscribe"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HistoryOfHealthDesignFeature
