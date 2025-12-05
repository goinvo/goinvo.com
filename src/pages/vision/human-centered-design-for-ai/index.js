import React, { Component } from 'react'

import config from '../../../../config'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import SubscribeForm from '../../../components/form-subscribe'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'
import Quote from '../../../components/quote'

const frontmatter = {
  metaTitle: 'The Human-Centered Design Behind AI Clinicians Can Trust',
  metaDescription:
    '',
  heroImage:
    '/images/features/human-centered-design-for-ai/human-centered-ai-hero.jpg',
}

class HumanCenteredAIFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="human-centered-ai">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">The Human-Centered Design Behind AI Clinicians Can Trust</h1>

              <p>Healthcare has plenty of artificial intelligence, but not enough AI that clinicians actually use. Models can now flag sepsis hours earlier, spot subtle patterns in radiology images, and summarize dense charts in seconds, often matching or beating human performance on accuracy benchmarks. Yet adoption remains stubbornly uneven, and many tools sit idle once the pilot is over. The missing ingredient is not more algorithms. It is trust<sup><a href="#references">1</a></sup>.</p>
              <p>The gap between what AI can do and what clinicians believe it can do is fundamentally a design problem. When interfaces treat AI like an oracle rather than a colleague, opaque, interruptive, and impossible to question, clinicians default back to the workflows they know. To unlock AI’s promise, healthcare needs something different: AI deliberately designed to earn trust.</p>
              <div className="spacer margin-bottom--double" />

              <Divider />

              <h2 className="header--md margin-top--double">
                Why trust is the real rate-limiting step
              </h2>
              <p>Research on AI-based clinical decision support shows that clinicians’ trust depends on a small set of factors: transparency, usability, alignment with clinical judgment, and clear evidence that the system actually reduces workload, not adds to it<sup><a href="#references">2</a></sup>. When those conditions are missing, even well-validated tools are viewed as black boxes that second-guess clinicians without offering enough context to feel safe.</p>
              <p>The stakes are high. Global spending on healthcare AI is projected in the tens of billions of dollars within a few years, yet organizations report slow rollouts, stalled adoption, and frontline skepticism. Clinicians are not resisting technology; they are protecting their patients and their own professional accountability. If an AI tool flags a high-risk patient, they need to know what data drove the alert, how confident the system is, and what would happen if they choose a different course. Without those answers, the safest choice is to ignore the AI.</p>
              <p>Design can change that dynamic by making AI decision-making visible rather than a mystery. </p>

              <Quote
                quotee=" "
              >
                To unlock AI's promise, healthcare needs something different: AI deliberately designed to earn trust.
              </Quote>
              <div className="spacer margin-bottom--double" />

              <Divider />

              <h2 className="header--md margin-top--double">A real-world example: building trust into autonomous coding</h2>
              <p>One early example of an AI co-pilot at scale comes from the world of medical coding, long a tedious and error-prone part of the revenue cycle. CodeRyte, later acquired by 3M, used natural language processing to read clinical notes and automatically generate billing codes, reducing the need for manual coding line-by-line. The technology promised major efficiency gains, but only if coders and clinicians trusted the system enough to let it work.</p>
              <p><a href="/work/3m-coderyte">GoInvo partnered with CodeRyte</a> to transform a powerful but “bolted-on” engine into a complete product that hospitals could rely on every day. User research made the trust problem clear: billing managers and coders did not just want correct codes; they wanted to see how the AI got there. They needed to audit specific phrases in the note, review confidence levels, and quickly spot where human intervention was still required.</p>

              <Image
                src="/images/features/human-centered-design-for-ai/coderyte_hsc_UI_coding_v07_annotations.jpg"
                className="image--max-width display--block"
                sizes={
                  config.sizes.fullToHalfAtLargeInsideMediumMaxWidth
                }
              />
            </div>

            <div className="max-width max-width--md content-padding">
              <p>The solution was to treat explainability and control as core product features rather than optional extras. The redesigned interface linked each recommended code to the exact clinical documentation that supported it, exposed confidence scores in a clear visual language, and made it easy for coders to correct or override suggestions. Feedback loops ensured that those human corrections were not lost; they improved future performance, turning AI into a system that visibly learned from expert users over time.</p>
              <p>The payoff was significant. Deployed across large health systems, the platform helped organizations cut coding costs and reduce denials while handling more complex documentation and volume. Most importantly, coders and clinicians were willing to rely on it because they could always see and challenge the AI’s reasoning when necessary, preserving professional judgment instead of bypassing it. That is what a functioning AI co-pilot looks like in practice.</p>
              <div className="spacer margin-bottom--double" />

              <Divider />

              <h2 className="header--md margin-top--double">Four design principles for trustworthy AI co-pilots</h2>
              <p>Experiences like CodeRyte point to a set of design principles that distinguish trusted AI from abandoned pilots. These principles are highly relevant to any health software team building AI into diagnostics, triage, workflow automation, or documentation support.</p>

              <h4 className="header--sm margin-top--double text--gray numeral-gutter">1.  Explain just enough, at the right moment</h4>
              <p>Clinicians need to understand why an AI recommended a given action, but they rarely have time for long technical explanations. Effective co-pilots make the why visible in layers:</p>
              <ul className="ul margin-top--none">
                <li>A top layer that shows the recommendation, a simple confidence indicator, and one or two key factors that drove the suggestion.</li>
                <li>Deeper layers that expose more detail: additional contributing variables, thresholds, and full audit trails, only when a user asks for them.</li>
              </ul>
              <p>Studies of AI decision support tools show that layered explainability improves acceptance without overwhelming users, especially when explanations use familiar clinical concepts instead of raw model internals. The goal is not to teach every user data science; it is to show enough reasoning that the decision feels reviewable and accountable.</p>

              <Image
                src="/images/case-studies/coderyte/coderyte-mockup1.jpg"
                className="image--max-width display--block"
                sizes={
                  config.sizes.fullToHalfAtLargeInsideMediumMaxWidth
                }
              />

              <h4 className="header--sm margin-top--double text--gray numeral-gutter">2.  Be explicit about limits, not just strengths</h4>
              <p>Many AI rollouts emphasize accuracy metrics while underplaying where the model performs poorly or has limited training data. For clinicians, that imbalance feels risky. Trust grows when systems are candid about edge cases, uncertainty, and the boundaries of safe use.</p>
              <p>In practice, that means:</p>
              <ul className="ul margin-top--none">
                <li>Clear indicators when a case falls outside the model’s typical population or input range.</li>
                <li>Visual confidence bands that distinguish strong signals from weak suggestions.</li>
                <li>Obvious controls for overriding, dismissing, or downgrading AI recommendations.</li>
              </ul>
              <p>Research on AI-based decision support consistently finds that perceived honesty about limitations, combined with the ability to disagree, actually increases long-term trust and use.</p>

              <h4 className="header--sm margin-top--double text--gray numeral-gutter">3.  Build real feedback loops, not suggestion boxes</h4>
              <p>Clinicians are more likely to trust a system that learns from them instead of lecturing them. Feedback loops that visibly update the system based on expert corrections change the relationship from black box to joint problem-solving partner.</p>
              <p>In the CodeRyte redesign, GoInvo made every override and correction part of the product’s learning pipeline. Similar patterns can work in diagnostic tools: when radiologists reclassify a finding or primary care clinicians correct a risk score, the system can surface how those changes inform future cases, even if only in aggregate. Over time, clinicians see their collective expertise shaping the tool, which reinforces both performance and perceived legitimacy.</p>

              <Image
                src="/images/case-studies/coderyte/coderyte-mockup3.jpg"
                className="image--max-width display--block"
                sizes={
                  config.sizes.fullToHalfAtLargeInsideMediumMaxWidth
                }
              />

              <Quote>
                Studies of AI decision support tools show that layered explainability improves acceptance without overwhelming users, especially when explanations use familiar clinical concepts instead of raw model internals.
              </Quote>

              <h4 className="header--sm margin-top--double text--gray numeral-gutter">4.  Integrate into real workflows, not idealized ones</h4>
              <p>Even the most transparent AI will fail if it adds friction to days already packed with alerts, documentation, and inbox messages. Studies of AI adoption in clinical environments repeatedly highlight usability and workflow fit as critical enablers of trust.</p>
              <p>For GoInvo’s enterprise healthcare clients, that has meant:</p>
              <ul className="ul margin-top--none">
                <li>Deep EHR integration so AI outputs appear where clinicians already work, rather than in separate portals.</li>
                <li>Specialty-specific views and shortcuts for radiology, pathology, emergency medicine, and other high-pressure settings.</li>
                <li>Mobile and tablet experiences tuned for environments like home health or telehealth visits.</li>
              </ul>
              <p>AI co-pilots should feel like natural extensions of existing tools, not parallel systems that clinicians must remember to check. When well done, clinicians report lower cognitive load and better situational awareness, even as AI takes on more of the background analysis.</p>

              <div className="spacer margin-bottom--double" />

              <Divider />

              <h2 className="header--md margin-top--double">From black box to transparent partner</h2>
              <p>For patients and the broader public, the co-pilot metaphor is just as important. Surveys show that both clinicians and patients worry about opaque AI making life-and-death calls, particularly if they cannot understand or challenge those decisions. At the same time, people are increasingly comfortable with AI helping behind the scenes: triaging messages, organizing visit summaries, or flagging unusual trends in wearable data, so long as a trusted clinician remains in the loop.</p>
              <p>Design plays a critical role in how that balance is communicated. Consumer-friendly visualizations can show, for example, how an AI-powered system monitors thousands of signals from electronic health records or devices but only surfaces a handful of high‑priority alerts to a physician. Clear language can explain that algorithms augment, rather than replace, human expertise, mirroring the way autopilot systems work in aviation. When AI is framed and experienced as an accountable, supervised co-pilot, public comfort and clinician trust tend to rise together.</p>
              <div className="spacer margin-bottom--double" />

              <Divider />

              <h2 className="header--md margin-top--double">What this means for health software leaders</h2>
              <p>For leaders in health tech, the message is straightforward: algorithmic excellence is necessary, but insufficient. The organizations that will win the next decade of healthcare AI are those that invest early in human‑centered design for trust.</p>
              <ul>
                <li>Bringing clinicians, coders, nurses, and patients into the design process from the start.</li>
                <li>Treating explainability, limitations, and feedback loops as primary requirements, not compliance afterthoughts.</li>
                <li>Measuring success not just in model performance, but in sustained, real‑world use and satisfaction across clinical teams.</li>
              </ul>
              <p>GoInvo’s work across AI-enabled coding, clinical decision support, and data‑rich consumer health experiences shows that when design treats trust as a first-class problem, AI co‑pilots can move from lab demos to everyday practice. The result is not just efficiency gains, but a more resilient care system in which humans and machines each do what they do best.</p>
              <p>Healthcare does not need more black boxes. It needs visible, accountable AI co‑pilots that clinicians are proud to work with. Thoughtful design is how we get there.</p>

              <Quote
                quotee=" "
              >
                Trust grows when systems are candid about edge cases, uncertainty, and the boundaries of safe use.
              </Quote>

            </div>
          </div>
        </div>

        <div className="pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <h2 className="header--xl text--center">Authors</h2>
            <Author name="Jon Follett" />

            <div className=" pad-vertical--double">
              <h4 className="header--sm margin-bottom--half">
                About GoInvo
              </h4>
              <p className="text--gray">
                GoInvo is a healthcare design company that crafts innovative
                digital and physical solutions. Our deep expertise in Health
                IT, Genomics, and Open Source health has delivered results
                for the National Institutes of Health, Walgreens, Mount
                Sinai, and Partners Healthcare.{' '}
              </p>
              <p className="text--gray">
                <a href="/contact">Reach out with feedback.</a>
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="max-width max-width--md content-padding">
            <div id="references">
              <References
                references={[
                  {
                    title:
                      'Mathur H T, Rajan H A, Mongan O, Neumann L. Trust in Artificial Intelligence–Based Clinical Decision Support Systems in Health Care: Systematic Review. J Med Internet Res. 2025;27:e69678. doi:10.2196/69678. Available from: https://www.jmir.org/2025/1/e69678',
                    link:
                      'https://www.jmir.org/2025/1/e69678',
                  },
                  {
                    title:
                      'Johannssen A, Chukhrova N. The crucial role of explainable artificial intelligence (XAI) in improving health care management. Health Care Manag Sci. 2025 Sep;28(3):565–570. doi:10.1007/s10729-025-09720-y. Available from: https://pmc.ncbi.nlm.nih.gov/articles/PMC12535480/',
                    link:
                      'https://pmc.ncbi.nlm.nih.gov/articles/PMC12535480/',
                  },
                  {
                    title:
                      'Gupta M, Bhardwaj A, Goyal N. Explainable Artificial Intelligence (XAI) for Healthcare: A Brief Review. International Journal of Advanced Research in Computer and Communication Engineering. 2025 Mar;14(3):65-72. Available from: https://ijarcce.com/wp-content/uploads/2025/03/IJARCCE.2025.14367.pdf',
                    link:
                      'https://ijarcce.com/wp-content/uploads/2025/03/IJARCCE.2025.14367.pdf',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HumanCenteredAIFeature
