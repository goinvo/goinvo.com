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
    '/images/features/fraud-waste-abuse-in-healthcare/hero-chat-fwa.jpg',
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
                23-30% of US Healthcare spending is lost to Fraud, Waste, and Abuse
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
                  <p><strong className="text--teal">Fraud:</strong> intentional misuse of healthcare system resources.</p>
                  <p><strong className="text--teal">Waste:</strong> unintentional misuse of healthcare system resources.</p>
                  <p><strong className="text--teal">Abuse:</strong> misuse of healthcare system resources independent of intention.</p>
                </div>
                <div className="columns__item--2">
                <div className="margin-auto">
                  <Image
                    src="/images/features/fraud-waste-abuse-in-healthcare/fwa-definition.jpg"
                    className="image--max-width-small"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  </div>
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
              </p>
              <p className="quote">
                 "Estimates of fraudulent billings to health care programs, both public 
                  and private, are estimated between 3 and 10 percent of total health care 
                  expenditures.”
                <sup>
                    <a href="#references">11</a>
                </sup>{' '}
                <span className="text--primary">FBI</span>
              </p>
              <div className="columns">
                <div className="columns__item--2">
                  <h2 className="header--lg text--center">FWA 30%</h2>
                  <div className="margin-auto">
                    <Image
                      src="/images/features/fraud-waste-abuse-in-healthcare/fwa-high-pie1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <h2 className="header--md text--center">Fraud 10% + Waste 20%</h2>
                </div>

                <div className="columns__item--2">
                  <h2 className="header--lg text--center">FWA 23%</h2>
                  <div className="margin-auto">
                    <Image
                      src="/images/features/fraud-waste-abuse-in-healthcare/fwa-low-pie1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <h2 className="header--md text--center">Fraud 3% + Waste 20%</h2>
                </div>
              </div>


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
              <h2 className="header--lg text--left pad-top">Common Fraud, Waste, Abuse Enumeration (CFWAE)</h2>
              <p className="text--left"> 
                1.000 No service was provided but a charge was submitted      <br />
                2.000 A service was provided but it was not necessary         <br />
                3.000 A service was provided but a kickback was involved      <br />
                4.000 A service was provided but the actor was not eligible   <br />
                5.000 A service was provided but an overcharge was submitted  <br />
                6.000 A service was provided but the payment was denied       <br />
                7.000 A service was provided but it was not covered           <br />
              </p>
          
              <h2 className="header--md text--left pad-top--crazy">1.000 No service was provided but a charge was submitted</h2>
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

              <h2 className="header--md pad-top--crazy text--left">2.000 A service was provided but it was not necessary </h2>
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

              <h2 className="header--md text--left pad-top--crazy">3.000 A service was provided but a kickback was involved</h2>
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
              
              <h2 className="header--md text--left pad-top--crazy">4.000 A service was provided but the actor was not eligible</h2>
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

              <h2 className="header--md text--left pad-top--crazy">5.000 A service was provided but an overcharge was submitted</h2>
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

              <h2 className="header--md text--left pad-top--crazy">6.000 A service was provided but the payment was denied</h2>
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

              <h2 className="header--md text--left pad-top--crazy">7.000 A service was provided but it was not covered</h2>
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
              <div className="margin-auto ">
                <Image
                  src="/images/features/fraud-waste-abuse-in-healthcare/cfwe1.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
               
               
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
                  <div className="background--gray pad-all text--center text--serif text--xl"> 0.14% </div>
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
              <p>
                Those responsible for recovering fraud, waste, and abuse face decisions of which cases to persue. 
                Some cases of fraud are not worth recovery efforts, if the amount lost is not meaningful. 
                Fraud cases often involve criminal prosecution, which is expensive and time consuming.
              </p>
              <p>
                Knowing this, it is important to note that many cases of fraud go undetected and unrecovered.
                Numbers in this report are only based on detected fraud, and expert estimates.
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Proposed Solutions
                </h1>
              </div>
              <h2 className="header--lg text--left">Concept 1: Health Accuracy Receipt</h2>
              <div className="columns">
                <div className="columns__item--2 container--align-center">
                  <p>Txt</p>
                </div>
                <div className="columns__item--2 container--align-center">
                  <p>Img</p>
                </div>
              </div>
              <h2 className="header--lg text--left">Concept 2: FWA Tracker</h2>
              <div className="columns">
                <div className="columns__item--2 container--align-center">
                  <p>Txt</p>
                </div>
                <div className="columns__item--2 container--align-center">
                  <p>Img</p>
                </div>
              </div>
              


              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h1 className="header--xl text--center max-width--sm margin-auto">
                  Methodology
                </h1>
              </div>
              <p className="text--gray">
                Below is a description of the methodology used in creating the Fraud, Waste, and Abuse in US Healthcare 
                report. Calculations are based on expert estimates, therefore final percentages are an estimate
                and should not be viewed as absolute numbers.
              </p>
              <h2 className="header--lg text--left text--gray pad-top">Calculations</h2>
              <p className="text--gray">
                $1.32T of US healthcare spending lost to FWA - high estimate <br />
                Total value:{' '}
                <strong className="text--teal">
                  $4.4T x 30% = $1.32T
                </strong> 
                <br /><br />
                $1.01T of US healthcare spending lost to FWA - low estimate <br />
                Total value:{' '}
                <strong className="text--teal">
                  $4.4T x 23% = $1.01T
                </strong> 
                <br /><br />
                0.14% of loss to FWA is recovered<br />
                Total value:{' '}
                <strong className="text--teal">
                  $1.9B / $1.32T = 0.1439%
                </strong> 
                <br /><br />
                0.0257% of total heathcare spending is put twords recovery <br />
                Total value:{' '}
                <strong className="text--teal">
                  $1.129B / $4.4T = 0.0257%
                </strong> 
                <br />
              </p>
              
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
