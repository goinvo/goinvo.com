import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import Divider from '../../../components/divider'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Virtual Diabetes Care - GoInvo',
  metaDescription:
    'Learn about the benefits of virtual diabetes care, and a hybrid healthcare approach, which combines in-person visits with telehealth.',
  heroImage:
    '/images/features/virtual-care-diabetes/virtual-care-diabetes-hero.jpg',
}

class VirtualDiabetesCareFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="virtual-diabetes-care-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Telehealth and the Hidden Virtues of Virtual Diabetes Care
              </h1>

              <p>
                While telehealth in various forms has been a part of medical
                care for well over a decade, it has, until recently, received
                only limited use. Prior to the pandemic, across the U.S. health
                system, telehealth visits were minimal, representing less than
                1% of encounters across all specialties when looking at Medicare
                telehealth visits.
                <sup>
                  <a href="#references">1</a>
                </sup>{' '}
                However, during the pandemic — as legislative policies expanded
                coverage for telehealth services, along with improved
                reimbursement to ease adoption by clinicians — there was a
                significant increase in physicians who offered remote care
                services, often in conjunction with face-to-face care to their
                patients.
              </p>

              <p>
                By 2020, telehealth visits within the Medicare program
                represented 8% of primary care visits, and 3% of specialists
                visits, with the largest increase in visits seen in mental
                health / behavioral health.
                <sup>
                  <a href="#references">1</a>
                </sup>{' '}
                With Medicare waiving its strict telehealth reimbursement rules,
                the amount of telehealth services delivered from April to
                December, 2020 increased tenfold from the previous year, from 5
                million to 53 million, according to the U.S. Government
                Accountability Office.
                <sup>
                  <a href="#references">2</a>
                </sup>{' '}
                At the peak of the pandemic, surveys showed that 32%, or nearly
                a third, of all outpatient visits were telehealth.
                <sup>
                  <a href="#references">3</a>
                </sup>
              </p>

              <p>
                In the American Medical Association’s 2021 telehealth report,
                over 60% of the clinicians surveyed felt most of their
                telehealth visits replaced in-person care (63% believed these
                visits supplemented in person care), with 80% of those providers
                asserting their patients have better access to care with the use
                of telehealth.
                <sup>
                  <a href="#references">4</a>
                </sup>{' '}
                85% of the physicians surveyed reported they currently use
                virtual care, mostly with live video visits, in addition to in
                person care, and over half want to increase the amount of
                telehealth they use in their practice.
                <sup>
                  <a href="#references">4</a>
                </sup>{' '}
                Today, telehealth visits are down to an average of 13-17%.
                <sup>
                  <a href="#references">3</a>
                </sup>{' '}
                However, 40% of consumers surveyed by McKinsey, stated they want
                to continue to use telehealth, significantly higher than the 11%
                of consumers wanting to use telehealth prior to the pandemic.
                <sup>
                  <a href="#references">3</a>
                </sup>
              </p>

              <p>
                One of the overlooked benefits of the dramatic increase in
                virtual care during the pandemic is that it gave clinicians the
                opportunity to use telehealth tools for providing medical care
                outside of the traditional face-to-face model, and most
                importantly to evaluate outcomes. The sheer number of telehealth
                visits also provided real world data for those seeking to study
                and analyze its impacts on care delivery.
              </p>

              <p>
                <em>Hybrid Care Delivery</em>
                <br />
                Virtual care has some surprising benefits that build upon what
                in-person care does well. Telehealth’s ability to increase
                access to medical care by overcoming geographic, time, and
                mobility barriers makes it a great method to transform how
                primary care is provided. Combining the traditional face-to-face
                care in the outpatient clinic with care via a smartphone,
                tablet, or computer, can ease communication with the patient’s
                health team. More frequent conversations about what patients are
                eating, how they are moving, and what their life looks like
                outside of the office visit, can help the health team prevent
                and treat medical conditions sooner. In this way, telehealth has
                the potential to make it easier for people to work with their
                health team and make those healthy lifestyle choices.
              </p>

              <h2 className="header--lg margin-top margin-bottom--none">
                Treating Diabetes Virtually
              </h2>

              <p className="margin-top--none">
                Chronic conditions like diabetes, stroke, and heart disease
                represent the leading cause for death and disability in the
                United States, according to the Centers for Disease Control and
                Prevention.
                <sup>
                  <a href="#references">5</a>
                </sup>{' '}
                Six out of 10 Americans have at least one chronic disease that
                is often preventable with healthy lifestyle habits.
                <sup>
                  <a href="#references">5</a>
                </sup>{' '}
                Diabetes, in particular, affects 463 million people worldwide.
                <sup>
                  <a href="#references">6</a>
                </sup>{' '}
                In the U.S alone, 37.3 million adults or 11% of the population
                are diagnosed with diabetes.
                <sup>
                  <a href="#references">7</a>
                </sup>{' '}
                Unfortunately, that includes 8.5 million people who are unaware
                they have diabetes.
                <sup>
                  <a href="#references">7</a>
                </sup>
                Once diagnosed with diabetes, a person has an increased risk of
                having other chronic health conditions like obesity,
                hypertension, heart and liver disease, as well as some forms of
                cancer. Being able to adequately treat and ideally prevent this
                condition could potentially prevent many of the chronic health
                conditions mentioned and promote health and wellness in many
                communities.
              </p>

              <p>
                The foundation of care for people with diabetes is two-fold:
                provide advice and directions on medications (oral agents and
                insulin injections) for glucose control as well as health
                education that empowers a patient in the self management of the
                condition to prevent acute complications and reduce long term
                complications.
                <sup>
                  <a href="#references">8</a>
                </sup>{' '}
                This type of support has demonstrated an improvement in blood
                sugar, blood pressure, and weight control for patients with
                diabetes. Importantly, this usually requires a person with
                diabetes to have frequent touch points within a comprehensive
                health system beyond just the physician, including nurses,
                diabetes educators, nutritionists, or pharmacists.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/rural_urban.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <p>
                A key resource in providing care to these individuals is time.
                In{' '}
                <a href="https://www.goinvo.com/work/tabeeb-diagnostics">
                  rural areas
                </a>
                , the commute time to the nearest doctor is an hour on average.
                In underserved urban areas, the time to an appointment can be
                months because of the low physician to patient ratios.
                <sup>
                  <a href="#references">9</a>
                </sup>
              </p>

              <p>
                Virtual care delivery alleviates the limitations of face-to-face
                encounters by creating more touch points and supplementing in
                person care. Several recent studies show that a virtual managed
                care system for diabetes can lead to measurable clinical
                improvements that are similar to those seen with usual
                face-to-face medical care — including decrease in Hgb A1c,
                significant and sustained weight loss, and decrease in blood
                pressure.
                <sup>
                  <a href="#references">9</a>
                </sup>
                <sup>,</sup>
                <sup>
                  <a href="#references">10</a>
                </sup>
                <sup>,</sup>
                <sup>
                  <a href="#references">11</a>
                </sup>
              </p>

              <p>
                Clinically, results from a 2021 systematic review and meta
                analysis of 29 randomized control trials demonstrated when
                compared to usual care Hgb A1c can be greatly influenced through
                the use of technology interventions of various types, including
                telephone, videoconferencing, interactive websites and mobile
                health apps.
                <sup>
                  <a href="#references">11</a>
                </sup>{' '}
                Additionally, a significant decrease in weight / BMI and blood
                pressure has also been associated with telemedicine care for
                diabetes management. A telemedicine program started in the
                health system of UPMC in Pittsburgh showed an average decrease
                of A1c from 10.2% to 8.8% in three months.
                <sup>
                  <a href="#references">9</a>
                </sup>
              </p>

              <p>
                Why has hybrid virtual and face-to-face care demonstrated
                improvement for patients with diabetes?
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/point_1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <p>
                1.{' '}
                <strong>
                  Additional, regular touchpoints can be critical to
                  longitudinal care for chronic diseases like diabetes.
                </strong>{' '}
                Being able to meet virtually means more frequent visits with the
                physician, diabetes educators, nutritionists, and exercise
                specialists on the healthcare team, which gives the patient more
                opportunities to have success within the program and feel
                empowered. Virtual meetings allow for more frequent touchpoints
                to closely monitor glucose levels and patient concerns.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/point_2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <p>
                2.{' '}
                <strong>
                  Virtual care helps patients become active participants in
                  their own care management.
                </strong>{' '}
                A qualitative systematic review of 13 studies showed an
                improvement in patients becoming active participants in their
                own care and increasing their self-management skills as elements
                of virtual care fostered a sense of community, a critical part
                in being a patient with diabetes.
                <sup>
                  <a href="#references">12</a>
                </sup>{' '}
                Recognizing this, the American Diabetes Association recommends
                digital coaching and digital self management interventions as
                effective methods to deliver “diabetes self management education
                and support”.
                <sup>
                  <a href="#references">13</a>
                </sup>
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/virtual-care-diabetes/point_3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <p>
                3.{' '}
                <strong>
                  Virtual care delivery can help shift the focus to preventative
                  care rather than reactive.
                </strong>{' '}
                Virtual care is already playing a significant role in the
                prevention of diabetes in those most at risk. For example, the
                diabetes prevention program designed by the CDC is a nationally
                recognized program focused on lifestyle habits that has been
                effective in decreasing the risk of Type 2 DM for patients by
                nearly 58%.
                <sup>
                  <a href="#references">14</a>
                </sup>{' '}
                This program offers a curriculum that focuses on the modifiable
                lifestyle factors that tend to increase the risk for diabetes —
                including food choices, physical activity, coping with stress,
                and resiliency with healthy habits. This is primarily a program
                conducted in person; however, there are states that offer it
                online. For instance, North Carolina State University and Blue
                Cross and Blue Shield of North Carolina have teamed up to host
                their own virtual program.
                <sup>
                  <a href="#references">15</a>
                </sup>{' '}
                “Eat Smart, Move More, Prevent Diabetes” is recognized as a CDC
                certified online diabetes prevention program which provides real
                time instruction with live instructors and evidence based
                lifestyle strategies to participants.
                <sup>
                  <a href="#references">16</a>
                </sup>{' '}
                This has allowed people to participate from all areas of the
                state who normally would be limited by time and location.
              </p>

              <p>
                <em>
                  Extending Longitudinal Virtual Care to Other Chronic Illnesses
                </em>
                <br />
                Overall, 68% of the medical services provided via telehealth are
                related to chronic disease management.
                <sup>
                  <a href="#references">4</a>
                </sup>{' '}
                So, it’s reasonable to consider that virtual care could have
                similar positive outcomes for other chronic conditions besides
                diabetes. Patients with chronic conditions require an integrated
                system of care that includes the components of “evidence-based,
                planned care; reorganization of practice systems and provider
                roles; improved patient self-management support; increased
                access to expertise; and greater availability of clinical
                information”.
                <sup>
                  <a href="#references">17</a>
                </sup>{' '}
                Virtual and face-to-face care combined in a hybrid model are
                well-suited to meet these requirements.
              </p>

              <h2 className="header--lg margin-top margin-bottom--none">
                Barriers to Virtual Care
              </h2>

              <p className="margin-top--none">
                There remain a number of barriers to the widespread use of
                virtual care methods and tools. Despite the evidence suggesting
                clinical efficacy similar to usual care, digital health as a
                main foundation for the delivery of diabetes care has not been
                readily adopted for a number of reasons including: poor
                reimbursement, unsustainable business models, and patient /
                provider concerns about private health data security.
                <sup>
                  <a href="#references">18</a>
                </sup>
              </p>

              <p>
                Though insurance reimbursement has expanded since the pandemic,
                it is inconsistent, and federal agencies, CMS in particular,
                plan to return to the previous strict regulations that limited
                its use to a select group of beneficiaries.
                <sup>
                  <a href="#references">19</a>
                </sup>{' '}
                Insurance reimbursement will be a key factor to seeing
                continuing progress and the positive outcomes for virtual and
                hybrid care models.
              </p>

              <p>
                The technology itself is not always accessible or usable by
                providers and patients. “Poor competence with technology, poor
                literacy, and language barriers” are common barriers to virtual
                care.
                <sup>
                  <a href="#references">20</a>
                </sup>{' '}
                In particular, technical issues with mobile apps or virtual
                video calls will need to be addressed. On the provider side,
                smaller practices may lack the robust technology to have secure
                telecommunication during visits and in between.
              </p>

              <p>
                As with many healthcare technologies and services, access and
                availability can be an issue. There are fears, perhaps
                well-founded, that virtual care could further worsen disparities
                of the more vulnerable populations including the elderly, ethnic
                minority groups and others in underserved communities.
                <sup>
                  <a href="#references">21</a>
                </sup>
              </p>

              <p>
                Lastly, certain facets of the virtual mode of care will continue
                to be less desirable to providers. For instance, there are
                continued concerns about the inability to do physical exams
                virtually which are important for the management of people with
                diabetes. Although this particular issue can be mitigated with a
                hybrid model combining virtual care with face-to-face visits
                when needed.
              </p>

              <h2 className="header--lg margin-top margin-bottom--none">
                A Future of Broader Access and Positive Outcomes
              </h2>

              <p className="margin-top--none">
                From the evidence gathered in studies over the period of
                2020-2021, there are many examples of the benefits of virtual
                care, especially for difficult to manage chronic conditions like
                diabetes. Also, over that time period, there has been an
                important cultural shift related to healthcare: physicians have
                grown more comfortable with the technology and patients have
                enjoyed the convenience. While virtual care does have pitfalls,
                many of these can be mitigated as a part of a hybrid model of
                medical care, which includes some face-to-face encounters as
                needed.
              </p>

              <p>
                If we are moving away from a reactive healthcare approach which
                often relies on face-to-face evaluations and assessments based
                on urgency, we need a model of care that allows people to
                frequently and easily share, talk, and plan with their
                healthcare team. This hybrid model could represent a paradigm
                shift that practically allows a preventative approach to
                healthcare delivery.
              </p>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <Divider />
              <h2 className="header--xl text--center">Authors</h2>
              <Author name="Shayla Nettey" />
              <Author name="Jonathan Follett" />
              <Author name="Sharon Lee" />
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
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
                    {
                      title:
                        'American Medical Association. 2021 Telehealth Survey Report. Published March 23, 2022. Accessed October 16,2022',
                      link:
                        'https://www.ama-assn.org/system/files/telehealth-survey-report.pdf',
                    },
                    {
                      title:
                        'National Center for Chronic Disease Prevention and Health Promotion. About Chronic Diseases. Updated September 6, 2022. Accessed December 16, 2022',
                      link:
                        'https://www.cdc.gov/chronicdisease/about/index.htm',
                    },
                    {
                      title:
                        'Saeedi P, Petersohn I, Salpea P. Global and regional diabetes prevalence estimates for 2019 and projections for 2030 and 2045: results from the international diabetes federation diabetes atlas, 9th edition. Diabetes Res Clin Pract. 2019 Nov:157:107843.doi: 10.1016/j.diabres.2019.107843',
                      link: '',
                    },
                    {
                      title:
                        'Centers for Disease Control and Prevention. By the Numbers: Diabetes in America. Updated October 25, 2022. Accessed December 8, 2022',
                      link:
                        'https://www.cdc.gov/diabetes/health-equity/diabetes-by-the-numbers.html#:~:text=37.3%20million%20people%20have%20diabetes,not%20know%20they%20have%20it',
                    },
                    {
                      title:
                        'ElSayed NA, Aleppo G, Vanita, R, et al. Introduction and Methodology: Standards of Care in Diabetes-2023 . Diabetes Care 2023;46(Supplement_1); S1-S4',
                      link: 'https://doi.org/10.2337/dc23-Sint',
                    },
                    {
                      title:
                        'Saiyed S, Joshi R, Khattab S, Dhillon S. The rapid implementation of an innovative virtual diabetes boot camp program: case study. JMIR Diabetes2022;7(1):e32369. doi: 10.2196/32369',
                      link: 'https://doi.org/10.2196/32369',
                    },
                    {
                      title:
                        'Al-Badri M, Kilroy CL, Hamdy O, et al. In-person and virtual multidisciplinary intensive lifestyle interventions are equally effective in patients with type 2 diabetes and obesity. Ther Adv Endocrinol Metab 2022',
                      link: 'https://doi.org/10.1177/20420188221093220',
                    },
                    {
                      title:
                        'Robson N, Hosseinzadeh H. Impact of Telehealth Care among adults living with type 2 diabetes in primary care:a systematic review and meta analysis of randomized controlled trials. Int J Environ Res Public Health 2021 Nov;18(22):12171. doi:10.3390/ijerph182212171',
                      link: 'https://doi.org/10.3390%2Fijerph182212171',
                    },
                    {
                      title:
                        "Jain SR, Sui Y, Ng CH, Chen ZX, Goh LH, Shorey S. Patients' and healthcare professionals' perspectives towards technology-assisted diabetes self-management education. A qualitative systematic review. PLoS One. 2020 Aug 17;15(8):e0237647. doi: 10.1371/journal.pone.0237647",
                      link: '',
                    },
                    {
                      title:
                        'ElSayed NA, Aleppo G, Aroda V. Facilitating Positive Health Behaviors and Well-Being to Improve Health Outcomes: Standards of Care in Diabetes-2023. Diabetes Care.2023;46(Suppl. 1):S68-S96.doi',
                      link: 'https://doi.org/10.2337/dc23-S005',
                    },
                    {
                      title:
                        'Centers for Disease Control and Prevention. National Diabetes Prevention Program. Updated December 27, 2022. Accessed October 14, 2022',
                      link: '',
                    },
                    {
                      title:
                        'Minemyer, P. Blue Cross NC, NC State team on diabetes prevention program. Published September 3, 2021. Accessed October 14, 2022',
                      link:
                        'https://www.fiercehealthcare.com/payer/blue-cross-nc-nc-state-team-diabetes-prevention-program',
                    },
                    {
                      title:
                        'Eat More, Move More, Prevent Diabetes. How it works. Accessed October 14, 2022',
                      link: 'https://esmmpreventdiabetes.com/how-it-works/',
                    },
                    {
                      title:
                        'Wagner EH, Austin BT, Von Korff M. Organizing care for patients with chronic illness. Milibank Q. 1996;74(4):511-44',
                      link: '',
                    },
                    {
                      title:
                        'Farhad, F. Diabetes Care in the Digital Era: a Synoptic overview. Curr Diab Rep. 2018:18(7) doi:10.1007/s11892-018-1013-5',
                      link:
                        'https://link.springer.com/article/10.1007/s11892-018-1013-5',
                    },
                    {
                      title:
                        'Telehealth.HHS.gov. Telehealth policy changes after the covid-19 public health emergency. Updated January 23,2023. Accessed Dec 13 2022',
                      link:
                        'https://telehealth.hhs.gov/providers/policy-changes-during-the-covid-19-public-health-emergency/policy-changes-after-the-covid-19-public-health-emergency/#what-is-being-phased-out',
                    },
                    {
                      title:
                        'Jain SR, Sui Y, Cheng HN. Patients and healthcare professionals’ perspectives towards technology-assisted diabetes self-management education. A qualitative systematic review. PLoS One. 2020 Aug 17:15(8):e0237647. doi: 10.1371/journal.pone.0237647',
                      link: '',
                    },
                    {
                      title:
                        'Macleod J, Scher L, Scalzo P. Technology Disparities and Therapeutic Inertia: A Call to Action for the Diabetes Care and Education Specialist.  ADCES in Practice. 2021;9(5):34-41. doi:10.1177/2633559X211032227',
                      link: 'https://doi.org/10.1177/2633559X211032227',
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

export default VirtualDiabetesCareFeature
