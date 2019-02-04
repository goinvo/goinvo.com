import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

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
                <h1 className="header--xl">Virtual Care</h1>
                <h2 className="text--primary">
                  Half of face-to-face clinical office visits can be conducted
                  virtually.
                </h2>

                <div className="text-below pure-u-1">
                  <div className="stat">
                    <span className="number--lg">990M</span>
                  </div>
                  <div class="stat-desc">
                    <p className="text--gray">
                      face-to-face clinical office visits every year
                      <sup>
                        <a href="#references">1</a>
                      </sup>{' '}
                    </p>
                  </div>
                </div>
                <div className="text-below pure-u-1">
                  <div className="stat">
                    <span className="number--lg">459M (46%)</span>
                  </div>
                  <div class="stat-desc">
                    <p className="text--gray">can be conducted virtually</p>
                  </div>
                </div>
                <h3 className="header--md text--lg margin-bottom--half">
                  The{' '}
                  <span className="text--primary">
                    top 15 types of encounters
                  </span>{' '}
                  (like routine checkup, medication refill, joint pain) account
                  for{' '}
                  <span className="text--primary">
                    50% of face-to-face clinical office visits
                  </span>
                  .
                </h3>
                <p className="text--gray">
                  Armed with a smartphone or device, 13 of the top 15 encounters
                  can be virtual visits.
                  <br />
                  The other two visits that remain face-to-face are
                  Gynecological examinations and Well baby examinations.
                </p>
                <h2 className="text--primary">
                  The Top 15 Encounters Breakdown
                </h2>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double vpc">
            <table width="100%" className="virtual-diagram">
              <tr className="text--gray">
                <td width="20%">Reason for Visit</td>
                <td width="8%">Encounter &amp; Device</td>
                <td width="8%">Text</td>
                <td width="8%">Image</td>
                <td width="8%">Audio</td>
                <td width="8%">Video</td>
                <td width="8%">Vitals</td>
                <td width="8%">Labs</td>
                <td width="8%">Imaging</td>
                <td width="8%">Other</td>
                <td width="8%">% of Visits</td>
              </tr>
              <tr>
                <td>Routine checkup</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>

                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>

                <td />

                <td />
                <td />
                <td />
                <td />
                <td>24.5%</td>
              </tr>
              <tr>
                <td>Medication, other and unspecifed kinds</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>3.6%</td>
              </tr>
              <tr>
                <td>Joint pain (knee, shoulder, etc.)</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td>2.9%</td>
              </tr>
              <tr>
                <td>Postoperative visit</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>2.6%</td>
              </tr>
              <tr>
                <td>Cough</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>2.1%</td>
              </tr>
              <tr>
                <td>Gynecological examination</td>
                <td>
                  <Clinic className="icon icon-clinic" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>Gynecologic exam (specialist)</td>
                <td>2.1%</td>
              </tr>
              <tr>
                <td>Prenatal examination, routine</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                  <br />
                  Ultrasound
                </td>
                <td />
                <td>1.8%</td>
              </tr>
              <tr>
                <td>Back pain</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td>1.6%</td>
              </tr>
              <tr>
                <td>Hypertension</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                  <BloodPressureCuff className="icon icon-blood-pressure-cuff" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                  <br />
                  Blood pressure
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td>1.6%</td>
              </tr>
              <tr>
                <td>Stomach and abdominal pain, cramps, and spasms</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                  <Ekg className="icon icon-ekg-required" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td>1.5%</td>
              </tr>
              <tr>
                <td>Well baby examination</td>
                <td>
                  <Clinic className="icon icon-clinic" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>Milestones exam (specialist)</td>
                <td>1.3%</td>
              </tr>
              <tr>
                <td>Diabetes mellitus</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                  <br />
                  Every 3 months Hemoglobin A1C. Every year fasting lipid
                  profile, liver function tests, urine albumin excretion, serum
                  creatinine.
                </td>
                <td />
                <td />
                <td>1.3%</td>
              </tr>
              <tr>
                <td>Skin rash, lesion</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                  <br />
                  Photo of rash/lesion
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>1.0%</td>
              </tr>
              <tr>
                <td>Preoperative visit</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                  <Ekg className="icon icon-ekg-required" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td />
                <td />
                <td>EKG</td>
                <td>1.0%</td>
              </tr>
              <tr>
                <td>Symptoms referable to throat</td>
                <td>
                  <Smartphone className="icon icon-smartphone" />
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                </td>
                <td />
                <td />
                <td />
                <td />
                <td>Strep test</td>
                <td>0.9%</td>
              </tr>
              <tr>
                <td>All other reasons</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>50.2%</td>
              </tr>
            </table>
            <table width="100%" className="legend">
              <tr className="text--gray">
                <td>
                  <Smartphone className="icon icon-smartphone" />
                  <br />
                  Virtual Visit
                </td>
                <td>
                  <Clinic className="icon icon-clinic" />
                  <br />
                  Face-to-face Visit
                </td>
                <td>
                  <Ekg className="icon icon-ekg" />
                  <br />
                  EKG Monitor
                </td>
                <td>
                  <BloodPressureCuff className="icon icon-blood-pressure-cuff" />
                  <br />
                  Blood Pressure Cuff
                </td>
                <td>
                  <CheckboxRequired className="icon icon-checkbox-required" />
                  <br />
                  Required
                </td>
                <td>
                  <CheckboxOptional className="icon icon-checkbox-optional" />
                  <br />
                  Optional
                </td>
              </tr>
            </table>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2>
                  "Healthcare delayed is healthcare denied"
                  <sup>
                    <a href="#references">2</a>
                  </sup>
                </h2>
                <p className="text--gray">
                  On average, it takes 24 days and 59.21 minutes (see Table 1)
                  for a patient to complete an office visit with their
                  clinician.
                </p>

                <table width="100%" className="text--gray">
                  <tr>
                    <td>Table 1. Time-to-diagnosis</td>
                  </tr>
                  <tr>
                    <td>Waiting for appointment</td>
                    <td>
                      24 days
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Waiting for clinician in office</td>
                    <td>
                      41 minutes
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Consultation with clinician</td>
                    <td>
                      18.21 minutes
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>24 days and 59.21 minutes</td>
                  </tr>
                </table>

                <p className="text--gray">
                  Given the time investment for receiving care, it's no surprise
                  that 15.6%
                  <sup>
                    <a href="#references">5</a>
                  </sup>{' '}
                  of patients avoid medical care due to time constraints.
                </p>

                <p className="text--gray">
                  Physicians don't scale.
                  <br />
                  Patients and software scales.
                </p>

                <h2>Care must go virtual</h2>

                <ul className="ul text--gray">
                  <li>
                    For patients to have better access, cost, and outcomes.
                  </li>
                  <li>
                    For clinicians to provide timely care for more people.
                  </li>
                  <li>For personalized medicine and services.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h1 className="header--xl">Methodology</h1>
                <p className="text--gray">
                  The Virtual Care diagram documents which office visits could
                  be virtual, how they could be conducted, and what health
                  information is necessary. The diagram examines the top 15
                  reasons for clinical office visits from Table 11 in the{' '}
                  <a href="https://www.cdc.gov/nchs/data/ahcd/namcs_summary/2015_namcs_web_tables.pdf">
                    National Ambulatory Medical Care Survey in 2015
                  </a>
                  .
                </p>
                <p className="text--gray">
                  Our{' '}
                  <a href="https://docs.google.com/spreadsheets/d/1pez_Wy8TnsMmifLU1xFrJ87b1SoH65OnwL6eQUiNy_A/edit?usp=sharing">
                    working document of research
                  </a>{' '}
                  is available for review and comment.
                </p>
                <h4 className="header--sm margin-bottom--half">
                  v1 - 31.Jan.2019
                </h4>
                <p className="text--gray">
                  The section below documents how we consolidated the 20 reasons
                  for office visits down to 15.
                </p>
                <p className="text--gray">
                  'Routine checkup' label is new and represents:
                </p>
                <ul className="ul text--gray">
                  <li>Progress visit, not otherwise specifed</li>
                  <li>General medical examination</li>
                  <li>Counseling, not otherwise specifed.</li>
                </ul>
                <p className="text--gray">
                  'Joint pain' label is new and represents:
                </p>
                <ul className="ul text--gray">
                  <li>Knee symptoms</li>
                  <li>Shoulder symptoms</li>
                </ul>
                <p className="text--gray">
                  'All other reasons' label existed but now also represents:
                </p>
                <ul className="ul text--gray">
                  <li>For other and unspecifed test results</li>
                  <li>Other special examination</li>
                </ul>
                <p className="text--gray">
                  The section below documents how we calculated the 'Percent
                  distribution' due to the consolidation of reasons for office
                  visits.
                </p>
                <p className="text--gray">
                  Routine checkup (24.4% | 242,782,000) = Progress visit, not
                  otherwise specifed (14.1% | 140,842,000) + General medical
                  examination (7.6% | 75,412,000) + Counseling, not otherwise
                  specifed (2.7% | 26,528,000)
                </p>
                <p className="text--gray">
                  Joint pain (2.9% | 28,860,000) = Knee symptoms (1.6% |
                  16,241,000) + Shoulder symptoms (1.3% | 12,619,000)
                </p>
                <p className="text--gray">
                  All other reasons (50.2% | 498,058,000) = For other and
                  unspecifed test results (1.5% | 15,159,000) + Other special
                  examination (0.9% | 9,092,000) + All other reasons (47.8% |
                  473,807,000)
                </p>
                <p className="text--gray">
                  The section below documents how we calculated the 46% (rounded
                  down) and 459M (rounded up) of office visits that can be
                  conducted virtually.
                </p>
                <p className="text--gray">
                  Virtual office visits (46.4% | 458,798,000) = Routine checkup
                  (24.5% | 242,782,000) + Medication, other and unspecifed kinds
                  (3.6% | 35,232,000) + Joint pain (2.9% | 28,860,000) +
                  Postoperative visit (2.6% | 25,441,000) + Cough (2.1% |
                  20,984,000) + Prenatal examination, routine (1.8% |
                  18,152,000) + Back pain (1.6% | 15,875,000) + Hypertension
                  (1.6% | 15,762,000) + Stomach and abdominal pain, cramps, and
                  spasms (1.5% | 15,026,000) + Diabetes mellitus (1.3% |
                  12,432,000) + Skin rash, lesion (1.0% | 9,464,000) +
                  Preoperative visit (1.0% | 9,443,000) + Symptoms referable to
                  throat (0.9% | 9,346,000)
                </p>
              </div>
            </div>
          </div>
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h1 className="header--xl">Authors</h1>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-cameron-gettel.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMediumMaxWidth}
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Cameron Gettel</strong>
                      <span className="text--grey">
                        , Resident Physician, Brown University
                      </span>
                    </p>
                    <p className="text--grey">
                      Cameron Gettel is an Emergency Medicine physician with
                      interests in improving healthcare through evidence-based
                      practices, quality improvement, and clinical research.
                    </p>
                  </div>
                </div>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-eric-benoit.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMediumMaxWidth}
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Eric Benoit</strong>
                      <span className="text--grey">, GoInvo</span>
                    </p>
                    <p className="text--grey">
                      Eric Benoit is the Creative Director of GoInvo, leading
                      the studio’s UX creation process from concept to
                      production. Eric works as an interaction designer,
                      experience designer, and information architect, designing
                      better products by thoroughly understanding user
                      behaviors, expectations, and goals.
                    </p>
                  </div>
                </div>

                <h3 className="header--md">Contributors</h3>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-juhan-sonin.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMediumMaxWidth}
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Juhan Sonin</strong>
                      <span className="text--grey">, GoInvo, MIT</span>
                    </p>
                    <p className="text--grey">
                      Juhan specialized in software design and system
                      engineering. He operates, and is the director of, GoInvo.
                      He has worked at Apple, National Center for Supercomputing
                      Applications, Massachusetts Institute of Technology (MIT),
                      and MITRE. Juhan co-founded GoInvo Boston in 2009 and is a
                      graduate of the University of Illinois at
                      Urbana-Champaign. He currently lectures at MIT.
                    </p>
                  </div>
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
              <Divider />
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'National Ambulatory Medical Care Survey: 2015 State and National Summary Tables. (2015). Retrieved January 24, 2019',
                      link:
                        'https://www.cdc.gov/nchs/data/ahcd/namcs_summary/2015_namcs_web_tables.pdf',
                    },
                    {
                      title:
                        'Why You Have to Wait Longer to Get a Doctor’s Appointment. (2017). Retrieved January 24, 2019',
                      link:
                        'https://www.healthline.com/health-news/why-you-have-to-wait-longer-to-get-a-doctors-appointment',
                    },
                    {
                      title:
                        '2017 Survey of Physician Appointment Wait Times. (2017). Retrieved January 24, 2019',
                      link:
                        'https://www.merritthawkins.com/news-and-insights/thought-leadership/survey/survey-of-physician-appointment-wait-times/',
                    },
                    {
                      title:
                        'BA Ahmad, K Khairatul, and A Farnaza. An assessment of patient waiting and consultation time in a primary healthcare clinic. (2017). Retrieved January 24, 2019',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5420318/',
                    },
                    {
                      title:
                        'Jennifer M. Taber, Ph.D., Bryan Leyva, B.A, and Alexander Persoskie, Ph.D. Why do People Avoid Medical Care? A Qualitative Study Using National Data. (2015). Retrieved January 24, 2019',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4351276/',
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

export default VirtualCareFeature
