import React, { Component } from 'react'
import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'

import config from '../../../../config'
import columns from '../../../components/columns'

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

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                What is Fraud, Waste, and Abuse
              </h2>
              <p>
                <em>Crafting a common definition</em><br />
              </p>
              <p>
                Healthcare organizations have varying definitions of FWA.
                We've taken the FWA definition from several organizations 
                and have distilled each into a single sentence.
              </p>
              <div className="columns">
                <div className="columns__item columns__item--2">
                  <p>
                    Fraud: intentional misuse of healthcare system resources.<br />
                    Waste: unintentional misuse of healthcare system resources.<br />
                    Abuse: misuse of healthcare system resources independent of intention.<br />
                  </p>
                </div>
                <div className="columns__item columns__item--2">
                  <p>
                    Adding diagram image of FWA
                  </p>
                </div>
              </div>
              <p>
                Based on these definitions, Abuse is the umbrella for all misuse of healthcare 
                resources regardless of intent. If intent is identified then it would fall into 
                either Fraud or Waste.
              </p>


              <h2 className="header--lg margin-top--lg margin-bottom--none">
                The Cost of FWA
              </h2>
              <p>
                <em>Estimating FWA</em>
                <br />
              </p>
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
                <br />
              </p>
              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/rural_urban.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                FWA Across Industries
              </h2>
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

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                Common Fraud, Waste, Abuse Enumeration (CFWAE)
              </h2>
              <p>
              We created a common language with canonical examples to describe fraud, waste, and abuse in healthcare.
              </p>
              <p>
              The concept would be to establish these as a healthcare standard, much like ICD-10, but for FWA. 
              Having a standard set of FWA categories would help to drive national FWA awareness and an open source 
              FWA reporting tool. 
              </p>
              <p>
                <em>Common Fraud, Waste, Abuse Enumeration (CFWAE)</em>
                <br />
              </p>
              <p> 
                1.000 No service was provided but a charge was submitted      <br />
                2.000 A service was provided but it was not necessary         <br />
                3.000 A service was provided but a kickback was involved      <br />
                4.000 A service was provided but the actor was not eligible   <br />
                5.000 A service was provided but an overcharge was submitted  <br />
                6.000 A service was provided but the payment was denied       <br />
                7.000 A service was provided but it was not covered           <br />
              </p>

              <em>1.000 - No service was provided but a charge was submitted </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>2.000 A service was provided but it was not necessary </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>3.000 A service was provided but a kickback was involved </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>4.000 A service was provided but the actor was not eligible </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>5.000 A service was provided but an overcharge was submitted </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>6.000 A service was provided but the payment was denied </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />
              <em>7.000 A service was provided but it was not covered </em>  <br />
              <div className="background--gray pad-all text--left">
                <p>
                  <em>Info</em><br />
                </p>
              </div>
              <br />

              <em>Total FWA across the categories</em>
              

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                Recovering FWA
              </h2>
              <p>
                <em>For every $1 Invested, $4 Recovered </em>
                <br />
              </p>
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
                  <div className="background--gray pad-all text--center text--serif text--lg"> $1.1B </div>
                  <p className="text--center">Dollars Invested In FWA Recovery</p>
                </div>       
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--lg"> $1.9B </div>
                  <p className="text--center">Dollars <br /> Recovered</p>
                </div>
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--lg"> 0.15% </div>
                  <p className="text--center">Percent of loss Recovered</p>
                </div> 
                <div className="columns__item--4 container--align-center">
                  <div className="background--gray pad-all text--center text--serif text--lg">0.026%</div>
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

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                Recovery Challenges
              </h2>

              <h2 className="header--lg margin-top--lg margin-bottom--none">
                Proposed Solutions
              </h2>

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
