import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'

class LonelinessFeature extends Component {

  render() {
    return (
      <Layout>
        <Hero image="/images/features/open-source-healthcare/open-source-healthcare-hero.jpg"></Hero>
        <div className="loneliness-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
                <h1 className="header--xl">Loneliness in our Human Code</h1>

                <h3 className="header--md text--lg">Social Isolation <span className="text--primary">Costs Us</span></h3>
                <div className="text-right pure-u-1 pure-u-lg-1-2">
                  <div className="stat number--lg">8</div>
                  <div className="stat-desc"><p className="text--gray">years of life lost, or the equivalent of <span className="text--gray">smoking 15 cigarettes a day</span></p></div>
                </div>
                <div className="text-below pure-u-1 pure-u-lg-1-2">
                  <div className="stat number--lg">$6.7B</div>
                  <div class="stat-desc"><p className="text--gray">dollars annually in federal spending</p></div>
                </div>

                <Divider />

                <h3 className="header--md text--lg">When We Feel Excluded <br /> We <span className="text--primary">Lose Our Fight</span> Against Disease</h3>

                <h3 className="header--md">Increasing <span className="text--primary">Our Risk for</span></h3>
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

                <h3 className="header--md">Impacting <span className="text--primary">Our Body Function</span></h3>
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
                  <p className="text--gray">We feel lonely when our current number of social relations (and the quality of those) do not match what we desire. This feeling leads to our loss of belongingness, satisfaction with life, and onset of co-occuring physical and mental illnesses.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Manifests as <span className="text--primary">Physical Pain</span></h3>
                  <p className="text--gray">A broken heart can feel like a broken leg because our brains process social rejection in the same location as physical pain. Evolution has wired socialization into the brain’s automatic reflex because being with other humans dramatically increases our chances of survival.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Is a <span className="text--primary">dysfunction of the brain</span></h3>
                  <p className="text--gray">The default for the human brain is assessing and responding to our social context and stimuli, otherwise known as our “default network.” When we feel sociallt fulfilled, there is a boost in our brain’s reward center (activating dopamine and oxytocin), and healthy function in the parts of our brain that process social exclusion.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <h3 className="header--md">Can affect <span className="text--primary">Gene Expression</span></h3>
                  <p className="text--gray">Studies have found that there may be genomic and hereditary indicators for loneliness, including a study of older people that found 209 abnormally expressed genes in their lonely group. In the lonely people, genes in charge of activating inflammation were over-expressed while those regulating antiviral and antibody mechanisms ere under-expressed.</p>
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
                        <p className="text--gray">Social connectedness begins when life begins, and is most impacted by the quality of early relationships with parents and caregivers.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Separation for infants</h3>
                        <p className="text--gray">Physical attachment is crucial for infants, and separation can cause high levels of anxiety. One study showed that mothering and cuddling hospitalized infants can increase survival rate by 20%, despite the health risks of infection.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Neighborhood conditions</h3>
                        <p className="text--gray">Infants  who grow up in a stable neighborhood environment have an increase ability to develop social networks.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Children</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Effects of poverty</h3>
                        <p className="text--gray">Children in poverty experience less social connected across race, culture, and class. This is because the poorest families often live in the highly segregated communities with many barriers to social, physical, emotional, educational, and economic resources.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Single parents</h3>
                        <p className="text--gray">Children living in single-parent households have a doubled risk of emotional, physical, and educational neglect.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Speech and language</h3>
                        <p className="text--gray">Speech and language are the two most important aspects of early childhood development, and the foundations of social and emotional wellbeing. Parents and guardians can help with this by spending time with children, including making and having meals, reading, and playing sports.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Adolescents</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Sleep</h3>
                        <p className="text--gray">People who report getting enough sleep are 70-80% less likely to feel a lack of companionship. While this is true for all ages, adolescents are particularly at risk because they have a decreased production of melatonin (sleep hormone) in comparison to young children. Additionally, use of electronic devices late into the night have been found to impair sleep.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Parent-child relationship</h3>
                        <p className="text--gray">The relationship between a parent and child is crucial to lifelong health and well-being. In fact, those with a poor relationship with their father are 68% more likely to smoke, drink, and do drugs in their teenage years. Those living in single parent homes, particularly fatherless ones, have much higher risks of juvenile delinquency.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Peer influence</h3>
                        <p className="text--gray">A major component of adolescent growth is gaining independence and a sense of identity. Often, this leads to conflict with parents and a tendency to turn to peers for guidance and support. However, peers often exert positive and negative influences on adolescents, resulting in everything from a strong support system to a toxic environment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="age-section">
                    <h3 className="age-title header--md text--lg text--primary">Emerging Adults</h3>
                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">A time of change</h3>
                        <p className="text--gray">Emerging adulthood is a time of exploration and change, including exploring different careers, values, relationships, and geographic residences that may mean leaving family for the first time. This change is often characterized by the constant forming, breaking, and reforming of social bonds. This is why having a constant source of social support can have major impacts on health and life satisfaction. In fact, if one has a friend they see on most day, it is like earning an extra $100,00 of income.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Healthy behaviors</h3>
                        <p className="text--gray">A feeling of connectedness and belonging is correlated with a host of healthy behaviors including exercise, a healthy diet, and safe sex.</p>
                      </div>
                    </div>

                    <div className="lonely-factor">
                      <div className="lonely-factor-icon"></div>
                      <div className="lonely-factor-text">
                        <h3 className="header--md text--primary">Substance use</h3>
                        <p className="text--gray">Many emerging adults still emphasize peer opinions and actions as guidance for their own. However, research has found that females and males have different tendencies toward risk behaviors. In terms of alcohol consumption, males disproportionately consider drinking-related activities as a way to foster intimacy and closeness while females rely more on sharing throughts or multiple activities.</p>
                      </div>
                    </div>
                  </div>

                </div>


            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default LonelinessFeature
