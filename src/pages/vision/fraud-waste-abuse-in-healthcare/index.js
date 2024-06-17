import React, { Component } from 'react'
import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import columns from '../../../components/columns'
import Divider from '../../../components/divider'

import config from '../../../../config'


const frontmatter = {
  metaTitle: 'Fraud Waste Abuse Healthcare - GoInvo',
  metaDescription:
    'Learn about the problem of fraud, waste, and abuse in the US Healthcare system',
  heroImage:
    '/images/features/virtual-care-diabetes/virtual-care-diabetes-hero.jpg',
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
                3-30% of US Healthcare spending is lost to Fraud, Waste, and Abuse
              </h2>
              <p>
                Fraud, Waste, and Abuse (FWA) is a challenge in every industry. 
                In healthcare, FWA leads to significant financial losses, estimated 
                to cost the U.S. healthcare system billions of dollars annually. 
                This misuse of resources drives up healthcare costs and impacts the 
                quality of care that patients receive. 
              </p>
              <p>
                Our research explores identifying the size of FWA in Healthcare, setting 
                a common vocabulary of definitions and categories, challenges combatting 
                FWA, and potential solutions.
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  What is Fraud, Waste, and Abuse
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
                  <p><b>Fraud:</b> intentional misuse of healthcare system resources.</p>
                  <p><b>Waste:</b> unintentional misuse of healthcare system resources.</p>
                  <p><b>Abuse:</b> misuse of healthcare system resources independent of intention.</p>
                </div>
                <div className="columns__item--2">
                  <p>
                        Add later
                  </p>
                </div>
              </div>
              <p>
                Based on these definitions, Abuse is the umbrella for all misuse of healthcare 
                resources regardless of intent. If intent is identified then it would fall into 
                either Fraud or Waste.
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  The Cost of FWA
                </h1>
              </div>
              <h2 className="header--lg text--left">Estimating FWA</h2>
              <p>
                Finding the total amount of Fraud, Waste, and Abuse is a challenge. 
                In our research, we found a range of estimates for FWA, from 3-30%.
              </p>
              <p className="quote">
                "30 percent of U.S. health spending (public and private) in 2009 — 
                  roughly $750 billion — was wasted on unnecessary services, excessive 
                  administrative costs, fraud, and other problems.” 
                <sup>
                  <a href="#references">11</a>
                </sup>{' '}
                <span className="text--primary">HHS</span>
                <br />
              </p>
              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/rural_urban.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <p className="quote">
                 "Estimates of fraudulent billings to health care programs, both public 
                  and private, are estimated between 3 and 10 percent of total health care 
                  expenditures.”
                <sup>
                    <a href="#references">11</a>
                </sup>{' '}
                <span className="text--primary">FBI</span>
                <br />
              </p>
              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/rural_urban.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  FWA Across Industries
                </h1>
              </div>
              <p>
                FWA occurs in every industry.
                How does the US Healthcare system compare to other US industries in the amount of FWA?
              </p>
              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/point_1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <p>
                Across other industries, US Healthcare experiences one of the highest levels of fraud, 
                waste, and abuse. While manufacturing is a close second, food and retail are significantly 
                less. Despite a lower FWA, food waste and retail theft are more commonly discussed in the media. 
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Common Fraud, Waste, Abuse Enumeration
                </h1>
              </div>
              <p>
              We created a common language with canonical examples to describe fraud, waste, and abuse in healthcare.
              </p>
              <p>
              The concept would be to establish these as a healthcare standard, much like ICD-10, but for FWA. 
              Having a standard set of FWA categories would help to drive national FWA awareness and an open source 
              FWA reporting tool. 
              </p>
              <h2 className="header--lg text--left">Common Fraud, Waste, Abuse Enumeration (CFWAE)</h2>
              <p className="text--left"> 
                1.000 No service was provided but a charge was submitted      <br />
                2.000 A service was provided but it was not necessary         <br />
                3.000 A service was provided but a kickback was involved      <br />
                4.000 A service was provided but the actor was not eligible   <br />
                5.000 A service was provided but an overcharge was submitted  <br />
                6.000 A service was provided but the payment was denied       <br />
                7.000 A service was provided but it was not covered           <br />
              </p>
              <br />
              <h2 className="header--md text--left">1.000 No service was provided but a charge was submitted</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → Patient onboarding → Diagnosis / treatment → <b>Claims</b> → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">19%</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">$97M - $323M</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A provider bills Medicaid for an x-ray that was never taken for the patient.<br />
                  A patient failed to keep his appointment but a charge was submitted as if the appointment took place.<br />
                  Patient was billed for 30 tablets of Oxycontin but half of this amount was delivered to the patient.<br />
                </p>
              </div>

              <h2 className="header--md text--left">2.000 A service was provided but it was not necessary </h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → <b>Patient onboarding</b> → Diagnosis / treatment → Claims → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">10.8%</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">$55M - $185M</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A provider orders an MRI for a sprained ankle.<br />
                  A patient visits multiple providers in order to gain additional prescriptions for a certain drug.<br />
                  A provider falsifies symptoms on a patient record to order additional laboratory tests.<br />
                </p>
              </div>

              <h2 className="header--md text--left">3.000 A service was provided but a kickback was involved</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → Patient onboarding → <b>Diagnosis / treatment</b> → Claims → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">9.1%</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">$46M - $156M</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A nursing home owner requires another provider, such as an ambulance company, to pay the nursing home owner a portion of the money received for rendering services to patients.<br />
                  A patient accepts money from a provider and is directed to go to a specific clinic.<br />
                  Providers are paid additional money to refer Medicaid patients to certain hospitals.<br />
                </p>
              </div>
              
              <h2 className="header--md text--left">4.000 A service was provided but the actor was not eligible</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  <b>Medicaid enrollment</b> → Patient onboarding → Diagnosis / treatment → Claims → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">7.6%</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">$38M - $129M</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A physician allows a non-physician to impersonate a licensed doctor, who medically treats patients and prescribes drugs, and then bills the Medicaid program.<br />
                  A patient uses a neighbor’s Medicaid card in order to receive Medicaid services.<br />
                  False information is used to enroll in Medicaid and then receive Medicaid services.<br />

                </p>
              </div>

              <h2 className="header--md text--left">5.000 A service was provided but an overcharge was submitted</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → Patient onboarding → <b>Diagnosis / treatment</b> → Claims → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A common panel of tests, normally billed using a single code, is split up into individual tests and billed as if they were performed separately. <br />
                  A provider bills for more than 24 hours of treatment services in a day. <br />
                  A lower cost drug is provided to a patient after Medicaid was billed for a brand name prescription. <br />
                </p>
              </div>

              <h2 className="header--md text--left">6.000 A service was provided but the payment was denied</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → Patient onboarding → Diagnosis / treatment → <b>Claims</b> → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  A provider submits a valid claim but it is denied by the payer.<br />
                  The amount owed by the insurer to the healthcare provider under the terms of their contract is undervalued.<br />
                  The insurer overvalued the cost in paying claims.<br />
                </p>
              </div>

              <h2 className="header--md text--left">7.000 A service was provided but it was not covered</h2>
              <div className="background--gray pad-all text--left">
                <p className="text--sm">
                  Medicaid enrollment → Patient onboarding → Diagnosis / treatment → <b>Claims</b> → Post-treatment
                </p>
                <div className="columns">
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of Fraud Cases</p>
                  </div> 
                  <div className="columns__item--2 container--align-center">
                    <div className="pad-top text--center text--serif text--xl">N/A</div>
                    <p className="text--center">Of US Medicaid</p>
                  </div>  
                </div>
                <p className="text--sm">
                  Examples <br />
                  An over the counter drug that is not covered by Medicaid is nevertheless prescribed and billed to Medicaid.<br />
                  A patient uses an ambulance provided by Medicaid for personal use (versus medical use).<br />
                  A patient receives an uncovered cosmetic dental procedure yet the provider bills it as a similar but covered Medicaid procedure.<br />

                </p>
              </div>
              <br />

              <h2 className="header--lg text--left">Total FWA across the categories</h2>
              
              
              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Recovering FWA
                </h1>
              </div>
              <h2 className="header--lg text--left">For every $1 Invested, $4 Recovered</h2>
              <p>
                The Department of Health and Human Services (HHS) and the Department of Justice (DOJ) 
                have a joint Health Care Fraud and Abuse Control Program (HCFAC). The Health Care Fraud 
                and Abuse Control Program Protects Consumers and Taxpayers by Combating Health Care Fraud. 
                Over the last three years, they returned $4 for every $1 invested in recovery efforts. 
                Below, we can look deeper into FY2021 spending and recovery. 
              </p > 
              <br />
              
              <div className="columns">
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> $1.1B </div>
                  <p className="text--center">Dollars Invested In FWA Recovery</p>
                </div>       
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> $1.9B </div>
                  <p className="text--center">Dollars <br /> Recovered</p>
                </div>
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl"> 0.15% </div>
                  <p className="text--center">Percent of loss Recovered</p>
                </div> 
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--xl">0.026%</div>
                  <p className="text--center">Percent of Spending Put Towards Recovery</p>
                </div>
              </div>

              <p>
                While FY2021 was on the lower end of success during the three year rolling average, the HCFAC
                made $0.9B from their efforts. Only 0.15% of loss to fraud, waste, and abuse was recovered, 
                leaving tons of money intended for healthcare use unrecovered. 

                The $0.9B success, paired with the low 0.026% of US Healthcare spending allocated to the 
                HCFAC for recovery efforts, makes us question why not invest more? 
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Recovery Challenges
                </h1>
              </div>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Proposed Solutions
                </h1>
              </div>


              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Methodology
                </h1>
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
                <Author name="Eric Benoit" />
                <Author name="Michelle Bourdon" />
                <Author name="Juhan Sonin" />
                <Author name="Edwin Choi" />
              </div>

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Samson LW, Tarazi W, Turrini G, Sheingold S. Office of the Assistant Secretary for Planning and Evaluation.   Medicare Beneficiaries’ Use of Telehealth in 2020: Trends by Beneficiary Characteristics and Location. Published December 3, 2021. Accessed December 8, 2022',
                      link:
                        'https://aspe.hhs.gov/reports/medicare-beneficiaries-use-telehealth-2020',
                    },
                    {
                      title:
                        'U.S Government Accountability Office.  Telehealth in the Pandemic- How has it Changed Health care delivery in Medicaid and Medicare?  Published September 29, 2022. Accessed December 8, 2022',
                      link:
                        'https://www.gao.gov/blog/telehealth-pandemic-how-has-it-changed-health-care-delivery-medicaid-and-medicare',
                    },
                    {
                      title:
                        'Bestsennyy O, Gilber G, Harris A, Rost J.  McKinsey & Company.  Published July 9,2021. Accessed October 14, 2022',
                      link:
                        'https://www.mckinsey.com/industries/healthcare/our-insights/telehealth-a-quarter-trillion-dollar-post-covid-19-reality',
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
