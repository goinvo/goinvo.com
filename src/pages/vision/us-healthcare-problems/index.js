import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import ProblemCard from '../../../components/vision/us-healthcare-problems/problem-card'
import problems from '../../../data/vision/us-healthcare-problems/problems.json'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'US Healthcare Problems',
  metaDescription:
    'The United States is home to some of the best and worst care. The list serves as a call to action for everyone to close the gap.',
  heroImage:
    '/images/features/us-healthcare-problems/us_healthcare_problems_hero_v01.jpg',
}

class USHealthcareProblemsFeature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      problemItems: problems,
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="us-healthcare-problems">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">US Healthcare Problems</h1>
              <p>
                The United States is home to some of the best and worst care.
                The US Healthcare Problems list is the product of GoInvo’s
                efforts to understand why these gaps exist and how they impact
                us. By drawing attention to the most prominent problems faced in
                our healthcare system, we can start to envision how it may be
                redesigned.
              </p>
              <p>
                The result of our research is a list ranked based on several
                quantitative indicators, such as number of deaths, number of
                American people impacted, and dollars spent or lost. The
                interconnected nature of the US healthcare system makes it
                nearly impossible to fully separate these problems. GoInvo has
                coupled analytical skills and interest in health policy to bring
                to light this complex web of menacing realities. Unsurprisingly,
                all problems can be attributed to the fee-for-service system in
                some way.
              </p>
            </div>
          </div>

          <div className="max-width pad-vertical--double">
            {this.state.problemItems.map((problem, i) => {
              return (
                <ProblemCard
                  number={i}
                  id={problem.id}
                  title={problem.title}
                  description={problem.description}
                  deaths={problem.deaths}
                  peopleImpacted={problem.peopleImpacted}
                  spending={problem.spending}
                  references={problem.references}
                />
              )
            })}
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg text--center margin-bottom--half margin-top--double">
                We'd Like Your Feedback
              </h2>
              <p className="text--gray">
                We’ve highlighted the top problems related to healthcare in the
                US. Where data is available, we’ve also listed quantitative
                metrics supporting the severity of each problem. Explore the
                list and references then send your feedback on this draft to{' '}
                <a href="mailto:hello@goinvo.com"> hello@goinvo.com</a>.
              </p>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <p className="text--gray">
                  The US Healthcare Problems list began as a google spreadsheet
                  research effort, with sources including “The Long Fix” by
                  Vivian Lee, CDC, and CMS. Our team aimed to pool relevant
                  quantitative and anecdotal information for each outlined
                  problem, making it possible to start to prioritize what needs
                  addressing. Ideally, the move away from a fee-for-service
                  system and towards a value-based approach would alleviate some
                  of this burden.
                </p>
                <p className="text--gray">
                  The initial ranking is based on the quantitative data as well
                  as the prevalence of the problem as explained in research. The
                  next iteration will implement a more robust rank-order that
                  considers more factors with relative weightings.
                </p>
              </div>
            </div>

            <div className="airtable">
              <iframe
                class="airtable-embed"
                src="https://airtable.com/embed/shrAt658WwPvlLJZw?backgroundColor=gray&viewControls=on"
                frameborder="0"
                onmousewheel=""
                width="100%"
                height="600"
              ></iframe>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Hannah Sennik" />
                <Author name="Juhan Sonin" company="GoInvo, MIT" />
              </div>

              <h3 className="header--md">Additional Contributors</h3>
              <p>
                Brad Dumke
                <br />
                Megan Janas
                <br />
                Susan Woods, MD
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
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        '"COVID-19 Map." Johns Hopkins Coronavirus Resource Center',
                      link: 'https://coronavirus.jhu.edu/map.html',
                    },
                    {
                      title: '"USAspending.Gov." USAspending.Gov',
                      link: 'https://www.usaspending.gov/',
                    },
                    {
                      title:
                        '"Jobs and Unemployment." Economic Policy Institute',
                      link: 'https://www.epi.org/indicators/unemployment/',
                    },
                    {
                      title:
                        '"Recovery Continues to Wane: Expiring Unemployment Relief Means More Trouble around the Corner." Economic Policy Institute',
                      link:
                        'https://www.epi.org/press/recovery-continues-to-wane-expiring-unemployment-relief-means-more-trouble-around-the-corner/',
                    },
                    {
                      title:
                        '"Business Closures Due to COVID-19 Could Cost U.S. Trillions in GDP." USC News, 30 Nov. 2020',
                      link:
                        'https://news.usc.edu/178979/business-closures-covid-19-pandemic-united-states-gdp-losses/',
                    },
                    {
                      title:
                        'Martin, Anne B., et al. "National Health Care Spending In 2019: Steady Growth For The Fourth Consecutive Year: Study Examines National Health Care Spending for 2019." Health Affairs, vol. 40, no. 1, Jan. 2021, pp. 14–24. DOI.org (Crossref), doi:10.1377/hlthaff.2020.02022.',
                      link:
                        'https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/NationalHealthExpendData/NationalHealthAccountsHistorical',
                    },
                    {
                      title:
                        'U.S. Health Care from a Global Perspective, 2019 | Commonwealth Fund. doi:https://doi.org/10.26099/7avy-fc29',
                      link:
                        'https://www.commonwealthfund.org/publications/issue-briefs/2020/jan/us-health-care-global-perspective-2019',
                    },
                    {
                      title:
                        'https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Life-Sciences-Health-Care/gx-lshc-hc-outlook-2018.pdf',
                      link:
                        'https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Life-Sciences-Health-Care/gx-lshc-hc-outlook-2018.pdf',
                    },
                    {
                      title:
                        'Lee, Vivian S. The Long Fix: Solving America’s Health Care Crisis with Strategies That Work for Everyone. First edition, W.W. Norton & Company, 2020.',
                      link: '',
                    },
                    {
                      title:
                        '"Hospitals Spent $2.5B on Social Determinant Programs from 2017 to 2019." Healthcare Dive',
                      link:
                        'https://www.healthcaredive.com/news/hospitals-spent-25b-on-social-determinant-programs-from-2017-to-2019/571646/',
                    },
                    {
                      title:
                        'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2751390',
                      link:
                        'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2751390',
                    },
                    {
                      title: 'Problems of Health Care in the United States.',
                      link:
                        'https://saylordotorg.github.io/text_social-problems-continuity-and-change/s16-04-problems-of-health-care-in-the.html',
                    },
                    {
                      title:
                        'https://www.pinnaclecare.com/download/Human-Cost-Financial-Impact-Whitepaper.pdf',
                      link:
                        'https://www.pinnaclecare.com/download/Human-Cost-Financial-Impact-Whitepaper.pdf',
                    },
                    {
                      title:
                        'https://www.americashealthrankings.org/explore/annual',
                      link:
                        'https://www.americashealthrankings.org/explore/annual',
                    },
                    {
                      title: '"CDC Press Releases." CDC, 1 Jan. 2016',
                      link:
                        'https://www.cdc.gov/media/releases/2014/p0501-preventable-deaths.html',
                    },
                    {
                      title:
                        '"Health Literacy Fact Sheets." Center for Health Care Strategies, 1 Oct. 2013',
                      link:
                        'https://www.chcs.org/resource/health-literacy-fact-sheets/',
                    },
                    {
                      title:
                        'Health Literacy in Healthy People 2030 | Health.Gov.',
                      link:
                        'https://health.gov/our-work/healthy-people/healthy-people-2030/health-literacy-healthy-people-2030',
                    },
                    {
                      title:
                        'Firth, Jamie and 2016. "Kaiser Health Tracking Poll: April 2016 - Substance Abuse and Mental Health." KFF, 3 May 2016',
                      link:
                        'kff.org/report-section/kaiser-health-tracking-poll-april-2016-substance-abuse-and-mental-health/',
                    },
                    {
                      title:
                        'MINDS, OPEN. 2019 U.S. Mental Health Spending Topped $225 Billion, With Per Capita Spending Ranging From $37 In Florida To $375 In Maine - OPEN MINDS Releases New Analysis.',
                      link:
                        'https://www.prnewswire.com/news-releases/2019-us-mental-health-spending-topped-225-billion-with-per-capita-spending-ranging-from-37-in-florida-to-375-in-maine--open-minds-releases-new-analysis-301058381.html',
                    },
                    {
                      title:
                        'Review, The Regulatory. Is Health Care Price Transparency Key to Lowering Costs? | The Regulatory Review. 2 Oct. 2019',
                      link:
                        'https://www.theregreview.org/2019/10/02/hussussian-health-care-price-transparency-key-lowering-costs/',
                    },
                    {
                      title:
                        'Make Transparent Health Care Prices A Price Of Any Future Aid To The Health Care Industry | Health Affairs Blog.',
                      link:
                        'https://www.healthaffairs.org/do/10.1377/hblog20200615.566069/full/',
                    },
                    {
                      title:
                        '"What Are the Recent and Forecasted Trends in Prescription Drug Spending?" Peterson-KFF Health System Tracker, Accessed 5 Jan. 2021.',
                      link:
                        'https://www.healthsystemtracker.org/chart-collection/recent-forecasted-trends-prescription-drug-spending/?_sft_category=spending',
                    },
                    {
                      title:
                        'Hou, Chia-Yi. "What Are the Most Important Health Issues of 2020?" TheHill, 2 Jan. 2020',
                      link:
                        'https://thehill.com/changing-america/well-being/prevention-cures/476566-what-are-the-most-important-health-issues-of-2024',
                    },
                    {
                      title:
                        '"Prescription Drug Spending in U.S. 1960-2020." Statista',
                      link:
                        'https://www.statista.com/statistics/184914/prescription-drug-expenditures-in-the-us-since-1960/',
                    },
                    {
                      title:
                        'https://www.bloomberg.com/news/articles/2019-05-08/nearly-one-in-two-americans-takes-prescription-drugs-survey',
                      link:
                        'https://www.bloomberg.com/news/articles/2019-05-08/nearly-one-in-two-americans-takes-prescription-drugs-survey',
                    },
                    {
                      title:
                        '"Subsidized Coverage - HealthCare.Gov Glossary." HealthCare.Gov',
                      link:
                        'https://www.healthcare.gov/glossary/subsidized-coverage/',
                    },
                    {
                      title:
                        'Norbeck, Gary Price, MD, and Tim. "Poverty Does Not Have to Equal High Healthcare Spending." Forbes',
                      link:
                        'https://www.forbes.com/sites/physiciansfoundation/2017/12/04/poverty-does-not-have-to-equal-high-healthcare-spending/?sh=5aa202415cdb',
                    },
                    {
                      title:
                        'OHCHR | "Contempt for the Poor in US Drives Cruel Policies," Says UN Expert.',
                      link:
                        'https://www.ohchr.org/EN/NewsEvents/Pages/DisplayNews.aspx?NewsID=23172&LangID=E',
                    },
                    {
                      title:
                        'Urban Institute. "How Are Income and Wealth Linked to Health and Longevity?"',
                      link:
                        'https://www.urban.org/sites/default/files/publication/49116/2000178-How-are-Income-and-Wealth-Linked-to-Health-and-Longevity.pdf',
                    },
                    {
                      title:
                        'Shaw, Kate M., et al. "Chronic Disease Disparities by County Economic Status and Metropolitan Classification, Behavioral Risk Factor Surveillance System, 2013." Preventing Chronic Disease, vol. 13, Sept. 2016. PubMed Central, doi:10.5888/pcd13.160088.',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5008860/',
                    },
                    {
                      title:
                        'http://www.pnhp.org/excessdeaths/health-insurance-and-mortality-in-US-adults.pdf',
                      link:
                        'http://www.pnhp.org/excessdeaths/health-insurance-and-mortality-in-US-adults.pdf',
                    },
                    {
                      title:
                        'https://www.cdc.gov/nchs/data/nhis/earlyrelease/emergency_room_use_january-june_2011.pdf',
                      link:
                        'https://www.cdc.gov/nchs/data/nhis/earlyrelease/emergency_room_use_january-june_2011.pdf',
                    },
                    {
                      title:
                        'Carroll, Linda. "Declining Numbers of Americans Have a Primary Care Provider." Reuters, 16 Dec. 2019.',
                      link:
                        'https://www.reuters.com/article/us-health-pcp-trends/declining-numbers-of-americans-have-a-primary-care-provider-idUSKBN1YK1Z4',
                    },
                    {
                      title:
                        'Tolbert, Jennifer, et al. "Key Facts about the Uninsured Population." KFF, 6 Nov. 2020',
                      link:
                        'https://www.kff.org/uninsured/fact-sheet/key-facts-about-the-uninsured-population/',
                    },
                    {
                      title:
                        'Reisman, Miriam. "EHRs: The Challenge of Making Electronic Data Usable and Interoperable." Pharmacy and Therapeutics, vol. 42, no. 9, Sept. 2017, pp. 572–75.',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5565131/',
                    },
                    {
                      title:
                        'EHRIntelligence. "Study Shows Physician Burnout Directly Related to EHRs." EHRIntelligence, 27 Sept. 2019',
                      link:
                        'https://ehrintelligence.com/news/study-shows-physician-burnout-directly-related-to-ehrs',
                    },
                    {
                      title:
                        '"4 Reasons Why EHR Interoperability Is a Mess (and How to Fix It)." Datica',
                      link:
                        'https://datica.com/blog/reasons-ehr-interoperability-is-a-mess-and-how-to-fix-it',
                    },
                    {
                      title:
                        '"Industry Voices—Interoperability Can Cut Health Costs by $30B. But This Needs to Happen First." FierceHealthcare',
                      link:
                        'https://www.fiercehealthcare.com/tech/industry-voices-interoperability-can-reduce-healthcare-costs-by-30b-here-s-how',
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

export default USHealthcareProblemsFeature
