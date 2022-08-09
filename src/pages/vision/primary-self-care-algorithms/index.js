import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import References from '../../../components/references'
import Author from '../../../components/author'
import PscaTable from '../../../components/vision/primary-self-care-algorithms/psca-table'

import config from '../../../../config'

import CheckboxRequired from '../../../assets/images/vision/virtual-care/icon-checkbox-required.inline.svg'

const frontmatter = {
  metaTitle: 'Primary Self Care Algorithms - GoInvo',
  metaDescription:
    'Primary self care algorithms are decision support tools for individuals to better understand their health and the steps needed to optimize their health status.',
  heroImage:
    '/images/features/digital-health-trends-2022/digital-health-trends-2022-hero.jpg',
}

const ALGORITHMS = {
  VACCINE_DECISION_AIDS: 'vaccine-decision-aids',
  BLOOD_PRESSURE_MONITORING: 'blood-pressure-monitoring',
  AT_HOME_URINALYSIS: 'at-home-urinalysis',
  MENTAL_HEALTH_ASSESSMENTS: 'mental-health-assessments',
  VISION_TESTS: 'vision-tests',
  BLOOD_GLUCOSE_MONITORING: 'blood-glucose-monitoring',
  BREAST_SELF_EXAM: 'breast-self-exam',
  BIRTH_CONTROL_DECISION_AID: 'birth-control-decision-aid',
  AIR_QUALITY_MONITOR: 'air-quality-monitor',
  PULSE_OXIMETRY: 'pulse-oximetry',
}

const algorithms = [
  {
    id: ALGORITHMS.VACCINE_DECISION_AIDS,
    title: 'Vaccine Decision Aids',
  },
  {
    id: ALGORITHMS.BLOOD_PRESSURE_MONITORING,
    title: 'Blood Pressure Monitoring',
  },
  {
    id: ALGORITHMS.AT_HOME_URINALYSIS,
    title: 'At-Home Urinalysis',
  },
  {
    id: ALGORITHMS.MENTAL_HEALTH_ASSESSMENTS,
    title: 'Mental Health Assessments',
  },
  {
    id: ALGORITHMS.VISION_TESTS,
    title: 'Vision Tests',
  },
  {
    id: ALGORITHMS.BLOOD_GLUCOSE_MONITORING,
    title: 'Blood Glucose Monitoring',
  },
  {
    id: ALGORITHMS.BREAST_SELF_EXAM,
    title: 'Breast Self-Exam',
  },
  {
    id: ALGORITHMS.BIRTH_CONTROL_DECISION_AID,
    title: 'Birth Control Decision Aid',
  },
  {
    id: ALGORITHMS.AIR_QUALITY_MONITOR,
    title: 'Air Quality Monitor',
  },
  {
    id: ALGORITHMS.PULSE_OXIMETRY,
    title: 'Pulse Oximetry',
  },
]

class DigitalHealthTrendsFeature extends Component {
  constructor() {
    super()

    this.state = {
      activeAlgorithm: ALGORITHMS.VACCINE_DECISION_AIDS,
      allExpanded: false,
    }
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (this.state.allExpanded) {
      return
    }

    const mqPixels =
      parseFloat(config.mediaQueries.lg) *
      parseFloat(getComputedStyle(document.body).fontSize)

    const smallDisplay = window.innerWidth < mqPixels

    this.setState({
      activeAlgorithm: smallDisplay ? null : ALGORITHMS.VACCINE_DECISION_AIDS,
      allExpanded: smallDisplay,
    })
  }

  handleAlgorithmSelect = id => {
    this.setState({
      activeAlgorithm: id,
      allExpanded: false,
    })
  }

