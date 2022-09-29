import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Divider from '../../../components/divider'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Vision for Health Data Manager - GoInvo',
  metaDescription: 'Health Data Manager',
  heroImage: '/images/features/coronavirus/hero-2.jpg',
}

class OpenSourceHealthcareFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="health-data-manager-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div className="health-data-manager-title-area">
                <h1 className="header--xl">Health Data Manager</h1>
                <h4 className="header--sm">
                  Open source health data management system
                </h4>
                <p className="text--gray">
                  A Patient Data Manager (PDM) is a system that supports
                  acquisition, aggregation, curation, sharing and management of
                  patient’s health data through the Electronic Health Record on
                  behalf of the patient.
                </p>
                <h1 className="header--xl">What is a Health Data Manager?r</h1>
                <h4 className="header--sm">Data Aquisition </h4>
                <p className="text--gray">
                  Acquire patient’s health data across all data sources on a
                  continual basis
                </p>

                <h4 className="header--sm">Data Aggregation </h4>
                <p className="text--gray">
                  Aggregate and save raw inputs of the patient’s health data
                </p>

                <h4 className="header--sm">Data Curation </h4>
                <p className="text--gray">
                  Curate patient’s health data into a single, computable
                  longitudinal health record
                </p>

                <h4 className="header--sm">Data Sharing </h4>
                <p className="text--gray">
                  Manage sharing of patient’s health data with third parties
                  under patient control: Share partial sections of the patient’s
                  health data and revoke sharing at any time
                </p>

                <h4 className="header--sm">Secure Data Management</h4>
                <ul className="text--gray">
                  <li>
                    Secure the patient’s health data: HIPAA Security Rule and
                    HIPAA Privacy Rule
                  </li>
                  <li>
                    Maintain an audit log that the patient can access at any
                    time
                  </li>
                  <li>
                    Transfer patient’s health data to another Patient Data
                    Manager
                  </li>

                  <li>
                    Transfer or donate patient’s health data at time of patient
                    death
                  </li>

                  <li>
                    Securely delete all patient’s health data upon request of
                    the patient
                  </li>
                </ul>

                <h1 className="header--xl">What is a Health Data Manager?</h1>

                <h4 className="header--sm">For Patients</h4>
                <p className="text--gray">
                  Patient have full control and easy access to their health
                  data. They are able to manage their care plan, including
                  review after visit summaries, improve adherence to treatment
                  regimen, receive appointment reminders
                </p>

                <h4 className="header--sm">For Clinicians</h4>
                <p className="text--gray">
                  The acquisition of patient’s health data across all data
                  sources enable clinicians to have a full health picture of
                  their patients, they are therefore able to make more informed
                  decisions, leading to better outcomes.
                </p>

                <h4 className="header--sm">For Health Organizations</h4>
                <p className="text--gray">
                  Securely and seamlessly manage the sharing of patient’s health
                  data with third parties under patient control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default OpenSourceHealthcareFeature
