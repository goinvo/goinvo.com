import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'

class LonelinessFeature extends Component {

  render() {
    return (
      <Layout>
        <Hero image="/images/features/loneliness-in-our-human-code/loneliness-hero.jpg"></Hero>
        <div className="loneliness-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
                <h1 className="header--xl">Loneliness in our Human Code</h1>

                <h3 className="header--md text--lg">Social Isolation <span className="text--primary">Costs Us</span></h3>
                <div className="text-right pure-u-1 pure-u-lg-1-2">
                  <div className="stat number--lg">8</div>
                  <div className="stat-desc"><p className="text--gray">years of life lost, or the equivalent of <span className="text--gray">smoking 15 cigarettes a day</span><sup><a href="#fn-1">1</a></sup></p></div>
                </div>
                <div className="text-below pure-u-1 pure-u-lg-1-2">
                  <div className="stat number--lg">$6.7B</div>
                  <div class="stat-desc"><p className="text--gray">dollars annually in federal spending<sup><a href="#fn-2">2</a></sup></p></div>
                </div>

                <Divider />

                <h3 className="header--md text--lg">When We Feel Excluded <br /> We <span className="text--primary">Lose Our Fight</span> Against Disease</h3>

                <h3 className="header--md">Increasing <span className="text--primary">Our Risk for</span><sup><a href="#fn-3">3</a>,<a href="#fn-4">4</a></sup></h3>
                <div className="row">
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">heart disease</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">dementia</div>
                      </div>
                  </div>
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">arthritis</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">type-2 diabetes</div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">suicide</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">high blood pressure</div>
                      </div>
                  </div>
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">metastatic cancer</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">stroke</div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div class="risk-factor risk-solo">
                    <div class="icon-bubble"></div>
                    <div class="risk-text text--gray text--center">depression</div>
                  </div>
                </div>

                <h3 className="header--md">Impacting <span className="text--primary">Our Body Function</span><sup><a href="#fn-4">4</a>,<a href="#fn-5">5</a>,<a href="#fn-6">6</a>,<a href="#fn-7">7</a></sup></h3>
                <div className="row">
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">narrowing blood vessels to preserve body heat</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">elevating levels of the stress hormone cortisol</div>
                      </div>
                  </div>
                  <div className="risk-duo">
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">reducing antibody protection</div>
                      </div>
                      <div class="risk-factor">
                        <div class="icon-bubble"></div>
                        <div class="risk-text text--gray text--center">decreasing cognitive function</div>
                      </div>
                  </div>
                </div>

                <Divider />

                <h3 className="header--md text--lg">It's Not Just a Feeling. <br /><span className="text--primary">Loneliness...</span></h3>

                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">is a <span className="text--primary">Co-morbidity</span></h3>
                  <p className="text--gray">We feel lonely when our current number of social relations (and the quality of those) do not match what we desire<sup><a href="#fn-8">8</a>,<a href="#fn-18">18</a></sup>. This feeling leads to our loss of belongingness, satisfaction with life, and onset of co-occuring physical and mental illnesses.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Manifests as <span className="text--primary">Physical Pain</span></h3>
                  <p className="text--gray">A broken heart can feel like a broken leg because our brains process social rejection in the same location as physical pain<sup><a href="#fn-14">14</a>,<a href="#fn-15">15</a></sup>. Evolution has wired socialization into the brain’s automatic reflex because being with other humans dramatically increases our chances of survival<sup><a href="#fn-15">15</a></sup>.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Is a <span className="text--primary">dysfunction of the brain</span></h3>
                  <p className="text--gray">The default for the human brain is assessing and responding to our social context and stimuli, otherwise known as our “default network<sup><a href="#fn-11">11</a></sup>.” When we feel sociallt fulfilled, there is a boost in our brain’s reward center (activating dopamine and oxytocin), and healthy function in the parts of our brain that process social exclusion<sup><a href="#fn-11">11</a>,<a href="#fn-12">12</a>,<a href="#fn-13">13</a></sup>.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Can affect <span className="text--primary">Gene Expression</span></h3>
                  <p className="text--gray">Studies have found that there may be genomic and hereditary indicators for loneliness, including a study of older people that found 209 abnormally expressed genes in their lonely group<sup><a href="#fn-6">6</a>,<a href="#fn-9">9</a>,<a href="#fn-10">10</a></sup>.  In the lonely people, genes in charge of activating inflammation were over-expressed while those regulating antiviral and antibody mechanisms w ere under-expressed<sup><a href="#fn-6">6</a></sup>.</p>
                </div>

                <Divider />

                <h3 className="header--md text--lg">The causes and consequences are <br /><span className="text--primary">unique to every person</span></h3>

                <h3 className="header--md">Take a look at how social connection varies <br /><span className="text--primary">Across our lifespan</span></h3>

                <div className="social-timeline">
                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Infants</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Early Nurture</h3>
                        <p className="text--gray">Social connectedness begins when life begins, and is most impacted by the quality of early relationships with parents and caregivers<sup><a href="#fn-16">16</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Separation for infants</h3>
                        <p className="text--gray">Physical attachment is crucial for infants, and separation can cause high levels of anxiety. One study showed that mothering and cuddling hospitalized infants can increase survival rate by 20%, despite the health risks of infection<sup><a href="#fn-16">16</a>,<a href="#fn-17">17</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Neighborhood conditions</h3>
                        <p className="text--gray">Infants  who grow up in a stable neighborhood environment have an increase ability to develop social networks<sup><a href="#fn-18">18</a>,<a href="#fn-19">19</a>,<a href="#fn-20">20</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Children</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Effects of poverty</h3>
                        <p className="text--gray">Children in poverty experience less social connected across race, culture, and class. This is because the poorest families often live in the highly segregated communities with many barriers to social, physical, emotional, educational, and economic resources<sup><a href="#fn-16">16</a>,<a href="#fn-21">21</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Single parents</h3>
                        <p className="text--gray">Children living in single-parent households have a doubled risk of emotional, physical, and educational neglect<sup><a href="#fn-16">16</a>,<a href="#fn-22">22</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Speech and language</h3>
                        <p className="text--gray">Speech and language are the two most important aspects of early childhood development, and the foundations of social and emotional wellbeing. Parents and guardians can help with this by spending time with children, including making and having meals, reading, and playing sports<sup><a href="#fn-16">16</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Adolescents</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Sleep</h3>
                        <p className="text--gray">People who report getting enough sleep are 70-80% less likely to feel a lack of companionship. While this is true for all ages, adolescents are particularly at risk because they have a decreased production of melatonin (sleep hormone) in comparison to young children. Additionally, use of electronic devices late into the night have been found to impair sleep<sup><a href="#fn-23">23</a>,<a href="#fn-24">24</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Parent-child relationship</h3>
                        <p className="text--gray">The relationship between a parent and child is crucial to lifelong health and well-being. In fact, those with a poor relationship with their father are 68% more likely to smoke, drink, and do drugs in their teenage years. Those living in single parent homes, particularly fatherless ones, have much higher risks of juvenile delinquency<sup><a href="#fn-22">22</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Peer influence</h3>
                        <p className="text--gray">A major component of adolescent growth is gaining independence and a sense of identity. Often, this leads to conflict with parents and a tendency to turn to peers for guidance and support. However, peers often exert positive and negative influences on adolescents, resulting in everything from a strong support system to a toxic environment<sup><a href="#fn-16">16</a>,<a href="#fn-25">25</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Emerging Adults</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">A time of change</h3>
                        <p className="text--gray">Emerging adulthood is a time of exploration and change, including exploring different careers, values, relationships, and geographic residences that may mean leaving family for the first time. This change is often characterized by the constant forming, breaking, and reforming of social bonds. This is why having a constant source of social support can have major impacts on health and life satisfaction. In fact, if one has a friend they see on most day, it is like earning an extra $100,00 of income<sup><a href="#fn-14">14</a>,<a href="#fn-16">16</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Healthy behaviors</h3>
                        <p className="text--gray">A feeling of connectedness and belonging is correlated with a host of healthy behaviors including exercise, a healthy diet, and safe sex<sup><a href="#fn-26">26</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Substance use</h3>
                        <p className="text--gray">Many emerging adults still emphasize peer opinions and actions as guidance for their own. However, research has found that females and males have different tendencies toward risk behaviors. In terms of alcohol consumption, males disproportionately consider drinking-related activities as a way to foster intimacy and closeness while females rely more on sharing throughts or multiple activities<sup><a href="#fn-26">26</a>,<a href="#fn-27">27</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Adults</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Heart Health</h3>
                        <p className="text--gray">Maintaining cardiovascular health is extremely important for people of all ages, but poor health outcomes are particularly risky for adults and seniors. In fact, loneliness is associated with all types of heart disease, including ischaemic heart disease, arrhythmia, heart failure, and heart valv disease. Among those with coronary artery disease, the lonely are two times more at risk of cardiac death<sup><a href="#fn-28">28</a>,<a href="#fn-29">29</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Self Preservation</h3>
                        <p className="text--gray">Lonely people focus more on self-preservation and get more defensive in the face of their environments. As a survival mechanism, the brain is wired to focus on the self instead of caring for those around. Unfortunately for the person, this can backfire and make themselves even more unpleasant to be around, leading to more and more negative social encounters<sup><a href="#fn-30">30</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Social loss</h3>
                        <p className="text--gray">Because many people identify themselves in terms of their relationships, losing a spouse or friend to distance or death can be a very painful experience, both emotional and physical. While the likelihood of losing someone is equal across age groups, many adults see some of their friendships weaken as a product of building a family life or experience the passing of a parent or spouse. In terms of life satisfaction, when we break a social tie, it is similar to suffering $90,000 loss in annual income<sup><a href="#fn-14">14</a>,<a href="#fn-31">31</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Aging Adults</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Companionship</h3>
                        <p className="text--gray">Aging adults are most lonely when they are not involved in acticities that build social connections such as volunteering, religious services, faily time, or other community organization. In fact, 40% of seniors report television as their main companion. While technology such as the internet and television can be a helpful tool to alleviate isolation, contacts with other humans brings the most fulfillment<sup><a href="#fn-16">16</a>,<a href="#fn-32">32</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">The Home</h3>
                        <p className="text--gray">Being able to maintain one’s own home promotes confidence and wellbeing in older people. Not only does it offer a sense of control and contribution, but it demonstrates a level of independence that is strengthened by opportunities to stay active and gather with friends in their neighborhood<sup><a href="#fn-32">32</a></sup>.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Long Term Partner</h3>
                        <p className="text--gray">Many people live with a long-term partner into old age, and a large majority of people rely on their partners as a primary source of social support. However, old age can bring unexpected medical events and even death, leaving the healthy or surviving partner to suffer harmful effects to mental and physical health. Additionally, the percent of widows living with a child has decreased significantly in the last 100 years: from 70% to 20%. This meants that aging adults who have lost their spouse are much more likely to live alone than with family<sup><a href="#fn-16">16</a>,<a href="#fn-33">33</a></sup>.</p>
                      </div>
                    </div>
                  </div>

                </div>

                <Divider />

                <div>
                  <h1 className="header--xl">Authors</h1>

                  <div className="author">
                    <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                        <Image src="/images/features/loneliness-in-our-human-code/headshot-vanessa-li.jpg" className="image--max-width" />
                    </div>
                    <div className="authorBio pure-u-1 pure-u-lg-1-2">
                      <p><strong>Vanessa Li</strong><span className="text--gray">, University of Washington</span></p>
                      <p className="text--gray">Vanessa specializes in health systems and public health modeling, with an emphasis in substance abuse and disease prevention research. She graduated from the University of Southern California with a B.S. in Public Policy and a double minor in Business Economics and Global Health. Vanessa is at Invo for the current summer, and will continue on to complete her graduate degree in biostatistics at the University of Washington.</p>
                    </div>
                  </div>
                  <div className="author">
                    <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                        <Image src="/images/about/headshot-jen-patel.jpg" className="image--max-width" />
                    </div>
                    <div className="authorBio pure-u-1 pure-u-lg-1-2">
                      <p><strong>Jennifer Patel</strong><span className="text--gray">, GoInvo</span></p>
                      <p className="text--gray">Jennifer is a designer-developer hybrid specializing in user interface design and front-end development. She creates beautiful designs using big and small data, often for health and enterprise services. Jennifer joined Invo in 2011 and is a graduate of the Rochester Institute of Technology.</p>
                    </div>
                  </div>



                  <h3 className="header--md">Contributors</h3>
                  <div className="author">
                    <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                        <Image src="/images/about/headshot-juhan-sonin.jpg" className="image--max-width" />
                    </div>
                    <div className="authorBio pure-u-1 pure-u-lg-1-2">
                      <p><strong>Juhan Sonin</strong><span className="text--gray">, GoInvo, MIT</span></p>
                      <p className="text--gray">Juhan specialized in software design and system engineering. He operates, and is the director of, GoInvo. He has worked at Apple, National Center for Supercomputing Applications, Massachusetts Institute of Technology (MIT), and MITRE. Juhan co-founded Invo Boston in 2009 and is a graduate of the University of Illinois at Urbana-Champaign. He currently lectures at MIT.</p>
                    </div>
                  </div>
                  <div className="author">
                    <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                        <Image src="/images/about/headshot-parsuree-vatanasirisuk.jpg" className="image--max-width" />
                    </div>
                    <div className="authorBio pure-u-1 pure-u-lg-1-2">
                      <p><strong>Parsuree Vatanasirisuk</strong><span className="text--gray">, GoInvo</span></p>
                      <p className="text--gray">Parsuree is a user experience designer and illustrator with background in industrial design. She makes the complex beautiful and approachable through illustration and information design. Parsuree joined Invo in 2018, and has a BA in Industrial Design from Chulalongkorn University and is a MFA candidate of the Rochester Institute of Technology (RIT).</p>
                    </div>
                  </div>

                </div>

                <Divider />

                <div id="references">
                  <References references={[
                    {
                      title: 'Achor, S.; Kellerman, G.R.; Reece, A.; Robichaux, A. (2018). America\'s Loneliest Workers, According to Research. Harvard Business Review. Retrieved July 31, 2018',
                      link: 'https://hbr.org/2018/03/americas-loneliest-workers-according-to-research'
                    },
                    {
                      title: 'Bhattacharya J.; Farid, M.; Flowers, L.; et al. (2017) Medicare Spends More on Socially Isolated Older Adults. AARP. Retrieved June 31, 2018',
                      link: 'https://www.aarp.org/content/dam/aarp/ppi/2017/10/medicare-spends-more-on-socially-isolated-older-adults.pdf'
                    },
                    {
                      title: 'Holt-Lunstad, J.; Smith, T.B.; Baker, M; et al. (2015) Loneliness and Social Isolation as Risk Factors for Mortality A Meta-Analytics Review. Perspecitves on Psychological Science. Retrieved August 2, 2018',
                      link: 'https://journals.sagepub.com/doi/full/10.1177/1745691614568352'
                    },
                    {
                      title: 'Known risk factors largely explain links between loneliness and first time heart disease / stroke. (2018). British Medical Journal. Retrieved August 2, 2018',
                      link: 'https://medicalxpress.com/news/2018-03-factors-largely-links-loneliness-heart.html'
                    },
                    {
                      title: 'Caeioppo, J.; Patrick, W. (2009) Loneliness: Human Nature and the Need for Social Connection. New York: W.W. Norton'
                    },
                    {
                      title: 'American Association for the Advancement of Science. (2007, September 14). Loneliness is in the Genes. Retrieved August 20, 2018',
                      link: 'http://www.sciencemag.org/news/2007/09/loneliness-genes'
                    },
                    {
                      title: 'IJzerman, H.; Gallucci, M.; Pouw, W.T.J.L; et al. (2012). Cold-blooded Loneliness: Social exclusions leads to lower skin temperatures. Acta Psychologica. 140. 283-8. 10.1016/j.actpsy.2012.05.002'
                    },
                    {
                      title: 'Campaign to end loneliness impact report: The first three years\' achievements. (2013). NCVO. Retrieved August 18, 2018',
                      link: 'http://www.scribd.com/document/338317438/Campaign-to-End-Loneliness-impact-report-the-first-three-years-achievements'
                    },
                    {
                      title: 'Neural sensitivity to social rejection is associated with inflammatory responses to social streess. (2010). Proceedings of the National Academy of Science of the United States of America. Retrieved July 14, 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pubmed/20679216'
                    },
                    {
                      title: 'Yirka, B. (2018). Genetic study reveals genes associated with propensity for loneliness and social leanings. Medical Xpress. Retrieved August 12,2018',
                      link: 'https://medicalxpress.com/news/2018-07-genetic-reveals-genes-propensity-loneliness.html'
                    },
                    {
                      title: 'Li, W.; Mai, X.; Liu, C. (2014). The default mode network and social understanding of others. What do brain connectivity studies tell us. Frontiers in Human Neuroscience. Retrieved August 10, 2018',
                      link: 'https://www.frontiersin.org/articles/10.3389/fnhum.2014.00074/full'
                    },
                    {
                      title: 'Social Science 101: This is Your Brain on Social. (2017) Samuel Centre for Social Connectedness. Retrieved August 1, 2018',
                      link: 'https://www.socialconnectedness.org/social-science-101-this-is-your-brain-on-social'
                    },
                    {
                      title: 'The Brain and Social Connectedness: GCBH Recommendations on Social Engageement and Brain Health. (2017). Global Council on Brain Health. Retrieved August 5, 2018',
                      link: 'https://www.aarp.org/content/dam/aarp/health/brain_health/2017/02/gcbh-social-engagement-report.pdf'
                    },
                    {
                      title: 'Smith, E. (2013, October 29). Social Connected Makes a Better Brain: Recent trends show that people increasingly value material goods over relationships - but neuroscience and evolution say this goes against out nature. Retrieved August 3, 2018',
                      link: 'https://www.theatlantic.com/health/archive/2013/10/social-connection-makes-a-better-brain/280934/'
                    },
                    {
                      title: 'Lieberman, M. (2013). Scoail: Why Our Brains are Wired to Connect. Crown.'
                    },
                    {
                      title: 'Minnesota Department of Health Community and Family Health Division Office of Public Health Practice. (2010). Social Connectedness: Evaluating the Healthy People 2020 Framework: The Minnesota Project. Office of Disease Prevention and Health Promotion, U.S. Department of Health and Human Services. Retrieved August 23, 2018',
                      link: 'http://www.health.state.mn.us/divs/opi/resources/docs/1007socialconnectedness_report.pdf'
                    },
                    {
                      title: 'Bakwin, H. (1942). Loneliness in infants. American Journal of Diseases in Children. 63, 30-40'
                    },
                    {
                      title: 'Five Domains of Wellbeing: Social Connectedness (2013). The Fullframe Initiative. Retrieved August 12, 2018',
                      link: 'https://fullframeinitiative.org/wp-content/uploads/2011/05/SocialConnectedness_Factsheet.pdf'
                    },
                    {
                      title: 'De Jesus, M.; Puleo, E.; Shelton, R.C.; Emmons, K.M. (2010). Associations between perceived social environment and neighborhood safety: Health implications. Helath & Place, 16, 1007-1013'
                    },
                    {
                      title: 'Franzini, L.; Cuccaro, P.; Schuster, M.; et al. (2009). Influences of physical and social neighborhood environments on children\'s physical activity and obesity. American Journal of Public Health, 99(2), 271-278'
                    },
                    {
                      title: 'Bruner, C. PhD. (2017) ACE, Place, Rave, and Poverty: Building Hope for Children. Academic Pediatrics. Retrieved July 21, 2018',
                      link: 'https://www.sciencedirect.com/science/article/pii/S1876285917303522'
                    },
                    {
                      title: 'Blankenhorn, David. Fatherless America Confronting Our Most Urgent Social Problem. New York: Basic, 1995. Print'
                    },
                    {
                      title: 'CIGNA 2018 U.S. Loneliness Index. (2018). Retrieved August 5, 2018',
                      link: 'https://www.multivu.com/players/English/8294451-cigna-us-loneliness-survey/docs/FactSheet_1524071393425-302762795.pdf'
                    },
                    {
                      title: 'Owens, J. (2014). Insufficient Sleep in Adolescents and Young Adults: An Update on Causes and Consequences. From the American Academy of Pediatrics Technical Report. Retrieved August 10, 2018',
                      link: 'http://pediatrics.aappublications.org/content/early/2014/08/19/peds.2014-1696'
                    },
                    {
                      title: 'Hirsch, B.J.; Dubois, D.L. (1992). The lation of peer social support and psychological symptomatology during the transition to junior high school: a two-year longitudinal analysis. American Journal of Community Psychology, 20, 333-347'
                    },
                    {
                      title: 'Handebo, S.; Kebede, Y.; Morankar, S. (2017). Does social connectedness influence risky sexual behaviours? Finding from Ethiopian youths. International Journal of Adolescence and Youth. Retrieved August 9, 2018',
                      link: 'https://www.tandfonline.com/doi/full/10.1080/02673843.2017.1306448'
                    },
                    {
                      title: 'Makela, K.; Mutonen, H. (1996). The reward structure of drinking among young and older male drinkers. Contemp. Drug Probl. 23: 479-492'
                    },
                    {
                      title: 'Umberson, D.; Montez, J.K. (2010). Social Relationships and Health: A Flashpoint for Health Policy. Journal of Health and Social Behavior, 51 (suppl), S54-S66',
                      link: 'http://doi.org/10.1177/0022146510383501'
                    },
                    {
                      title: 'Loneliness is bad for the heart. (2018). European Society of Cardiology. Retrieved August 21, 2018'
                    },
                    {
                      title: 'The Profound power of loneliness. Depression, dementia and even some useful effects: Research examines how loneliness affects the social human brain. (2016). Retrieved August 7, 2018',
                      link: 'https://www.nsf.gov/discoveries/disc_summ.jsp?cntn_id=137534'
                    },
                    {
                      title: 'Hirsch, M. (2018). How can the death of a loved one affect me? Retrieved August 21, 2018',
                      link: 'https://www.sharecare.com/health/grief-emotional-health/how-death-loved-affect-me'
                    },
                    {
                      title: 'Loneliness in Old Age. (nd) Retrieved August 31, 2018',
                      link: 'https://www.extracare.org.uk/research/loneliness/'
                    },
                    {
                      title: 'Coile, C.C.; Levine, P.B. (2011). Recessions, Social Security, and Living Arrangements of the Elderly. Retrieved August 21, 2018',
                      link: 'http://projects.nber.org/projects_backend/rrc/papers/orrc11-12'
                    },
                    {
                      title: 'A Connected Scotland: tackling social isolation and loneliness and building stronger communities. Retrieved August 2018',
                      link: 'https://www.gov.scot/publications/connected-scotland-tackling-social-isolation-loneliness-building-stronger-communities/pages/3/'
                    },
                    {
                      title: 'Minnesota Healthy 2020 Framework project. Retrieved August 2018',
                      link: 'http://www.health.state.mn.us/healthymnpartnership/docs/2022HealthyMNFramework.pdf'
                    },
                    {
                      title: 'Massachusetts Department of Public Health Detmination of Need. Retrieved August 2018',
                      link: 'https://www.mass.gov/determination-of-need-don'
                    },
                    {
                      title: 'Measuring your impact on loneliness in later life, campaign to end loneliness. Retrieved August 2018',
                      link: 'https://www.campaigntoendloneliness.org/measuring-loneliness/'
                    },
                    {
                      title: 'Lee, Richard & Robbins, Steven. (1995). Measuring Belongingness: The Social Connectedness and the Social Assurance Scales. Journal of Counseling Psychology. 42. 232-241. 10.1037/0022-0167.42.2.232. Retrieved August 2018',
                      link: 'https://www.researchgate.net/publication/232449927_Measuring_Belongingnes_The_social_connectedness_and_the_Social_Assurance_Scales'
                    },
                    {
                      title: 'Bures, Regina M. PhD. (2003). Childhood residential stability and health at midlife. Am J Public Health. 2003;93(7):1144-8. Retrieved August 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1447924/'
                    },
                    {
                      title: 'Fergusson DM, Boden JM, Horwood LJ. Exposure to Single Parenthood in Childhood and Later Mental Health, Educational, Economic, and Criminal Behavior Outcomes. Arch Gen Psychiatry. 2007;64(9):1089–1095. doi:10.1001/archpsyc.64.9.1089. Retrieved August 2018',
                      link: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/482426'
                    },
                    {
                      title: 'Islam, M. Mazharul. (2015). The Effects of Low Birth Weight on School Performance and Behavioral Outcomes of Elementary School Children in Oman. Oman Med J. 2015;30(4):241-51. Retrieved August 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4561640/'
                    },
                    {
                      title: 'Indicators of Child, Family, and Community Connections, Office of the Assistant Secretary for Planning and Evaluation U.S. Department of Health and Human Services. Retrieved August 2018',
                      link: 'https://aspe.hhs.gov/system/files/pdf/73371/chartbook.pdf'
                    },
                    {
                      title: 'Mass.gov, MA Parental Leave Act, Parental Leave in Massachusetts. Retrieved August 2018',
                      link: 'https://www.mass.gov/service-details/parental-leave-in-massachusetts'
                    },
                    {
                      title: 'State Education Reforms, National Center for Education Statistics. Retrieved August 2018',
                      link: 'https://nces.ed.gov/programs/statereform/tab5_2.asp'
                    },
                    {
                      title: 'Australian Department of Family and Community Services. (2000). Indicators Of Social and Family Functioning. Retrieved August 2018',
                      link: 'https://www.dss.gov.au/sites/default/files/documents/indicators_of_social_and_family_functioning_full_report.pdf'
                    },
                    {
                      title: 'Mickelson, K.D. & Kubzansky L.D. (2003). Social distribution of social support: the mediating roles of life events. American Journal of Community Psychology, 32, 265-281. Retrieved August 2018'
                    },
                    {
                      title: '  Adelman, H. S., & Taylor, L. (2006). Mental Health in Schools and Public Health. Public Health Reports, 121(3), 294–298. Retrieved August 2018',
                      link: 'http://journals.sagepub.com/doi/pdf/10.1177/003335490612100312'
                    },
                    {
                      title: 'Benefits of Community Involvement in Early Childhood. Retrieved August 2018',
                      link: 'https://www.all4kids.org/2018/03/02/benefits-of-community-involvement-in-early-childhood/'
                    },
                    {
                      title: 'HealthyPeople.gov, Adolscent Health. Retrieved August 2018',
                      link: 'https://www.healthypeople.gov/2020/topics-objectives/topic/Adolescent-Health'
                    },
                    {
                      title: 'New Zealand Government, Social Report, Social Connectedness. Retrieved August 2018',
                      link: 'http://socialreport.msd.govt.nz/documents/2005/sr05-social-connectedness.pdf'
                    },
                    {
                      title: 'Lenhart, Amanda. (2015) Teens, Technology and Friendships. Retrieved August 2018',
                      link: 'http://www.pewinternet.org/2015/08/06/teens-technology-and-friendships'
                    },
                    {
                      title: 'Lin, L.Y.; Sidani, J.E.; Shensa, A.; et al. (2016) Association between social media use and depression among U.S. young adults. Retrieved August 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pubmed/26783723'
                    },
                    {
                      title: 'Corley, Heather. (2018). What\s the Difference Between a Baby, Newbord, Infant, and Toddler? Retrieved August 2018',
                      link: 'https://www.verywellfamily.com/difference-between-baby-newborn-infant-toddler-293848'
                    },
                    {
                      title: 'Age limits and adolescents. Paediatr Child Health. 2003;8(9):577-8. Retrieved August 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2794325'
                    },
                    {
                      title: 'Ages and Stages, healthychildren.org. Retrieved August 2018',
                      link: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx'
                    },
                    {
                      title: 'World Health Organization, Consolidated ARV guidelines, June 2013. Retrieved August 2018',
                      link: 'http://www.who.int/hiv/pub/guidelines/arv2013/intro/keyterms/en/'
                    },
                    {
                      title: 'World Health Organization, Proposed working definition of an older person in Africa for the MDS Project. Retrieved August 2018',
                      link: 'http://www.who.int/healthinfo/survey/ageingdefnolder/en/'
                    },
                    {
                      title: 'Census Reporter, Arlington, MA. Retrieved August 2018',
                      link: 'https://censusreporter.org/profiles/16000US2501640-arlington-ma'
                    },
                    {
                      title: 'Murthy, Vivek. (2017). Work and the Loneliness Epidemic. Harvard Business Review. Retrieved August 2018',
                      link: 'https://hbr.org/cover-story/2017/09/work-and-the-loneliness-epidemic'
                    },
                    {
                      title: 'Arnett, Jeffrey. (2000). Emergine adulthood: A theory of development from the late teens through the twenties. American Psychologist, Col 55(5), August 2018, 469-480. Retrieved August 2018'
                    },
                    {
                      title: 'Nauert, Rick, PhD. Social Connection in Young Adulthood Linked to Mid-Life Well-being, PsychCentral. Retrieved August 2018',
                      link: 'https://psychcentral.com/news/2015/07/24/social-connection-in-young-adulthood-linked-to-mid-life-well-being/87272.html'
                    },
                    {
                      title: 'Borsari B, Carey KB. How the quality of peer relationships influences college alcohol use. Drug Alcohol Rev. 2006;25(4):361-70. Retrieved August 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2635065'
                    },
                    {
                      title: 'Felmlee D.H. Social norms in same- and cross-gender friendships. Soc Psychol Q. 1999;62;53-67.'
                    },
                    {
                      title: 'Ensminger ME, Juon HS, Lee R, Lo SY. Social Connections in the Inner City: Examination across the Life Course. Longit Life Course Stud. 2009;1(1):11-26.',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876332'
                    },
                    {
                      title: 'Reitzel LR, Kendzor DE, Castro Y, et al. The relation between social cohesion and smoking cessation among Black smokers, and the potential role of psychosocial mediators. Ann Behav Med. 2013;45(2):249-57.',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3587036'
                    },
                    {
                      title: 'Umberson D, Montez JK. Social relationships and health: a flashpoint for health policy. J Health Soc Behav. 2010;51 Suppl(Suppl):S54-66.',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158'
                    },
                    {
                      title: 'Eraslan-Capan, Bahtiyar. Social Connectedness and Flourishing: The Mediating Role of Hopelessness. Universal Journal of Educational Research, v4 n5 p933-940 2016.',
                      link: 'https://eric.ed.gov/?q=EJ1099669&id=EJ1099669'
                    },
                    {
                      title: 'Armstrong, Kristi. (July 2018). Suicide attempts down at Arlington High, but suicides up statewide. WickedLocal Arlington',
                      link: 'http://arlington.wickedlocal.com/news/20180725/suicide-attempts-down-at-arlington-high-but-suicides-up-statewide'
                    },
                    {
                      title: 'Stagman, S.; Schwarz, S.W.; Powers, D. (May 2011). Adolescent Substance Use in the U.S. National Center for Children in Poverty.',
                      link: 'http://www.nccp.org/publications/pub_1008.html'
                    },
                    {
                      title: 'Suicide rising across the U.S. Centers for Disease Control and Prevention',
                      link: 'https://www.cdc.gov/vitalsigns/suicide/index.html'
                    },
                    {
                      title: 'Fuhrer, R.; Stansfeld S.A.; Chemali J.; Shipley M.J. (1999). Gender, social relations and mental health: prospective findings from an occupational cohort (Whitehall II study). ScienceDirect.',
                      link: 'https://www.sciencedirect.com/science/article/pii/S0277953698002901'
                    },
                    {
                      title: 'AARP Livability Index',
                      link: 'https://livabilityindex.aarp.org/search#Arlington+MA+USA'
                    },
                    {
                      title: 'Stone, W., Hulse, K. (2007) Housing and social cohesion: an empirical exploration, AHURI Final Report No. 100, Australian Housing and Urban Research Institute Limited, Melbourne',
                      link: 'https://www.ahuri.edu.au/research/final-reports/100'
                    },
                    {
                      title: 'Housing Corporation of Arlington',
                      link: 'https://www.housingcorparlington.org/'
                    },
                    {
                      title: 'Low birth weight babies by city and town ("County Subdivision"). 870,573,869,36,868,867,133,38,35,18/any/14279,14280. Retrieved August 2018.',
                      link: 'https://datacenter.kidscount.org/data/tables/7239-low-birth-weight-babies-by-city-and-town-county-subdivision#detailed/2/any/false/'
                    },
                    {
                      title: 'Bureau of Labor Statistics. Local Area Unemployment Statistics Map. Retrieved August 2018',
                      link: 'https://data.bls.gov/map/MapToolServlet?survey=la'
                    },
                    {
                      title: 'Economic Policy Institute. The Cose of Child Care. Retrieved August 2018',
                      link: 'https://www.epi.org/child-care-costs-in-the-united-states/#/MA'
                    },
                    {
                      title: 'Town of Arlington. Community Links. Retrieved August 2018',
                      link: 'https://www.arlingtonma.gov/services/community-links'
                    },
                    {
                      title: 'Youth Pass. Massachusetts Bay Transporation Authority. Retrieved August 2018',
                      link: 'https://www.mbta.com/fares/reduced/youth-pass'
                    },
                    {
                      title: 'Charles A. Emlet and Joane T. Moceri, “The Importance of Social Connectedness in Building Age-Friendly Communities,” Journal of Aging Research, vol. 2012, Article ID 173247, 9 pages, 2012',
                      link: 'https://www.hindawi.com/journals/jar/2012/173247/'
                    },
                    {
                      title: 'Age Friendly World. Global Database of Age-firnedly Practices. Retrieved August 2018',
                      link: 'https://extranet.who.int/agefriendlyworld/afp/'
                    },
                    {
                      title: 'Cornwell EY, Waite LJ. Measuring social isolation among older adults using multiple indicators from the NSHAP study. J Gerontol B Psychol Sci Soc Sci. 2009;64 Suppl 1(Suppl 1):i38-46.',
                      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2800811'
                    },
                    {
                      title: 'Bram Lancee, Jonas Radl; Social Connectedness and the Transition From Work to Retirement, The Journals of Gerontology: Series B, Volume 67, Issue 4, 1 July 2012, Pages 481–490',
                      link: 'https://academic.oup.com/psychsocgerontology/article/67/4/481/568468'
                    },
                    {
                      title: 'A Profile of Social Connectedness in Older Adults. Retrieved August 2018',
                      link: 'https://connect2affect.org/wp-content/uploads/2017/02/A-Profile-of-Social-Connectedness.pdf'
                    },
                    {
                      title: 'National & Community Service. Retrieved August 2018',
                      link: 'https://www.nationalservice.gov/vcla/state/Massachusetts'
                    },
                    {
                      title: 'U.S. Department of Housing and Urban Development, 2014 Location Affordability Index v2018',
                      link: 'http://www.locationaffordability.info/lai.aspx'
                    },
                    {
                      title: 'Federal Transit Administration. The National Transit Database. Retrieved August 2018',
                      link: 'https://www.transit.dot.gov/ntd'
                    },
                    {
                      title: 'NAVTEQ private data (from AARP Livability Index). Retrieved August 2018',
                      link: 'https://mapreporter.navteq.com/#dashboard'
                    },
                    {
                      title: 'United States Department of Agriculture. Profile of SNAP Households. Retrieved August 2018',
                      link: 'https://fns-prod.azureedge.net/sites/default/files/ops/Massachusetts.pdf'
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

export default LonelinessFeature