  toggleExpandAll = () => {
    this.setState({
      activeAlgorithm: this.state.allExpanded
        ? ALGORITHMS.VACCINE_DECISION_AIDS
        : null,
      allExpanded: !this.state.allExpanded,
    })
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="primary-self-care-algorithms">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Primary Self Care Algorithms</h1>
              <h2 className="header--lg margin-top--double margin-bottom--none">
                What is Primary Self Care?
              </h2>
              <p class="margin-top--none">
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
              <h2 className="header--lg margin-top--double margin-bottom--none">
                Why Primary Self Care?
              </h2>
              <p class="margin-top--none">
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
              <h2 className="header--lg margin-top--double margin-bottom--none">
                What is a Primary Self Care algorithm?
              </h2>
              <p class="margin-top--none">
                Primary self care algorithms are decision support tools for
                individuals to better understand their health and the steps
                needed to optimize their health status. PSC algorithms include
                clinical decision support (CDS) tools, patient decision aids,
                health assessments, and screening and testing services.
              </p>
              <h2 className="header--lg margin-top--double margin-bottom--none">
                Why does the PSC Algorithms Project matter?
              </h2>
              <p class="margin-top--none">
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

              <div className="display--flex display--flex--justify-space-between display--flex--align-baseline">
                <h1 className="header--xl margin-top--double">
                  Top 10 Primary Self Care Algorithms
                </h1>
                <button
                  className="button button--link hidden--until-lg"
                  onClick={this.toggleExpandAll}
                >
                  {this.state.allExpanded ? 'collapse' : 'expand all'}
                </button>
              </div>

              {
                // TODO: Icons
              }
              <ul className="list--unstyled algorithm-icons hidden--until-lg">
                {algorithms.map(algorithm => {
                  return (
                    <li
                      className={`algorithm-icons__algorithm ${
                        this.state.activeAlgorithm === algorithm.id
                          ? 'algorithm-icons__algorithm--active'
                          : ''
                      }`}
                      key={algorithm.id}
                      onClick={() => this.handleAlgorithmSelect(algorithm.id)}
                      role="button"
                    >
                      {algorithm.title}
                    </li>
                  )
                })}
              </ul>

              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.VACCINE_DECISION_AIDS || this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    1. Vaccine Decision Aids
                  </h2>
                )}
                <p className="margin-top--none">
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
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
                      Patient decision aid in vaccination: a systematic review
                      of the literature
                    </a>
                    <sup>
                      <a href="#references">4</a>
                    </sup>
                    <ul>
                      <li>License not found, likely closed</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.BLOOD_PRESSURE_MONITORING ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    2. Blood Pressure Monitoring
                  </h2>
                )}
                <p className="margin-top--none">
                  Heart disease is the leading cause of death in the United
                  States with more than 659,000 lives lost each year. Coronary
                  heart disease, heart attacks, and other related heart
                  conditions make up one in every four deaths, which amounts to
                  spending $363 billion a year on healthcare services and
                  medication
                  <sup>
                    <a href="#references">10</a>
                  </sup>
                  . The key risk factors of heart disease are behavior based:
                  poor nutrition, physical inactivity, and high alcohol or drug
                  consumption; early detection and promotion of healthy
                  behaviors can prevent 34% of deaths due to heart disease
                  <sup>
                    <a href="#references">11</a>
                  </sup>
                  .
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
                        Copyright Notice. U.S. Preventative Task Force.
                        September 2017
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5604965/">
                      Self monitoring blood pressure in conjunction with
                      clinical support in patients with hypertension yields
                      significant BP reductions
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
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.AT_HOME_URINALYSIS || this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    3. At-home Urinalysis
                  </h2>
                )}
                <p className="margin-top--none">
                  Kidney disease affects more than 15% of the US population, or
                  1 in 7 people. However, 90% of affected individuals are
                  unaware of their condition as symptoms typically don’t appear
                  until the late stages
                  <sup>
                    <a href="#references">14</a>
                  </sup>
                  . Key risk factors for kidney disease are comorbidities such
                  as diabetes, hypertension, and obesity. Minority groups are at
                  highest risk of developing severe kidney disease and kidney
                  failure due to a higher prevalence of associated comorbidities
                  and disparities in primary care access; as a result, these
                  groups are less likely to receive pre-dialysis care and must
                  wait longer for kidney transplants. Early detection of kidney
                  disease is essential to ensuring that individuals can take
                  preventative care measures or receive pre-dialysis treatment
                  options.
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
                  <li>
                    <a href="https://link.springer.com/article/10.1007/s00467-022-05556-8">
                      Healthy.io home-based urinalysis test kit and smartphone
                      app
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
                </ul>
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.MENTAL_HEALTH_ASSESSMENTS ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    4. Mental Health Assessments
                  </h2>
                )}
                <p className="margin-top--none">
                  In the United States, 1 in 5 individuals live with a mental
                  illness, with a higher prevalence among minorities and young
                  adults; in 2020, only half of the 52.9 million affected people
                  received any sort of treatment or counseling
                  <sup>
                    <a href="#references">6</a>
                  </sup>
                  . The stigmatization and poor education surrounding mental
                  illness make it difficult for those seeking diagnosis and
                  treatment. Suicide was the twelfth leading cause of death in
                  the US in 2020 and most common in middle-aged white men
                  <sup>
                    <a href="#references">7</a>
                  </sup>
                  . Since three-fourths of mental illnesses begin before the age
                  of 24, early identification and treatment are essential to
                  lowering suicide and suicide attempt rates.
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
                      Ecological momentary assessment (EMA) to assess and
                      support self-management in serious mental illness
                    </a>
                    <sup>
                      <a href="#references">9</a>
                    </sup>
                    <ul>
                      <li>Copyright © 2006 CMA Media Inc.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm === ALGORITHMS.VISION_TESTS ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    5. Vision Tests
                  </h2>
                )}
                <p className="margin-top--none">
                  Vision impairment and blindness impact 2.2 billion people
                  around the world, and more than half of these have not yet
                  been diagnosed
                  <sup>
                    <a href="#references">21</a>
                  </sup>
                  . The most common vision loss diseases and leading causes of
                  blindness are age-related macular degeneration, diabetic
                  retinopathy, and glaucoma. Vision loss is also highly
                  correlated to comorbidities like hearing impairment, kidney
                  disease, stroke, arthritis, and heart disease
                  <sup>
                    <a href="#references">22</a>
                  </sup>
                  . Early screening and diagnosis of vision loss are key to
                  correcting vision acuity before disease progression, and
                  self-management of comorbidities can prevent further vision
                  loss.
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
                    <a href="https://www.homeacuitytest.org/">
                      Home Acuity Test
                    </a>
                    <sup>
                      <a href="#references">24</a>
                    </sup>
                    <ul>
                      <li>License not found</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.BLOOD_GLUCOSE_MONITORING ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    6. Blood Glucose Monitoring
                  </h2>
                )}
                <p className="margin-top--none">
                  One of the most prevalent chronic conditions in the US,
                  diabetes is the seventh leading cause of death. There are 37.3
                  million people currently living with diabetes in the country,
                  and 38% of the adult population lives with pre-diabetes, which
                  often goes undiagnosed until it progresses to Type 2 diabetes
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
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm === ALGORITHMS.BREAST_SELF_EXAM ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    7. Breast Self-Exam
                  </h2>
                )}
                <p className="margin-top--none">
                  Breast cancer is the most prevalent cancer in the US and the
                  second leading cause of cancer death in women. One in eight
                  women (13%) are at risk of developing breast cancer during
                  their lifetime. Black women in particular have the highest
                  risk of developing breast cancer earlier than white women and
                  experience a higher mortality rate than any other group. The
                  incidence of breast cancer has been trending up in the past
                  years, though deaths have been slowly decreasing, likely due
                  to improved screening and early detection
                  <sup>
                    <a href="#references">18</a>
                  </sup>
                  .
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
                  <li>
                    <a href="https://www.breastcancer.org/screening-testing/breast-self-exam-bse">
                      Breast Self-Exam (BSE)
                    </a>
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
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.BIRTH_CONTROL_DECISION_AID ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    8. Birth Control Decision Aid
                  </h2>
                )}
                <p className="margin-top--none">
                  Globally, more than 200 million women face an unmet need for
                  family planning options and contraceptives, and 1.4 million
                  unplanned pregnancies occur each year
                  <sup>
                    <a href="#references">28</a>
                  </sup>
                  . Inadequate access to contraception is directly related to
                  higher rates of unintended pregnancies and births, higher
                  rates of STDs, and poorer educational and economic outcomes.
                  There are lower rates of contraception usage among racial and
                  ethnic minorities, a reflection of inequities in healthcare
                  access and insufficient education around reproductive health.
                  Contraceptive access and education are effective in reducing
                  unintended pregnancies and in turn increasing high school
                  graduation rates
                  <sup>
                    <a href="#references">29</a>
                  </sup>
                  . Women who want to avoid pregnancy often cite lack of access
                  as a reason for not using contraception, but concerns about
                  side effects and lack of knowledge are also barriers to access
                  <sup>
                    <a href="#references">30</a>
                  </sup>
                  .
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
                        Creative Commons Attribution-NonCommercial-ShareAlike
                        4.0 International License, Open source
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm ===
                    ALGORITHMS.AIR_QUALITY_MONITOR || this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    9. Air Quality Monitor
                  </h2>
                )}
                <p className="margin-top--none">
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
                  obesity, and lack of physical activity. Onset of these
                  diseases can be determined by environmental factors such as
                  irritants or allergens like smoke as well as lifestyle habits
                  formed in adolescence, making it especially crucial that CRD
                  risk factors are addressed early on.
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
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
              </div>
              <div
                className={`algorithm ${
                  this.state.activeAlgorithm === ALGORITHMS.PULSE_OXIMETRY ||
                  this.state.allExpanded
                    ? 'algorithm--visible'
                    : ''
                }`}
              >
                {this.state.allExpanded && (
                  <h2 className="header--lg margin-top--double margin-bottom--none">
                    10. Pulse Oximetry
                  </h2>
                )}
                <p className="margin-top--none">
                  A pulse oximeter is an electronic device that clips onto a
                  patient’s fingertip or ear to measure the saturation of oxygen
                  in their blood. The reading is noninvasive and painless, and
                  results take less than a minute
                  <sup>
                    <a href="#references">35</a>
                  </sup>
                  . Pulse oximetry is often considered the “fifth vital sign” as
                  it is used for routine screenings of pulmonary health,
                  diabetes, and sleep disorders.
                </p>
                <h4 className="header--sm margin-bottom--none">Models</h4>
                <ul className="margin-top--none">
                  <li>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/25880649/">
                      Overnight Pulse Oximetry to diagnose patients with
                      moderate to severe obstructive sleep apnea
                    </a>
                    <sup>
                      <a href="#references">36</a>
                    </sup>
                  </li>
                  <li>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/32521167/">
                      Pulse Oximetry for Monitoring Patients with COVID-19 at
                      home
                    </a>
                    <sup>
                      <a href="#references">37</a>
                    </sup>
                  </li>
                </ul>
              </div>
              <h1 className="header--xl margin-top--double">
                Application of Primary Self Care Across Life
              </h1>
            </div>
            <div className="content-padding--double">
              <PscaTable>
                <table className="psca-table-applications">
                  <thead>
                    <tr>
                      <th></th>
                      <th>0-5 years old</th>
                      <th>6-12</th>
                      <th>13-20</th>
                      <th>21-30</th>
                      <th>31-40</th>
                      <th>41-50</th>
                      <th>51-60</th>
                      <th>61-70</th>
                      <th>71-80</th>
                      <th>81-90</th>
                      <th>90+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vaccinations</td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Blood Pressure</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Urinalysis</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Mental Health</td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Vision Test</td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Glucose Monitoring</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Breast Self-Exam</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Air Quality Monitor</td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                    <tr>
                      <td>Pulse Oximetry</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                      <td>
                        <CheckboxRequired className="icon icon-checkbox-required" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </PscaTable>
            </div>
            <div className="max-width max-width--md content-padding">
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
            </div>
          </div>

          <div className="content-padding--double">
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/shrWdnWlNj0SIuUzl?backgroundColor=blue&viewControls=on"
              frameBorder="0"
              // onmousewheel=""
              width="100%"
              height="500"
              title="Airtable Primary Self Care Algorithms"
            ></iframe>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--double">Methods</h1>
              <h2 className="header--lg margin-top--double">Decision Matrix</h2>
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
            <div className="content-padding--double">
              <PscaTable>
                <table>
                  <thead>
                    <tr className="text--gray">
                      <th width="25%">Criteria</th>
                      <th width="15%">Weight (1-4)</th>
                      <th width="20%">1</th>
                      <th width="20%">0</th>
                      <th width="20%">-1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Audience</strong>
                        <br />
                        How many patients & clinicians do/or can utilize this
                        algorithm?
                      </td>
                      <td>2</td>
                      <td>
                        can utilized by the majority of people, regardless of
                        health status
                      </td>
                      <td>
                        utilized for common or highly prevalent conditions
                      </td>
                      <td>utilized for only rare conditions</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Effectiveness</strong>
                        <br />
                        How much of a difference can the algorithm make on
                        someone’s health status regardless of condition
                        progression?
                      </td>
                      <td>4</td>
                      <td>high impact at many stages in disease progression</td>
                      <td>
                        moderate impact at some stages in disease progression
                      </td>
                      <td>
                        low or no impact at many stages of disease progression
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Validity & Reliability</strong>
                        <br />
                        Has this algorithm been rigorously tested and have
                        results been replicated?
                      </td>
                      <td>4</td>
                      <td>
                        validated and replicated by many credible institutions
                      </td>
                      <td>
                        validated by some credible sources, limited replication
                        studies
                      </td>
                      <td>not validated or replicated by credible sources</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Complexity</strong>
                        <br />
                        How easy is it to learn to use and understand results
                        from an algorithm?
                      </td>
                      <td>2</td>
                      <td>
                        almost no learning curve, easy to implement and learn
                        from results
                      </td>
                      <td>
                        moderate learning curve and results are mostly
                        manageable to interpret
                      </td>
                      <td>
                        high learning curve to use and results are difficult to
                        interpret
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Cost</strong>
                        <br />
                        How expensive are any necessary tools/services?
                      </td>
                      <td>3</td>
                      <td>$ low cost or free</td>
                      <td>$$</td>
                      <td>$$$</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Availability</strong>
                        <br />
                        How readily available and accessible is this tool?
                      </td>
                      <td>1</td>
                      <td>over the counter or diy</td>
                      <td>
                        some barrier to access (clinical treatment or
                        prescription, specially ordered, etc.)
                      </td>
                      <td>still in development, not openly available</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Support</strong>
                        <br />
                        How much clinical support or guidance is required?
                      </td>
                      <td>2</td>
                      <td>completely independent</td>
                      <td>minimal community or clinical involvement</td>
                      <td>requires clinical support or intervention</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Licensing</strong>
                        <br />
                        Is the algorithm open or closed source?{' '}
                      </td>
                      <td>2</td>
                      <td>open</td>
                      <td>unknown licensing</td>
                      <td>closed</td>
                    </tr>
                  </tbody>
                </table>
              </PscaTable>
            </div>
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg margin-top--double--double margin-bottom--none">
                Ranking of Top 10 Algorithms
              </h2>
            </div>
          </div>

          <div className="content-padding--double">
            <PscaTable>
              <table>
                <thead>
                  <tr className="text--gray">
                    <th>Criteria</th>
                    <th>Weight (1-4)</th>
                    <th>Vaccinations</th>
                    <th>Blood Pressure</th>
                    <th>Urinalysis</th>
                    <th>Mental Health</th>
                    <th>Vision Test</th>
                    <th>Glucose Monitoring</th>
                    <th>Breast Self-Exam</th>
                    <th>Birth Control</th>
                    <th>Air Quality Monitor</th>
                    <th>Pulse Oximetry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Audience</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Effectiveness</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td>Validity/Reliability</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>-1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Complexity</td>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>-1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>-1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Availability</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>2</td>
                    <td>-1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>-1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Licensing</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Weighted Totals</strong>
                    </td>
                    <td></td>
                    <td>
                      <strong>17</strong>
                    </td>
                    <td>
                      <strong>16</strong>
                    </td>
                    <td>
                      <strong>15</strong>
                    </td>
                    <td>
                      <strong>15</strong>
                    </td>
                    <td>
                      <strong>11</strong>
                    </td>
                    <td>
                      <strong>11</strong>
                    </td>
                    <td>
                      <strong>9</strong>
                    </td>
                    <td>
                      <strong>8</strong>
                    </td>
                    <td>
                      <strong>7</strong>
                    </td>
                    <td>
                      <strong>-1</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </PscaTable>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
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

              <div>
                <h2 className="header--xl text--center">Authors</h2>
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
                    <br />
                    Craig McGinley
                  </p>
                </div>
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
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        ' Narasimhan, Manjulaa, et al. “Self Care Interventions to Advance Health and Wellbeing: A Conceptual Framework to Inform Normative Guidance.” BMJ (Clinical Research Ed.), BMJ Publishing Group Ltd., 1 Apr. 2019',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6441866/',
                    },
                    {
                      title:
                        '“Who Coronavirus (COVID-19) Dashboard.” World Health Organization',
                      link: 'https://covid19.who.int',
                    },
                    {
                      title:
                        '“Immunization Agenda 2030.” World Health Organization',
                      link:
                        'https://www.who.int/teams/immunization-vaccines-and-biologicals/strategies/ia2030',
                    },
                    {
                      title:
                        'Bruel, S, et al. Patient Decision Aid in Vaccination: A Systematic Review of the Literature. U.S. National Library of Medicine',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/32163307/',
                    },
                    {
                      title: '“COVID-19: Vaccine Options.” Dynamed Decisions',
                      link:
                        'https://decisions.dynamed.com/shared-decision-making/covid-19-vaccine-options',
                    },
                    {
                      title:
                        '“Mental Illness.” National Institute of Mental Health, U.S. Department of Health and Human Services',
                      link:
                        'https://www.nimh.nih.gov/health/statistics/mental-illness',
                    },
                    {
                      title:
                        '“Suicide Statistics.” American Foundation for Suicide Prevention, 14 June 2022',
                      link: 'https://afsp.org/suicide-statistics/',
                    },
                    {
                      title:
                        'Chinman, Matthew, et al. “Computer-Assisted Self-Assessment in Persons with Severe Mental Illness.” Psychiatrist.com, Physicians Postgraduate Press, Inc., 4 Feb. 2021',
                      link:
                        'https://www.psychiatrist.com/jcp/bipolar/computer-assisted-self-assessment-persons-severe-mental/',
                    },
                    {
                      title:
                        'Depp, Colin A, et al. “Technology to Assess and Support Self-Management in Serious Mental Illness.” Dialogues in Clinical Neuroscience, U.S. National Library of Medicine, 18 June 2018',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/27489457/',
                    },
                    {
                      title:
                        '“Heart Disease Facts.” Centers for Disease Control and Prevention, 15 July 2022',
                      link: 'https://www.cdc.gov/heartdisease/facts.htm',
                    },
                    {
                      title: 'CDC National Health Report Highlights',
                      link:
                        'https://www.cdc.gov/healthreport/publications/compendium.pdf',
                    },
                    {
                      title:
                        'Hypertension in Adults: Screening. US Preventive Services Taskforce, 27 Apr. 2021',
                      link:
                        'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening',
                    },
                    {
                      title:
                        'Tucker, Katherine L, et al. “Self-Monitoring of Blood Pressure in Hypertension: A Systematic Review and Individual Patient Data Meta-Analysis.” PLoS Medicine, Public Library of Science, 19 Sept. 2017',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5604965/',
                    },
                    {
                      title:
                        '“Kidney Basics.” National Kidney Foundation, 28 July 2022',
                      link: 'https://www.kidney.org/kidney-basics',
                    },
                    {
                      title:
                        'Erez, Daniella Levy, et al. “Dipping at Home: Is It Better, Easier, and More Convenient? A Feasibility and Acceptability Study of a Novel Home Urinalysis Using a Smartphone Application - Pediatric Nephrology.” SpringerLink, Springer Berlin Heidelberg, 21 Apr. 2022',
                      link:
                        'https://link.springer.com/article/10.1007/s00467-022-05556-8',
                    },
                    {
                      title:
                        '“10 Parameter Urinalysis Test at Home.” Diagnox Health: Innovative Wellness and Healthcare Products',
                      link:
                        'https://www.diagnoxhealth.com/blog/10-parameter-urinalysis-test-at-home',
                    },
                    {
                      title: 'Olive Diagnostics',
                      link: 'https://www.olive.earth/',
                    },
                    {
                      title:
                        '“Breast Cancer Statistics: How Common Is Breast Cancer?” American Cancer Society, 2022',
                      link:
                        'https://www.cancer.org/cancer/breast-cancer/about/how-common-is-breast-cancer.html',
                    },
                    {
                      title:
                        'Boraas, Marcia, and Sameer Gupta. “Breast Self-Exam (BSE).” BreastCancer.org, 29 June 2022',
                      link:
                        'https://www.breastcancer.org/screening-testing/breast-self-exam-bse',
                    },
                    {
                      title:
                        '“The Breast Cancer Risk Assessment Tool.” The National Cancer Institute',
                      link: 'https://bcrisktool.cancer.gov/index.html',
                    },
                    {
                      title:
                        '“Vision Impairment and Blindness.” World Health Organization',
                      link:
                        'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment',
                    },
                    {
                      title:
                        '“Vision Impairment and Chronic Health Conditions.” Centers for Disease Control and Prevention, 17 June 2020',
                      link:
                        'https://www.cdc.gov/visionhealth/living/index.html',
                    },
                    {
                      title:
                        'Yannuzzi, L A. A Modified Amsler Grid. A Self-Assessment Test for Patients with Macular Disease. U.S. National Library of Medicine',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/6175935/',
                    },
                    {
                      title: 'https://www.homeacuitytest.org',
                      link: 'https://www.homeacuitytest.org',
                    },
                    {
                      title:
                        '“National Diabetes Statistics Report.” Centers for Disease Control and Prevention, 18 Jan. 2022',
                      link:
                        'https://www.cdc.gov/diabetes/data/statistics-report/index.html',
                    },
                    {
                      title:
                        'Sia, Hon-Ke, et al. “Self-Monitoring of Blood Glucose in Association with Glycemic Control in Newly Diagnosed Non-Insulin-Treated Diabetes Patients: A Retrospective Cohort Study.” Nature News, Nature Publishing Group, 13 Jan. 2021',
                      link:
                        'https://www.nature.com/articles/s41598-021-81024-x',
                    },
                    {
                      title: '“What Is Nightscout?” Nightscout',
                      link: 'https://nightscout.github.io/#:~:text=Nightscout',
                    },
                    {
                      title:
                        '“The U.S. Government and International Family Planning &amp; Reproductive Health Efforts.” KFF, 24 June 2022',
                      link:
                        'https://www.kff.org/global-health-policy/fact-sheet/the-u-s-government-and-international-family-planning-reproductive-health-efforts/',
                    },
                    {
                      title:
                        'Stevenson, Amanda J, et al. The Impact of Contraceptive Access on High School Graduation. American Association for the Advancement of Science, 5 May 2021',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8099178/',
                    },
                    {
                      title: '“Unmet Need for Contraception: Fact Sheet.” PRB',
                      link:
                        'https://www.prb.org/resources/unmet-need-for-contraception-fact-sheet/',
                    },
                    {
                      title:
                        '“A Decision Aid to Help Women Choose and Use a Method of Birth Control.” PCORI, 4 Mar. 2022',
                      link:
                        'https://www.pcori.org/research-results/2013/decision-aid-help-women-choose-and-use-method-birth-control',
                    },
                    {
                      title:
                        'Your Birth Control Choices - Reproductive Health Access Project. Reproductive Access Project, Oct. 2021',
                      link:
                        'https://www.reproductiveaccess.org/wp-content/uploads/2014/06/2020-09-contra-choices.pdf',
                    },
                    {
                      title:
                        'Ambrosino, Nicolino, and Enrica Bertella. Lifestyle Interventions in Prevention and Comprehensive Management of COPD. European Respiratory Society, Sept. 2018',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6118879/',
                    },
                    {
                      title:
                        'Saini, Jagriti, et al. “A Comprehensive Review on Indoor Air Quality Monitoring Systems for Enhanced Public Health - Sustainable Environment Research.” BioMed Central, BioMed Central, 29 Jan. 2020',
                      link:
                        'https://sustainenvironres.biomedcentral.com/articles/10.1186/s42834-020-0047-y',
                    },
                    {
                      title: '“Pulse Oximetry.” Yale Medicine, 2 Mar. 2021',
                      link:
                        'https://www.yalemedicine.org/conditions/pulse-oximetry#:~:text=Basically%2C',
                    },
                    {
                      title:
                        'Hang, Liang-Wen, et al. “Validation of Overnight Oximetry to Diagnose Patients with Moderate to Severe Obstructive Sleep Apnea.” BMC Pulmonary Medicine, U.S. National Library of Medicine, 20 Mar. 2015',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/25880649/',
                    },
                    {
                      title:
                        'Luks, Andrew M, and Erik R Swenson. “Pulse Oximetry for Monitoring Patients with COVID-19 at Home. Potential Pitfalls and Practical Guidance.” Annals of the American Thoracic Society, U.S. National Library of Medicine, 17 Sept. 2020',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/32521167/',
                    },
                    {
                      title:
                        '“Evaluating Clinical Decision Support.” Rethinking Clinical Trials, 27 Dec. 2021',
                      link:
                        'https://rethinkingclinicaltrials.org/chapters/conduct/real-world-evidence-clinical-decision-support/evaluating-cds/',
                    },
                    {
                      title:
                        '“Immunization Calculation Engine (ICE).” CDS Connect',
                      link:
                        'https://cds.ahrq.gov/cdsconnect/artifact/immunization-calculation-engine-ice-0',
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

export default DigitalHealthTrendsFeature
