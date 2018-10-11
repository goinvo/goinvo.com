import React from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'

const DeterminantsOfHealthFeature = () => (
  <Layout>
    <Hero image="/images/services/doh-preview.jpg"></Hero>
    <div className="pad-vertical--double">
      <div className="max-width content-padding">
        <div className="feature-introduction">
          <h1 className="header--xl">Determinants of Health</h1>

          <h3 className="header--md">Health is more than medical care</h3>
          <p className="text--grey">89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health. Despite their importance, attempts to integrate the determinants into a single visualization have been limited.</p>
          <p className="text--grey">GoInvo identified this gap based on their extensive work as a healthcare design studio and conducted a literature review of sources (World Health Organization and the Kaiser Family Foundation) and face to face interviews with public policy analysts, health IT experts, and clinical professionals. Relying on their experience of mapping complex systems within healthcare, GoInvo created a comprehensive open source visualization of the social determinants of health.</p>

          <div>
            <a href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf" target="_blank" className="button button--primary button--lg margin-top--double margin-bottom--half">Download Poster</a>
            <a href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/" target="_blank" className="button button--primary button--lg margin-top--double margin-bottom--half">Buy Print</a>
            <a href="https://github.com/goinvo/HealthDeterminants" target="_blank" className="button button--primary button--lg margin-top--double margin-bottom--half">On Github</a>
            <a href="#methodology" className="button button--primary button--lg margin-top--double margin-bottom--half">Methodology</a>
            <a href="#references" className="button button--primary button--lg margin-top--double margin-bottom--half">References</a>
          </div>
        </div>

        <div></div>
      </div>
    </div>

    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <div id="methodology">
          <h1 className="header--xl">Methodology</h1>
          <p className="grey--text">Below is a description of the methodology used in creating the Determinants of Health visualization. It is also a record of versioned updates to the methodology and visualization based on continuing research and feedback. Thank you to those who have reached out and helped identify areas to improve.</p>
          <h4>v1 - 26.Jul.2017</h4>
          <p className="grey--text">The 5 main determinants of health (genetics, medical care, social circumstances, environment, and individual behavior) were chosen due to their consistency across the following 7 out of 8 organizations:</p>
          <ul className="ul flex-wrap flex-wrap--half">
            <li>NCHHSTP [^1]</li>
            <li>WHO [2]</li>
            <li>Healthy People [3]</li>
            <li>Kaiser Family Foundation [4]</li>
            <li>NEJM [5]</li>
            <li>Health Affairs [6]</li>
            <li>Institute of Medicine [7]</li>
            <li>New South Wales Department of Health [8]</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="pad-vertical--double">
      <div className="max-width content-padding">
        <div>
          <h1 className="header--xl">Authors</h1>

          <div className="author">
            <div className="authorImg"></div>
            <div className="authorBio">
              <p><strong>Edwin Choi</strong><span className="text--grey">, GoInvo</span></p>
              <p className="text--grey">Edwin is a biologist turned designer. Combining the sciences and art, he orchestrates healthcare software experiences to be beautiful and clinically refined. Edwin joined Invo in 2015, is a graduate of University of Washington, and has a masters in biomedical design from Johns Hopkins University.</p>
            </div>
          </div>

        </div>

        <div className="divider"></div>

        <div id="references">
           <h1 className="header--xl">References</h1>
           <ol className="text--grey">
             <li>NCHHSTP Social Determinants of Health. (2014). Retrieved March 14, 2016, from <a href=" http://www.cdc.gov/nchhstp/socialdeterminants/definitions.html"> http://www.cdc.gov/nchhstp/socialdeterminants/definitions.html</a></li>
             <li>The determinants of health. (n.d.). Retrieved March 14, 2016, from <a href=" http://www.who.int/hia/evidence/doh/en/"> http://www.who.int/hia/evidence/doh/en/</a></li>
             <li>Social Determinants of Health. (n.d.). Retrieved March 14, 2016, from <a href="https://www.healthypeople.gov/2020/topics-objectives/topic/social-determinants-of-health">https://www.healthypeople.gov/2020/topics-objectives/topic/social-determinants-of-health</a></li>
             <li>Beyond Health Care: The Role of Social Determinants in Promoting Health and Health Equity. (n.d.). Retrieved March 14, 2016, from  <a href="http://kff.org/disparities-policy/issue-brief/beyond-health-care-the-role-of-social-determinants-in-promoting-health-and-health-equity/">http://kff.org/disparities-policy/issue-brief/beyond-health-care-the-role-of-social-determinants-in-promoting-health-and-health-equity/</a></li>
             <li>Schroeder, S. A. (2007). We Can Do Better — Improving the Health of the American People. New England Journal of Medicine N Engl J Med,357(12), 1221-1228.</li>
             <li>The Relative Contribution of Multiple Determinants to Health Outcomes. (n.d.). Retrieved March 14, 2016, from <a href="http://healthaffairs.org/healthpolicybriefs/brief_pdfs/healthpolicybrief_123.pdf">http://healthaffairs.org/healthpolicybriefs/brief_pdfs/healthpolicybrief_123.pdf</a></li>
             <li>Capturing social and behavioral domains and measures in electronic health records: Phase 2. (2014). Washington D.C.: The National Academies Press.</li>
             <li>Gruszin, S., & Jorm, L. (2010, December). Public Health Classifications Project (Rep.). Retrieved March 15, 2016, from New South Wales Department of Health website: <a href="http://www.health.nsw.gov.au/hsnsw/Publications/classifications-project.pdf">http://www.health.nsw.gov.au/hsnsw/Publications/classifications-project.pdf</a></li>
             <li>DHHS, Public Health Service. “Ten Leading Causes of Death in the United States.” Atlanta (GA): Bureau of State Services, July 1980</li>
             <li>J.M.McGinnis and W.H.Foege. “Actual Causes of Death in the United States.” JAMA 270, No. 18 (1993):2207-12</li>
             <li>J.M.McGinnis et al, “The Case for More Active Policy Attention to Health Promotion.” Health Affairs 21, no.2 (2002):78-93</li>
             <li>A.Mokdad et al. “Actual Causes of Death in the United States 2000.” JAMA 291, no.10 (2004):1238-45</li>
             <li>G.Danaei et al, “The Preventable Cuases of Death in the United States: Comparative Risk Assessment of Dietary, Lifestyle, and Metabolic Risk Factors.” PLoS Medicine 6, no. 4 (2009):e1000058</li>
             <li>World Health Organization, Global Health Risks: Mortality and Burden of Disease Attributable to Selected Major Risks, Geneva: WHO, 2009</li>
             <li>B. Booske et al., “Different Perspectives for Assigning Weights to Determinants of Health.” County Health Rankings Working Paper. Madison (WI): University of Wisconsin Population Health Institute, 2010</li>
             <li>Schneiderman, N., Ironson, G., & Siegel, S. D. (2005). STRESS AND HEALTH: Psychological, Behavioral, and Biological Determinants. Annual Review of Clinical Psychology, 1, 607-628. Retrieved March 16, 2016, from <a href="http://www.annualreviews.org/doi/abs/10.1146/annurev.clinpsy.1.102803.144141?url_ver=Z39.88-2003&rfr_dat=cr_pub=pubmed&rfr_id=ori:rid:crossref.org&journalCode=clinpsy">http://www.annualreviews.org/doi/abs/10.1146/annurev.clinpsy.1.102803.144141?url_ver=Z39.88-2003&rfr_dat=cr_pub=pubmed&rfr_id=ori:rid:crossref.org&journalCode=clinpsy</a></li>
            </ol>
        </div>

      </div>
    </div>
  </Layout>
)

export default DeterminantsOfHealthFeature
