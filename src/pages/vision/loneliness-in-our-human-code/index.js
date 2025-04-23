import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import { mediaUrl } from '../../../helpers'

import organHeartIcon from '../../../assets/images/vision/loneliness-in-our-human-code/organ-heart.svg'
import dementiaIcon from '../../../assets/images/vision/loneliness-in-our-human-code/dementia.svg'
import arthritisIcon from '../../../assets/images/vision/loneliness-in-our-human-code/arthritis.svg'
import diabetesIcon from '../../../assets/images/vision/loneliness-in-our-human-code/diabetes.svg'
import suicideIcon from '../../../assets/images/vision/loneliness-in-our-human-code/suicide.svg'
import bloodPressureIcon from '../../../assets/images/vision/loneliness-in-our-human-code/blood-pressure.svg'
import cancerIcon from '../../../assets/images/vision/loneliness-in-our-human-code/cancer.svg'
import strokeIcon from '../../../assets/images/vision/loneliness-in-our-human-code/stroke.svg'
import depressionIcon from '../../../assets/images/vision/loneliness-in-our-human-code/depression.svg'
import bloodVesselIcon from '../../../assets/images/vision/loneliness-in-our-human-code/blood-vessel.svg'
import stressIcon from '../../../assets/images/vision/loneliness-in-our-human-code/stress.svg'
import antibodyIcon from '../../../assets/images/vision/loneliness-in-our-human-code/antibody.svg'
import cognitionIcon from '../../../assets/images/vision/loneliness-in-our-human-code/decreased-cognition.svg'
import strollerIcon from '../../../assets/images/vision/loneliness-in-our-human-code/stroller-baby.svg'
import cuddleIcon from '../../../assets/images/vision/loneliness-in-our-human-code/mom-cuddle-baby.svg'
import treesIcon from '../../../assets/images/vision/loneliness-in-our-human-code/trees.svg'
import moneyIcon from '../../../assets/images/vision/loneliness-in-our-human-code/money.svg'
import conversationIcon from '../../../assets/images/vision/loneliness-in-our-human-code/conversation.svg'
import sleepIcon from '../../../assets/images/vision/loneliness-in-our-human-code/sleep.svg'
import familyIcon from '../../../assets/images/vision/loneliness-in-our-human-code/family.svg'
import peerIcon from '../../../assets/images/vision/loneliness-in-our-human-code/peers.svg'
import pathIcon from '../../../assets/images/vision/loneliness-in-our-human-code/path.svg'
import healthBehaviorIcon from '../../../assets/images/vision/loneliness-in-our-human-code/health-behavior.svg'
import substanceUseIcon from '../../../assets/images/vision/loneliness-in-our-human-code/substance-use.svg'
import selfPreservationIcon from '../../../assets/images/vision/loneliness-in-our-human-code/self-preservation.svg'
import heartBreakLossIcon from '../../../assets/images/vision/loneliness-in-our-human-code/heart-break-loss.svg'
import elderlyIcon from '../../../assets/images/vision/loneliness-in-our-human-code/elderly.svg'
import homeIcon from '../../../assets/images/vision/loneliness-in-our-human-code/home.svg'
import longTermCoupleIcon from '../../../assets/images/vision/loneliness-in-our-human-code/long-term-couple.svg'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Loneliness in our Human Code - GoInvo',
  metaDescription:
    'How loneliness and other social determinants affect our health.',
  heroImage:
    '/images/features/loneliness-in-our-human-code/loneliness-hero.jpg',
}

class LonelinessFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="loneliness-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Loneliness in our Human Code</h1>

              <p>
                Among social determinants of health, loneliness can hugely
                impact a person’s mental state, physical health, and overall
                wellbeing. In this brief, we explore how social determinants of
                health, with a focus on loneliness, affect health over the
                course of a lifespan, taking into consideration the unique
                circumstances and needs at each stage of life.
              </p>
              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/loneliness-in-our-human-code/loneliness-in-our-human-code.pdf'
                  )}
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Download PDF
                </a>
              </div>
              <h2 className="header--lg">Social isolation costs us...</h2>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="stat">
                  <span className="header--xl">8</span>
                  <span className="header--lg"> years</span>
                </div>
                <div className="stat-desc">
                  <p className="text--gray">
                    of life lost, or the equivalent of smoking 15 cigarettes a
                    day
                    <sup>
                      <a href="#references">1</a>
                    </sup>
                  </p>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="stat">
                  <span className="header--xl">$6.7</span>
                  <span className="header--lg">B</span>
                </div>
                <div class="stat-desc">
                  <p className="text--gray">
                    dollars in additional federal spending, every year
                    <sup>
                      <a href="#references">2</a>
                    </sup>
                  </p>
                </div>
              </div>

              <Divider />

              <h2 className="header--lg margin-bottom--half">
                When we feel excluded, we lose our fight against disease.
              </h2>

              <h4 className="header--sm">
                It increases our risk for
                <sup>
                  <a href="#references">3,4</a>
                </sup>
              </h4>
              <div className="row">
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon organ-heart-icon"
                        src={organHeartIcon}
                        alt="heart"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      heart disease
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon dementia-icon"
                        src={dementiaIcon}
                        alt="dementia"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      dementia
                    </div>
                  </div>
                </div>
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon arthritis-icon"
                        src={arthritisIcon}
                        alt="arthritis"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      arthritis
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon diabetes-icon"
                        src={diabetesIcon}
                        alt="diabetes"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      type-2 diabetes
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon depression-icon"
                        src={depressionIcon}
                        alt="depression"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      depression
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon blood-pressure-icon"
                        src={bloodPressureIcon}
                        alt="blood pressure"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      high blood pressure
                    </div>
                  </div>
                </div>
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon cancer-icon"
                        src={cancerIcon}
                        alt="cancer"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      metastatic cancer
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon stroke-icon"
                        src={strokeIcon}
                        alt="stroke"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">stroke</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div class="risk-factor risk-solo">
                  <div class="icon-bubble">
                    <img
                      className="risk-icon suicide-icon"
                      src={suicideIcon}
                      alt="suicide"
                    />
                  </div>
                  <div class="risk-text text--gray text--center">suicide</div>
                </div>
              </div>

              <h4 className="header--sm">
                It increases impacts for our body's functions
                <sup>
                  <a href="#references">4,5,6,7</a>
                </sup>
              </h4>
              <div className="row">
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon blood-vessel-icon"
                        src={bloodVesselIcon}
                        alt="blood vessel"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      narrowing blood vessels to preserve body heat
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon stress-icon"
                        src={stressIcon}
                        alt="stress"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      elevating levels of the stress hormone cortisol
                    </div>
                  </div>
                </div>
                <div className="risk-duo">
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon antibody-icon"
                        src={antibodyIcon}
                        alt="antibody"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      reducing antibody protection
                    </div>
                  </div>
                  <div class="risk-factor">
                    <div class="icon-bubble">
                      <img
                        className="risk-icon cognition-icon"
                        src={cognitionIcon}
                        alt="decreased cognition"
                      />
                    </div>
                    <div class="risk-text text--gray text--center">
                      decreasing cognitive function
                    </div>
                  </div>
                </div>
              </div>

              <Divider />

              <h2 className="header--lg">It's not just a feeling.</h2>
              <h4 className="header--sm margin-bottom--none">Loneliness...</h4>

              <div className="pure-u-1 pure-u-lg-1-2">
                <h4 className="header--sm">Is a co-morbidity</h4>
                <p className="text--gray">
                  We feel lonely when our current number of social relations
                  (and the quality of those) do not match what we desire. This
                  feeling can lead to a loss of our sense of belongingness,
                  satisfaction with life, and is associated with the onset of
                  co-occuring physical and mental illnesses.
                  <sup>
                    <a href="#references">8,18</a>
                  </sup>
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <h4 className="header--sm">Manifests as physical pain</h4>
                <p className="text--gray">
                  A broken heart exhibits similar physical pain levels as a
                  broken limb because our nervous system processes social
                  rejection in the same area of the brain as physical pain.
                  Evolution has wired socialization into the brain’s automatic
                  reflexes on account of human contact dramatically increasing
                  our chances of survival.
                  <sup>
                    <a href="#references">14,15</a>
                  </sup>
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <h4 className="header--sm">Is a dysfunction of the brain</h4>
                <p className="text--gray">
                  The default for the human brain is to assess and respond to
                  our social context and stimuli, otherwise known as our
                  “default network". When we feel socially fulfilled, there is a
                  boost in our brain’s reward center (activating dopamine and
                  oxytocin) along with healthy function in the parts of our
                  brain that process social exclusion.
                  <sup>
                    <a href="#references">11,12,13</a>
                  </sup>
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <h4 className="header--sm">Can affect gene expression</h4>
                <p className="text--gray">
                  Studies have found that there may be genomic and hereditary
                  indicators for loneliness, including a study of older people
                  that found 209 abnormally expressed genes in their lonely
                  group. In the lonely people, genes in charge of activating
                  inflammation were over-expressed while those regulating
                  antiviral and antibody mechanisms w ere under-expressed.
                  <sup>
                    <a href="#references">6,9,10</a>
                  </sup>
                </p>
              </div>

              <Divider />

              <h2 className="header--lg">
                The causes and consequences are unique to every person.
              </h2>

              <p className="text--gray">
                Take a look at how social connection varies across our lifespan
              </p>

              <div className="social-timeline">
                <div className="age-section">
                  <h3 className="age-title header--md">Infants</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon stroller-icon"
                        src={strollerIcon}
                        alt="baby in stroller"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Early nurture</h4>
                      <p className="text--gray">
                        Social connectedness begins when life begins, and is
                        most impacted by the quality of early relationships with
                        parents and caregivers. Close family ties including
                        grandparents, siblings, aunts, and uncles can start
                        building an infant's social support system by spending
                        time with them in these formative years.
                        <sup>
                          <a href="#references">16</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon cuddle-icon"
                        src={cuddleIcon}
                        alt="mom cuddling baby"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Physical closeness</h4>
                      <p className="text--gray">
                        Physical attachment is crucial for infants, and
                        separation can cause high levels of anxiety. One study
                        showed that tending to and cuddling hospitalized infants
                        can increase survival rate by 20%, despite the risks of
                        infection.
                        <sup>
                          <a href="#references">16,17</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon trees-icon"
                        src={treesIcon}
                        alt="trees"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Neighborhood conditions</h4>
                      <p className="text--gray">
                        Infants who grow up in a stable neighborhood environment
                        have an increased ability to develop strong social
                        networks.
                        <sup>
                          <a href="#references">18,19,20</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="age-section">
                  <h3 className="age-title header--md">Children</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon money-icon"
                        src={moneyIcon}
                        alt="piggy bank"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Effects of poverty</h4>
                      <p className="text--gray">
                        Living in a diverse environment allows children to make
                        social connections that open them up for stronger
                        support systems that will grow over time. Poverty serves
                        as a barrier to social, physical, emotional,
                        educational, and economic resources since the poorest
                        communities have historically been and continue to be
                        highly segregated.
                        <sup>
                          <a href="#references">16,21</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon family-icon"
                        src={familyIcon}
                        alt="parents with child"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Parents</h4>
                      <p className="text--gray">
                        Parents and guardians play a huge role in children's
                        overall wellbeing. Growing up with both parents present
                        and engaged in their child's life doubles the likelihood
                        and increases the adequacy of access to emotional,
                        physical, and educational support.
                        <sup>
                          <a href="#references">16,21</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon conversation-icon"
                        src={conversationIcon}
                        alt="speed bubbles"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Speech and language</h4>
                      <p className="text--gray">
                        Speech and language are the two most important aspects
                        of early childhood development, and the foundations of
                        social and emotional well-being. Parents and guardians
                        can help with this by spending time with children,
                        including making and having meals, reading, and playing
                        sports.
                        <sup>
                          <a href="#references">16</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="age-section">
                  <h3 className="age-title header--md">Adolescents</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon sleep-icon"
                        src={sleepIcon}
                        alt="bed"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Sleep</h4>
                      <p className="text--gray">
                        People who report getting enough sleep are 70-80% less
                        likely to feel a lack of companionship. While this is
                        true for all ages, adolescents are particularly at risk
                        with a decreased production of melatonin (sleep hormone)
                        compared to that of young children. Additionally, use of
                        electronic devices late into the night have been found
                        to impair sleep.
                        <sup>
                          <a href="#references">23,24</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon family-icon"
                        src={familyIcon}
                        alt="child with two parents"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Parent-child relationship</h4>
                      <p className="text--gray">
                        The relationship between a parent and child is crucial
                        to lifelong health and well-being. In fact, having a
                        strong connection with a father figure decreases the
                        likelihood by 68% of consuming alcohol, tobacco
                        products, and drugs in their teenage years, and are less
                        likely to participate in juvenile delinquency.
                        Religious, community, big brother, and big sister
                        programs, as well as supportive educators are key at
                        this stage to fill any gaps that exist in a child's
                        support system.
                        <sup>
                          <a href="#references">22</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon peer-icon"
                        src={peerIcon}
                        alt="three friends"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Peer influence</h4>
                      <p className="text--gray">
                        A major component of adolescent growth is gaining
                        independence and a sense of identity. Often, this leads
                        to conflict with parents and a tendency to turn to peers
                        for guidance and support. However, at this time,
                        adolescents can be susceptible to peers who exert
                        negative influence. Finding a peer group that exerts
                        positive influences leads to building a strong support
                        system.
                        <sup>
                          <a href="#references">16,25</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="age-section">
                  <h3 className="age-title header--md">Emerging Adults</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon path-icon"
                        src={pathIcon}
                        alt="winding path with varying jobs and relationships"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">A time of change</h4>
                      <p className="text--gray">
                        Emerging adulthood is a time of exploration and change,
                        including testing different careers, values,
                        relationships, and geographic residences that may mean
                        leaving family for the first time. This change is often
                        characterized by the constant forming, breaking, and
                        reforming of social bonds. This is why having a constant
                        source of social support can have major impacts on
                        health and life satisfaction. In fact, if a person has a
                        friend they see on most days, it has a similar impact on
                        life satisfaction as would earning an extra $100,00 of
                        income.
                        <sup>
                          <a href="#references">14,16</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon health-behavior-icon"
                        src={healthBehaviorIcon}
                        alt="activity, healthy food, and safe sex"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Healthy behaviors</h4>
                      <p className="text--gray">
                        A feeling of connectedness and belonging is correlated
                        with a host of healthy behaviors including exercise, a
                        wholesome diet, and safe sex. Supporting your body
                        strengthens your mind and increases your ability to
                        emotionally connect with others.
                        <sup>
                          <a href="#references">26</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon substance-use-icon"
                        src={substanceUseIcon}
                        alt="pills, bottle, shotglass"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Substance use</h4>
                      <p className="text--gray">
                        Many emerging adults value peer opinions and actions as
                        guidance for their own. During this time, individuals
                        may experiment with alcohol and drugs as part of
                        socializing. Males disproportionately consider
                        drinking-related activities as a way to foster intimacy
                        and closeness with peers, while females rely more on
                        self-disclosure or sharing multiple activities.
                        <sup>
                          <a href="#references">26,27</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="age-section">
                  <h3 className="age-title header--md">Adults</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon organ-heart-icon"
                        src={organHeartIcon}
                        alt="heart"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--SM">Heart health</h4>
                      <p className="text--gray">
                        Maintaining cardiovascular health is extremely important
                        for people of all ages, but poor health outcomes are
                        particularly risky for both adults and seniors.
                        Loneliness is associated with all types of heart
                        disease, including ischemic heart disease, arrhythmia,
                        heart failure, and heart valve disease. Among those with
                        coronary artery disease, the lonely are two times more
                        at risk of cardiac death.
                        <sup>
                          <a href="#references">28,29</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon self-preservation-icon"
                        src={selfPreservationIcon}
                        alt="umbrella"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Self-preservation</h4>
                      <p className="text--gray">
                        Lonely people focus more on self-preservation and become
                        more defensive in the face of their environments. As a
                        survival mechanism, the brain is wired to focus on the
                        self instead of caring for those around. Unfortunately
                        for the person, this can backfire and make themselves
                        even more unpleasant to be around, leading to more and
                        more negative social encounters and fewer people willing
                        to be around them.
                        <sup>
                          <a href="#references">30</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon heart-break-loss-icon"
                        src={heartBreakLossIcon}
                        alt="broken heart"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Social loss</h4>
                      <p className="text--gray">
                        Because many people identify themselves in terms of
                        their relationships, losing a spouse or friend to
                        distance or death can be a very painful experience, both
                        emotional and physical. While the likelihood of losing
                        someone is equal across age groups, many adults see some
                        of their friendships weaken as a product of building a
                        family or experience the passing of a parent or spouse.
                        In terms of life satisfaction, when we break a social
                        tie, it is similar to suffering $90,000 loss in annual
                        income.
                        <sup>
                          <a href="#references">14,31</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="age-section">
                  <h3 className="age-title header--md">Aging adults</h3>
                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon elderly-icon"
                        src={elderlyIcon}
                        alt="old man"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Companionship</h4>
                      <p className="text--gray">
                        Aging adults are most lonely when they are not involved
                        in activities that build social connections such as
                        volunteering, religious services, family time, or other
                        community participation. In fact, 40% of seniors report
                        television as their main companion. While technology
                        such as the internet and television can be a helpful
                        tool to alleviate isolation, contact with other humans
                        brings the most fulfillment.
                        <sup>
                          <a href="#references">16,32</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon home-icon"
                        src={homeIcon}
                        alt="house"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">The home</h4>
                      <p className="text--gray">
                        Being able to maintain one’s own home promotes
                        confidence and well-being in older people. Not only does
                        it offer a sense of control and contribution, but a
                        level of independence strengthened by opportunities to
                        stay active and gather with friends in their community.
                        <sup>
                          <a href="#references">32</a>
                        </sup>
                      </p>
                    </div>
                  </div>

                  <div className="lonely-factor">
                    <div className="lonely-factor-icon">
                      <img
                        className="timeline-icon long-term-couple-icon"
                        src={longTermCoupleIcon}
                        alt="elderly couple"
                      />
                    </div>
                    <div className="lonely-factor-text">
                      <h4 className="header--sm">Long term partner</h4>
                      <p className="text--gray">
                        Many people live with a long-term partner into old age,
                        and a large majority of people rely on their partners as
                        a primary source of social support. However, aging can
                        bring unexpected medical events and even death, leaving
                        the healthy or surviving partner to suffer harmful
                        effects to mental and physical health. Additionally, the
                        percent of widows living with a child has decreased
                        significantly in the last 100 years: from 70% to 20%.
                        This means that aging adults who have lost their spouse
                        are much more likely to live alone than with family.
                        <sup>
                          <a href="#references">16,33</a>
                        </sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="closing">
                <h2 className="header--lg text--center">
                  Resilience in Our Human Code
                </h2>
                <p className="text--gray">
                  While these are statistically relevant, humans have the
                  ability to survive and surpass their circumstances to live
                  full and healthy lives. Loneliness, and other social,
                  circumstantial, and behavioral{' '}
                  <Link to="/vision/determinants-of-health/">determinants</Link>{' '}
                  have as much impact on your health as your biology or
                  genetics. If you or someone you know is feeling lonely, check
                  out resources in your neighborhood or reach out to talk to
                  someone. Sometimes a little bit of human contact can go a long
                  way towards living a healthier life.
                </p>
                <div className="resources">
                  <h4 className="header--sm">
                    Take Steps Now
                    <sup>
                      <a href="#fn-34">34</a>
                    </sup>
                  </h4>
                  <ul className="ul text--gray">
                    <li>
                      <a
                        href="https://www.nami.org/Find-Support/NAMI-Programs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The National Alliance on Mental Health
                      </a>{' '}
                      provides education, outreach, and advocacy and support
                      services. Call the NAMI helpline{' '}
                      <a href="tel:800-950-6264">800-950-NAMI</a> for immediate
                      support.
                    </li>
                    <li>
                      Services like{' '}
                      <a
                        href="https://www.betterhelp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BetterHelp
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://www.talkspace.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TalkSpace
                      </a>{' '}
                      provide virtual counseling with a licensed therapist,
                      making it easier than ever to find support.
                    </li>
                    <li>
                      <a
                        href="https://www.meetup.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MeetUp.com
                      </a>{' '}
                      can help you find people or groups near you who share
                      common interests.
                    </li>
                    <li>
                      The{' '}
                      <a
                        href="https://www.aspca.org/adopt-pet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ASPCA
                      </a>{' '}
                      or your local animal shelter can help you find a furry
                      best friend.
                    </li>
                    <li>
                      Learn more about the{' '}
                      <Link to="/vision/determinants-of-health/">
                        social determinants of health
                      </Link>{' '}
                      and how it can impact your overall health.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="care-card">
                <Image
                  src="/images/features/loneliness-in-our-human-code/care-card-tell-someone.jpg"
                  className="image--max-width"
                />
              </div>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author
                  name="Vanessa Li"
                  company="University of Washington"
                  image="/images/features/loneliness-in-our-human-code/headshot-vanessa-li.jpg"
                >
                  Vanessa specializes in health systems and public health
                  modeling, with an emphasis in socio-structural factors of
                  disease. At the time of this paper (2018), she received a
                  Bachelor of Science in Public Policy with double minors in
                  Business Economics and Global Health from the University of
                  Southern California, and later a Master of Public Health from
                  the University of Washington. As of 2020, Vanessa works as an
                  epidemiologist at the MITRE Corporation.
                </Author>
                <Author name="Jen Patel" />

                <h3 className="header--md">Contributors</h3>
                <Author name="Juhan Sonin" company="GoInvo, MIT" />
                <Author name="Parsuree Vatanasirisuk" />
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        "Achor, S.; Kellerman, G.R.; Reece, A.; Robichaux, A. (2018). America's Loneliest Workers, According to Research. Harvard Business Review. Retrieved July 31, 2018",
                      link:
                        'https://hbr.org/2018/03/americas-loneliest-workers-according-to-research',
                    },
                    {
                      title:
                        'Bhattacharya J.; Farid, M.; Flowers, L.; et al. (2017) Medicare Spends More on Socially Isolated Older Adults. AARP. Retrieved June 31, 2018',
                      link:
                        'https://www.aarp.org/content/dam/aarp/ppi/2017/10/medicare-spends-more-on-socially-isolated-older-adults.pdf',
                    },
                    {
                      title:
                        'Holt-Lunstad, J.; Smith, T.B.; Baker, M; et al. (2015) Loneliness and Social Isolation as Risk Factors for Mortality A Meta-Analytics Review. Perspecitves on Psychological Science. Retrieved August 2, 2018',
                      link:
                        'https://journals.sagepub.com/doi/full/10.1177/1745691614568352',
                    },
                    {
                      title:
                        'Known risk factors largely explain links between loneliness and first time heart disease / stroke. (2018). British Medical Journal. Retrieved August 2, 2018',
                      link:
                        'https://medicalxpress.com/news/2018-03-factors-largely-links-loneliness-heart.html',
                    },
                    {
                      title:
                        'Caeioppo, J.; Patrick, W. (2009) Loneliness: Human Nature and the Need for Social Connection. New York: W.W. Norton',
                    },
                    {
                      title:
                        'American Association for the Advancement of Science. (2007, September 14). Loneliness is in the Genes. Retrieved August 20, 2018',
                      link:
                        'http://www.sciencemag.org/news/2007/09/loneliness-genes',
                    },
                    {
                      title:
                        'IJzerman, H.; Gallucci, M.; Pouw, W.T.J.L; et al. (2012). Cold-blooded Loneliness: Social exclusions leads to lower skin temperatures. Acta Psychologica. 140. 283-8. 10.1016/j.actpsy.2012.05.002',
                    },
                    {
                      title:
                        "Campaign to end loneliness impact report: The first three years' achievements. (2013). NCVO. Retrieved August 18, 2018",
                      link:
                        'http://www.scribd.com/document/338317438/Campaign-to-End-Loneliness-impact-report-the-first-three-years-achievements',
                    },
                    {
                      title:
                        'Neural sensitivity to social rejection is associated with inflammatory responses to social streess. (2010). Proceedings of the National Academy of Science of the United States of America. Retrieved July 14, 2018',
                      link: 'https://www.ncbi.nlm.nih.gov/pubmed/20679216',
                    },
                    {
                      title:
                        'Yirka, B. (2018). Genetic study reveals genes associated with propensity for loneliness and social leanings. Medical Xpress. Retrieved August 12,2018',
                      link:
                        'https://medicalxpress.com/news/2018-07-genetic-reveals-genes-propensity-loneliness.html',
                    },
                    {
                      title:
                        'Li, W.; Mai, X.; Liu, C. (2014). The default mode network and social understanding of others. What do brain connectivity studies tell us. Frontiers in Human Neuroscience. Retrieved August 10, 2018',
                      link:
                        'https://www.frontiersin.org/articles/10.3389/fnhum.2014.00074/full',
                    },
                    {
                      title:
                        'Social Science 101: This is Your Brain on Social. (2017) Samuel Centre for Social Connectedness. Retrieved August 1, 2018',
                      link:
                        'https://www.socialconnectedness.org/social-science-101-this-is-your-brain-on-social',
                    },
                    {
                      title:
                        'The Brain and Social Connectedness: GCBH Recommendations on Social Engageement and Brain Health. (2017). Global Council on Brain Health. Retrieved August 5, 2018',
                      link:
                        'https://www.aarp.org/content/dam/aarp/health/brain_health/2017/02/gcbh-social-engagement-report.pdf',
                    },
                    {
                      title:
                        'Smith, E. (2013, October 29). Social Connected Makes a Better Brain: Recent trends show that people increasingly value material goods over relationships - but neuroscience and evolution say this goes against out nature. Retrieved August 3, 2018',
                      link:
                        'https://www.theatlantic.com/health/archive/2013/10/social-connection-makes-a-better-brain/280934/',
                    },
                    {
                      title:
                        'Lieberman, M. (2013). Scoail: Why Our Brains are Wired to Connect. Crown.',
                    },
                    {
                      title:
                        'Minnesota Department of Health Community and Family Health Division Office of Public Health Practice. (2010). Social Connectedness: Evaluating the Healthy People 2020 Framework: The Minnesota Project. Office of Disease Prevention and Health Promotion, U.S. Department of Health and Human Services. Retrieved August 23, 2018',
                      link:
                        'http://www.health.state.mn.us/divs/opi/resources/docs/1007socialconnectedness_report.pdf',
                    },
                    {
                      title:
                        'Bakwin, H. (1942). Loneliness in infants. American Journal of Diseases in Children. 63, 30-40',
                    },
                    {
                      title:
                        'Five Domains of Wellbeing: Social Connectedness (2013). The Fullframe Initiative. Retrieved August 12, 2018',
                      link:
                        'https://fullframeinitiative.org/wp-content/uploads/2011/05/SocialConnectedness_Factsheet.pdf',
                    },
                    {
                      title:
                        'De Jesus, M.; Puleo, E.; Shelton, R.C.; Emmons, K.M. (2010). Associations between perceived social environment and neighborhood safety: Health implications. Helath & Place, 16, 1007-1013',
                    },
                    {
                      title:
                        "Franzini, L.; Cuccaro, P.; Schuster, M.; et al. (2009). Influences of physical and social neighborhood environments on children's physical activity and obesity. American Journal of Public Health, 99(2), 271-278",
                    },
                    {
                      title:
                        'Bruner, C. PhD. (2017) ACE, Place, Rave, and Poverty: Building Hope for Children. Academic Pediatrics. Retrieved July 21, 2018',
                      link:
                        'https://www.sciencedirect.com/science/article/pii/S1876285917303522',
                    },
                    {
                      title:
                        'Blankenhorn, David. Fatherless America Confronting Our Most Urgent Social Problem. New York: Basic, 1995. Print',
                    },
                    {
                      title:
                        'CIGNA 2018 U.S. Loneliness Index. (2018). Retrieved August 5, 2018',
                      link:
                        'https://www.multivu.com/players/English/8294451-cigna-us-loneliness-survey/docs/FactSheet_1524071393425-302762795.pdf',
                    },
                    {
                      title:
                        'Owens, J. (2014). Insufficient Sleep in Adolescents and Young Adults: An Update on Causes and Consequences. From the American Academy of Pediatrics Technical Report. Retrieved August 10, 2018',
                      link:
                        'http://pediatrics.aappublications.org/content/early/2014/08/19/peds.2014-1696',
                    },
                    {
                      title:
                        'Hirsch, B.J.; Dubois, D.L. (1992). The lation of peer social support and psychological symptomatology during the transition to junior high school: a two-year longitudinal analysis. American Journal of Community Psychology, 20, 333-347',
                    },
                    {
                      title:
                        'Handebo, S.; Kebede, Y.; Morankar, S. (2017). Does social connectedness influence risky sexual behaviours? Finding from Ethiopian youths. International Journal of Adolescence and Youth. Retrieved August 9, 2018',
                      link:
                        'https://www.tandfonline.com/doi/full/10.1080/02673843.2017.1306448',
                    },
                    {
                      title:
                        'Makela, K.; Mutonen, H. (1996). The reward structure of drinking among young and older male drinkers. Contemp. Drug Probl. 23: 479-492',
                    },
                    {
                      title:
                        'Umberson, D.; Montez, J.K. (2010). Social Relationships and Health: A Flashpoint for Health Policy. Journal of Health and Social Behavior, 51 (suppl), S54-S66',
                      link: 'http://doi.org/10.1177/0022146510383501',
                    },
                    {
                      title:
                        'Loneliness is bad for the heart. (2018). European Society of Cardiology. Retrieved August 21, 2018',
                    },
                    {
                      title:
                        'The Profound power of loneliness. Depression, dementia and even some useful effects: Research examines how loneliness affects the social human brain. (2016). Retrieved August 7, 2018',
                      link:
                        'https://www.nsf.gov/discoveries/disc_summ.jsp?cntn_id=137534',
                    },
                    {
                      title:
                        'Hirsch, M. (2018). How can the death of a loved one affect me? Retrieved August 21, 2018',
                      link:
                        'https://www.sharecare.com/health/grief-emotional-health/how-death-loved-affect-me',
                    },
                    {
                      title:
                        'Loneliness in Old Age. (nd) Retrieved August 31, 2018',
                      link: 'https://www.extracare.org.uk/research/loneliness/',
                    },
                    {
                      title:
                        'Coile, C.C.; Levine, P.B. (2011). Recessions, Social Security, and Living Arrangements of the Elderly. Retrieved August 21, 2018',
                      link:
                        'http://projects.nber.org/projects_backend/rrc/papers/orrc11-12',
                    },
                    {
                      title:
                        "Healthline. How to Deal with Loneliness in Today's World: Your Options for Support. Retrieved Nov 8, 2018",
                      link:
                        'https://www.healthline.com/health/how-to-deal-with-loneliness#resources',
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

export default LonelinessFeature
