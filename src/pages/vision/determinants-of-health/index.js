import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

import determinants from '../../../data/vision/determinants-of-health/chart-data.json'
import Chart from '../../../components/vision/determinants-of-health/chart'
import DeterminantDetails from '../../../components/vision/determinants-of-health/determinant-details'

class DeterminantsOfHealthFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDeterminantIndex: 0,
      selectedDeterminant: determinants[0]
    }
  }

  handleChartSelection = (index) => {
    this.setState({
      selectedDeterminantIndex: index,
      selectedDeterminant: determinants[index]
    });
  }

  render() {
    return (
      <Layout>
        <Hero image="/images/services/doh-preview.jpg"></Hero>
        <div className="determinants-of-health">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
                <h1 className="header--xl">Determinants of Health</h1>
                <h3 className="header--md">Health is more than medical care</h3>
                <p className="text--grey">89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health. Despite their importance, attempts to integrate the determinants into a single visualization have been limited.</p>
                <p className="text--grey">GoInvo identified this gap based on their extensive work as a healthcare design studio and conducted a literature review of sources (World Health Organization and the Kaiser Family Foundation) and face to face interviews with public policy analysts, health IT experts, and clinical professionals. Relying on their experience of mapping complex systems within healthcare, GoInvo created a comprehensive open source visualization of the social determinants of health.</p>
            </div>

            <div className="max-width max-width--md content-padding">
                <div className="margin-bottom--double">
                    <div className="pure-g button-group margin-bottom--double">
                        <div className="pure-u-1 pure-u-lg-1-2"><a href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf" target="_blank" rel="noopener noreferrer" className="button button--primary margin-top--double margin-bottom--half button--block margin-right">Download</a></div>
                        <div className="pure-u-1 pure-u-lg-1-2"><a href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/" target="_blank" rel="noopener noreferrer" className="button button--primary margin-top--double margin-bottom--half  button--block margin-right">Buy Print</a></div>
                    </div>
                    <div className="pure-g pad-bottom text--center">
                        <div className="pure-u-1 pure-u-lg-1-3"><a href="https://github.com/goinvo/HealthDeterminants" target="_blank" rel="noopener noreferrer">On Github</a></div>
                        <div className="pure-u-1 pure-u-lg-1-3"><a href="#methodology">Methodology</a></div>
                        <div className="pure-u-1 pure-u-lg-1-3"><a href="#references">References</a></div>
                    </div>
                </div>

                <Divider />
            </div>

            <div className="max-width max-width--md content-padding">
                <div>
                  <h1 className="header--xl text--center margin-top--double margin-bottom--half">Tap the categories to explore</h1>
                  <div id="determinants-chart">
                    <Chart selectedIndex={this.state.selectedDeterminantIndex} onSelect={this.handleChartSelection}/>
                  </div>

                  <div className="chart-details">
                    <DeterminantDetails determinant={this.state.selectedDeterminant} />
                  </div>
                </div>

                <div className="poster margin-top--double"><Image src="/images/features/determinants-of-health/determinants-of-health-poster.jpg" className="image--max-width" /></div>
                <div className="button-group">
                  <a href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf" target="_blank" rel="noopener noreferrer" className="button button--primary button--lg margin-top--double margin-bottom--double button--block">Download Poster</a>
                </div>

                <div>
                  <div className="authorImg pure-u-1 pure-u-lg-1-3 pad-right--only-lg">
                      <Image src="/images/features/determinants-of-health/determinants-of-health-mitre-poster.jpg" className="image--max-width" />
                  </div>
                  <div className="authorImg pure-u-1 pure-u-lg-1-3 pad-right--only-lg">
                      <Image src="/images/features/determinants-of-health/determinants-of-health-sxsw-poster3.jpg" className="image--max-width" />
                  </div>
                  <div className="authorImg pure-u-1 pure-u-lg-1-3 pad-right--only-lg">
                      <Image src="/images/features/determinants-of-health/determinants-of-health-studio-poster.jpg" className="image--max-width" />
                  </div>
                </div>
                <p className="text--gray">The Determinants of Health is available as a poster, an installation, a download, and an interactive visualization.</p>

                <div className="button-group">
                  <div className="pure-u-1 pure-u-lg-1-3"><a href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/" target="_blank" rel="noopener noreferrer" className="button button--primary margin-top--double margin-bottom--half  button--block">Buy Print</a></div>
                  <div className="pure-u-1 pure-u-lg-1-3"><a href="https://github.com/goinvo/HealthDeterminants" target="_blank" rel="noopener noreferrer" className="button button--primary margin-top--double margin-bottom--half  button--block">On Github</a></div>
                  <div className="pure-u-1 pure-u-lg-1-3"><a href="#methodology" className="button button--primary margin-top--double margin-bottom--half  button--block">Methodology</a></div>
                </div>

                <h4 className="header--sm margin-bottom--half">About GoInvo</h4>
                <p className="text--gray">GoInvo is a healthcare design company that crafts innovative digital and physical solutions. GoInvo’s deep expertise in Health IT, Genomics, and Open Source health has delivered results for the National Institute of Health, Walgreens, Mount Sinai and Partner Healthcare. Reach out for a custom installation or feedback.</p>
            </div>
          </div>


          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h1 className="header--xl">Methodology</h1>
                <p className="text--gray">Below is a description of the methodology used in creating the Determinants of Health visualization. It is also a record of versioned updates to the methodology and visualization based on continuing research and feedback. Thank you to those who have reached out and helped identify areas to improve.</p>
                <h4 className="header--sm margin-bottom--half">v1 - 26.Jul.2017</h4>
                <p className="text--gray">The 5 main determinants of health (genetics, medical care, social circumstances, environment, and individual behavior) were chosen due to their consistency across the following 7 out of 8 organizations:</p>
                <ul className="ul text--gray">
                  <li>NCHHSTP<sup><a href="#references">1</a></sup></li>
                  <li>WHO<sup><a href="#references">2</a></sup></li>
                  <li>Healthy People<sup><a href="#references">3</a></sup></li>
                  <li>Kaiser Family Foundation<sup><a href="#references">4</a></sup></li>
                  <li>NEJM<sup><a href="#references">5</a></sup></li>
                  <li>Health Affairs<sup><a href="#references">6</a></sup></li>
                  <li>Institute of Medicine<sup><a href="#references">7</a></sup></li>
                  <li>New South Wales Department of Health<sup><a href="#references">8</a></sup></li>
                </ul>
                <p className="text--gray">The lists of determinants published from each of the previously mentioned organizations were compiled and compared<sup><a href="#references">1 - 8</a></sup>. There was no standard in terms of the number of determinants, hierarchical organization of the determinants, and the naming for the determinants (for example, quality of housing<sup><a href="#references">3</a></sup> vs residence quality<sup><a href="#references">7</a></sup>). The most thorough publication for the determinants came from the Institute of Medicine report<sup><a href="#references">7</a></sup>. Therefore this was the primary source from which the list of 95 determinants within the visualization originated.</p>
                <p className="text--gray">The section below documents our analysis of the data and how we calculated the final impact percentages for the 5 main categories of determinants.</p>
                <p className="text--gray">The relative contribution of each of the determinant categories to one’s health was found using the estimated values referenced by the seven primary sources listed below.</p>
                <ul className="ul text--gray">
                  <li>DHHS<sup><a href="#references">9</a></sup></li>
                  <li>JAMA<sup><a href="#references">10, 12</a></sup></li>
                  <li>Health Affairs<sup><a href="#references">11</a></sup></li>
                  <li>PLoS<sup><a href="#references">13</a></sup></li>
                  <li>WHO<sup><a href="#references">14</a></sup></li>
                  <li>U.Wisconsin<sup><a href="#references">15</a></sup></li>
                </ul>
                <p className="text--gray">Each determinant category was then averaged based on the values from each of the aforementioned sources (the methodology in the primary sources were different depending on the source. The final percentages should therefore be an estimate and not be viewed as absolute numbers).</p>
                <p className="text--gray">Behavior: <strong className="text--primary">(50 + 38 + 40 + 39 + 36 + 45 + 30) / 7 = 39.71*</strong>
                  <br />Social: <strong className="text--primary">(15 + 40) / 2 = 27.5</strong>
                  <br />Genetics: <strong className="text--primary">(20 + 30) / 2 = 25</strong>
                  <br />Medical care: <strong className="text--primary">(10 + 10 + 20) / 3 = 13.33</strong>
                  <br />Environment: <strong className="text--primary">(20 + 7 + 5 + 5.4 + 3 + 10) / 6 = 8.4</strong></p>
                <p className="text--gray text--sm">*An original miscalculation of 'Behavior' has been rectified. The following values have subsequently been updated.</p>
                <p className="text--gray">The ratio for each determinant was then found by taking the average values found for each of the determinant categories and dividing them by the total determinant value.</p>
                <p className="text--gray">Behavior: <strong className="text--primary">39.71 / 113.94 = 34.85%</strong>
                  <br />Social: <strong className="text--primary">27.5 / 113.94 = 24.14%</strong>
                  <br />Genetics: <strong className="text--primary">25 / 113.94 = 21.94%</strong>
                  <br />Medical care: <strong className="text--primary">13.33 / 113.94 = 11.70%</strong>
                  <br />Environment: <strong className="text--primary">8.4 / 113.94 = 7.37%</strong>
                  <br />Total: <strong className="text--primary">34.85 + 24.14 + 21.94 + 11.70 + 7.37 = 100%</strong></p>
                <p className="text--gray">The final percentages are as follows.</p>
                <p className="text--gray">Behavioral determinants at <strong className="text--primary">35%.</strong>
                  <br />Social determinants at <strong className="text--primary">24%.</strong>
                  <br />Genetic determinants at <strong className="text--primary">22%.</strong>
                  <br />Medical care determinants at <strong className="text--primary">12%.</strong>
                  <br />Environmental determinants at <strong className="text--primary">7%.</strong></p>
                <h4 className="header--sm margin-bottom--half">v2 - 30.Aug.2017</h4>
                <p className="text--gray">The following are updated calculations for the relative contributions of each of the determinant categories. The relative contribution of each of the determinant categories to one’s health was found using the values referenced from the six sources listed below.</p>
                <ul className="ul text--gray">
                  <li>DHHS<sup><a href="#references">9</a></sup></li>
                  <li>JAMA<sup><a href="#references">10, 12</a></sup></li>
                  <li>Health Affairs<sup><a href="#references">11</a></sup></li>
                  <li>WHO<sup><a href="#references">14</a></sup></li>
                  <li>U.Wisconsin<sup><a href="#references">15</a></sup></li>
                </ul>
                <p className="text--gray">Each determinant category value is an average based on adding the values from each of the aforementioned sources.</p>
                <p className="text--gray">Behavior: <strong className="text--primary">(50% [9] + 42% [10] + 40% [11] + 45% [12] + 30% [15]) / 5 = 41.4%</strong>
                  <br />Social: <strong className="text--primary">(15% [11] + 40% [15]) / 2 = 27.5%</strong>
                  <br />Genetics: <strong className="text--primary">(20% [9] + 30% [11]) / 2 = 25%</strong>
                  <br />Medical care: <strong className="text--primary">(10% [9] + 10% [11] + 20% [15]) / 3 = 13.33...%</strong>
                  <br />Environment: <strong className="text--primary">(20% [9] + 3% [10] + 5% [11] + 3.9% [14] + 10% [15]) / 5 = 8.38%</strong></p>
                <p className="text--gray">Additional notes on the determinant category values: For source<sup><a href="#references">10</a></sup>, The environmental value of ~3% was based on dividing toxic agent deaths (60,000 deaths. Toxic agents were defined as occupational hazards, environmental pollutants, contaminants of food and water supplies, and components of commercial products) divided by total deaths for that year (2,120,000).</p>
                <p className="text--gray">The average values found for each of the determinant categories were each divided by the total determinant value.</p>
                <p className="text--gray">Total value: <strong className="text--primary">41.4% + 27.5% + 25% + 13.33...% + 8.38% = 115.6133</strong>
                  <br />Behavior: <strong className="text--primary">41.4% / 115.6133... = 35.81%</strong>
                  <br />Social: <strong className="text--primary">27.5% / 115.6133... = 23.79%</strong>
                  <br />Genetics: <strong className="text--primary">25% / 115.6133... = 21.62%</strong>
                  <br />Medical care: <strong className="text--primary">13.33...% / 115.6133... = 11.53%</strong>
                  <br />Environment: <strong className="text--primary">8.38% / 115.6133... = 7%</strong></p>
                <p className="text--gray">The final percentages are as follows.</p>
                <p className="text--gray">Behavioral determinants at <strong className="text--primary">36%</strong>
                  <br />Social determinants at <strong className="text--primary">24%</strong>
                  <br />Genetic determinants at <strong className="text--primary">22%</strong>
                  <br />Medical care determinants at <strong className="text--primary">11%</strong> (rounded down)
                  <br />Environmental determinants at <strong className="text--primary">7%</strong></p>

                <h3 className="header--md">Additional Change</h3>
                <h4 className="header--sm margin-bottom--half">14.Feb.2018</h4>
                <p className="text--gray">Race and ethnicity have been removed from the biology section due to a lack of standard objective criteria in the scientific community surrounding the use of genetics to define race and ethnicity. It has been added to the Social Circumstance section due to its continued social importance in describing groups based on similar characteristics. View the following literature for additional detail:</p>
                <ul className="ul text--gray">
                  <li>Fujimura, J. H., & Rajagopalan, R. (2010). Different differences: The use of ‘genetic ancestry’ versus race in biomedical human genetic research. Social Studies of Science, 41(1), 5-30. doi:10.1177/0306312710379170</li>
                  <li>Long, J. C., & Kittles, R. A. (2003). Human Genetic Diversity and the Nonexistence of Biological Races. Human Biology, 75(4), 449-471. doi:10.1353/hub.2003.0058</li>
                  <li>AR, T. (2013). Biological races in humans. [Abstract]. Stud Hist Philos Biol Biomed Sci, 262-271. Retrieved February 14, 2018, from <a href="https://www.ncbi.nlm.nih.gov/pubmed/23684745" target="_blank" rel="noopener noreferrer" className="link--wrap">https://www.ncbi.nlm.nih.gov/pubmed/23684745</a>.</li>
                  <li>Caprio, S., Daniels, S. R., Drewnowski, A., Kaufman, F. R., Palinkas, L. A., Rosenbloom, A. L.,... Kirkman, M. S. (2008). Influence of Race, Ethnicity, and Culture on Childhood Obesity: Implications for Prevention and Treatment. Obesity, 16(12), 2566-2577. doi:10.1038/oby.2008.398</li>
                </ul>
                <p className="text--gray">Discrimination can be further subdivided into racial, ethnic, gender, sexuality, and age based discrimination.</p>
                <p className="text--gray">Poster images have been updated based on the updated Aug 2017 calculations.</p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h1 className="header--xl">Authors</h1>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                      <Image src="/images/about/headshot-edwin-choi.jpg" className="image--max-width" />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p><strong>Edwin Choi</strong><span className="text--grey">, GoInvo</span></p>
                    <p className="text--grey">Edwin is a biologist turned designer. Combining the sciences and art, he orchestrates healthcare software experiences to be beautiful and clinically refined. Edwin joined Invo in 2015, is a graduate of University of Washington, and has a masters in biomedical design from Johns Hopkins University.</p>
                  </div>
                </div>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                      <Image src="/images/about/headshot-juhan-sonin.jpg" className="image--max-width" />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p><strong>Juhan Sonin</strong><span className="text--grey">, GoInvo, MIT</span></p>
                    <p className="text--grey">Juhan specialized in software design and system engineering. He operates, and is the director of, GoInvo. He has worked at Apple, National Center for Supercomputing Applications, Massachusetts Institute of Technology (MIT), and MITRE. Juhan co-founded Invo Boston in 2009 and is a graduate of the University of Illinois at Urbana-Champaign. He currently lectures at MIT.</p>
                  </div>
                </div>

                <h3 className="header--md">Contributors</h3>
                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                      <Image src="/images/features/determinants-of-health/headshot-hrothgar.jpg" className="image--max-width" />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p><strong>Hrothgar</strong><span className="text--grey">, GoInvo</span></p>
                    <p className="text--grey">Hrothgar is a designer and engineer. Trained as a mathematician, he combines elegance and rigor in software development and interface design. Hrothgar is a graduate of Rice University, and joined Invo in 2016 following doctoral studies at the University of Oxford.</p>
                  </div>
                </div>
                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                      <Image src="/images/features/determinants-of-health/headshot-kelsey-kittelsen.jpg" className="image--max-width" />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p><strong>Kelsey Kittelsen</strong><span className="text--grey">, Dartmouth College</span></p>
                    <p className="text--grey">Kelsey is a designer and engineer. She specializes in taking an analytical approach to problem solving while focusing on human needs. She is currently studying engineering with a concentration in human-centered design and product development at Dartmouth College.</p>
                  </div>
                </div>

              </div>

              <Divider />

              <div id="references">
                <References references={[
                  {
                    title: 'NCHHSTP Social Determinants of Health. (2014). Retrieved March 14, 2016',
                    link: 'http://www.cdc.gov/nchhstp/socialdeterminants/definitions.html'
                  },
                  {
                    title: 'The determinants of health. (n.d.). Retrieved March 14, 2016',
                    link: 'http://www.who.int/hia/evidence/doh/en/'
                  },
                  {
                    title: 'Social Determinants of Health. (n.d.). Retrieved March 14, 2016',
                    link: 'https://www.healthypeople.gov/2020/topics-objectives/topic/social-determinants-of-health'
                  },
                  {
                    title: 'Beyond Health Care: The Role of Social Determinants in Promoting Health and Health Equity. (n.d.). Retrieved March 14, 2016',
                    link: 'http://kff.org/disparities-policy/issue-brief/beyond-health-care-the-role-of-social-determinants-in-promoting-health-and-health-equity/'
                  },
                  {
                    title: 'Schroeder, S. A. (2007). We Can Do Better — Improving the Health of the American People. New England Journal of Medicine N Engl J Med,357(12), 1221-1228.'
                  },
                  {
                    title: 'The Relative Contribution of Multiple Determinants to Health Outcomes. (n.d.). Retrieved March 14, 2016',
                    link: 'http://healthaffairs.org/healthpolicybriefs/brief_pdfs/healthpolicybrief_123.pdf'
                  },
                  {
                    title: 'Capturing social and behavioral domains and measures in electronic health records: Phase 2. (2014). Washington D.C.: The National Academies Press.'
                  },
                  {
                    title: 'Gruszin, S., & Jorm, L. (2010, December). Public Health Classifications Project (Rep.). Retrieved March 15, 2016, from New South Wales Department of Health website',
                    link: 'http://www.health.nsw.gov.au/hsnsw/Publications/classifications-project.pdf'
                  },
                  {
                    title: 'DHHS, Public Health Service. “Ten Leading Causes of Death in the United States.” Atlanta (GA): Bureau of State Services, July 1980'
                  },
                  {
                    title: 'J.M.McGinnis and W.H.Foege. “Actual Causes of Death in the United States.” JAMA 270, No. 18 (1993):2207-12'
                  },
                  {
                    title: 'J.M.McGinnis et al, “The Case for More Active Policy Attention to Health Promotion.” Health Affairs 21, no.2 (2002):78-93'
                  },
                  {
                    title: 'A.Mokdad et al. “Actual Causes of Death in the United States 2000.” JAMA 291, no.10 (2004):1238-45'
                  },
                  {
                    title: 'G.Danaei et al, “The Preventable Cuases of Death in the United States: Comparative Risk Assessment of Dietary, Lifestyle, and Metabolic Risk Factors.” PLoS Medicine 6, no. 4 (2009):e1000058'
                  },
                  {
                    title: 'World Health Organization, Global Health Risks: Mortality and Burden of Disease Attributable to Selected Major Risks, Geneva: WHO, 2009'
                  },
                  {
                    title: 'B. Booske et al., “Different Perspectives for Assigning Weights to Determinants of Health.” County Health Rankings Working Paper. Madison (WI): University of Wisconsin Population Health Institute, 2010'
                  },
                  {
                    title: 'Schneiderman, N., Ironson, G., & Siegel, S. D. (2005). STRESS AND HEALTH: Psychological, Behavioral, and Biological Determinants. Annual Review of Clinical Psychology, 1, 607-628. Retrieved March 16, 2016',
                    link: 'http://www.annualreviews.org/doi/abs/10.1146/annurev.clinpsy.1.102803.144141?url_ver=Z39.88-2003&rfr_dat=cr_pub=pubmed&rfr_id=ori:rid:crossref.org&journalCode=clinpsy'
                  }
                ]}/>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default DeterminantsOfHealthFeature
