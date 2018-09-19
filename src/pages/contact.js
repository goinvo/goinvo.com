import React from 'react'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import HubspotForm from '../components/hubspot-form'

import config from '../../config'

const ContactPage = () => (
  <Layout>
    <Hero image="studio-nav/live.png"></Hero>
    <div className="background--blue pad-vertical--double">
      <div className="max-width max-width--sm content-padding" style={{ marginTop: '-7rem' }}>
        <HubspotForm formId={config.hubspotContactFormId} title="Get in touch">
          <div className="margin-top">
            <a href="mailto:info@goinvo.com">info@goinvo.com</a>
            <a
              href="https://www.google.com/maps/place/661+Massachusetts+Ave,+Arlington,+MA+02476/@42.4161195,-71.1563006,17z/"
              target="_blank"
              rel="noopener noreferrer">
              <div>661 Massachusetts Ave, 3rd Floor,</div>
              <div>Arlington, MA 02476</div>
            </a>
          </div>
        </HubspotForm>
      </div>
    </div>
  </Layout>
)

export default ContactPage
