import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Virtual Primary Care',
  metaDescription: '46.4% of office visits can be conducted virtually.',
  heroImage:
    '/images/features/virtual-primary-care/virtual-primary-care-hero-2.jpg',
}

class VirtualPrimaryCareFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="virtual-primary-care-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div className="virtual-primary-care-title-area">
                <h1 className="header--xl">Virtual Primary Care</h1>
                <h2 className="text--primary">
                  46.4% of office visits can be conducted virtually.
                </h2>
                <p className="text--gray">
                  Half of all office visits are with a primary care physician
                  (505.5M of 990.8M)
                  <sup>
                    <a href="#references">1</a>
                  </sup>{' '}
                  .
                </p>
                <p className="text--gray">
                  With 77%
                  <sup>
                    <a href="#references">2</a>
                  </sup>{' '}
                  of Americans owning a smartphone and 95%
                  <sup>
                    <a href="#references">2</a>
                  </sup>{' '}
                  owning a text-enabled phone, healthcare is already in our
                  pocket.
                </p>
                <p className="text--gray">
                  But we’re not using healthcare in the same way as banking,
                  groceries, dating, transportation, and every other aspect of
                  our daily lives. We're still getting dressed and visiting the
                  doctor at the clinic.
                </p>
              </div>

              <h3 className="header--md text--lg">
                The{' '}
                <span className="text--primary">
                  top 15 visits account for 49.8% (492,749)
                </span>
                <sup>
                  <a href="#references">10</a>
                </sup>{' '}
                of total office visits.
              </h3>

              <div className="text-below pure-u-1 pure-u-lg-1-2">
                <div className="stat">
                  <span className="number--lg">13</span> virtual visits
                </div>
                <div class="stat-desc">
                  <p className="text--gray">
                    with a smartphone (3 with an additional device)
                  </p>
                </div>
              </div>

              <div className="text-below pure-u-1 pure-u-lg-1-2">
                <div className="stat">
                  <span className="number--lg">2</span> office visits
                </div>
                <div class="stat-desc">
                  <p className="text--gray">remain face-to-face</p>
                </div>
              </div>

              <div className="text-below pure-u-1 pure-u-lg-1-2">
                <div className="stat">
                  <span className="number--lg">86%</span>
                </div>
                <div class="stat-desc">
                  <p className="text--gray">
                    of the top 15 visits can be virtual
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <Image
              src="/images/features/virtual-primary-care/virtual-primary-care-diagram.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h4>
                  "Healthcare delayed is healthcare denied"
                  <sup>
                    <a href="#references">3</a>
                  </sup>
                </h4>
                <p className="text--gray">
                  On average, it takes 24 days and 59.21 minutes (see Table 1)
                  for a patient to complete an office visit with their doctor.
                  And this assumes the patient already has a primary care
                  doctor, which 26%
                  <sup>
                    <a href="#references">4</a>
                  </sup>{' '}
                  do not.
                </p>

                <p className="text--gray">
                  Table 1. Time-to-diagnosis
                  <table width="100%">
                    <tr>
                      <td>Waiting for appointment</td>
                      <td>
                        24 days
                        <sup>
                          <a href="#references">5</a>
                        </sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Waiting for Dr in office</td>
                      <td>
                        41 minutes
                        <sup>
                          <a href="#references">6</a>
                        </sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Consultation with Dr</td>
                      <td>
                        18.21 minutes
                        <sup>
                          <a href="#references">6</a>
                        </sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>24 days and 59.21 minutes</td>
                    </tr>
                  </table>
                </p>

                <p className="text--gray">
                  Given the high investment for receiving care, it's no surprise
                  that 39.7%
                  <sup>
                    <a href="#references">7</a>
                  </sup>{' '}
                  of patients avoid medical care due to high costs and time
                  constraints. We're also experiencing a physician shortage of
                  52,000
                  <sup>
                    <a href="#references">9</a>
                  </sup>{' '}
                  and it's worsening.
                </p>

                <p className="text--gray">
                  Just a few factors that have 62M
                  <sup>
                    <a href="#references">8</a>
                  </sup>{' '}
                  Americans with no or inadequate access to healthcare.
                  <br />
                  Criminal some could argue.
                </p>

                <p className="text--gray">
                  Physicians don't scale.
                  <br />
                  Software scales.
                </p>

                <p className="text--gray">
                  For primary care, that means going virtual.
                </p>

                <h4>Virtual primary care (VPC) is...</h4>

                <ul className="ul text--gray">
                  <li>Mobile-first healthcare via text, phone, or video.</li>
                  <li>
                    Cost-effective care delivered conveniently online from
                    healthcare professionals.
                  </li>
                  <li>Healthcare anywhere, anytime.</li>
                </ul>

                <h4 className="header--sm margin-bottom--none">
                  Going Virtual (or not)
                </h4>

                <p className="text--gray">
                  At GoInvo, we wanted to identify which office visits could be
                  virtual, and if so, how. To frame this around the realities of
                  today, we started with the top 15 reasons for office visits
                  from the National Ambulatory Medical Care Survey in 2015
                  <sup>
                    <a href="#references">10</a>
                  </sup>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h1 className="header--xl">Methodology</h1>
                <p className="text--gray">
                  Below is a description of the methodology used in creating the
                  Virtual Primary Care diagram. It is also a record of versioned
                  updates to the methodology based on continuing research and
                  feedback. Thank you to those who have reached out and helped
                  identify areas to improve.
                </p>
                <h4 className="header--sm margin-bottom--half">
                  v1 - 24.Jan.2019
                </h4>
                <p className="text--gray">
                  The section below documents how we consolidated the 20 reasons
                  for office visits down to 15.
                </p>
                <p className="text--gray">
                  'General health' label is new and represents:
                  <ul className="ul text--gray">
                    <li>Progress visit, not otherwise specifed</li>
                    <li>General medical examination</li>
                    <li>Counseling, not otherwise specifed.</li>
                  </ul>
                </p>
                <p className="text--gray">
                  'Joint pain' label is new and represents:
                  <ul className="ul text--gray">
                    <li>Knee symptoms</li>
                    <li>Shoulder symptoms</li>
                  </ul>
                </p>
                <p className="text--gray">
                  'All other reasons' label existed but now also represents:
                  <ul className="ul text--gray">
                    <li>For other and unspecifed test results</li>
                    <li>Other special examination</li>
                  </ul>
                </p>
                <p className="text--gray">
                  The section below documents how we calculated the 'Percent
                  distribution' due to the consolidation of reasons for office
                  visits.
                </p>
                <p className="text--gray">
                  General health (24.4%) = Progress visit, not otherwise
                  specifed (14.1%) + General medical examination (7.6%) +
                  Counseling, not otherwise specifed (2.7%)
                </p>
                <p className="text--gray">
                  Joint pain (2.9%) = Knee symptoms (1.6%) + Shoulder symptoms
                  (1.3%)
                </p>
                <p className="text--gray">
                  All other reasons (50.2%) = Knee symptoms (1.5%) + Shoulder
                  symptoms (0.9%) + All other reasons (47.8%)
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
                      Cameron is an Emergency Medicine physician with interests
                      in improving healthcare through evidence-based practices,
                      quality improvement, and clinical research.
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
                      behaviors, expectations, and goals. Eric’s background and
                      love for design in the context of human experience helps
                      him transform complex information systems in healthcare
                      and the enterprise into responsive and adaptive
                      human-centered designs.
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
                      and MITRE. Juhan co-founded Invo Boston in 2009 and is a
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
                    for the National Institute of Health, Walgreens, Mount Sinai
                    and Partners Healthcare.{' '}
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
                        'Ambulatory Care Use and Physician office visits. (2015). Retrieved January 24, 2019',
                      link:
                        'https://www.cdc.gov/nchs/fastats/physician-visits.htm',
                    },
                    {
                      title:
                        'Mobile Fact Sheet. (2018). Retrieved January 24, 2019',
                      link: 'http://www.pewinternet.org/fact-sheet/mobile/',
                    },
                    {
                      title:
                        'Why You Have to Wait Longer to Get a Doctor’s Appointment. (2017). Retrieved January 24, 2019',
                      link:
                        'https://www.healthline.com/health-news/why-you-have-to-wait-longer-to-get-a-doctors-appointment',
                    },
                    {
                      title:
                        'For millennials, a regular visit to the doctor’s office is not a primary concern. (2018). Retrieved January 24, 2019',
                      link:
                        'https://www.washingtonpost.com/national/health-science/for-millennials-a-regular-visit-to-the-doctors-office-is-not-a-primary-concern/2018/10/05/6b17c71a-aef3-11e8-9a6a-565d92a3585d_story.html',
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
                    {
                      title:
                        'Access Is the Answer: Community Health Centers, Primary Care & the Future of American Health Care. (2014). Retrieved January 24, 2019',
                      link:
                        'http://www.nhchc.org/wp-content/uploads/2013/04/nachc-access-is-answer-brief.pdf',
                    },
                    {
                      title:
                        'FAMILY PHYSICIAN WORKFORCE REFORM: Recommendations of the American Academy of Family Physicians. Retrieved January 24, 2019',
                      link:
                        'https://www.aafp.org/about/policies/all/workforce-reform.html',
                    },
                    {
                      title:
                        'National Ambulatory Medical Care Survey: 2015 State and National Summary Tables. (2015). Retrieved January 24, 2019',
                      link:
                        'https://www.cdc.gov/nchs/data/ahcd/namcs_summary/2015_namcs_web_tables.pdf',
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

export default VirtualPrimaryCareFeature
