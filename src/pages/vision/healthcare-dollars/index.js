import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Where Your Health Dollars Go',
  metaDescription:
    'Tracking the allocation and flow of money in the US healthcare system to reveal connections within.',
  heroImage: '/images/features/healthcare-dollars/healthcare-dollars-hero.jpg',
}

class HealthcareDollars extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthcare-dollars">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Where Your Health Dollars Go</h1>
              <h4 className="header--sm">
                To Understand the Healthcare system, follow the money
              </h4>
              <p>
                Healthscape is a map of the US healthcare system and its
                components. By following the allocation and flow of money in
                healthcare, the thread of how the organizations, departments,
                and major players are connected becomes apparent.
              </p>
              <p>
                Healthscape serves two purposes. The first is to provide the
                public and professionals interested in the healthcare space a
                way to increase understanding and explore how all the pieces fit
                together. The second is to give providers, patient advocacy
                groups, health policymakers, and health economists a visual
                communication tool to discuss issues at the higher health
                systems level.
              </p>
            </div>

            <div className="poster margin-top--double">
              <a
                href={mediaUrl(
                  '/pdf/vision/healthcare-dollars/healthcare-dollars.pdf'
                )}
                target="_blank"
              >
                <Image
                  src="/images/features/healthcare-dollars/healthcare-dollars-preview-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMediumMaxWidth}
                />
              </a>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/healthcare-dollars/healthcare-dollars.pdf'
                  )}
                  target="_blank"
                  className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                >
                  Download Poster
                </a>
              </div>
              <div className="text--sm text--gray">
                <p>
                  *Tax exclusion $ amount is not added into the $3,500B national
                  health expenditure. Though it is a part of expenditure, it is
                  not included in many data sources and is unclear how it should
                  be best organized without causing contradictions in the
                  expenditure breakdowns.
                </p>
                <p>
                  *$168B in research is a higher $ amount than the category
                  breakdowns within it, as the $ amounts are taken from sources
                  from differing years.
                </p>
                <p>
                  *All $ amounts have been rounded to the nearest billionth for
                  readability and scanning purposes.
                </p>
              </div>

              <Divider />

              <p className="margin-top--double">
                The US healthcare system is extremely convoluted. To call it
                “spaghetti” would be an understatement. Because of the
                complexity, accurately capturing and following associative and
                financial relationships is difficult. The wider picture of how
                organizations are connected, how money flows through the US
                healthcare system is difficult to see. As a result, public
                discourse around US healthcare issues and reforms are often too
                narrow in context. Many consumer services and products developed
                in the health technology space don’t consider long term,
                primary, secondary or tertiary, downstream effects they will
                have on the market or for patients in this wider view.
              </p>
              <p>
                Healthscape provides a detailed high-level view of major
                components within the US healthcare system and how they
                interact. The map serves as a communication tool for health
                professionals, organizations, groups, and policymakers to
                develop services and policies with the context of the larger
                picture of how their plans may impact the nation from the
                government to individual patients. Healthscape also provides a
                canvas for professionals to use, projecting their services and
                products on the map, to more effectively drive development that
                aligns with our patient health values.
              </p>
              <h2 className="header--lg margin-top--double text--center">
                We’d love your feedback
              </h2>
              <p>
                The current draft of Healthscape maps some major players onto
                one visualization. However, there are many parts of the system
                that have yet to be incorporated, and there may yet be improved
                ways to represent those relationships than the approach taken
                here.
              </p>
              <p>
                Send feedback on this draft to{' '}
                <a
                  href="mailto:hello@goinvo.com?subject=Healthcare%20Dollars"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@goinvo.com
                </a>
                , and help us, as well as others, gain a better understanding of
                the often convoluted, and complex, system that is our
                healthcare.
              </p>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <p>
                  Below is a description of the methodology used in creating the
                  Healthscape visualization. It is updated based on continuing
                  research and feedback.
                </p>
                <h4 className="header--sm margin-bottom--half margin-top--double">
                  v1 - 30.Jan.2019
                </h4>
                <p>
                  The components of the healthcare system to include in the
                  visualization were primarily based on what public data was
                  available. Some expenditures were based on older estimates due
                  to difficulty in finding up to date data (such as
                  administrative costs for private health insurance).
                </p>
                <p>
                  Other expenditures, such as numbers on fraud, waste, and abuse
                  for health insurance programs, are best guesses based on a
                  range of estimates as referenced below.
                </p>

                <p className="margin-top--double">
                  <span className="text--gray text--sm">
                    Column 1, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$3,500B</strong>, 2017 National Health Expenditure
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 2, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$2,600B</strong>, 2017 National health insurance
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$366B</strong>, 2017 Out of pocket
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$355B</strong>, 2017 Other third party payers and
                      public health activity
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$250B</strong>, 2017 Tax exclusion, employee
                      health insurance subsidy
                      <sup>
                        <a href="#references">2</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$168B</strong>, 2017 Research
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 3, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$1,200B</strong>, 2017 Private health insurance
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$1,400B</strong>, 2017 Public health insurance
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$103B</strong>, 2015 Private funds
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$36B</strong>, 2017 Public funds
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$5B</strong>, 2017 Nonprofit foundations
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 4, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$1,030.8B</strong>, 2017 Patient benefits
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>$3,500B</strong>, 2017 private health
                          insurance expenditure
                          <sup>
                            <a href="#references">1</a>
                          </sup>
                          minus <strong>$169.2B</strong> 2017 estimated
                          administrative costs in private health insurance.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>$169.2B</strong>, 2017 Administrative costs,
                      private health insurance
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>14.1%</strong> in private health insurance
                          administrative costs
                          <sup>
                            <a href="#references">5</a>
                          </sup>
                          , multiplied by <strong>$3,500B</strong> 2017
                          expenditure
                          <sup>
                            <a href="#references">1</a>
                          </sup>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>$804.51B</strong>, 2017 Medicare expenditure
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$582B</strong>, 2017 Medicaid expenditure
                      <sup>
                        <a href="#references">7</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$133B</strong>, 2017 Other health insurance
                      programs
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$72B</strong>, 2015 Pharmaceutical private funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$17B</strong>, 2015 Medical technology private
                      funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$6B</strong>, 2015 Biotechnology private funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$7B</strong>, 2015 Other sectors
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 5, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$534.64B</strong>, 2018 Insurance claims &
                      indemnities for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$203.73B</strong>, 2018 Grants, subsidies,
                      contributions for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$66.13</strong>, 2018 Other expenses for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$71B</strong>, 2017 Administrative costs of
                      Medicaid
                      <sup>
                        <a href="#references">8</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>12.2%</strong> is mean administrative loss %
                          for MCOs, multiplied by
                          <strong>$582B</strong> 2017 Medicaid expenditure
                          <sup>
                            <a href="#references">7</a>
                          </sup>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>$511B</strong>, 2017 Patient benefits from
                      Medicaid
                      <sup>
                        <a href="#references">8</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>$582B</strong>, 2017 Medicaid expenditure
                          <sup>
                            <a href="#references">7</a>
                          </sup>
                          , minus <strong>$71B</strong> 2017 administrative
                          costs of Medicaid
                          <sup>
                            <a href="#references">8</a>
                          </sup>
                          , minus <strong>$46B</strong> 2017 administrative
                          costs of Medicaid
                          <sup>
                            <a href="#references">9</a>
                          </sup>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong>$45.8B</strong>, 2014 Fraud, waste, and abuse
                      within Medicaid
                      <sup>
                        <a href="#references">9</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$52.55B</strong>, 2017 TRICARE expenditure
                      <sup>
                        <a href="#references">10</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$17.52B</strong>, 2017 CHIP expenditure
                      <sup>
                        <a href="#references">11</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$62B</strong>, 2017 Other health insurance
                      programs not listed here
                      <ul>
                        <li>
                          <strong>$133B</strong>, 2017 Other health insurance
                          programs
                          <sup>
                            <a href="#references">1</a>
                          </sup>
                          , minus <strong>$63B</strong> 2017 TRICARE
                          <sup>
                            <a href="#references">10</a>
                          </sup>
                          , minus <strong>$18B</strong> 2017 CHIP
                          <sup>
                            <a href="#references">11</a>
                          </sup>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 6, National health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$454.14B</strong>, 2018 Patient benefits for
                      Medicare
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>$534.64B</strong>, Insurance claims &
                          indemnities, minus
                          <strong>$80.5B</strong> 2018 fraud, waste, and abuse
                          <sup>
                            <a href="#references">12</a>
                          </sup>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>$80.5B</strong>, 2018 Fraud, waste, and abuse for
                      Medicare
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                      <ul>
                        <li>
                          <strong>10%</strong> estimated fraud, waste, and abuse
                          in 2012
                          <sup>
                            <a href="#references">12</a>
                          </sup>
                          , multiplied by <strong>$804.51B</strong> Medicare
                          expenditure
                          <sup>
                            <a href="#references">6</a>
                          </sup>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 1, Personal health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$2,800B</strong>, 2016 Personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 2, Personal health expenditure section
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$1,070B</strong>, 2016 Hospital, personal health
                      expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$658B</strong>, 2016 Physician and clinical,
                      personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$325B</strong>, 2016 Prescription drugs, personal
                      health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$160B</strong>, 2016 Nursing care facilities &
                      continuing care, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$123B</strong>, 2016 Dental, personal health
                      expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$375B</strong>, 2016 Other personal health
                      expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 1, Health and human services expenditure
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$1,110B</strong>, 2018 Health and human services
                      expenditure
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray text--sm">
                    Column 2, Health and human services expenditure
                  </span>
                  <ul className="ul margin-top--none">
                    <li>
                      <strong>$1T</strong>, 2018 Centers for Medicare & Medicaid
                      Services
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$47B</strong>, 2018 Administration for children &
                      families
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$26B</strong>, 2018 National Institutes of Health
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$6B</strong>, 2018 Centers for Disease Control &
                      Prevention
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$5B</strong>, 2018 Indian Health Service
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$4B</strong>, 2018 Substance abuse and mental
                      health services administration
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong>$2B</strong>, 2018 Food and drug administration
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Author</h2>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-edwin-choi.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMediumMaxWidth}
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Edwin Choi</strong>
                      <span className="text--grey">, GoInvo</span>
                    </p>
                    <p className="text--grey">
                      Edwin is a biologist turned designer. Combining the
                      sciences and art, he orchestrates healthcare software
                      experiences to be beautiful and clinically refined. Edwin
                      joined Invo in 2015, is a graduate of University of
                      Washington, and has a masters in biomedical design from
                      Johns Hopkins University.
                    </p>
                  </div>
                </div>
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Historical - Centers for Medicare & Medicaid Services. (2018, December 11). Retrieved Jan 2019',
                      link:
                        'https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nationalhealthaccountshistorical.html',
                    },
                    {
                      title:
                        'The Hidden Subsidy That Helps Pay for Health Insurance. (2018, January 20). Retrieved Jan 2019',
                      link:
                        'https://www.nytimes.com/2017/07/07/health/health-insurance-tax-deduction.html',
                    },
                    {
                      title:
                        'U.S. Investments in Medical and Health Research and Development. (n.d.). Retrieved Jan 2019',
                      link:
                        'https://www.researchamerica.org/sites/default/files/2016US_Invest_R&D_report.pdf',
                    },
                    {
                      title:
                        'US Census Bureau. (2018, September 12). Health Insurance Coverage in the United States: 2017. Retrieved Jan 2019',
                      link:
                        'https://www.census.gov/library/publications/2018/demo/p60-264.html',
                    },
                    {
                      title:
                        'Administrative costs of health insurance schemes: Exploring the reasons for their variability. World Health Organization. (2010). Retrieved Jan 2019',
                      link:
                        'https://www.who.int/health_financing/documents/dp_e_10_08-admin_cost_hi.pdf',
                    },
                    {
                      title:
                        'Data Lab - Budget Function – U.S. Treasury. (n.d.). Retrieved Jan 2019',
                      link:
                        'http://healthaffairs.org/healthpolicybriefs/brief_pdfs/healthpolicybrief_123.pdf',
                    },
                    {
                      title:
                        'CMS Fast Facts - Centers for Medicare & Medicaid Services. (2018, August 1). Retrieved Jan 2019',
                      link:
                        'https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/cms-fast-facts/index.html',
                    },
                    {
                      title:
                        'Medicaid risk-based managed care: analysis of administrative costs for 2016. Milliman. (2017). Retrieved Jan 2019',
                      link:
                        'http://www.milliman.com/uploadedFiles/insight/2017/MedicaidAdminReport-2016.pdf',
                    },
                    {
                      title:
                        'Office of Inspector General, Department of Health and Human Services. (n.d.). Management Challenge 2: Fighting Fraud, Waste, and Abuse in Medicare Parts A and B. Retrieved Jan 2019',
                      link:
                        'https://oig.hhs.gov/reports-and-publications/top-challenges/2015/challenge02.asp',
                    },
                    {
                      title:
                        'Annual Evaluation of the TRICARE Program. Fiscal Year 2018 report. (n.d.). Retrieved Jan 2019',
                      link:
                        'https://www.health.mil/Military-Health-Topics/Access-Cost-Quality-and-Safety/Health-Care-Program-Evaluation/Annual-Evaluation-of-the-TRICARE-Program?type=Reports#RefFeed',
                    },
                    {
                      title:
                        'Total CHIP Spending (in millions). (2018, December 6). Retrieved Jan 2019',
                      link:
                        'https://www.kff.org/medicaid/state-indicator/total-chip-spending/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D',
                    },
                    {
                      title:
                        'The $272 billion swindle. (2014, May 31). Retrieved Jan 2019',
                      link:
                        'https://www.economist.com/united-states/2014/05/31/the-272-billion-swindle',
                    },
                    {
                      title:
                        'Health, United States, 2017. US Department of Health and Human Services. (2017). Retrieved Jan 2019',
                      link: 'https://www.cdc.gov/nchs/data/hus/hus17.pdf',
                    },
                    {
                      title:
                        'FY 2018 Budget in Brief - Overview Tables. (2017, May 23). Retrieved Jan 2019',
                      link:
                        'https://www.hhs.gov/about/budget/fy2018/budget-in-brief/overview-tables/index.html',
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

export default HealthcareDollars
