import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Virtual Primary Care',
  metaDescription:
    '13 out of the top 15 reasons for office visits can be virtual.',
  heroImage:
    '/images/features/virtual-primary-care/virtual-primary-care-hero.jpg',
}

class VirtualPrimaryCareFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="oshc-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div className="oshc-title-area">
                <h1 className="header--xl">Virtual Primary Care</h1>
                <h2 className="text--primary">
                  13 out of the top 15 reasons for office visits can be virtual.
                </h2>
                <p className="text--gray">
                  Primary care physicians are the frontlines to the healthcare
                  system for patients. A staggering 51% (505.5M)
                  <sup>
                    <a href="#references">1</a>
                  </sup>{' '}
                  of physician office visits are with primary care physicians,
                  making them integral to the everyday care of Americans.
                </p>
                <p className="text--gray">
                  But the times are changing.
                  <br />
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
                <p className="text--gray">
                  And today's office visit is not that wonderful of an
                  experience to aspire to.
                </p>
              </div>

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

                <ul className="text--gray">
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
                  At GoInvo, we wanted to identify which visits could be
                  virtual, and if so, how. To frame this around the realities of
                  today, we started with the top 15 reasons for visit from the
                  National Ambulatory Medical Care Survey in 2015
                  <sup>
                    <a href="#references">10</a>
                  </sup>
                  .
                </p>

                <p className="text--gray">
                  The top 15 visits account for 49.8% (492,749)
                  <sup>
                    <a href="#references">10</a>
                  </sup>{' '}
                  of total office visits.
                </p>

                <p className="text--gray">
                  13 can be virtual with a smartphone (3 with an additional
                  device)
                  <br />2 remain in-office visits
                </p>

                <p>
                  <Image
                    src="/images/features/virtual-primary-care/virtual-primary-care-diagram.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMediumMaxWidth}
                  />
                </p>

                <h4 className="header--sm margin-bottom--half">About GoInvo</h4>
                <p className="text--gray">
                  GoInvo is a healthcare design company that crafts innovative
                  digital and physical solutions. Our deep expertise in Health
                  IT, Genomics, and Open Source health has delivered results for
                  the National Institute of Health, Walgreens, Mount Sinai and
                  Partners Healthcare.{' '}
                  <a href="/contact">Reach out with feedback.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="background--blue pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <div id="methodology">
              <h1 className="header--xl">Methodology</h1>
              <p className="text--gray">
                Below is a description of the methodology used in creating the
                Virtual Primary Care.... It is also a record of versioned
                updates to the methodology based on continuing research and
                feedback. Thank you to those who have reached out and helped
                identify areas to improve.
              </p>
              <p className="text--gray">....</p>
            </div>
          </div>
        </div>
        <div className="pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <div>
              <h1 className="header--xl">Authors</h1>

              <div className="author">
                <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg" />
                <div className="authorBio pure-u-1 pure-u-lg-1-2">
                  <p>
                    <strong>Cameron Gettel</strong>
                    <span className="text--grey">
                      , Resident Physician, Brown University
                    </span>
                  </p>
                  <p className="text--grey">
                    Cameron is an Emergency Medicine physician with interests in
                    improving healthcare through evidence-based practices,
                    quality improvement, and clinical research.
                  </p>
                </div>
              </div>

              <div className="author">
                <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg" />
                <div className="authorBio pure-u-1 pure-u-lg-1-2">
                  <p>
                    <strong>Eric Benoit</strong>
                    <span className="text--grey">, GoInvo</span>
                  </p>
                  <p className="text--grey">
                    Eric Benoit is the Creative Director of GoInvo, leading the
                    studio’s UX creation process from concept to production.
                    Eric works as an interaction designer, experience designer,
                    and information architect, designing better products by
                    thoroughly understanding user behaviors, expectations, and
                    goals. Eric’s background and love for design in the context
                    of human experience helps him transform complex information
                    systems in healthcare and the enterprise into responsive and
                    adaptive human-centered designs.
                  </p>
                </div>
              </div>

              <h3 className="header--md">Contributors</h3>

              <div className="author">
                <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg" />
                <div className="authorBio pure-u-1 pure-u-lg-1-2">
                  <p>
                    <strong>Juhan Sonin</strong>
                    <span className="text--grey">, GoInvo, MIT</span>
                  </p>
                  <p className="text--grey">
                    Juhan specialized in software design and system engineering.
                    He operates, and is the director of, GoInvo. He has worked
                    at Apple, National Center for Supercomputing Applications,
                    Massachusetts Institute of Technology (MIT), and MITRE.
                    Juhan co-founded Invo Boston in 2009 and is a graduate of
                    the University of Illinois at Urbana-Champaign. He currently
                    lectures at MIT.
                  </p>
                </div>
              </div>
            </div>
            <Divider />
            <div id="references">
              <References
                references={[
                  {
                    title: 'CDC',
                    link:
                      'https://www.cdc.gov/nchs/fastats/physician-visits.htm',
                  },
                  {
                    title: 'PEW',
                    link: 'http://www.pewinternet.org/fact-sheet/mobile/',
                  },
                  {
                    title: 'Health Line',
                    link:
                      'https://www.healthline.com/health-news/why-you-have-to-wait-longer-to-get-a-doctors-appointment',
                  },
                  {
                    title: 'Washington Post',
                    link:
                      'https://www.washingtonpost.com/national/health-science/for-millennials-a-regular-visit-to-the-doctors-office-is-not-a-primary-concern/2018/10/05/6b17c71a-aef3-11e8-9a6a-565d92a3585d_story.html',
                  },
                  {
                    title: 'Merritt Hawkins',
                    link:
                      'https://www.merritthawkins.com/news-and-insights/thought-leadership/survey/survey-of-physician-appointment-wait-times/',
                  },
                  {
                    title: 'NCBI',
                    link:
                      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5420318/',
                  },
                  {
                    title: 'NCBI PMC Article',
                    link:
                      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4351276/',
                  },
                  {
                    title: 'NHCHC',
                    link:
                      'http://www.nhchc.org/wp-content/uploads/2013/04/nachc-access-is-answer-brief.pdf',
                  },
                  {
                    title: 'AAFP',
                    link:
                      'https://www.aafp.org/about/policies/all/workforce-reform.html',
                  },
                  {
                    title: 'CDC main diagram stats',
                    link:
                      'https://www.cdc.gov/nchs/data/ahcd/namcs_summary/2015_namcs_web_tables.pdf',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default VirtualPrimaryCareFeature
