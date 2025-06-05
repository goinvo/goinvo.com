import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
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
                GoInvo has spent the last two months researching and breaking
                down these problems. The result is a list ranked based on
                several quantitative indicators, such as number of deaths,
                number of American people impacted, dollars spent or lost, and
                number of related problems. The interconnected nature of the US
                healthcare system makes it extremely challenging to separate
                these problems. We have coupled analytical skills and interest
                in health policy to bring to light this complex web of menacing
                realities. Unsurprisingly, all problems can be attributed to the
                fee-for-service system in some way.
              </p>
              <p>
                We encourage you to be appalled by these statistics... and then
                do something about it.
              </p>
              <p>
                Rally your friends (virtually), pick a problem, and dive in. Use
                the "What's being done" column in Airtable to evaluate current
                efforts and potentially join them. Copy over our Airtable and
                continue researching, adding metrics, and brainstorming
                solutions. Create an interesting data viz. However you choose to
                get started, this is an opportunity to understand healthcare's
                complexity and contribute to the efforts of improvement.
              </p>
            </div>
          </div>

          <div className="max-width">
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
                US. We’d like to acknowledge that some of the problems you may
                expect are not present; this may be due to ongoing research by
                our team or inconclusive data. Racial inequities in healthcare
                and medical bill errors are two prominent issues that are at the
                top of our radar. Where data is available, we’ve listed
                quantitative metrics supporting the severity of each problem. We
                encourage you to explore the list and references, and send your
                feedback on this draft to{' '}
                <a href="mailto:hello@goinvo.com"> hello@goinvo.com</a>.
              </p>
              <p className="text--gray">
                Licensed under Creative Commons Attribution 4.0 license.
              </p>
              <h4 className="header--sm margin-bottom--half margin-top--double">
                About GoInvo
              </h4>
              <p className="text--gray">
                GoInvo is a healthcare design company that crafts innovative
                digital and physical solutions. Our deep expertise in Health IT,
                Genomics, and Open Source health has delivered results for the
                National Institutes of Health, Walgreens, Mount Sinai, and
                Partners Healthcare.
              </p>
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v3 - 1.Apr.2021
                </h3>
                <p className="text--gray">
                  The list has been expanded to include the top 50 US healthcare
                  problems. We have started linking resources to organizations
                  that are tackling these problems, and are exploring an API
                  integration for Airtable so the list automatically updates as
                  we make changes.
                </p>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v2 - 17.Feb.2021
                </h3>
                <p className="text--gray">
                  The list has been expanded to include the top 40 US healthcare
                  problems. We have updated the ranking algorithm to consider a
                  weighted average of each of the quantitative metrics.
                </p>
                <p className="text--gray">
                  =0.25*(deaths/max(deaths))+0.25*(spending/max(spending))+0.25*(peopleimpacted/max(peopleimpacted))+0.25*(relatedprobs/max(relatedprobs))
                </p>
                <p className="text--gray">
                  The equal (0.25) weighting may be adjusted over time with
                  supporting literature.
                </p>
                <p className="text--gray">
                  Stay tuned for V03 where we will include a visual
                  representation of the connectedness of these problems, and
                  showcase the current status of each problem being addressed.
                </p>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v1 - 11.Feb.2021
                </h3>
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
                  Fee-for-service: payment is dependent on the quantity of care
                </p>
                <p className="text--gray">
                  Value-based: payment is dependent on the quality of care
                </p>
                <p className="text--gray">
                  The initial ranking is based on the quantitative data as well
                  as the prevalence of the problem as explained in research.
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
                title="Airtable Top Healthcare Problems"
              ></iframe>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Hannah Sennik" />
                <Author name="Juhan Sonin" company="GoInvo, MIT" />
                <Author name="Eric Benoit" />
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
                      title: 'Problems of Health Care in the United States.',
                      link:
                        'https://saylordotorg.github.io/text_social-problems-continuity-and-change/s16-04-problems-of-health-care-in-the.html',
                    },
                    {
                      title:
                        'Lee, Vivian S. The Long Fix: Solving America’s Health Care Crisis with Strategies That Work for Everyone. First edition, W.W. Norton & Company, 2020.',
                      link: '',
                    },
                    {
                      title:
                        'https://www.pinnaclecare.com/download/Human-Cost-Financial-Impact-Whitepaper.pdf',
                      link:
                        'https://www.pinnaclecare.com/download/Human-Cost-Financial-Impact-Whitepaper.pdf',
                    },
                    {
                      title:
                        'https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Life-Sciences-Health-Care/gx-lshc-hc-outlook-2018.pdf',
                      link:
                        'https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Life-Sciences-Health-Care/gx-lshc-hc-outlook-2018.pdf',
                    },
                    {
                      title:
                        'Shrank, William H., et al. "Waste in the US Health Care System: Estimated Costs and Potential for Savings." JAMA, vol. 322, no. 15, Oct. 2019, pp. 1501–09. PubMed, doi:10.1001/jama.2019.13978.',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/31589283/',
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
                      title:
                        'Hou, Chia-Yi. "What Are the Most Important Health Issues of 2020?" TheHill, 2 Jan. 2020',
                      link:
                        'https://thehill.com/changing-america/well-being/prevention-cures/476566-what-are-the-most-important-health-issues-of-2024',
                    },
                    {
                      title:
                        'Farr, Christina. "Why, in the Midst of a U.S. Health Crisis, There Are Major Challenges for Doctors to Access Patient Records." CNBC, 15 May 2020',
                      link:
                        'https://www.cnbc.com/2020/05/15/poorly-connected-digitized-health-system-endangers-americas-health.html',
                    },
                    {
                      title:
                        'CDCTobaccoFree. "Data and Statistics." Centers for Disease Control and Prevention, 25 Aug. 2020',
                      link:
                        'https://www.cdc.gov/tobacco/data_statistics/index.htm',
                    },
                    {
                      title:
                        'Carroll, Aaron E. “The Real Reason the U.S. Has Employer-Sponsored Health Insurance.” The New York Times, 5 Sept. 2017. NYTimes.com',
                      link:
                        'https://www.nytimes.com/2017/09/05/upshot/the-real-reason-the-us-has-employer-sponsored-health-insurance.html',
                    },
                    {
                      title:
                        'Dolan, Ed. “The ‘Original Sin’ of the U.S. Health Care System.” Medium, 12 Nov. 2018',
                      link:
                        'https://medium.com/s/story/employer-sponsored-insurance-is-the-original-sin-of-the-american-health-care-system-330dcf6b170c',
                    },
                    {
                      title:
                        'How Many Americans Get Health Insurance from Their Employer?',
                      link:
                        'https://www.ehealthinsurance.com/resources/small-business/how-many-americans-get-health-insurance-from-their-employer',
                    },
                    {
                      title:
                        'Norbeck, Gary Price, MD, and Tim. “Poverty Does Not Have to Equal High Healthcare Spending.” Forbes',
                      link:
                        'https://www.forbes.com/sites/physiciansfoundation/2017/12/04/poverty-does-not-have-to-equal-high-healthcare-spending/',
                    },
                    {
                      title:
                        'http://www.pnhp.org/excessdeaths/health-insurance-and-mortality-in-US-adults.pdf',
                      link:
                        'http://www.pnhp.org/excessdeaths/health-insurance-and-mortality-in-US-adults.pdf',
                    },
                    {
                      title:
                        'Sainato, Michael. “The Americans Dying Because They Can’t Afford Medical Care.” The Guardian, 7 Jan. 2020. www.theguardian.com',
                      link:
                        'https://www.theguardian.com/us-news/2020/jan/07/americans-healthcare-medical-costs',
                    },
                    {
                      title:
                        'CDC. “Obesity Is a Common, Serious, and Costly Disease.” Centers for Disease Control and Prevention, 11 Feb. 2021',
                      link: 'https://www.cdc.gov/obesity/data/adult.html',
                    },
                    {
                      title:
                        '“Deductible Relief Day: How Rising Deductibles Are Affecting People with Employer Coverage.” Peterson-KFF Health System Tracker',
                      link:
                        'https://www.healthsystemtracker.org/brief/deductible-relief-day-how-rising-deductibles-are-affecting-people-with-employer-coverage/',
                    },
                    {
                      title:
                        '“2015 Employer Health Benefits Survey - Summary Of Findings.” KFF, 22 Sept. 2015',
                      link:
                        'https://www.kff.org/report-section/ehbs-2015-summary-of-findings/',
                    },
                    {
                      title:
                        'Firth, Jamie and 2016. “Kaiser Health Tracking Poll: April 2016 - Substance Abuse and Mental Health.” KFF, 3 May 2016',
                      link:
                        'https://www.kff.org/report-section/kaiser-health-tracking-poll-april-2016-substance-abuse-and-mental-health/',
                    },
                    {
                      title:
                        'MINDS, OPEN. 2019 U.S. Mental Health Spending Topped $225 Billion, With Per Capita Spending Ranging From $37 In Florida To $375 In Maine - OPEN MINDS Releases New Analysis.',
                      link:
                        'https://www.prnewswire.com/news-releases/2019-us-mental-health-spending-topped-225-billion-with-per-capita-spending-ranging-from-37-in-florida-to-375-in-maine--open-minds-releases-new-analysis-301058381.html',
                    },
                    {
                      title:
                        '“What Are the Recent and Forecasted Trends in Prescription Drug Spending?” Peterson-KFF Health System Tracker',
                      link:
                        'https://www.healthsystemtracker.org/chart-collection/recent-forecasted-trends-prescription-drug-spending/',
                    },
                    {
                      title:
                        '“Prescription Drug Spending in U.S. 1960-2020.” Statista',
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
                        'CDC - Sleep Home Page - Sleep and Sleep Disorders. 30 June 2020',
                      link: 'https://www.cdc.gov/sleep/index.html',
                    },
                    {
                      title: 'The Costs of Insufficient Sleep.',
                      link:
                        'https://www.rand.org/randeurope/research/projects/the-value-of-the-sleep-economy.html',
                    },
                    {
                      title:
                        '“Health Literacy Fact Sheets.” Center for Health Care Strategies, 1 Oct. 2013',
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
                        'OHCHR | "Contempt for the Poor in US Drives Cruel Policies,” Says UN Expert.',
                      link:
                        'https://www.ohchr.org/EN/NewsEvents/Pages/DisplayNews.aspx?NewsID=23172&LangID=E',
                    },
                    {
                      title:
                        'Alcohol Facts and Statistics | National Institute on Alcohol Abuse and Alcoholism (NIAAA).',
                      link:
                        'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/alcohol-facts-and-statistics',
                    },
                    {
                      title:
                        '“The Economic Cost of Physician Burnout.” HBS Working Knowledge, 25 Sept. 2019',
                      link:
                        'http://hbswk.hbs.edu/item/the-economic-cost-of-physician-burnout',
                    },
                    {
                      title:
                        'Patel, Rikinkumar S., et al. “Factors Related to Physician Burnout and Its Consequences: A Review.” Behavioral Sciences, vol. 8, no. 11, Oct. 2018. PubMed Central, doi:10.3390/bs8110098.',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6262585/',
                    },
                    {
                      title:
                        '“Coronavirus Disease 2019.” Centers for Disease Control and Prevention, 21 Dec. 2020',
                      link:
                        'https://www.cdc.gov/media/releases/2020/p1218-overdose-deaths-covid-19.html',
                    },
                    {
                      title:
                        'Urban Institute. "How Are Income and Wealth Linked to Health and Longevity?"',
                      link:
                        'https://www.urban.org/sites/default/files/publication/49116/2000178-How-are-Income-and-Wealth-Linked-to-Health-and-Longevity.pdf',
                    },
                    {
                      title:
                        'Shaw, Kate M., et al. “Chronic Disease Disparities by County Economic Status and Metropolitan Classification, Behavioral Risk Factor Surveillance System, 2013.” Preventing Chronic Disease, vol. 13, Sept. 2016. PubMed Central, doi:10.5888/pcd13.160088.',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5008860/',
                    },
                    {
                      title:
                        '“54 Million People in America Face Food Insecurity during the Pandemic. It Could Have Dire Consequences for Their Health.” AAMC',
                      link:
                        'https://www.aamc.org/news-insights/54-million-people-america-face-food-insecurity-during-pandemic-it-could-have-dire-consequences-their',
                    },
                    {
                      title:
                        'Wolfson, Julia A., and Cindy W. Leung. “Food Insecurity During COVID-19: An Acute Crisis With Long-Term Health Implications.” American Journal of Public Health, vol. 110, no. 12, Sept. 2020, pp. 1763–65. ajph.aphapublications.org (Atypon), doi:10.2105/AJPH.2020.305953.',
                      link:
                        'https://ajph.aphapublications.org/doi/10.2105/AJPH.2020.305953',
                    },
                    {
                      title:
                        'Tolbert, Jennifer, et al. “Key Facts about the Uninsured Population.” KFF, 6 Nov. 2020',
                      link:
                        'https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/',
                    },
                    {
                      title:
                        '“Subsidized Coverage - HealthCare.Gov Glossary.” HealthCare.Gov',
                      link:
                        'https://www.healthcare.gov/glossary/subsidized-coverage/',
                    },
                    {
                      title: 'Consumer Info & Action - The NHCAA.',
                      link:
                        'https://www.nhcaa.org/resources/health-care-anti-fraud-resources/consumer-info-action.aspx',
                    },
                    {
                      title:
                        '“How Health Care Inequality Increases Costs for Everyone.” The Balance',
                      link:
                        'https://www.thebalance.com/health-care-inequality-facts-types-effect-solution-4174842',
                    },
                    {
                      title:
                        '“Defensive Medicine and How It Affects Healthcare Costs.” Verywell Health',
                      link:
                        'https://www.verywellhealth.com/defensive-medicine-2615160',
                    },
                    {
                      title:
                        'Vento, Sandro, et al. “Defensive Medicine: It Is Time to Finally Slow down an Epidemic.” World Journal of Clinical Cases, vol. 6, no. 11, Oct. 2018, pp. 406–09. PubMed Central, doi:10.12998/wjcc.v6.i11.406.',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6163143/',
                    },
                    {
                      title:
                        'Panchal, Nirmita, et al. “The Implications of COVID-19 for Mental Health and Substance Use.” KFF, 10 Feb. 2021',
                      link:
                        'https://www.kff.org/coronavirus-covid-19/issue-brief/the-implications-of-covid-19-for-mental-health-and-substance-use/',
                    },
                    {
                      title:
                        'https://www.cdc.gov/nchs/data/nhis/earlyrelease/emergency_room_use_january-june_2011.pdf',
                      link:
                        'https://www.cdc.gov/nchs/data/nhis/earlyrelease/emergency_room_use_january-june_2011.pdf',
                    },
                    {
                      title:
                        'Carroll, Linda. “Declining Numbers of Americans Have a Primary Care Provider.” Reuters, 16 Dec. 2019.',
                      link:
                        'https://www.reuters.com/article/us-health-pcp-trends/declining-numbers-of-americans-have-a-primary-care-provider-idUSKBN1YK1Z4',
                    },
                    {
                      title:
                        '"Hospital Bills and Overcharging.” Healthline, 18 Sept. 2018.',
                      link:
                        'https://www.healthline.com/health-news/80-percent-hospital-bills-have-errors-are-you-being-overcharged#Billing-mistakes',
                    },
                    {
                      title:
                        'Mar 04, Olivia Pham Published: and 2020. “Disparities in Health and Health Care: Five Key Questions and Answers.” KFF, 4 Mar. 2020',
                      link:
                        'https://www.kff.org/racial-equity-and-health-policy/issue-brief/disparities-in-health-and-health-care-five-key-questions-and-answers/',
                    },
                    {
                      title:
                        'Farr, Christina. “Hospital Execs Say They Are Getting Flooded with Requests for Your Health Data.” CNBC, 18 Dec. 2019',
                      link:
                        'https://www.cnbc.com/2019/12/18/hospital-execs-say-theyre-flooded-with-requests-for-your-health-data.html',
                    },
                    {
                      title:
                        'Tanner, Adam. “How Data Brokers Make Money Off Your Medical Records.” Scientific American, doi:10.1038/scientificamerican0216-26.',
                      link:
                        'https://www.scientificamerican.com/article/how-data-brokers-make-money-off-your-medical-records/',
                    },
                    {
                      title: 'Lying-Patients.',
                      link:
                        'https://www.advisory.com/daily-briefing/2018/12/10/lying-patients',
                    },
                    {
                      title:
                        'Loneliness and Social Isolation Linked to Serious Health Conditions. 4 Nov. 2020.',
                      link:
                        'https://www.cdc.gov/aging/publications/features/lonely-older-adults.html',
                    },
                    {
                      title:
                        'Beilock, Sian Leah. “Why Young Americans Are Lonely.” Scientific American.',
                      link:
                        'https://www.scientificamerican.com/article/why-young-americans-are-lonely/',
                    },
                    {
                      title:
                        'Office, U. S. Government Accountability. Workplace Safety and Health: Additional Efforts Needed to Help Protect Health Care Workers from Workplace Violence.',
                      link: 'https://www.gao.gov/products/gao-16-11',
                    },
                    {
                      title:
                        'Abelson, Reed. “Doctors Are Calling It Quits Under Stress of the Pandemic.” The New York Times, 15 Nov. 2020. NYTimes.com.',
                      link:
                        'https://www.nytimes.com/2020/11/15/health/Covid-doctors-nurses-quitting.html',
                    },
                    {
                      title:
                        '12% of Physicians Are Considering Leaving Medicine and 7 Other Findings about the US Physician COVID-19 Experience.',
                      link:
                        'https://www.beckershospitalreview.com/hospital-physician-relationships/12-of-physicians-are-considering-leaving-medicine-and-7-other-findings-about-the-us-physician-covid-19-experience.html',
                    },
                    {
                      title:
                        'Sharma, Raj. “Council Post: Who Really Owns Your Health Data?” Forbes.',
                      link:
                        'https://www.forbes.com/sites/forbestechcouncil/2018/04/23/who-really-owns-your-health-data/?sh=69a5de6f6d62',
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
