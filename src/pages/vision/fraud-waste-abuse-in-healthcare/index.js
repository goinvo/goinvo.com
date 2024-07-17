import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Quote from '../../../components/quote'
import Author from '../../../components/author'
import References from '../../../components/references'
import Divider from '../../../components/divider'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Fraud, Waste, and Abuse in Healthcare - GoInvo',
  metaDescription:
    'The $1 Trillion yearly burden on the US Healthcare system.',
  heroImage:
    '/images/features/fraud-waste-abuse-in-healthcare/fwa-hero1.png',
}


class FraudWasteAbuseHealthcare extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="virtual-diabetes-care-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Fraud, Waste, and Abuse in Healthcare
              </h1>
              <h2 className="header--lg margin-top--lg margin-bottom--none">
                30% of US Healthcare spending is lost to Fraud, Waste, and Abuse.
                <sup><a href="#methodology">A1</a></sup>{' '}
              </h2>
              <p>
                Fraud, Waste, and Abuse (FWA) is a challenge in every industry.<br /> 
                In healthcare, FWA leads to significant financial losses, estimated 
                to cost the U.S. healthcare system billions of dollars annually. 
                This misuse of resources drives up healthcare costs and impacts the 
                quality of care that patients receive. 
              </p>
              <p>
                Our research in 2024 explores identifying the size of FWA in Healthcare, setting 
                a common vocabulary of definitions and categories, and potential solutions.
              </p>
              <p>
                We looked into FWA a decade ago.
                Sadly, there is still no national effort on tracking with rigor, and little publically reported data.  
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  What is Fraud, Waste, and Abuse?
                </h1>
              </div>
              <h2 className="header--lg text--left">Crafting a common definition</h2>
              <p>
                Healthcare organizations have varying definitions of FWA.
                We've taken the FWA definition from several organizations 
                and have distilled each into a single sentence.
              </p>
              <div className="columns">
                <div className="columns__item--2">
                  <p><strong className="text--teal">Fraud:</strong> intentional misuse of healthcare system resources.</p>
                  <p><strong className="text--teal">Waste:</strong> unintentional misuse of healthcare system resources.</p>
                  <p><strong className="text--teal">Abuse:</strong> misuse of healthcare system resources independent of intention.</p>
                </div>
                <div className="columns__item--2">
                <div className="margin-auto">
                  <Image
                    src="/images/features/fraud-waste-abuse-in-healthcare/fwa-definition1.jpg"
                    className="image--max-width-small"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  </div>
                </div>
              </div>
              <p>
                Based on these definitions, the focus is on the intent to determine Fraud or Waste. While Abuse becomes the umbrella for all misuse of healthcare 
                resources regardless of intent.
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  The Cost of FWA, $1 Trillion
                </h1>
              </div>
              <h2 className="header--lg text--left">Estimating FWA</h2>
              <p>
                Finding the total amount of Fraud, Waste, and Abuse is a challenge.<br />
                In our research, we found an estimate of 10% fraud and 20% waste, totaling 30%. 
                <sup>
                  <a href="#methodology">A1</a>
                </sup>{' '}
                While the data below is from 2009, today in 2024, it is still the most recent estimate of total FWA in US Healthcare.
              </p>
              <Quote
                quotee="United States Department of Health and Human Services (HHS)"
              >
                30 percent of U.S. health spending (public and private) in 2009 — 
                roughly $750 billion — was wasted on unnecessary services, excessive 
                administrative costs, fraud, and other problems.
                <sup><a href="#references">5</a></sup>{' '}
              </Quote>      
              <h2 className="header--lg text--center">30% FWA</h2>
              <div className="margin-auto">
                <Image
                  src="/images/features/fraud-waste-abuse-in-healthcare/fwa-high-pie2.jpg"
                  className="image--max-width-half image--center"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <h2 className="header--md text--center">
                Fraud 10% + Waste 20%
                <sup><a href="#methodology"> A2</a></sup>{' '}
              </h2>
              

              <Quote
                quotee="Federal Bureau of Investigation (FBI)"
              >
                Estimates of fraudulent billings to health care programs, both public 
                and private, are estimated between 3 and 10 percent of total health care 
                expenditures.
                <sup><a href="#references">3</a></sup>{' '}
              </Quote>

              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Common Fraud, Waste, Abuse Enumeration
                </h1>
              </div>
              <p>
              We created a common language of canonical examples to describe fraud, waste, and abuse in healthcare.
              </p>
              <p>
              The concept would be to establish these as a healthcare standard, similar to documenting <a href="https://www.cve.org/">software vulnerabilities</a>, or <a href="https://en.wikipedia.org/wiki/ICD-10">ICD-10 codes</a> for diagnoses, symptoms, and procedures. 
              </p>

              <ul>
                <li>Series A - Charge submitted for service not provided. </li>
                <li>Series B - Unnecessary service provided. </li>
                <li>Series C - Kickback involved for provided service. </li>
                <li>Series D - Actor not eligible for provided service. </li>
                <li>Series E - Overcharge submitted for provided service. </li>
                <li>Series F - Payment denied for provided service. </li>
                <li>Series G - Provided service not covered. </li>
              </ul>
               
              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Recovering FWA
                </h1>
              </div>
              <h2 className="header--lg text--left">For every $1 Invested, $4 Recovered</h2>
              <div className="margin-auto">
                  <Image
                    src="/images/features/fraud-waste-abuse-in-healthcare/roi.jpg"
                    className="image--max-width-med image--center"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
              </div>
              <p>
                The Department of Health and Human Services (HHS) and the Department of Justice (DOJ) 
                have a joint Health Care Fraud and Abuse Control (HCFAC) Program. The HCFAC protects consumers and taxpayers by combating healthcare fraud. 
              </p>
              <p>
                Over the last three years, they returned $4 for every $1 invested in recovery efforts.<sup><a href="#references">4</a></sup>{' '}
              </p>
              <p>
                Below, we can look deeper into FY2021 spending and recovery. 
              </p>
              
              <div className="columns">
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> $1.1B </div>
                  <p className="text--center">
                    Dollars Invested In FWA Recovery 
                    <sup><a href="#references"> 4</a></sup>{' '}
                  </p>
                </div>       
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> $1.9B </div>
                  <p className="text--center">
                    Dollars <br /> Recovered
                    <sup><a href="#references"> 4</a></sup>{' '}
                  </p>
                </div>
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> 0.14% </div>
                  <p className="text--center">
                    Percent of loss Recovered
                    <sup><a href="#methodology"> A3</a></sup>{' '}
                  </p>
                </div> 
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl">0.026%</div>
                  <p className="text--center">
                    Percent of Spending Put Towards Recovery
                    <sup><a href="#methodology"> A4</a></sup>{' '}
                  </p>
                </div>
              </div>
              <p>
                While FY2021 was on the lower end of success during the three year rolling average, the HCFAC
                made $0.9B from their efforts. Only 0.14% of loss to fraud, waste, and abuse was recovered, 
                leaving tons of money intended for healthcare use unrecovered. 

                The $0.9B success, paired with the low 0.026% of US Healthcare spending allocated to the 
                HCFAC for recovery efforts, makes us question why not invest more? 
              </p>


              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Proposed Solutions
                </h1>
              </div>
              
              <div className="columns">
                <div className="columns__item--2 container--align-center">
                <h2 className="header--lg text--left">Concept 1: Health Accuracy Receipt</h2>
                  <p>
                    The Health Accuracy Receipt uses the patient as the fraud detection system.
                  </p>
                  <p>
                    The receipt is sent to patients after an encounter to confirm what happened during their visit.
                  </p>
                  <p>
                    It makes reporting fraud, waste, and abuse available to anyone.
                  </p>
                </div>
                <div className="columns__item--2 container--align-center">
                  <div className="margin-auto">
                    <Image
                      src="/images/features/fraud-waste-abuse-in-healthcare/phone.png"
                      className="image--max-width"
                    />
                  </div>
                </div>
              </div>
              <h2 className="header--lg text--left">Concept 2: FWA Tracker</h2>
              <p>
                The FWA Tracker is a real-time fraud, waste, and abuse detection dashboard. 
                It is built from a database which collects data from numerous sources, such as the Health Accuracy Receipt.
              </p>
              <div className="margin-auto pad-top">
                <Image
                  src="/images/features/fraud-waste-abuse-in-healthcare/map-view.jpg"
                  className="image--max-width"
                />
              </div>
              <div className="margin-auto pad-top--crazy">
                <Image
                  src="/images/features/fraud-waste-abuse-in-healthcare/tree-view-v02.jpg"
                  className="image--max-width"
                />
              </div>

            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <p className="text--gray">
                Below is a description of the methodology used in creating the Fraud, Waste, and Abuse in US Healthcare 
                report. Calculations are based on expert estimates, therefore final percentages are an estimate
                and should not be viewed as absolute numbers.
                </p>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v1 - 1.Jul.2024
                </h3>

                <h2 className="header--md">Calculations</h2>

                <p className="text--gray">
                  A1 - 30% of US healthcare spending lost to FWA <br />
                  Total value:{' '}
                  <strong className="text--teal">
                    10% <sup><a href="#references">3</a></sup>{' '}
                    + 20% <sup><a href="#references">2</a></sup>{' '}
                    = 30%
                  </strong> 
                  <br /><br />
                  A2 - $1.32T of US healthcare spending lost to FWA <br />
                  Total value:{' '}
                  <strong className="text--teal">
                    $4.4T <sup><a href="#references">1</a></sup>{' '}
                     x 30% <sup><a href="#methodology">A1</a></sup>{' '}
                     = $1.32T
                  </strong> 
                  <br /><br />
                  A3 - 0.14% of loss to FWA is recovered<br />
                  Total value:{' '}
                  <strong className="text--teal">
                    $1.9B <sup><a href="#references">4</a></sup>{' '}
                    / $1.32T <sup><a href="#methodology">A2</a></sup>{' '}
                    = 0.1439%
                  </strong> 
                  <br /><br />
                  A4 - 0.0257% of total heathcare spending is put towords recovery<br />
                  Total value:{' '}
                  <strong className="text--teal">
                    $1.129B <sup><a href="#references">4</a></sup>{' '}
                    / $4.4T <sup><a href="#references">1</a></sup>{' '}
                    = 0.0257%
                  </strong>
                </p>
                
              </div>
            </div>
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
                <Author name="Michelle Bourdon" />
                <Author name="Eric Benoit" />
                <Author name="Juhan Sonin" />
              </div>
            </div>
          </div>  
            
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
                <h3 className="header--md">Contributors</h3>
                <p>
                  Edwin Choi, GoInvo <br />
                  Anesu Machoko, MetaDigital <br />
                  Philip Mattera, Good Jobs First <br />
                  Siobhan Standaert, Good Jobs First <br />
                  Jung Hoon Son, Clinicians.fyi
                </p>
            </div>    
          </div>   

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'American Medical Association. Trends in health care spending. Published April 25, 2024. Accessed June 18, 2024',
                      link:
                        'https://www.ama-assn.org/about/research/trends-health-care-spending',
                    },
                    {
                      title:
                        'Peterson Foundation. Almost 25% of Healthcare Spending is Considered Waseful. Published April 3, 2023. Accessed June 18, 2024',
                      link:
                        'https://www.pgpf.org/blog/2023/04/almost-25-percent-of-healthcare-spending-is-considered-wasteful-heres-why',
                    },
                    {
                      title:
                        'National Health Care Anti-Fraud Assosiation. Testimony of the National Health Care Anti-Fraud Assosiation to the House of Insurance Committee. Published Juanuary 28, 2010. Accessed June 18, 2024',
                      link:
                        'https://www.kff.org/wp-content/uploads/sites/3/2011/12/2010_0017_0014_tstmny.pdf',
                    },       
                    {
                      title:
                        'US Department of Justice, US Department of Health and Human Services. Annual Report of the Departments of Health and Human Services and Justice. Published July, 2022. Accessed June 18, 2024',
                      link:
                        'https://oig.hhs.gov/documents/hcfac/1177/OIG-HCFAC-2021-Complete%20Report.pdf',
                    },
                    {
                      title:
                        'US Department of Health and Human Services. Management Challenge 2: Fighting Fraud, Waste, and Abuse in Medicaire Parts A and B. Published March, 2015. Accessed June 18, 2024',
                      link:
                        'https://github.com/goinvo/fraud-waste-abuse/blob/main/estimate-of-fwa-in-medicaid.pdf',
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

export default FraudWasteAbuseHealthcare
