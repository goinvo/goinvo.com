import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import HubspotForm from '../../../components/hubspot-form'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Top Innovations in Health Design History',
  metaDescription:
    'Our list of the top 100+ innovations from the past 10,000 years of human history.',
}

class HistoryOfHealthDesignFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="history-of-health-design">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Top Innovations in Health Design History
              </h1>
              <p>
                Even before our species first emerged, their predecessors were
                already fashioning tools out of stone. Humans came into
                existence around the same time as the tradition of design:
                thinking and planning and making to solve problems of everyday
                life.
              </p>
              <p>
                Here's our V.01 list of the top 100+ innovations that have made
                Homo sapiens health history—and altered or revolutionized the
                landscape of our future.
              </p>
              <p>
                Let us know what we're missing at{' '}
                <a href="mailto:feedback@goinvo.com">feedback@goinvo.com</a>
              </p>
            </div>
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
