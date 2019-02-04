import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Healthscape',
  metaDescription:
    'A map of the allocation and flow of money in the US healthcare system and its components.',
  heroImage: '/images/services/healthscape-hero.jpg',
}

class Healthscape extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthscape">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Healthscape</h1>
              <h3 className="header--md">To Understand the Healthcare system, follow the money</h3>
              <p>
                Healthscape is a map of the US healthcare system and its components. By following the allocation and flow of money in healthcare, the thread of how the organizations, departments, and major players are connected becomes apparent.
              </p>
              <p>
                Healthscape serves two purposes. The first is to provide the public and professionals interested in the healthcare space a way to increase understanding and explore how all the pieces fit together. The second is to give providers, patient advocacy groups, health policymakers, and health economists a visual communication tool to discuss issues at the higher health systems level.
              </p>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="poster margin-top--double">
                <Image
                  src="/images/features/healthscape/healthscape-poster.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullInsideMediumMaxWidth}
                />
              </div>
              <div className="button-group">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                >
                  Download Poster
                </a>
              </div>
              <div>
                <p className="text--gray">*Tax exclusion $ amount is not added into the $3,500B national health expenditure. Though it is a part of expenditure, it is not included in many data sources and is unclear how it should be best organized without causing contradictions in the expenditure breakdowns.</p>
                <p className="text--gray">*$168B in research is a higher $ amount than the category breakdowns within it, as the $ amounts are taken from sources from differing years.</p>
                <p className="text--gray">*All $ amounts have been rounded to the nearest billionth for readability and scanning purposes.</p>
              </div>

              <Divider />

              <p>
                The US healthcare system is extremely convoluted. To call it “spaghetti” would be an understatement. Because of the complexity, accurately capturing and following associative and financial relationships is difficult. The wider picture of how organizations are connected, how money flows through the US healthcare system is difficult to see. As a result, public discourse around US healthcare issues and reforms are often too narrow in context. Many consumer services and products developed in the health technology space don’t consider long term, primary, secondary or tertiary, downstream effects they will have on the market or for patients in this wider view.
              </p>
              <p>
                Healthscape provides a detailed high-level view of major components within the US healthcare system and how they interact. The map serves as a communication tool for health professionals, organizations, groups, and policymakers to develop services and policies with the context of the larger picture of how their plans may impact the nation from the government to individual patients. Healthscape also provides a canvas for professionals to use, projecting their services and products on the map, to more effectively drive development that aligns with our patient health avlues.
              </p>
              <h3 className="header--md">We’d love your feedback</h3>
              <p>
                The current draft of Healthscape maps some major players onto one visualization. However, there are many parts of the system that have yet to be incorporated, and there may yet be improved ways to represent those relationships than the approach taken here.
              </p>
              <p>
                Send feedback on this draft to <a
                  href="mailto:hello@goinvo.com?subject=Healthscape"
                  target="_blank"
                  rel="noopener noreferrer"
                  >hello@goinvo.com</a>, and help us, as well as others, gain a better understanding of the often convoluted, and complex, system that is our healthcare.
              </p>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h1 className="header--xl">Methodology</h1>
                <p className="text--gray">
                  Below is a description of the methodology used in creating the Healthscape visualization. It is updated based on continuing research and feedback.
                </p>
                <h4 className="header--sm margin-bottom--half">
                  v1 - 30.Jan.2019
                </h4>
                <p className="text--gray">
                  The components of the healthcare system to include in the visualization were primarily based on what public data was available. Some expenditures were based on older estimates due to difficulty in finding up to date data (such as administrative costs for private health insurance).
                </p>
                <p className="text--gray">
                  Other expenditures, such as numbers on fraud waste and abuse for health insurance programs, are best guesses based on a range of estimates as referenced below.
                </p>

                <p>
                  <span className="text--gray">Column 1, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$3,500B<strong>, 2017 National Health Expenditure
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 2, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$2,600B<strong>, 2017 National health insurance
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$366B<strong>, 2017 Out of pocket
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$355B<strong>, 2017 Other third party payers and public health activity
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$250B<strong>, 2017 Tax exclusion, employee health insurance subsidy
                      <sup>
                        <a href="#references">2</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$168B</strong>, 2017 Research
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 3, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$1,200B</strong>, 2017 Private health insurance
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$1,400B</strong>, 2017 Public health insurance
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$103B</strong>, 2015 Private funds
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$36B</strong>, 2017 Public funds
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$5B</strong>, 2017 Nonprofit foundations
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 4, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$1,030.8B</strong>, 2017 Patient benefits
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$3,500B</strong>, 2017 private health insurance expenditure
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                      minus <strong className="text--primary">$169.2B</strong> 2017 estimated administrative costs in private health insurance.
                    </li>
                    <li>
                      <strong className="text--primary">$169.2B</strong>, 2017 Administrative costs, private health insurance
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">14.1%</strong> in private health insurance administrative costs
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                      , multiplied by <strong className="text--primary">$3,500B</strong> 2017 expenditure
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$804.51B</strong>, 2017 Medicare expenditure
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$582B</strong>, 2017 Medicaid expenditure
                      <sup>
                        <a href="#references">7</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$133B</strong>, 2017 Other health insurance programs
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$72B</strong>, 2015 Pharmaceutical private funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$17B</strong>, 2015 Medical technology private funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$6B</strong>, 2015 Biotechnology private funds
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$7B</strong>, 2015 Other sectors
                      <sup>
                        <a href="#references">3</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 5, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$534.64B</strong>, 2018 Insurance claims & indemnities for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$203.73B</strong>, 2018 Grants, subsidies, contributions for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$66.13</strong>, 2018 Other expenses for Medicare
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$71B</strong>, 2017 Administrative costs of Medicaid
                      <sup>
                        <a href="#references">8</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">12.2%</strong>  is mean administrative loss % for MCOs, multiplied by
                      <strong className="text--primary">$582B</strong> 2017 Medicaid expenditure
                      <sup>
                        <a href="#references">7</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$511B</strong>, 2017 Patient benefits from Medicaid
                      <sup>
                        <a href="#references">8</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$582B</strong>, 2017  Medicaid expenditure
                      <sup>
                        <a href="#references">7</a>
                      </sup>
                      , minus <strong className="text--primary">$71B</strong> 2017 administrative costs of Medicaid
                      <sup>
                        <a href="#references">8</a>
                      </sup>
                      , minus <strong className="text--primary">$46B</strong> 2017 administrative costs of Medicaid
                      <sup>
                        <a href="#references">9</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$45.8B</strong>, 2014 Fraud, waste, abuse within Medicaid
                      <sup>
                        <a href="#references">9</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$52.55B</strong>, 2017 TRICARE expenditure
                      <sup>
                        <a href="#references">10</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$17.52B</strong>, 2017 CHIP expenditure
                      <sup>
                        <a href="#references">11</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$62B</strong>, 2017 Other health insurance programs not listed here
                    </li>
                    <li>
                      <strong className="text--primary">$133B</strong>, 2017 Other health insurance programs
                      <sup>
                        <a href="#references">1</a>
                      </sup>
                      , minus <strong className="text--primary">$63B</strong> 2017 TRICARE
                      <sup>
                        <a href="#references">10</a>
                      </sup>
                      , minus <strong className="text--primary">$18B</strong> 2017 CHIP
                      <sup>
                        <a href="#references">11</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 6, National health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$454.14B</strong>, 2018 Patient benefits for Medicare
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$534.64B</strong>,  Insurance claims & indemnities, minus
                      <strong className="text--primary">$80.5B</strong> 2018 fraud, waste, and abuse
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$80.5B</strong>, 2018 Fraud, waste, and abuse for Medicare
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">10%</strong> estimated fraud, waste, and abuse in 2012
                      <sup>
                        <a href="#references">12</a>
                      </sup>
                      , multiplied by <strong className="text--primary">$804.51B</strong> Medicare expenditure
                      <sup>
                        <a href="#references">6</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 1, Personal health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$2,800B</strong>, 2016 Personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 2, Personal health expenditure section</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$1,070B</strong>, 2016 Hospital, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$658B</strong>, 2016 Physician and clinical, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$325B</strong>, 2016 Prescription drugs, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$160B</strong>, 2016 Nursing care facilities & continuing care, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$123B</strong>, 2016 Dental, personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$375B</strong>, 2016 Other personal health expenditure
                      <sup>
                        <a href="#references">13</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 1, Health and human services expenditure</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$1,110B</strong>, 2018 Health and human services expenditure
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                  </ul>
                </p>

                <p>
                  <span className="text--gray">Column 2, Health and human services expenditure</span>
                  <ul className="ul">
                    <li>
                      <strong className="text--primary">$1T</strong>, 2018 Centers for Medicare & Medicaid Services
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$47B</strong>, 2018 Administration for children & families
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$26B</strong>, 2018 National Institutes of Health
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$6B</strong>, 2018 Centers for Disease Control & Prevention
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$5B</strong>, 2018 Indian Health Service
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$4B</strong>, 2018 Substance abuse and mental health services administration
                      <sup>
                        <a href="#references">14</a>
                      </sup>
                    </li>
                    <li>
                      <strong className="text--primary">$2B</strong>, 2018 Food and drug administration
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
                <h1 className="header--xl">Author</h1>

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
                        'NCHHSTP Social Determinants of Health. (2014). Retrieved March 14, 2016',
                      link:
                        'http://www.cdc.gov/nchhstp/socialdeterminants/definitions.html',
                    },
                    {
                      title:
                        'The determinants of health. (n.d.). Retrieved March 14, 2016',
                      link: 'http://www.who.int/hia/evidence/doh/en/',
                    },
                    {
                      title:
                        'Social Determinants of Health. (n.d.). Retrieved March 14, 2016',
                      link:
                        'https://www.healthypeople.gov/2020/topics-objectives/topic/social-determinants-of-health',
                    },
                    {
                      title:
                        'Beyond Health Care: The Role of Social Determinants in Promoting Health and Health Equity. (n.d.). Retrieved March 14, 2016',
                      link:
                        'http://kff.org/disparities-policy/issue-brief/beyond-health-care-the-role-of-social-determinants-in-promoting-health-and-health-equity/',
                    },
                    {
                      title:
                        'Schroeder, S. A. (2007). We Can Do Better — Improving the Health of the American People. New England Journal of Medicine N Engl J Med,357(12), 1221-1228.',
                    },
                    {
                      title:
                        'The Relative Contribution of Multiple Determinants to Health Outcomes. (n.d.). Retrieved March 14, 2016',
                      link:
                        'http://healthaffairs.org/healthpolicybriefs/brief_pdfs/healthpolicybrief_123.pdf',
                    },
                    {
                      title:
                        'Capturing social and behavioral domains and measures in electronic health records: Phase 2. (2014). Washington D.C.: The National Academies Press.',
                    },
                    {
                      title:
                        'Gruszin, S., & Jorm, L. (2010, December). Public Health Classifications Project (Rep.). Retrieved March 15, 2016, from New South Wales Department of Health website',
                      link:
                        'http://www.health.nsw.gov.au/hsnsw/Publications/classifications-project.pdf',
                    },
                    {
                      title:
                        'DHHS, Public Health Service. “Ten Leading Causes of Death in the United States.” Atlanta (GA): Bureau of State Services, July 1980',
                    },
                    {
                      title:
                        'J.M.McGinnis and W.H.Foege. “Actual Causes of Death in the United States.” JAMA 270, No. 18 (1993):2207-12',
                    },
                    {
                      title:
                        'J.M.McGinnis et al, “The Case for More Active Policy Attention to Health Promotion.” Health Affairs 21, no.2 (2002):78-93',
                    },
                    {
                      title:
                        'A.Mokdad et al. “Actual Causes of Death in the United States 2000.” JAMA 291, no.10 (2004):1238-45',
                    },
                    {
                      title:
                        'G.Danaei et al, “The Preventable Cuases of Death in the United States: Comparative Risk Assessment of Dietary, Lifestyle, and Metabolic Risk Factors.” PLoS Medicine 6, no. 4 (2009):e1000058',
                    },
                    {
                      title:
                        'World Health Organization, Global Health Risks: Mortality and Burden of Disease Attributable to Selected Major Risks, Geneva: WHO, 2009',
                    },
                    {
                      title:
                        'B. Booske et al., “Different Perspectives for Assigning Weights to Determinants of Health.” County Health Rankings Working Paper. Madison (WI): University of Wisconsin Population Health Institute, 2010',
                    },
                    {
                      title:
                        'Schneiderman, N., Ironson, G., & Siegel, S. D. (2005). STRESS AND HEALTH: Psychological, Behavioral, and Biological Determinants. Annual Review of Clinical Psychology, 1, 607-628. Retrieved March 16, 2016',
                      link:
                        'http://www.annualreviews.org/doi/abs/10.1146/annurev.clinpsy.1.102803.144141?url_ver=Z39.88-2003&rfr_dat=cr_pub=pubmed&rfr_id=ori:rid:crossref.org&journalCode=clinpsy',
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

export default Healthscape
