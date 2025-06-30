import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import communicationIcon from '../../../assets/images/vision/open-pro/communication.svg'
import healthcareIcon from '../../../assets/images/vision/open-pro/healthcare.svg'
import patientIcon from '../../../assets/images/vision/open-pro/patient.svg'
import personalizedCareIcon from '../../../assets/images/vision/open-pro/personalized-care.svg'
import treatmentIcon from '../../../assets/images/vision/open-pro/treatment.svg'

import config from '../../../../config'
import { LazyImage } from '../../../components/optimized-image'

const frontmatter = {
  metaTitle: 'openPRO: Your health. Your voice.',
  metaDescription:
    "The patient's unique and indispensible voice is too often lost in the complexity of modern healthcare. Open Source Patient Reported Outcome (openPRO) is promoting ways to help her be heard!",
  heroImage: '/images/features/open-pro/open-pro-hero-v2.jpg',
}

class openPro extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="open-pro">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">openPRO: Your health. Your voice.</h1>
              <h4 className="header--sm">
                Open source services for patients to capture and report their
                health outcomes.
              </h4>

              {/*
              <p className="text--gray text--sm">The Patient-Reported Outcome (PRO): “An instrument, scale, or single-item measure that gathers the information directly from the patient.” (CMS Quality Measures Inventory User Guide and Data Dictionary)</p>
              <p className="text--gray text--sm">“any report of the status of a patient's health condition that comes directly from the patient, without interpretation of the patient's response by a clinician or anyone else."
              (U.S. FOOD AND DRUG ADMINISTRATION. Guidance for Industry.Patient-Reported Outcome Measures: Use in Medical Product Development to Support Labeling Claims. Federal Register 2009;74(35):65132-133.)</p>
              <p className="text--gray text--sm">“a health outcome directly reported by the patient who experienced it. It stands in contrast to an outcome reported by someone else, such as a physician-reported outcome, a nurse-reported outcome, and so on. PRO methods, such as questionnaires, are used in clinical trials or other clinical settings, to help better understand a treatment efficacy or effectiveness.“ (Wikipedia)</p>
*/}
              <p className="margin-bottom--none text--gray">
                True patient-focused care requires listening to the VOICE of the
                patient herself. As she travels from health to sickness and
                hopefully back to health again, we must record and value her own
                words as she describes her pains, her values, and her needs.
              </p>

              <Divider />

              <h2 className="header--lg text--center">
                What is PRO and why is it important?
              </h2>

              <p className="margin-bottom--none text--gray">
                <em>Patient-Reported Outcome (PRO): </em>
                Any report on the status of a patient's health coming directly
                from the patient without any interpretation or interference.
              </p>

              <h4 className="header--sm">
                {' '}
                The Patient-Reported Outcome is the platform for the patient to
                be heard. Why must we listen?{' '}
              </h4>

              <ul className="ul text--gray">
                <li>
                  Our health system is moving toward focus on quality of care
                  from quantity of care. Quality is measured as a combination of
                  lives saved, readmission, medical outcomes, as well as quality
                  of life measures such as pain and mobility. However, the very
                  words of the patient that define quality in the patient’s
                  interest are too often ignored. We must center our care and
                  attention on the patient’s needs, values, and experiences.
                </li>

                <li>
                  A curious thing about pain is how easily we forget it after
                  the fact. When, where, how much... these are all important
                  details the doctor wants to know, and we find ourselves
                  struggling to recall, filling in the gaps with maybe- truths.
                  It certainly would be helpful to record pain{' '}
                  <em>when it happens, where it happens</em>. At the doctor’s
                  office, that record should already be in the doctor’s hand to
                  be used that much more easily to diagnose and treat the
                  patient.
                </li>
              </ul>

              <h4 className="content--padding">
                Your Patient Reported Outcome is a direct connection between
                you, the source of critical medical data, and the decisions
                regarding your care and the future of the health system.
              </h4>

              <div className="open-pro__enables">
                <h4 className="header--sm">The PRO enables...</h4>

                <img
                  src={communicationIcon}
                  alt="icon of chat bubbles showing communication"
                />
                <h4 className="header--sm">Improved communication</h4>
                <p className="text--gray">
                  {' '}
                  The patient can initiate communication of relevant medical
                  data with the doctor to send outcomes, align priorities, and
                  arrange the care they need.{' '}
                </p>

                <img
                  src={patientIcon}
                  alt="icon showing patient and doctor conversing"
                />
                <h4 className="header--sm">
                  Less time on data entry and better time with the patient
                </h4>
                <p className="text--gray">
                  The patient records her own experiences and pushes it to the
                  health record. Her doctor can then spend more face-to-face
                  time discussing her care, rather than conducting
                  time-consuming interviews and performing data entry.
                </p>

                <img
                  src={treatmentIcon}
                  alt="icon showing healthcare with a line graph trending upwards"
                />
                <h4 className="header--sm">Improved quality of treatment</h4>
                <p className="text--gray">
                  PRO tools allow the patient to report clinically relevant
                  information at the point of pain, when it is most reliable, to
                  inform the most appropriate treatments. Over the course of
                  treatment, the PRO promotes accurate recordings of outcomes to
                  advance changes when needed.
                </p>

                <img
                  src={personalizedCareIcon}
                  alt="icon showing a patient moving customization sliders"
                />
                <h4 className="header--sm">Personalized care</h4>
                <p className="text--gray">
                  The patient is able choose treatments, personalized to their
                  needs, by drawing on the past successes, experiences, and
                  self-reported outcomes of many similar patients who came
                  before them
                  <sup>
                    <a href="#references">7,8,10</a>
                  </sup>
                </p>

                <img
                  src={healthcareIcon}
                  alt="icon of the world surrounded by a stethoscope"
                />
                <h4 className="header--sm">Improved healthcare for all</h4>
                <p className="text--gray">
                  The patient provides invaluable data on treatment outcomes.
                  The data is accurate, timely, and multi-dimensional. These
                  qualities of data are possible only with many patients’
                  voices.
                </p>
              </div>

              <Divider />

              <h2 className="header--lg text--center">The current landscape</h2>
              <p className="margin-bottom--none text--gray">
                <em>Patient portals</em> offer communication between the patient
                and care team. Some EHR vendors offer the ability to send PRO
                questionnaires to patients, and few (e.g. Partners HealthCare)
                support structured data collection back into the EHR from those
                questionnaires. However, patient portals have some severe
                limitations and shortcomings
                <sup>
                  <a href="#references">14,15,17</a>
                </sup>{' '}
                which lead to limited use. Portals are only available to one in
                two patients, and of the half with access, half again don’t use
                them. In total, 25% of all patients use portals and under 15% of
                all patients use them to communicate with their care team.
              </p>
              <p className="margin-bottom--none text--gray">
                <em>Patient-reported outcome measures (PROMs)</em> are
                instruments developed to measure a particular condition or
                outcome of a patient. They take the form of questionnaires,
                administered on paper or electronically (ePROMs), consisting of
                about 10-15 scale based questions. The instruments are heavily
                vetted and studied
                <sup>
                  <a href="#references">5</a>
                </sup>{' '}
                and accurately collect targeted data and associate that data
                with clinically relevant measures via a single score. More
                sophisticated electronic versions use an adaptive format that
                selects questions in response to answers.
              </p>

              <h4 className="header--sm">Progress</h4>
              <ul className="ul text--gray">
                <li>
                  Application to patient screening and monitoring
                  <sup>
                    <a href="#references">1</a>
                  </sup>
                </li>
                <li>
                  Cohort-specific treatment studies and drug trials
                  <sup>
                    <a href="#references">2,11</a>
                  </sup>
                  .
                </li>
                <li>
                  Queries of populations to identify unmet needs in
                  pharmaceutical development and to align care with the needs of
                  the local patient community
                  <sup>
                    <a href="#references">8</a>
                  </sup>
                  .
                </li>
                <li>
                  A growing community of initiatives such as{' '}
                  <a
                    href="http://www.esymcancermoonshot.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SIMPRO
                  </a>{' '}
                  and strategic workshops such as the FasterCures 2017 workshop
                  <sup>
                    <a href="#references">8</a>
                  </sup>
                  .
                </li>
                <li>
                  <a
                    href="http://www.healthmeasures.net/explore-measurement-systems/promis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PROMIS
                  </a>
                  ® (Patient-Reported Outcomes Measurement Information System)
                  is a set of person-centered measures that evaluate and monitor
                  physical, mental, and social health. It includes a wide range
                  of measures that have been vetted and studied. The project
                  also supplies administration platforms
                  <sup>
                    <a href="#references">3,4</a>
                  </sup>
                  .
                </li>
              </ul>
              <h4 className="header--sm">Limitations</h4>
              <ul className="ul text--gray">
                <li>
                  Limited portal integration of PROMs, with few exceptions.
                </li>
                <li>
                  Siloed stand-alone PRO platforms (LifeData, WellBe, OutcomeMD,
                  Ortech) are poorly connected to the patient’s other health
                  data.
                </li>
                <li>
                  No data standards, although FHIR PRO promises to ease the
                  implementation and integration into EHRs.
                </li>
              </ul>
              <h4 className="header--sm">Challenges</h4>
              <ul className="ul text--gray">
                <li>
                  Lack of annotated libraries. Difficult to identify measures
                  appropriate for a particular patient
                  <sup>
                    <a href="#references">12</a>
                  </sup>
                  .
                </li>
                <li>
                  Patient wariness. Without seeing personal advantages and
                  becoming invested, a patient can be wary of sharing more
                  information via forms.
                </li>
                <li>
                  Patient weariness. Patients grow tired of filling out forms.
                </li>
                <li>
                  Lack of resources to administer electronic PROs. Neil W.
                  Wagle, at Brigham and Women’s Hospital in Boston:
                  <sup>
                    <a href="#references">18</a>
                  </sup>
                  <blockquote>
                    "The platform must also be integrated into the electronic
                    health record (EHR) system so that results flow into the
                    point of care in real time in order to be actionable. And it
                    must work nearly perfectly because neither patients nor
                    providers have the patience for glitches.”
                  </blockquote>
                </li>
              </ul>

              <Divider />

              <h2 className="header--lg text--center">Our solution: openPRO</h2>

              <h4 className="header--sm text--center">
                {' '}
                An open source project capturing the patient’s voice,
                beautifully and simply.{' '}
              </h4>

              <LazyImage
                src="/images/features/open-pro/main-graphic.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />

              <div className="button-group">
                <a
                  href="https://github.com/goinvo/openPRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Contribute on GitHub
                </a>
              </div>

              <p className="margin-bottom--none text--gray">
                We’ve conceived several projects seeking to overcome these
                challenges and push PROs to realize their potential.
              </p>

              <ol className="text--gray">
                <li>VoicePROM</li>
                <li>Symptom Reporter</li>
                <li>ROS Reporter</li>
                <li>openPRO Platform</li>
              </ol>

              <p className="margin-bottom--none text--gray">
                The benefits of being open source are three-fold. First, the
                extended community provides verification, support, and feedback,
                improving the quality and relevance of the process and product.
                Second, the mature product will provide services as well as an
                open source repository of resources, designs, and code for other
                developers and teams to utilize. Third, the open process has a
                positive impact on medicine by building community and interest
                in improving the state of PROs.
              </p>

              <h3 className="header--md">1. voicePROM</h3>
              <p className="margin-bottom--none text--gray">
                <a
                  href="https://github.com/goinvo/openPRO/tree/master/voicePROM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VoicePROM
                </a>{' '}
                is a voice-first platform that collects short, scheduled, and
                structured data from the patient with convenient low-burden
                methods. The collected elements are drawn from a pre-built set
                of care-plan adherence measures and standard questionnaire
                formats
              </p>
              <p className="margin-bottom--none text--gray">
                Voice-first solutions in the medical space are making slow but
                focused progress. Much of this progress is in the clinical
                documentation realm, allowing clinicians to not only dictate
                medical notes, but capture the structure data needed in the EHRs
                by voice (Nuance, Winscribe, and more). These however are
                confined to the clinic and do not help patients in their
                home-care and care plan adherence. On the other hand, there are
                Alexa Skills available that can help with medication reminders
                or with tracking symptoms, but they do not provide reporting and
                they are awkward to configure and use. To our knowledge, there
                are no publically available voice interfaces for collecting
                PROMs or questionnaires.
              </p>
              <LazyImage
                src="/images/features/open-pro/voice-pro.jpg"
                className="image--max-width-med image--center"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />

              <h4 className="header--sm">Feature roadmap</h4>
              <ol className="text--gray">
                <li>
                  Establish and demonstrate voice capture for a fixed set of
                  requests: medication adherence, sleep, daily Quality of Life
                  (QoL) check-in.
                </li>
                <li>Simple user management and database</li>
                <li>Scheduler and reminder system</li>
                <li>
                  Multimodal input and output (voice, small display, button,
                  etc)
                </li>
                <li>
                  Web configuration tool to customize reminders and create
                  periodic reports..
                </li>
                <li>Deliver custom and standard questionnaires to patient.</li>
                <li>Integration into other openPRO products.</li>
                <li>Reports are delivered as FHIR bundles.</li>
              </ol>

              <h4 className="header--sm">Current state: gestating</h4>
              <p className="margin-bottom--none text--gray">
                Using the Alexa and AWS services from the Amazon ecosystem,
                we’ve developed a simple smart speaker application. The patient
                reports medication adherence and sleep, and the platform records
                that data. We are currently working on a scheduling and reminder
                system to ensure daily reporting and to alert the user if a
                questionnaire is waiting completion.
              </p>

              <h4 className="header--sm margin-bottom--none">
                Estimated Level of Effort
              </h4>
              <p className="margin-bottom--none text--gray">
                Minimal Prototype:{' '}
                <span className="text--black">8 weeks, 1.0FTE</span>
              </p>
              <p className="text--gray margin-top--none">
                Design and Development v1.0:{' '}
                <span className="text--black">8 weeks, 1.0FTE</span>
              </p>

              <h3 className="header--md">2. Symptom Reporter</h3>
              <p className="margin-bottom--none text--gray">
                <a
                  href="https://github.com/goinvo/openPRO/tree/master/SymptomReporter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Symptom Reporter
                </a>{' '}
                helps a patient distill and clarify subjective symptoms and
                experiences into structured data that can be conveniently and
                consistently shared with clinicians in person, via email/text,
                or the Electronic Medical Record. Foreign language support will
                help patients prepare a report in English before an appointment
                so they can be more comfortable and confident in communicating
                their experiences and needs.
              </p>
              <p className="margin-bottom--none text--gray">
                Similar products exist, but there are important differences.
                There are many online symptom checking tools (WebMD.com, Isabel
                symptomchecker.isabelhealthcare.com) that focus on providing a
                home diagnosis. Symptom trackers are popular mobile apps that
                allow a patient to keep tabs on a chronic or recurring symptom
                over time. Neither of these types of application focuses on
                aiding communication or creating a detailed and medically
                relevant report at the point of pain. The most similar app
                available is AHRQuestionBuilder, developed by U.S. Department of
                Health and Human Services. Some patient portals integrate a
                symptom checker (Epic - Mayo Clinic’s MyChart), but again, it
                does not provide any way to begin a conversation with a
                clinician regarding those symptoms. Hopefully, an open source
                tool such as openPRO - Symptom Reporter would help encourage
                such integration.
              </p>
              <LazyImage
                src="/images/features/open-pro/symptom.jpg"
                className="image--max-width-med image--center"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />

              <h4 className="header--sm">Goals</h4>
              <ul className="ul text--gray">
                <li>Improve communication between the patient and care team</li>
                <li>
                  Improve fidelity of information by recording events closer to
                  the relevant time and place (point of pain)
                </li>
                <li>
                  Lower stress on the patient by improving the fidelity of data
                  during transfers of care
                </li>
                <li>Provide foreign language support within the interface</li>
              </ul>

              <h4 className="header--sm">Components</h4>
              <ul className="ul text--gray">
                <li>
                  Web interface to help identify symptoms and collect relevant
                  information: onset, intensity, location, etc.
                </li>
                <li>
                  Receipt for the patient in both plain English and medical
                  language for sharing, easy reference, printing, etc.
                </li>
                <li>
                  FHIR resources enumerating the captured conditions using
                  standard coding schema. This is a first step in importing the
                  data into a health record.
                </li>
              </ul>

              <h4 className="header--sm margin-bottom--none">
                Estimated Level of Effort
              </h4>
              <p className="margin-bottom--none text--gray">
                Design: <span className="text--black">4 weeks, 1.0FTE</span>
              </p>
              <p className="text--gray margin-top--none">
                Development v1.0:{' '}
                <span className="text--black">6 weeks, 1.0FTE</span>
              </p>

              <h3 className="header--md">3. ROS Reporter</h3>
              <p className="margin-bottom--none text--gray">
                A review of systems (ROS) is a gathering of targeted medical
                information such as symptoms from a patient. Reimbursement
                models push doctors to ask more and more particular sets of
                questions, consuming precious in-encounter time. In the interest
                of time, issues that are medically relevant or important to the
                patient may not be addressed
                <sup>
                  <a href="#references">6</a>
                </sup>
                , creating an incomplete picture from which the doctor assesses
                and plans treatment.
              </p>
              <p className="margin-bottom--none text--gray">
                The{' '}
                <a
                  href="https://github.com/goinvo/openPRO/tree/master/ROSReporter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ROS Reporter
                </a>{' '}
                is an interactive web application will allow the patient to
                submit responses in privacy and comfort outside the encounter,
                either at home before a visit or while waiting at the office.
                Some clinics and offices distribute ROS forms, either by paper
                or electronically to patients when they arrive at reception or
                by a nurse. These questionnaires have several deficiencies:
              </p>

              <ul className="ul text--gray">
                <li>
                  They feel irrelevant. The patient answers in the negative for
                  row after row of questions that are not related to the purpose
                  of the visit. The forms are one-size-fits all.
                </li>
                <li>
                  They are often tedious and inefficient. Paper questionnaires
                  are often poorly designed and require manual entry into the
                  EHR. Electronic questionnaires are often time consuming as
                  they ask many sequential questions with negative responses.
                </li>
                <li>
                  The data collected is insufficient. The doctor or nurse asks
                  the relevant questions again, with multiple follow-up
                  questions such as frequency, severity, and timing.
                </li>
              </ul>
              <LazyImage
                src="/images/features/open-pro/ros.jpg"
                className="image--max-width-med image--center"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <h4 className="header--sm">Goals</h4>
              <ul className="ul text--gray">
                <li>Improve communication between the patient and care team</li>
                <li>
                  Improve the fidelity and relevance of information from the
                  patient, by recording events and pains closer to relevant time
                  and place (point of pain)
                </li>
                <li>
                  Provide designs that minimize survey fatigue and maximize the
                  collection of relevant data.
                </li>
                <li>
                  Lower stress on the patient and improve the fidelity of data
                  during transfers of care
                </li>
                <li>Provide language and accessibility support</li>
              </ul>
              <h4 className="header--sm">Components</h4>
              <ul className="ul text--gray">
                <li>
                  Web interface to identify symptoms and collect relevant info
                  (onset, intensity, location, etc.). The questionnaire is
                  responsive and intelligent, focusing on systems and lines of
                  questions relevant to the patient’s conditions.
                </li>
                <li>
                  Receipt for the patient in both plain English and medical
                  language for sharing, easy reference, printing, etc.
                </li>
                <li>
                  FHIR resources enumerating the captured conditions using
                  standard coding schema. This is a first step in importing the
                  data into a health record.
                </li>
              </ul>

              <h4 className="header--sm margin-bottom--none">
                Estimated Level of Effort
              </h4>
              <p className="margin-bottom--none text--gray">
                Design: <span className="text--black">4 weeks, 1.0FTE</span>
              </p>
              <p className="text--gray margin-top--none">
                Development v1.0:{' '}
                <span className="text--black">6 weeks, 1.0FTE</span>
              </p>

              <h3 className="header--md">4. openPRO Platform</h3>
              <p className="margin-bottom--none text--gray">
                The{' '}
                <a
                  href="https://github.com/goinvo/openPRO/tree/master/proPlatform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  openPRO web service
                </a>{' '}
                will offer low-effort administration of PROs for clinicians and
                patients. Any party can, ad hoc, initiate a PRO. The patient
                sends to the doctor via the service a de-identified PRO, which
                is assigned to the patient using separate established secure
                channels. The clinic can then insert the new data in the EHR,
                either by hand or by an import function implemented at the
                clinic’s side.
              </p>
              <h4 className="header--sm">Goals</h4>
              <ul className="ul text--gray">
                <li>
                  Empower patients to administer and initiate their own PROs and
                  PROMs.
                </li>
                <li>
                  Make administration and completion of PROs more convenient for
                  both patients and administrative staff.
                </li>
                <li>
                  Satisfy patient privacy by anonymizing the communication of
                  the data. The data is then associated with the patient’s
                  identity within the office’s established secure system.
                </li>
                <li>
                  Provide a platform for distributing the Symptom Identifier,
                  ROS reporter, and Voice PROMs.
                </li>
              </ul>
              <LazyImage
                src="/images/features/open-pro/platform.jpg"
                className="image--max-width-med image--center"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <h4 className="header--sm">Components</h4>
              <ul className="ul text--gray">
                <li>
                  Front-end services:
                  <ul className="ul">
                    <li>
                      Website for requesting, completing, and receiving PROs
                    </li>
                    <li>
                      Request interface
                      <ul className="ul">
                        <li>Request a PRO to be filled out by self or other</li>
                        <li>
                          Receive a unique key that identifies the incomplete
                          PRO
                        </li>
                        <li>
                          PRO/questionnaire is one of: custom designed
                          questionnaire, established questionnaire from PROM
                          library (PROMIS), openPRO product such as ROS capture
                          or Symptom Reporter
                        </li>
                      </ul>
                    </li>
                    <li>
                      Capture interface
                      <ul className="ul">
                        <li>
                          User submits unique key to access and complete PRO
                        </li>
                        <li>
                          Provide interface to complete custom questionnaire
                        </li>
                        <li>Provide interfaces from PROMIS or openPRO tools</li>
                      </ul>
                    </li>
                    <li>
                      View interface
                      <ul className="ul">
                        <li>
                          User submits unique key to view or download completed
                          PRO
                        </li>
                        <li>
                          Visualization tools for questionnaires, Symptom
                          Reporter, and ROS Reporter.
                        </li>
                        <li>
                          Ability to produce associated FHIR Condition resources
                          from questionnaires
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Back-end services:
                  <ul className="ul">
                    <li>
                      Key manager. Generates, distributes, and processes keys
                      associated with incomplete and complete PROs
                    </li>
                    <li>Storage for pending and complete PROs.</li>
                  </ul>
                </li>
                <li>
                  SMART on FHIR app that fetches the anonymous responses and
                  attaches the patient’s identity to the PRO for insertion into
                  EHR.
                </li>
              </ul>
              <h4 className="header--sm margin-bottom--none">
                Estimated Level of Effort
              </h4>
              <p className="margin-bottom--none text--gray">
                Design: <span className="text--black">3 weeks, 1.0FTE</span>
              </p>
              <p className="text--gray margin-top--none">
                Development of minimal service:{' '}
                <span className="text--black">6 weeks, 1.0FTE</span>
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--xl text--center">Authors</h2>
              <Author name="Daniel Reeves" />

              <h3 className="header--md">Contributors</h3>
              <Author name="Sharon Lee" />
              <Author name="Jen Patel" />
              <Author name="Juhan Sonin" company="GoInvo, MIT" />
            </div>
          </div>

          <div className="background--white pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Basch, Ethan, Allison M. Deal, Amylou C. Dueck, Howard I. Scher, Mark G. Kris, Clifford Hudis, and Deborah Schrag. 2017. “Overall Survival Results of a Trial Assessing Patient-Reported Outcomes for Symptom Monitoring During Routine Cancer Treatment.” JAMA 318 (2): 197.',
                      link: 'https://doi.org/10.1001/jama.2017.7156',
                    },
                    {
                      title:
                        'Bottomley, Andrew, Dave Jones, and Lily Claassens. 2009. “Patient-Reported Outcomes: Assessment and Current Perspectives of the Guidelines of the Food and Drug Administration and the Reflection Paper of the European Medicines Agency.” European Journal of Cancer (Oxford, England: 1990) 45 (3): 347–53.',
                      link: 'https://doi.org/10.1016/j.ejca.2008.09.032',
                    },
                    {
                      title:
                        'Broderick, Joan, Esi Morgan DeWit, Nan Rothrock, Paul Crane, and Christopher B. Forrest. 2013. “Advances in Patient Reported Outcomes: The NIH PROMIS Measures.” EGEMs (Generating Evidence & Methods to Improve Patient Outcomes) 1 (1): 12.',
                      link: 'https://doi.org/10.13063/2327-9214.1015',
                    },
                    {
                      title:
                        'Cella, David, Susan Yount, Nan Rothrock, Richard Gershon, Karon Cook, Bryce Reeve, Deborah Ader, et al. 2007. “The Patient-Reported Outcomes Measurement Information System (PROMIS): Progress of an NIH Roadmap Cooperative Group during Its First Two Years.” Medical Care 45 (5 Suppl 1): S3–11.',
                      link:
                        'https://doi.org/10.1097/01.mlr.0000258615.42478.55',
                    },
                    {
                      title:
                        'Chu, Dominic, Marko Popovic, Edward Chow, David Cella, Jennifer L Beaumont, Henry Lam, Jasmine Nguyen, et al. 2014. “Development, Characteristics and Validity of the EORTC QLQ-PR25 and the FACT-P for Assessment of Quality of Life in Prostate Cancer Patients.” Journal of Comparative Effectiveness Research 3 (5): 523–31.',
                      link: ' https://doi.org/10.2217/cer.14.41',
                    },
                    {
                      title:
                        'Chung, Arlene E, and Ethan M Basch. 2015. “Incorporating the Patient’s Voice into Electronic Health Records through Patient-Reported Outcomes as the ‘Review of Systems.’” Journal of the American Medical Informatics Association 22 (4): 914–16.',
                      link: 'https://doi.org/10.1093/jamia/ocu007',
                    },
                    {
                      title:
                        'Greenhalgh, Joanne, Sonia Dalkin, Kate Gooding, Elizabeth Gibbons, Judy Wright, David Meads, Nick Black, Jose Maria Valderas, and Ray Pawson. 2017. Functionality and Feedback: A Realist Synthesis of the Collation, Interpretation and Utilisation of Patient-Reported Outcome Measures Data to Improve Patient Care. Health Services and Delivery Research. Southampton (UK): NIHR Journals Library.',
                      link: 'http://www.ncbi.nlm.nih.gov/books/NBK409450/',
                    },
                    {
                      title:
                        'Grossman, Cynthia. 2018. “Patient-Reported Outcomes: Design with the End in Mind.” Milken Institute.',
                      link: 'https://www.fastercures.org/reports/view/70',
                    },
                    {
                      title:
                        '“Guidance for Industry. Patient-Reported Outcome Measures: Use in Medical Product Development to Support Labeling Claims.” 2009. U.S. F.D.A.',
                      link:
                        'https://www.fda.gov/downloads/drugs/guidances/ucm193282.pdf',
                    },
                    {
                      title:
                        'Hostetter, Martha, and Sarah Klein. n.d. “Using Patient-Reported Outcomes to Improve Health Care Quality.” The Commonwealth Fund. Accessed March 13, 2019.',
                      link:
                        'https://www.commonwealthfund.org/publications/newsletter-article/using-patient-reported-outcomes-improve-health-care-quality',
                    },
                    {
                      title:
                        'Marquis, Patrick, Martine Caron, Marie-Pierre Emery, Jane A. Scott, Benoit Arnould, and Catherine Acquadro. 2011. “The Role of Health-Related Quality of Life Data in the Drug Approval Processes in the US and Europe: A Review of Guidance Documents and Authorizations of Medicinal Products from 2006 to 2010.” Pharmaceutical Medicine, May.',
                      link:
                        'http://link.galegroup.com/apps/doc/A260691605/AONE?sid=googlescholar',
                    },
                    {
                      title:
                        '“Patient Reported Outcomes FHIR Implementation Guide.” n.d. Accessed March 13, 2019.',
                      link:
                        'http://build.fhir.org/ig/HL7/patient-reported-outcomes/index.html',
                    },
                    {
                      title: '“Patient-Reported Outcome.” 2019. Wikipedia.',
                      link:
                        'https://en.wikipedia.org/w/index.php?title=Patient-reported_outcome&oldid=883919582',
                    },
                    {
                      title:
                        'Patel, Vaishali, and Christian Johnson. 2018. “Individuals’ Use of Online Medical Records and Technology for Health Needs.” ONC Data Brief 40. The Office of the National Coordinator for Health Information Technology.',
                      link:
                        'https://www.healthit.gov/sites/default/files/page/2018-03/HINTS-2017-Consumer-Data-Brief-3.21.18.pdf',
                    },
                    {
                      title:
                        '“Patient Portals Suck.” n.d. Klara - Secure Medical Patient Communication. Accessed March 14, 2019.',
                      link: 'https://klara.com/blog/patient-portals-suck',
                    },
                    {
                      title:
                        '“PROMIS.” n.d. PROMIS® (Patient-Reported Outcomes Measurement Information System). Accessed March 13, 2019.',
                      link:
                        'http://www.healthmeasures.net/explore-measurement-systems/promis',
                    },
                    {
                      title:
                        'Vesely, Rebecca. 2018. “Why Are Patient Portals Such Duds?” Association of Health Care Journalists (blog). August 6, 2018.',
                      link:
                        'https://healthjournalism.org/blog/2018/08/why-are-patient-portals-such-duds/',
                    },
                    {
                      title:
                        'Wagle, Neil W. 2017. “Implementing Patient-Reported Outcome Measures (PROMs).” NEJM Catalyst. October 12, 2017.',
                      link:
                        'https://catalyst.nejm.org/implementing-proms-patient-reported-outcome-measures/',
                    },
                    {
                      title:
                        '“Web-Based System for Self-Reporting Symptoms Helps Patients Live Longer.” 2017',
                      link:
                        'https://www.asco.org/about-asco/press-center/news-releases/web-based-system-self-reporting-symptoms-helps-patients-live',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default openPro
