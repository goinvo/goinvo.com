import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Primary Self Care Algorithms - GoInvo',
  metaDescription:
    'Primary self care algorithms are decision support tools for individuals to better understand their health and the steps needed to optimize their health status.',
  heroImage:
    '/images/features/digital-health-trends-2022/digital-health-trends-2022-hero.jpg',
}

class DigitalHealthTrendsFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="primary-self-care-algorithm-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Primary Self Care Algorithms</h1>
              <h2 className="header--lg margin-top">
                What is Primary Self Care?
              </h2>
              <p>
                Primary self care (PSC) exists at the intersection of primary
                health care and self-care. With an emphasis on self-management,
                self-testing, and self-awareness, PSC enables individuals to
                understand and optimize their health status through self-care
                interventions. While some PSC methods invite collaboration with
                clinical providers and others are entirely independent of
                healthcare systems, all can be applied to improve health
                outcomes at various stages of life
                <sup>
                  <a href="#references">1</a>
                </sup>
                .
              </p>
              <h2 className="header--lg margin-top">Why Primary Self Care?</h2>
              <p>
                According to The World Health Organization, there will be a
                shortage of 18 million physicians by 2030. Primary self care has
                the potential to fill this gap and reduce the burden on
                healthcare systems through better screening and prevention of
                diseases, all while providing more education on self-management
                of conditions. PSC empowers individuals to understand their
                health data and offers ways to effectively act on it. This leads
                to more engagement when patients interact with the healthcare
                system. Primary self care is also a way for individuals to
                personalize their care according to their needs and claim more
                decision making power in their health.
              </p>
              <h2 className="header--lg margin-top">
                What is a Primary Self Care algorithm?
              </h2>
              <p>
                Primary self care algorithms are decision support tools for
                individuals to better understand their health and the steps
                needed to optimize their health status. PSC algorithms include
                clinical decision support (CDS) tools, patient decision aids,
                health assessments, and screening and testing services.
              </p>
              <h2 className="header--lg margin-top">
                Why does the PSC Algorithms Project matter?
              </h2>
              <p>
                Despite being at the core of self care interventions, primary
                self care has been inconsistently defined. In light of the
                growing number of at-home healthcare technologies and services,
                there is a "pressing need for a clearer conceptualization of
                self care" as well as what self-care is not
                <sup>
                  <a href="#references">1</a>
                </sup>
                . A publicly-available, validated knowledge base of PSC
                algorithms can serve as an instrumental resource for patients,
                policy makers, and healthcare workers. This project will also
                reveal the current gaps in research and implementation of PSC
                models.
              </p>

              <h1 className="header--xl margin-top--double">
                Top 10 Primary Self Care Algorithms
              </h1>
              <h2 className="header--lg margin-top">
                1. Vaccine Decision Aids
              </h2>
              <p>
                The global response to the COVID-19 pandemic highlighted just
                how critical vaccination efforts are in mitigating the spread
                and severity of infectious diseases. In 2020, COVID-19 rose to
                the third leading cause of death in the US and caused 6.26
                million deaths globally
                <sup>
                  <a href="#references">2</a>
                </sup>
                . In the decade, vaccine-preventable diseases like measles and
                pertussis have begun to rise as vaccine hesitancy spreads
                <sup>
                  <a href="#references">3</a>
                </sup>
                . Despite the safety and efficacy of vaccines, getting people
                vaccinated has proven challenging due to a combination of
                mistrust in the scientific community, lack of education, and
                insufficient access.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://decisions.dynamed.com/shared-decision-making/covid-19-vaccine-options">
                    COVID-19: Vaccine Options
                  </a>
                  <sup>
                    <a href="#references">5</a>
                  </sup>
                  <ul>
                    <li>Copyright © 2022 EBSCO Publishing, Inc.</li>
                  </ul>
                </li>
                <li>
                  <a href="https://cds.ahrq.gov/cdsconnect/artifact/immunization-calculation-engine-ice-0">
                    Immunization Calculation Engine (ICE)
                  </a>
                  <sup>
                    <a href="#references">39</a>
                  </sup>
                  <ul>
                    <li>LGPLv3, open source</li>
                  </ul>
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32163307/">
                    Patient decision aid in vaccination: a systematic review of
                    the literature
                  </a>
                  <sup>
                    <a href="#references">4</a>
                  </sup>
                  <ul>
                    <li>License not found, likely closed</li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">
                2. Blood Pressure Monitoring
              </h2>
              <p>
                Heart disease is the leading cause of death in the United States
                with more than 659,000 lives lost each year. Coronary heart
                disease, heart attacks, and other related heart conditions make
                up one in every four deaths, which amounts to spending $363
                billion a year on healthcare services and medication
                <sup>
                  <a href="#references">10</a>
                </sup>
                . The key risk factors of heart disease are behavior based: poor
                nutrition, physical inactivity, and high alcohol or drug
                consumption; early detection and promotion of healthy behaviors
                can prevent 34% of deaths due to heart disease
                <sup>
                  <a href="#references">11</a>
                </sup>
                .
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening">
                    The USPSTF provides an A recommendation for screening for
                    hypertension in adults 18 years or older without
                    hypertension
                  </a>
                  <sup>
                    <a href="#references">12</a>
                  </sup>
                  <ul>
                    <li>
                      Copyright Notice. U.S. Preventative Task Force. September
                      2017
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5604965/">
                    Self monitoring blood pressure in conjunction with clinical
                    support in patients with hypertension yields significant BP
                    reductions
                  </a>
                  <sup>
                    <a href="#references">13</a>
                  </sup>
                  <ul>
                    <li>Copyright © 2017 Tucker et al.</li>
                    <li>Creative Commons Attribution License, open source</li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">3. At-home Urinalysis</h2>
              <p>
                Kidney disease affects more than 15% of the US population, or 1
                in 7 people. However, 90% of affected individuals are unaware of
                their condition as symptoms typically don’t appear until the
                late stages
                <sup>
                  <a href="#references">14</a>
                </sup>
                . Key risk factors for kidney disease are comorbidities such as
                diabetes, hypertension, and obesity. Minority groups are at
                highest risk of developing severe kidney disease and kidney
                failure due to a higher prevalence of associated comorbidities
                and disparities in primary care access; as a result, these
                groups are less likely to receive pre-dialysis care and must
                wait longer for kidney transplants. Early detection of kidney
                disease is essential to ensuring that individuals can take
                preventative care measures or receive pre-dialysis treatment
                options.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://link.springer.com/article/10.1007/s00467-022-05556-8">
                    Healthy.io home-based urinalysis test kit and smartphone app
                  </a>
                  <sup>
                    <a href="#references">15</a>
                  </sup>
                  <ul>
                    <li>
                      <a href="https://old.healthy.io/licenses">
                        Alamofire, version number 4.7.3, under the MIT License
                      </a>
                      , Open source
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.diagnoxhealth.com/blog/10-parameter-urinalysis-test-at-home">
                    10 parameter urinalysis dipstick test
                  </a>
                  <sup>
                    <a href="#references">16</a>
                  </sup>
                  <ul>
                    <li>Lab Tests Online®</li>
                    <li>Copyright © 2022 Regenstrief Institute, Inc</li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.olive.earth/">
                    Toilet mountable at-home urinalysis
                  </a>
                  <sup>
                    <a href="#references">17</a>
                  </sup>
                </li>
                <li>
                  <a href=""></a>
                  <sup>
                    <a href="#references"></a>
                  </sup>
                  <ul>
                    <li></li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">
                4. Mental Health Assessments
              </h2>
              <p>
                In the United States, 1 in 5 individuals live with a mental
                illness, with a higher prevalence among minorities and young
                adults; in 2020, only half of the 52.9 million affected people
                received any sort of treatment or counseling
                <sup>
                  <a href="#references">6</a>
                </sup>
                . The stigmatization and poor education surrounding mental
                illness make it difficult for those seeking diagnosis and
                treatment. Suicide was the twelfth leading cause of death in the
                US in 2020 and most common in middle-aged white men
                <sup>
                  <a href="#references">7</a>
                </sup>
                . Since three-fourths of mental illnesses begin before the age
                of 24, early identification and treatment are essential to
                lowering suicide and suicide attempt rates.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://www.psychiatrist.com/jcp/bipolar/computer-assisted-self-assessment-persons-severe-mental/">
                    Computer Assisted Self Assessment (CART) in persons with
                    severe mental illness (SMI)
                  </a>
                  <sup>
                    <a href="#references">8</a>
                  </sup>
                  <ul>
                    <li>License not found, likely closed</li>
                  </ul>
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/27489457/">
                    Ecological momentary assessment (EMA) to assess and support
                    self-management in serious mental illness
                  </a>
                  <sup>
                    <a href="#references">9</a>
                  </sup>
                  <ul>
                    <li>Copyright © 2006 CMA Media Inc.</li>
                  </ul>
                </li>
                <li>
                  <a href=""></a>
                  <sup>
                    <a href="#references"></a>
                  </sup>
                  <ul>
                    <li></li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">5. Vision Tests</h2>
              <p>
                Vision impairment and blindness impact 2.2 billion people around
                the world, and more than half of these have not yet been
                diagnosed
                <sup>
                  <a href="#references">21</a>
                </sup>
                . The most common vision loss diseases and leading causes of
                blindness are age-related macular degeneration, diabetic
                retinopathy, and glaucoma. Vision loss is also highly correlated
                to comorbidities like hearing impairment, kidney disease,
                stroke, arthritis, and heart disease
                <sup>
                  <a href="#references">22</a>
                </sup>
                . Early screening and diagnosis of vision loss are key to
                correcting vision acuity before disease progression, and
                self-management of comorbidities can prevent further vision
                loss.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/6175935/">
                    A modified Amsler Grid test: self-assessment test for
                    patients with macular disease
                  </a>
                  <sup>
                    <a href="#references">23</a>
                  </sup>
                </li>
                <li>
                  <a href="">Home Acuity Test</a>
                  <sup>
                    <a href="#references">24</a>
                  </sup>
                  <ul>
                    <li>License not found</li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">
                6. Blood Glucose Monitoring
              </h2>
              <p>
                One of the most prevalent chronic conditions in the US, diabetes
                is the seventh leading cause of death. There are 37.3 million
                people currently living with diabetes in the country, and 38% of
                the adult population lives with pre-diabetes, which often goes
                undiagnosed until it progresses to Type 2 diabetes
                <sup>
                  <a href="#references">25</a>
                </sup>
                . Early diagnosis and lifestyle changes can be effective in
                preventing diabetes progression, particularly for individuals
                with pre-diabetes. Comorbidities of diabetes include
                hypertension, chronic kidney disease, and cardiovascular
                disease, which means that early diagnosis, treatment, and
                lifestyle interventions are crucial.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33441946/">
                    Self monitored blood glucose in association with glycemic
                    control in newly diagnosed non-insulin treated diabetes
                    patients
                  </a>
                  <sup>
                    <a href="#references">26</a>
                  </sup>
                </li>
                <li>
                  <a href="https://nightscout.github.io/#:~:text=Nightscout">
                    Nightscout, “CGM in the Cloud”
                  </a>
                  <sup>
                    <a href="#references">27</a>
                  </sup>
                  <ul>
                    <li>Open source</li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">7. Breast Self-Exam</h2>
              <p>
                Breast cancer is the most prevalent cancer in the US and the
                second leading cause of cancer death in women. One in eight
                women (13%) are at risk of developing breast cancer during their
                lifetime. Black women in particular have the highest risk of
                developing breast cancer earlier than white women and experience
                a higher mortality rate than any other group. The incidence of
                breast cancer has been trending up in the past years, though
                deaths have been slowly decreasing, likely due to improved
                screening and early detection
                <sup>
                  <a href="#references">18</a>
                </sup>
                .
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="">Breast Self-Exam (BSE)</a>
                  <sup>
                    <a href="#references">19</a>
                  </sup>
                  <ul>
                    <li>Copyright © 2022. BreastCancer.org</li>
                  </ul>
                </li>
                <li>
                  <a href="https://bcrisktool.cancer.gov/index.html">
                    Breast Cancer Risk Assessment Tool
                  </a>
                  <sup>
                    <a href="#references">20</a>
                  </sup>
                  <ul>
                    <li>
                      <a href="https://dceg.cancer.gov/tools/risk-assessment/bcrasasmacro/license">
                        BrCa RAM License Agreement
                      </a>
                      , Open source
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">
                8. Birth Control Decision Aid
              </h2>
              <p>
                Globally, more than 200 million women face an unmet need for
                family planning options and contraceptives, and 1.4 million
                unplanned pregnancies occur each year
                <sup>
                  <a href="#references">28</a>
                </sup>
                . Inadequate access to contraception is directly related to
                higher rates of unintended pregnancies and births, higher rates
                of STDs, and poorer educational and economic outcomes. There are
                lower rates of contraception usage among racial and ethnic
                minorities, a reflection of inequities in healthcare access and
                insufficient education around reproductive health. Contraceptive
                access and education are effective in reducing unintended
                pregnancies and in turn increasing high school graduation rates
                <sup>
                  <a href="#references">29</a>
                </sup>
                . Women who want to avoid pregnancy often cite lack of access as
                a reason for not using contraception, but concerns about side
                effects and lack of knowledge are also barriers to access
                <sup>
                  <a href="#references">30</a>
                </sup>
                .
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://www.pcori.org/research-results/2013/decision-aid-help-women-choose-and-use-method-birth-control">
                    A Decision Aid to Help Women Choose and Use a Method of
                    Birth Control, PCORI
                  </a>
                  <sup>
                    <a href="#references">31</a>
                  </sup>
                  <ul>
                    <li>
                      Copyright 2019. University of California San Francisco
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.reproductiveaccess.org/wp-content/uploads/2014/06/2020-09-contra-choices.pdf">
                    Your Birth Control Choices
                  </a>
                  <sup>
                    <a href="#references">32</a>
                  </sup>
                  <ul>
                    <li>
                      Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                      International License, Open source
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">9. Air Quality Monitor</h2>
              <p>
                Chronic respiratory diseases are the third leading cause of
                death in the US and account for 7.5 million deaths worldwide
                each year
                <sup>
                  <a href="#references">33</a>
                </sup>
                . These respiratory illnesses include chronic obstructive
                pulmonary disease (COPD), asthma, bronchitis, and other lung
                diseases. These conditions often start early in life and are
                exacerbated by environmental pollutants, poor nutrition,
                obesity, and lack of physical activity. Onset of these diseases
                can be determined by environmental factors such as irritants or
                allergens like smoke as well as lifestyle habits formed in
                adolescence, making it especially crucial that CRD risk factors
                are addressed early on.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://sustainenvironres.biomedcentral.com/articles/10.1186/s42834-020-0047-y">
                    Indoor air quality monitoring systems for public health
                  </a>
                  <sup>
                    <a href="#references">34</a>
                  </sup>
                  <ul>
                    <li>
                      Creative Commons Attribution 4.0 International License,
                      Open source
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="header--lg margin-top">10. Pulse Oximetry</h2>
              <p>
                A pulse oximeter is an electronic device that clips onto a
                patient’s fingertip or ear to measure the saturation of oxygen
                in their blood. The reading is noninvasive and painless, and
                results take less than a minute
                <sup>
                  <a href="#references">35</a>
                </sup>
                . Pulse oximetry is often considered the “fifth vital sign” as
                it is used for routine screenings of pulmonary health, diabetes,
                and sleep disorders.
              </p>
              <h4 class="header--sm">Models</h4>
              <ul>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/25880649/">
                    Overnight Pulse Oximetry to diagnose patients with moderate
                    to severe obstructive sleep apnea
                  </a>
                  <sup>
                    <a href="#references">36</a>
                  </sup>
                </li>
                <li>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32521167/">
                    Pulse Oximetry for Monitoring Patients with COVID-19 at home
                  </a>
                  <sup>
                    <a href="#references">37</a>
                  </sup>
                </li>
              </ul>
              <h1 className="header--xl margin-top--double">
                Application of Primary Self Care Algorithms Across Life
              </h1>
              <p>table goes here</p>

              <h1 className="header--xl margin-top--double">
                Database of Primary Self Care Algorithms
              </h1>
              <p>
                The AirTable below contains a database of Primary Self Care
                algorithms organized by the impacted bodily health system, the
                relevant social determinants of health, and the type of test or
                assessment. Relevant resources and information about each model
                are provided as well as the most prevalent health condition
                addressed.
              </p>

              <div className="airtable">
                <iframe
                  class="airtable-embed"
                  src="https://airtable.com/embed/shrWdnWlNj0SIuUzl?backgroundColor=blue&viewControls=on"
                  frameborder="0"
                  onmousewheel=""
                  width="100%"
                  height="600"
                  title="Airtable Primary Self Care Algorithms"
                ></iframe>
              </div>

              <h1 className="header--xl margin-top--double">Next Steps</h1>
              <p>
                The future of the PSC Algorithms project will include expanding
                the algorithm database and refining the list of top ten
                algorithms. The next iteration of rankings will also examine
                applicability in global settings, compliance, error rates, and
                variability in implementation, and it will also take a more
                in-depth look at licensing. Additionally, this project will
                inform the editing of Wikipedia’s{' '}
                <a href="https://en.wikipedia.org/wiki/Self-care">self-care</a>{' '}
                page, which does not currently distinguish between primary self
                care and self-care.
              </p>

              <h1 className="header--xl margin-top--double">Methods</h1>
              <h2 className="header--lg margin-top">Decision Matrix</h2>
              <p>
                The ranking of the 10 top Primary Self Care algorithms were
                determined by rating each algorithm against the following
                decision matrix adapted from methods of evaluating clinical
                decision support
                <sup>
                  <a href="#references">38</a>
                </sup>
                .
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
                <h2 className="header--xl text--center">Author</h2>
                <Author name="Arpna Ghanshani" />
                <Author name="Chloe Ma" />
                <Author name="Juhan Sonin" />
                <div className="pad-vertical--double">
                  <h3 className="header--md">Contributors</h3>
                  <p>
                    Samantha Wuu
                    <br />
                    Huahua Zhu
                    <br />
                    Eric Benoit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DigitalHealthTrendsFeature
