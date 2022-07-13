import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SlickCarousel from 'react-slick'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import Reference from '../../../components/reference'
import Divider from '../../../components/divider'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Living Health Lab - GoInvo',
  metaDescription:
    'An open source project to help people examine, understand, and improve their day-to-day health through guided exploration, self-tracking, and behavior change.',
  heroImage: '/images/features/living-health-lab/hero.jpg',
}

class LivingHealthLabFeature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0,
    }

    this.carousel = React.createRef()
  }

  afterComicSlideChange = currentSlide => {
    this.setState({ currentSlide })
  }

  goToComicSlide = i => {
    this.setState({ currentSlide: i }, () => {
      this.carousel.current.slickGoTo(i, true)
    })
  }

  render() {
    const comicSlides = Array.from(Array(6), (x, i) => i)

    return (
      <Layout frontmatter={frontmatter}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="living-health-lab">
          <Hero image={frontmatter.heroImage} position={'top center'} isLarge />
          <div className="max-width pad-all">
            <h1 className="header--xl">Living Health Lab</h1>

            <h4>
              An open source project to help people examine, understand, and
              improve their day-to-day health through guided exploration,
              self-tracking, and behavior change.
            </h4>
            <p>
              <i>Design</i>
              <br />
              With over 350,000 digital health applications available worldwide,
              there’s no shortage of options when it comes to individual health
              data tracking.<Reference>1</Reference> However, accurately
              interpreting this data to address specific questions and create an
              effective health plan can be a challenge. Individuals within the
              Quantified Self community have established a systematic approach
              to self-tracking and self-research called Personal Science.
              Through Living Health Lab, we aim to extend the personal science
              process to anyone with access to a smartphone.
            </p>
            <p>
              <i>Development</i>
              <br />
              Living Health Lab will be an open source tool that helps
              individuals notice a health problem, identify possible
              contributing or alleviating factors, and test any causality. The
              process will be guided by the individual’s goals and what phase of
              their Health Journey they are in. They will also be encouraged to
              designate a health buddy (e.g., a partner, clinician, or friend)
              to accompany them in their explorations and analyze findings
              together.
            </p>
            <p>
              <i>Dream</i>
              <br />
              Our goal is to make Living Health Lab available to anyone who asks
              “How can I pursue a healthier life?”, as a tool that empowers
              every patient, supplements the care of all medical providers, and
              promotes a holistic approach to healthcare. This resource will be
              an open source design project that is freely shared with the
              public. As we are still in the early stages of the design process,
              we would welcome any feedback: please reach out to us at{' '}
              <a href="mailto:LivingHealthLab@goinvo.com">
                LivingHealthLab@goinvo.com
              </a>
              .
            </p>

            <h2 className="header--lg margin-top--trip">Introduction</h2>

            <p>
              Chronic pain is a condition that affects over 50 million adults in
              the United States.<Reference>2</Reference> For many, managing
              chronic conditions is a difficult process that involves a complex
              jumble of biological, physical, emotional, mental, social, and
              cultural factors. With more than 350,000 health and
              wellness-related applications available to download worldwide,
              patients can easily monitor their health, yet very few of these
              services help patients with chronic health problems interpret
              their data or offer insights to improve everyday health.
              <Reference>1</Reference>
            </p>
            <p>
              Out of all chronic pain patients, one in three individuals faces
              frequent limitations in daily life due to the severity and
              frequency of their symptoms.<Reference>2</Reference> These
              patients often undergo repeated attempts to manage their
              conditions. This can mean frequent visits to the doctor’s office
              and ER, several trials of different medications, and multiple days
              of missed work due to disability, all of which take a toll on
              their interpersonal relationships, financial stability, and
              overall quality of life.<Reference>3</Reference> Members of a
              community called Quantified Self found inspiration in this
              disheartening cycle through a self-tracking approach now known as
              personal science: they became “active investigators” of their own
              health.<Reference>4</Reference> This method encourages patients to
              seek answers to their own difficult health questions and concerns
              through five key actions of self-research<Reference>5</Reference>:
            </p>
            <ul className="list--unstyled list-steps">
              <li>
                <Image
                  src="/images/features/living-health-lab/step-1.png"
                  className="image--max-width"
                  sizes={config.sizes.fullToThirdAtLargeInsideMediumMaxWidth}
                />
                1. <b>Question</b> experiences, emotions, observations about
                one’s own life
              </li>
              <li>
                <Image
                  src="/images/features/living-health-lab/step-2.png"
                  className="image--max-width"
                  sizes={config.sizes.fullToThirdAtLargeInsideMediumMaxWidth}
                />
                2. <b>Design</b> the exploration
              </li>
              <li>
                <Image
                  src="/images/features/living-health-lab/step-3.png"
                  className="image--max-width"
                  sizes={config.sizes.fullToThirdAtLargeInsideMediumMaxWidth}
                />
                3. <b>Observe</b> the data collected, manually self-reported or
                collected by smart devices
              </li>
              <li>
                <Image
                  src="/images/features/living-health-lab/step-4.png"
                  className="image--max-width"
                  sizes={config.sizes.fullToThirdAtLargeInsideMediumMaxWidth}
                />
                4. <b>Reason</b> through the findings
              </li>
              <li>
                <Image
                  src="/images/features/living-health-lab/step-5.png"
                  className="image--max-width"
                  sizes={config.sizes.fullToThirdAtLargeInsideMediumMaxWidth}
                />
                5. <b>Discover</b> practical actions to improve daily life and
                share with others
              </li>
            </ul>
            <p>
              In our review of published work in the fields of personal science
              and self-tracking, we found that this approach has helped
              individuals with specific chronic conditions, including patients
              with Parkinson’s disease in identifying personalized sleep and
              medication routines to improve symptoms of rigidity,
              <Reference>6</Reference> patients with irritable bowel syndrome in
              determining possible food triggers,<Reference>7</Reference>
              <sup>,</sup>
              <Reference>8</Reference> and patients trying to understand and
              better manage their migraines.<Reference>9</Reference> Living
              Health Lab’s mission is to build on this research and broadly
              apply the process of personal science to patients with all types
              of health conditions, habits, and concerns. It will help anyone
              with a smartphone discover how to improve their day-to-day health
              through guided, thoughtfully-designed explorations.
            </p>

            <h2 className="header--lg margin-top--trip">Design</h2>

            <Image
              src="/images/features/living-health-lab/timeline.png"
              className="image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            />
            <p>
              Living Health Lab is an open source project in the early stages of
              the design process. In Stage 1, we completed an initial round of
              research into existing health trackers and personal science,
              defined our design principles based on research, began visualizing
              the patient experience, and explored key challenges. We will
              continue to update this feature as we move through each stage.
            </p>

            <h3 className="header--md">1) Design Principles</h3>

            <p>
              The following design principles are based on findings and
              reflections from the Quantified Self and broader self-tracking
              communities, combined with lessons from our own experiences
              designing for patients. These principles serve as a compass as we
              begin designing and prototyping Living Health Lab.
            </p>
            <ul>
              <li>
                Purposeful Exploration
                <ul>
                  <li>
                    Figure out where the individual is in their Health Journey
                    and where they want to go
                  </li>
                  <li>
                    Align the exploration with their goals, limitations, and
                    needs
                  </li>
                  <li>Reduce the burden of tracking as much as possible</li>
                </ul>
              </li>

              <li>
                Guided, Informed Experience
                <ul>
                  <li>
                    Ensure that designing the exploration is a clear, easy
                    process
                  </li>
                  <li>
                    Give people knowledge and control over what they commit to
                  </li>
                  <li>
                    Use storytelling and visualization to bring the content to
                    life
                  </li>
                  <li>
                    Design an accessible personal science learning experience
                  </li>
                </ul>
              </li>

              <li>
                Collaborative Health
                <ul>
                  <li>
                    “Do health together” with a network of support by including
                    the person’s care team: PCP, other providers, accountability
                    buddy, and friend/family “cheerleaders”
                  </li>
                </ul>
              </li>

              <li>
                Actionable Insights
                <ul>
                  <li>Identify factors impacting their health</li>
                  <li>Provide meaningful data visualization</li>
                  <li>
                    Offer insights that enable patients to make improvements to
                    their health
                  </li>
                </ul>
              </li>

              <li>
                Sense of Agency
                <ul>
                  <li>Support self-reflection and self-learning</li>
                  <li>
                    Empower patients to be in the driver's seat of their own
                    health
                  </li>
                  <li>
                    Recognize the value of all new insights, irrespective of
                    “success”
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header--md">
              2) Visualizing the Patient Experience
            </h3>

            <p>
              Storytelling is a powerful tool to represent the patient
              experience. Here we use Patty’s Story as a way to begin
              conceptualizing and defining the Living Health Lab service. This
              is just one illustration of how an individual could discover
              Living Health Lab and begin taking ownership of their health
              through the service.
            </p>
            <SlickCarousel
              ref={this.carousel}
              infinite={false}
              dots={false}
              arrows={false}
              afterChange={this.afterComicSlideChange}
            >
              {comicSlides.map((n, i) => {
                return (
                  <div key={n}>
                    <div className="lhl-image-max-width">
                      <Image
                        src={`/images/features/living-health-lab/comic-${i +
                          1}.png`}
                        className="image--max-width"
                        sizes={config.sizes.fullInsideMaxWidth}
                      />
                    </div>
                  </div>
                )
              })}
            </SlickCarousel>
            <div className="lhl-comic-nav">
              <button
                className={`button button--link lhl-comic-prev ${
                  this.state.currentSlide === 0 ? 'disabled' : ''
                }`}
                onClick={() => this.goToComicSlide(this.state.currentSlide - 1)}
              ></button>
              {comicSlides.map((n, i) => {
                return (
                  <button
                    key={n}
                    className={`button button--link lhl-comic-button ${
                      this.state.currentSlide === i ? 'active' : ''
                    }`}
                    onClick={() => this.goToComicSlide(i)}
                  >
                    <Image
                      src={`/images/features/living-health-lab/comic-${i +
                        1}.png`}
                      className="image--max-width"
                      sizes={config.sizes.fullInsideMaxWidth}
                    />
                  </button>
                )
              })}
              <button
                className={`button button--link lhl-comic-next ${
                  this.state.currentSlide === comicSlides.length - 1
                    ? 'disabled'
                    : ''
                }`}
                onClick={() => this.goToComicSlide(this.state.currentSlide + 1)}
              ></button>
            </div>

            <h3 className="header--md">3) Key Challenges</h3>

            <h4>Helping the patient set up the right exploration</h4>
            <p>
              Tracking a wide range of factors without clear goals runs the risk
              of overburdening; this is why it is critical to ensure that each
              exploration is designed to closely align with patient goals.
              Setting up the right exploration is no simple task. With so many
              different health concerns and questions, there is no
              one-size-fits-all exploration. Researchers Munson et al. explore
              how crafting the exploration around the patient’s goals leads to
              the best results.<Reference>10</Reference> These goals can be
              distinct from those of their doctor or the intentions of the
              tool’s designers, and they can change over time as the patient
              learns more. Additionally, patients may need support to clarify
              and define their goals, as their goals may initially be undefined
              or unachievable. Through simple questions, Living Health Lab will
              direct individuals toward the self-tracking strategy that best
              aligns with where they are in their own “Health Journey.”
            </p>
            <Image
              src="/images/features/living-health-lab/health-journey.png"
              className="image--max-width lhl-image-max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            />
            <p>
              We propose the Health Journey as a general framework for how an
              individual can shift from a lack of awareness of a health problem
              to finding healthy habits to manage that problem daily. Our
              research is only just beginning, and we want to recognize that
              this framework would not have been possible without the research
              that’s already been done—we are particularly grateful to those in
              the Quantified Self as well as all the researchers in the patient
              self-tracking space for their foundational work.
              <Reference>4</Reference>
              <sup>,</sup>
              <Reference>10</Reference>
              <sup>,</sup>
              <Reference>7</Reference>
              <sup>,</sup>
              <Reference>8</Reference>
            </p>
            <p>
              The Health Journey consists of three phases: Notice, Investigate,
              Test. Each phase uses personal science, but the exploration design
              and analysis method depend on which phase the patient is in.
              Explorations within each phase serve different purposes. For
              example, if the patient is in the Investigate phase, Living Health
              Lab will help them set up an observational study to investigate
              relationships between factors and visualize the results through
              correlation analysis. However, if Living Health Lab analyzes a
              patient’s goals and directs them to the Test phase, they will
              instead conduct a self-experiment to create space for practicing
              new habits and assess whether this results in meaningful change.
              Living Health Lab will set up an exploration that aligns with the
              patient’s goals and uses the appropriate self-tracking strategy,
              guiding each individual through their own research study to gain
              insight into patterns, associations, and discoveries surrounding
              their health.
            </p>
            <h4>Reducing the Tracking Burden</h4>
            <p>
              Any given individual is more likely to reach their tracking goal
              if it fits easily into their life. A purposeful, well-defined
              exploration reduces the burden by keeping tracking focused. While
              factors like mood or symptom reporting may need to be manually
              reported, other data can be automatically gathered. With the
              patient’s consent, Living Health Lab can gather data from their
              phone, wearables, smart devices, health apps, and more. Living
              Health Lab will likely suggest automated options wherever possible
              and limit manually reported factors to minimize the tracking
              burden.
            </p>
            <p>
              Living Health Lab can also reduce the tracking burden by providing
              timely insight and options as the user sets up their exploration.
              As they choose what to track, they will be given an estimate of
              how many minutes tracking will take daily to prevent
              overcommitment. The individual can also designate the duration of
              the exploration, with options ranging from one to three weeks. We
              hope to reduce the tracking burden and make health explorations
              feasible for many people. However, we also will need to validate
              this hypothesis and develop additional measures through user
              testing.
            </p>
            <h4>Making Personal Science Accessible and Understandable</h4>
            <p>
              Living Health Lab will use multiple approaches to make the
              experience accessible to a wide range of patients. Assuming that
              the individual has no prior knowledge of science or statistics,
              Living Health Lab will infuse clear science tips and ways to learn
              more, provide clarity into the process, and integrate animation
              and other visual aids to support understanding. Additionally,
              content should be written at a fifth-grade reading level.
              <Reference>11</Reference> Balancing thorough patient education
              with simplicity is a primary challenge that we acknowledge.
            </p>
            <h4>Providing Actionable Insights and Appropriate Analysis</h4>
            <p>
              Living Health Lab can become a space for patients to engage in
              activities that strengthen their knowledge, skills, attitudes, and
              confidence in managing their health. The Health Journey framework
              supports a progression from noticing to testing new habits, which
              leads to valuable insight and meaningful behavior change. Much of
              the value of the personal science process comes from the patient’s
              own reflection, drawn out by good questions and bolstered by the
              support of others. However, Living Health Lab will also need to
              provide insight into the data to help patients avoid incorrect
              conclusions and make sense of what they have tracked. Any analysis
              that Living Health Lab provides must be clear without
              over-reaching. We recognize that this balance will be a key
              challenge to overcome.
            </p>
            <p>
              Even when an exploration doesn’t produce clear findings or show a
              correlation between factors, an individual can still come to new
              realizations about their Health Journey. Wolf et al. found that
              “ancillary benefits include deeper learning about a health topic;
              generation of new ideas for improving their own care; productive
              engagement with clinicians; and providing a sense of agency while
              dealing with the stress of disease and treatment.”
              <Reference>5</Reference> Regardless of the results for any given
              exploration, a person can still learn in the process. Ultimately,
              the goal is for Living Health Lab to help patients see their
              health and take action to improve their day-to-day health.
            </p>
            <p>
              At this stage in our project, we have reviewed existing research
              to identify potential exploration design, analysis, and
              visualization approaches for the three phases of the Health
              Journey. Our next steps will be to continue our research and
              pursue promising avenues through light testing. Take a look at the{' '}
              <a href="#appendix">Appendix</a> to learn more about the study
              designs, analysis approaches, and visualization methods that we
              hope to build upon.
            </p>

            <h2 className="header--lg margin-top--trip">
              Making Living Health Lab Real
            </h2>

            <h3 className="header--md">
              Broader application for patients and providers
            </h3>
            <p>
              We believe this empowered approach to managing one’s health is
              beneficial for every human. Initially, we plan to target those
              living with chronic conditions that can make everyday life
              difficult, like fibromyalgia, arthritis, and migraines. Research
              has shown those with chronic conditions are often the most
              motivated to start the tracking process as any insight can
              directly affect their day-to-day health.<Reference>7</Reference>{' '}
              Patients who are <b>highly motivated</b> to answer their health
              questions and have <b>much to gain</b> may be the easiest to
              reach, but many others could also benefit from Living Health Lab:
            </p>
            <Image
              src="/images/features/living-health-lab/user-chart.png"
              className="image--max-width lhl-image-max-width lhl-user-chart"
              sizes={config.sizes.fullInsideMaxWidth}
            />
            <p>
              Living Health Lab will be a collaborative tool for patients and
              their doctors as they “identify new trends, hypothesize about
              symptom contributors, generate action plans, and identify new
              information needs” for chronic condition management and healthy
              lifestyle promotion.<Reference>9</Reference> This type of
              collaboration is most successful when both parties share their
              clearly defined goals. Access to high-quality, patient-generated
              data might free up the office visit to discuss more targeted
              concerns as patients come in to share their findings and receive
              personalized interpretation and direction.
              <Reference>12</Reference> We see the opportunity for Living Health
              Lab to facilitate higher levels of patient engagement in their
              healthcare and make it easier for providers to obtain data on
              their patients’ day-to-day health.
            </p>
            <p>
              Living Health Lab will guide people in identifying and
              understanding their unique, necessary lifestyle changes and the
              ideal way to implement them. Lifestyle changes could prevent one
              out of every three premature deaths related to heart disease,
              stroke, and chronic lung disease.<Reference>13</Reference> “Eat
              better,” “Move more,” and “Smoke less” are just a few of the most
              common generic lifestyle recommendations. Though accurate, simply
              dispensing this advice is rarely sufficient in effecting change.
              So how can we set people up for success in each person’s unique
              context? Providing concrete, actionable steps based on their lived
              experience is the key. Living Health Lab takes the recommendation
              to eat better and prompts the individual to determine the
              specifics of what that looks like for them. These guided
              self-tracking strategies give structure to the process of
              watching, measuring, and investigating choices. Living Health Lab
              will show people how capable they are of taking control of their
              own health.
            </p>
            <p>
              We hope to serve everyone from the student in a high school health
              class to the retiree trying to improve their heart health to the
              single parent struggling with their newborn’s skin sensitivities.
              Living Health Lab reaches those with medical diagnoses and extends
              to everyone who asks “How can I pursue a healthier life?” Some
              will ask that question on their own, while others will be advised
              by their doctor, nurse, or others on their care team. Living
              Health Lab can be an extension of those conversations as it leads
              people to explore their own health and seek answers.
            </p>

            <h3 className="header--md">Open Source Health Design</h3>
            <p>
              As an Open Source Health Design project, Living Health Lab content
              will be available to the public for free use under the Creative
              Commons Attribution 4.0 International License. Transparency
              affords us the benefits of external input and engagement. By
              making all research, design, and ultimately code publicly
              available, we hope to spread good ideas and accelerate innovation
              for the public good.
            </p>

            <h3 className="header--md">Get Involved</h3>
            <p>
              We are in the early stages of design and funding will be a vital
              component for continuing this project. If you’re interested in
              contributing, partnering, sponsoring, or simply sharing feedback,
              please reach out to us at{' '}
              <a href="mailto:LivingHealthLab@goinvo.com">
                LivingHealthLab@goinvo.com
              </a>
              .
            </p>

            <div className="text--center margin-top--double">
              <a
                href="https://forms.gle/HjmSWjHKZS9zHsrz6"
                className="button button--primary"
              >
                How would you use Living Health Lab?
              </a>
            </div>
          </div>
          <div className="background--blue margin-top--quad">
            <div className="max-width pad-all">
              <div id="appendix">
                <h2 className="header--lg text--center">Appendix</h2>
                <iframe
                  width="100%"
                  height="600px"
                  scrolling="no"
                  title="Research Spreadsheet"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCH-qmx5UMmEqMI74LUNS8rhSKT9mi1pjqDGrkNPLdOXyRQTZVYCjlmwpzxDdq1ZMqdgE2F1XeoqrE/pubhtml?widget=true&amp;headers=false"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="max-width pad-all">
            <h2 className="header--lg text--center margin-top--trip">
              Authors
            </h2>

            <Author name="Sharon Lee" />
            <Author name="Shayla Nettey" />
            <Author name="Huahua Zhu" />
            <Author name="Megan Hirsch" />
            <Author name="Chloe Ma" />
            <Author name="Samantha Wuu" />

            <div className="margin-top--trip">
              <Divider />
            </div>

            <h2
              className="header--lg margin-top--trip text--center"
              id="references"
            >
              References
            </h2>
            <References
              hideTitle
              references={[
                {
                  title:
                    'IQVIA Institute for Human Data Science. Digital Health Trends 2021: Innovation, Evidence, Regulation, Adoption. 2021. Accessed June 7, 2022.',
                  link:
                    'https://libguides.stkate.edu/ld.php?content_id=65768565',
                },
                {
                  title:
                    'Zelaya CE, Dahlhamer JM, Lucas JW, Connor EM Chronic Pain and High-impact Chronic Pain Among U.S. Adults, 2019. NCHS Data Brief no 390. National Center for Health Statistics. 2020. Accessed June 7, 2022.',
                  link:
                    'https://www.cdc.gov/nchs/products/databriefs/db390.htm#section_1',
                },
                {
                  title:
                    'Institute of Medicine (US) Committee on Advancing Pain Research, Care, and Education. Relieving Pain in America: A Blueprint for Transforming Prevention, Care, Education, and Research. Washington (DC): National Academies Press (US); 2011. doi: 10.17226/13172',
                },
                {
                  title:
                    'Wright A. Self-Tracking: Reflections from the BodyTrack Project. Sci Eng Ethics. 2018;24:999-1021.',
                  link: 'https://doi.org/10.1007/s11948-016-9801-2',
                },
                {
                  title:
                    'Wolf GI, De Groot M. A conceptual framework for personal science. Front Comput Sci. 2020;2:21. doi: 10.3389/fcomp.2020.00021',
                },
                {
                  title:
                    "Riggare S, Hägglund M. Precision Medicine in Parkinson's Disease - Exploring Patient-Initiated Self-Tracking. J Parkinsons Dis. 2018;8(3):441-446. doi:10.3233/JPD-181314",
                },
                {
                  title:
                    'Karkar R, Schroeder J, Epstein DA, et al. TummyTrials: A Feasibility Study of Using Self-Experimentation to Detect Individualized Food Triggers. Proc SIGCHI Conf Hum Factor Comput Syst. 2017;2017:6850-6863. doi:10.1145/3025453.3025480',
                },
                {
                  title:
                    'Karkar R, Zia J, Vilardaga R, et al. A framework for self-experimentation in personalized health. Journal of the American Medical Informatics Association. 2015;23(3):440-448. doi:10.1093/jamia/ocv150',
                },
                {
                  title:
                    'Schroeder J, Karkar R, Murinova N, Fogarty J, Munson SA. Examining Opportunities for Goal-Directed Self-Tracking to Support Chronic Condition Management. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies. 2019;3(4):1-26. doi:10.1145/3369809',
                },
                {
                  title:
                    'Munson SA, Schroeder J, Karkar R, Kientz JA, Chung CF, Fogarty J. The Importance of Starting With Goals in N-of-1 Studies. Frontiers in Digital Health. 2020;2. doi:10.3389/fdgth.2020.00003',
                },
                {
                  title:
                    'Aldridge MD. Writing and designing readable patient education materials. Nephrology Nursing Journal: Journal of the American Nephrology Nurses’ Association. 2004;31(4):373-377. Accessed June 15, 2022.',
                  link: 'https://pubmed.ncbi.nlm.nih.gov/15453229/',
                },
                {
                  title:
                    'Chung CF, Wang Q, Schroeder J, et al. Identifying and Planning for Individualized Change: Patient-Provider Collaboration Using Lightweight Food Diaries in Healthy Eating and Irritable Bowel Syndrome. Proc ACM Interact Mob Wearable Ubiquitous Technol. 2019;3(1):7. doi:10.1145/3314394',
                },
                {
                  title:
                    'Centers for Disease Control and Prevention. Up to 40 percent of annual deaths from each of five leading causes are preventable. 2014. Accessed June 3, 2022.',
                  link:
                    'https://www.cdc.gov/media/releases/2014/p0501-preventable-deaths.html',
                },
              ]}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default LivingHealthLabFeature
