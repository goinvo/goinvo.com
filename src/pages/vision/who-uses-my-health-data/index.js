import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import { LazyImage } from '../../../components/optimized-image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Who Uses my Health Data - GoInvo',
  metaDescription:
    'The health data trade has quietly grown with little patient or doctor knowledge',
  heroImage: '/images/features/health-data-use/health-data-use-hero-2.jpg',
}

class HealthDataUseFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="who-uses-my-health-data">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--half">
                Who Uses My Health Data?
              </h1>
              <p className="margin-bottom--none text--gray">
                With all of the data they have about us, the U.S. tech giants
                (Facebook, Google, Amazon, etc) wield market power that other
                companies can only imagine. It is easy for that imagination to
                run wild, as companies consider how similar insights could
                transform their own business. The allure of bigger data, better
                machine learning, and more powerful analytics may stem from a
                vision for the future or perhaps a fear of falling behind.
                Either way, the market for data on consumers is thriving. A slew
                of companies have capitalized on the mining and brokering of
                this data.
              </p>
              <p className="text--gray">
                We consumers may grow to expect some data tracking. However, we
                may not realize that our healthcare data, collected behind the
                safely closed doors of our doctor's office, travels through many
                hands for the profit of others.
              </p>
            </div>

            <div className="poster margin-top--double">
              <a
                href={mediaUrl(
                  '/pdf/vision/health-data-use/health-data-use-poster-medium.pdf'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyImage
                  src="/images/features/health-data-use/health-data-use-poster-thin.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMediumMaxWidth}
                />
              </a>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/health-data-use/health-data-use-poster-medium.pdf'
                  )}
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Download Poster
                </a>
              </div>

              <div className="text--sm text--gray">
                <p>
                  Note: In the visual above, we have done our best to trace the
                  web of connections, but our map is not comprehensive. Please
                  reach out with suggestions, insights, or questions.
                </p>
              </div>

              <h2 className="header--lg margin-top--quad margin-bottom--half">
                HIPAA Limitations and Re-identification
              </h2>
              <p className="text--gray margin-top--none">
                Within the healthcare system, patient health information (PHI)
                must be de-identified when traded, as mandated by HIPAA. But it
                does not prohibit the sale of your data, require that your
                health data is only used for your health care, or protect your
                health data outside of the health system. In fact, consumer
                companies such as DNA testing and analysis services are not
                required to de-identify your data if they sell it to data
                brokers.
                <sup>
                  <a href="#references">13 </a>
                </sup>
                Even de-identified, data miners and brokers use systems that
                replace your name, SSN, and a few other "identifying" data with
                a unique code in order to create a longitudinal record of your
                health.
              </p>
              <p className="text--gray">
                Re-identifying de-identified profiles has become much easier
                since the HIPAA laws were first established. It is easy to
                imagine how combining information such as GPS data with past
                appointment times and dates would pinpoint an individual. Past
                studies have found that "63% of the population can be uniquely
                identified by the combination of their gender, date of birth,
                and zip code alone."
                <sup>
                  <a href="#references">3</a>
                </sup>
              </p>

              <h2 className="header--lg margin-top--quad margin-bottom--half">
                Patients need Insight, Control, and Ownership
              </h2>
              <p className="text--gray margin-top--none">
                Many companies value health-related data whether it's
                de-identified or directly linked to patient names and addresses.
                For some of these purposes, we patients may have zero
                objections. Some patients are eager to share data with
                researchers if it supports a cure for them or their legacy.
                Patients may object to other uses of their health data such as
                targeted advertising or profiling. However, the missing thread
                across all of these uses is patient consent.
              </p>
              <p className="text--gray">
                We patients need ownership over our health data, which is often
                the most sensitive information about our lives. We need
                authority over its access and use. At the very least, we need to
                know who is using and viewing our data. For those of us who are
                healthy and in a financial position to entertain a myriad of
                health/fitness services and organic food, we may not be
                negatively impacted. If we have any kind of medical condition or
                are in a similar demographic to those that struggle with their
                health, we may more strongly feel the intrusion of our privacy
                and even experience discrimination via profiling.
              </p>
            </div>

            <div className="max-width max-width--md content-padding">
              <h2 className="header--xl text--center">Authors</h2>
              <Author name="Sharon Lee" />
              <h3 className="header--md margin-top--double">Contributors</h3>
              <Author name="Juhan Sonin" />
              <Divider />
            </div>

            <div className="background--gray pad-vertical--double margin-top--double">
              <div className="max-width max-width--md content-padding">
                <SubscribeForm />
              </div>
            </div>

            <div id="references">
              <div className="max-width max-width--md content-padding">
                <References
                  references={[
                    {
                      title:
                        'Avila, J., & Marshall, S. (2012, September 13). Your Medical Records May Not Be Private: ABC News Investigation. Retrieved May 2, 2019',
                      link:
                        'https://abcnews.go.com/Health/medical-records-private-abc-news-investigation/story?id=17228986',
                    },
                    {
                      title:
                        'Doshi, J. A., Hendrick, F. B., Graff, J. S., & Stuart, B. C. (2016). Data, Data Everywhere, But Access Remains a Big Issue for Researchers: A Review of Access Policies for Publicly-Funded Patient-level Health Care Data in the United States. EGEMs (Generating Evidence & Methods to Improve Patient Outcomes), 4(2), 8. doi:10.13063/2327-9214.1204',
                    },
                    {
                      title:
                        'Golle, P. (2006). Revisiting the uniqueness of simple demographics in the US population. Proceedings of the 5th ACM Workshop on Privacy in Electronic Society - WPES 06. doi:10.1145/1179601.1179615',
                    },
                    {
                      title:
                        'Health Care Data Management & Data Linking - LexisNexis. (2016, October 31). Retrieved May 2, 2019',
                      link: 'https://perma.cc/LL7V-BWXR',
                    },
                    {
                      title:
                        'Leetaru, K. (2018, April 02). How Data Brokers And Pharmacies Commercialize Our Medical Data. Retrieved May 2, 2019',
                      link:
                        'https://www.forbes.com/sites/kalevleetaru/2018/04/02/how-data-brokers-and-pharmacies-commercialize-our-medical-data/#71c8e52911a6',
                    },
                    {
                      title:
                        'Pettypiece, S., & Robertson, J. (2014, September 11). Sick Elderly for Sale by Data Miners for 15 Cents a Name. Retrieved May 2, 2019',
                      link:
                        'https://www.bloomberg.com/news/articles/2014-09-11/how-big-data-peers-inside-your-medicine-chest ',
                    },
                    {
                      title:
                        'Ramirez, E., Brill, J., Ohlhausen, M. K., Wright, J. D., & McSweeny, T. (n.d.). Data brokers: A call for transparency and accountability (United States, Federal Trade Commission).',
                      link:
                        'https://www.ftc.gov/system/files/documents/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014/140527databrokerreport.pdf',
                    },
                    {
                      title:
                        'Ravindranath, M. (2018, October 30). Does your doctor need to know what you buy on Amazon? Retrieved May 2, 2019',
                      link:
                        'https://www.politico.com/story/2018/10/30/the-doctor-will-see-through-you-now-893437',
                    },
                    {
                      title:
                        'Statt, N. (2019, February 22). App makers are sharing sensitive personal information with Facebook but not telling users. Retrieved May 2, 2019',
                      link:
                        'https://www.theverge.com/2019/2/22/18236398/facebook-mobile-apps-data-sharing-ads-health-fitness-privacy-violation',
                    },
                    {
                      title:
                        'STD.DATERS.COM - AIDS/HIV MEMBERS POSTAL & EMAIL Mailing List. (n.d.).',
                      link: 'https://perma.cc/6LPR-V6FH',
                    },
                    {
                      title:
                        'Tanner, A. (2016, February 01). How Data Brokers Make Money Off Your Medical Records. Retrieved May 2, 2019',
                      link:
                        'https://www.scientificamerican.com/article/how-data-brokers-make-money-off-your-medical-records/',
                    },
                    {
                      title:
                        'Tanner, A. (2017, March 02). Strengthening Protection of Patient Medical Data. Retrieved May 2, 2019',
                      link:
                        'https://tcf.org/content/report/strengthening-protection-patient-medical-data/?agreed=1',
                    },
                    {
                      title:
                        'Tanner, A. (2018). Our Bodies, Our Data: How Companies Make Billions Selling our Medical Records. Boston, MA: Beacon Press.',
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

export default HealthDataUseFeature
