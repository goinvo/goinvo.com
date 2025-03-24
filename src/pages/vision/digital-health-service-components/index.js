import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Author from '../../../components/author'

import config from '../../../../config'

import Smartphone from '../../../assets/images/vision/virtual-care/icon-smartphone.inline.svg'
import Clinic from '../../../assets/images/vision/virtual-care/icon-clinic.inline.svg'
import CheckboxRequired from '../../../assets/images/vision/virtual-care/icon-checkbox-required.inline.svg'
import CheckboxOptional from '../../../assets/images/vision/virtual-care/icon-checkbox-optional.inline.svg'
import Ekg from '../../../assets/images/vision/virtual-care/icon-ekg.inline.svg'
import BloodPressureCuff from '../../../assets/images/vision/virtual-care/icon-blood-pressure-cuff.inline.svg'

const frontmatter = {
  metaTitle: 'Clinical visits better suited for Virtual Care',
  metaDescription:
    '46% of face-to-face clinical office visits can be conducted virtually.',
  heroImage:
    '/images/features/virtual-primary-care/virtual-primary-care-hero-2.jpg',
}

class VirtualCareFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="virtual-care-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div className="virtual-care-title-area">
                <h1 className="header--xl">Digital Health Connections Model</h1>
                <h4 className="header--sm">
                  The Digital Health Connections Model is a representation of
                  the system of services that can make up digital health
                  software.
                </h4>
                <p className="text--gray margin-top--none">...</p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double horizontal-table-scroll">
            <iframe
              src="https://goinvo.github.io/DigitalHealthServiceComponents/"
              frameborder="0"
              width="100%"
              height="1000"
            ></iframe>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our open source healthcare newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author
                  name="Cameron Gettel"
                  company="Resident Physician, Brown University"
                  image="/images/about/headshot-cameron-gettel.jpg"
                >
                  Cameron Gettel is an Emergency Medicine physician with
                  interests in improving healthcare through evidence-based
                  practices, quality improvement, and clinical research.
                </Author>
                <Author name="Eric Benoit" />
                <h2 className="header--lg text--center">Contributors</h2>
                <Author name="Juhan Sonin" company="GoInvo, MIT" />
                <div>
                  <h4 className="header--sm margin-bottom--half">
                    About GoInvo
                  </h4>
                  <p className="text--gray">
                    GoInvo is a healthcare design company that crafts innovative
                    digital and physical solutions. Our deep expertise in Health
                    IT, Genomics, and Open Source health has delivered results
                    for the National Institute of Health, Walgreens, Mount
                    Sinai, and Partners Healthcare.{' '}
                  </p>
                  <p className="text--gray">
                    <a href="/contact">Reach out with feedback.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default VirtualCareFeature
