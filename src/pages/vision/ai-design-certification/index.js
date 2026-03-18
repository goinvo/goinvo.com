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
  metaTitle: 'Human-Assisted AI Design Certification for Healthcare',
  metaDescription:
    'What passes and what fails is defined by a shared standard: safety, data integrity, regulatory fit, usability, language, bias, and how the flow works together. This is the certifiable surface layer.',
  heroImage:
    '/images/features/ai-design-certification/ai-design-certification-hero.jpg',
}

class AiDesignCertificationFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="human-centered-ai">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Human-Assisted AI Design Certification for Healthcare 
              </h1>

              <p>Pilot v.01<br />
              20.Mar.2026</p>

              <h1 className="header--xl margin-top--double">
                What is AI design certification?
              </h1>
              <p>We certify outputs: discrete, versioned, viewable artifacts — screens, flows, diagrams, data visualizations. We are not certifying that "this AI is good," but that "this specific artifact is fit for purpose under these conditions."</p>
              <p>What passes and what fails is defined by a shared standard: safety, data integrity, regulatory fit, usability, language, bias, and how the flow works together. This is the certifiable surface layer.</p>

              <p className="callout">The key distinction: Certification attaches to a specific artifact version and its intended use — not to the AI system that produced it. A screen, a flow, a piece of copy. Not a model.</p>

              <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary margin-top--double margin-bottom--half button--block margin-right"
                    >
                      Certify Your Health AI Today
                    </a>
              </div>

              <h1 className="header--xl margin-top--double">
                Product vision
              </h1>

              <p>We certify AI-generated design outputs — screens, flows, copy, and visuals — through non-negotiable human review for safety, accessibility, bias, provenance, and regulatory fit. The result is a trusted design health layer that turns fast AI output into production-ready work teams can ship, defend, and buy.</p>

              <p>That requires four things: a shared standard, human judgment at the right moment, verifiable proof, and tight integration into existing workflows.</p>

              <div className="margin-top--double">
                <h3 className="cert-principle__title header--sm">Design Health Schema</h3>
                <p>A machine-readable rule set (YAML/JSON) defining the non-negotiables:</p>
                <div className="design-health-schema-grid">
                  <div className="design-health-schema-card">
                    <strong>SAFETY</strong>
                    <p>No diagnosis, clear uncertainty, calm tone, false-positive control</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>BIAS</strong>
                    <p>Works across age, sex, medications, and baseline variation</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>ACCESSIBILITY</strong>
                    <p>Plain language, readable, screen-reader safe for clinician and patient</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>PROVENANCE</strong>
                    <p>Users can see what data drove the insight</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>REGULATORY FIT</strong>
                    <p>Wellness guidance vs. medical advice - clearly scoped</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>SCOPE OF PRACTICE</strong>
                    <p>What the software may and may not assert</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>USABILITY</strong>
                    <p>Actionable, not alarming. Clinician and patient readable rationale</p>
                  </div>
                  <div className="design-health-schema-card">
                    <strong>HUMAN ESCALATION</strong>
                    <p>When and how a clinician must intervene</p>
                  </div>
                </div>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Certify outputs, not models</h3>
                <p>Certification attaches to a specific artifact version (screen, flow, copy, visual), its intended use, and its risk profile — not to the AI system that produced it.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Human-in-the-loop tuning</h3>
                <p>Domain experts — hello Juhan and Goinvo Design — adjust and validate AI outputs; their changes and rationale are captured as structured signals that improve future generations and reviews.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Verifiable certification</h3>
                <p>Issue a versioned, auditable certificate bound to an artifact hash, rubric version, reviewer, scope, and expiration. Clear for procurement, legal, and regulators.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Workflow-native integration</h3>
                <p>"Request certification" lives where work happens: GitHub PRs, Figma, design systems, CMSs. Certification as a button, not a process.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Risk-based gates</h3>
                <p>Hard pass/fail thresholds scale with risk (e.g., marketing site vs clinical intake). Higher risk = stricter gates, named reviewers, shorter cert lifetimes.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Drift and change detection</h3>
                <p>Any meaningful artifact change invalidates the cert and triggers re-review, which can prevent silent regression after approval.</p>
              </div>

              <div className="cert-principle">
                <h3 className="cert-principle__title header--sm">Public signal, private audit trail</h3>
                <p>A simple badge teams can show externally, backed by a detailed internal record that stands up to scrutiny. <strong>Example:</strong> Project Crucible that measured EHR vendor compliance with FHIR.</p>
              </div>

              <h1 className="header--xl margin-top--double">
                Why it matters now
              </h1>

              <p>AI tools are generating healthcare UX at unprecedented speed. Cursor, Claude, and similar systems can produce working screens in minutes. But speed without accountability is dangerous in healthcare — where a single poorly-worded insight could prompt a patient to ignore symptoms that need clinical attention.</p>

              <p>Existing review processes weren't designed for artifact-level AI output. They assume a human designer made intentional choices about language, logic, and display. When AI produces the artifact, those assumptions break down. Certification closes that gap.</p>

              <h1 className="header--xl margin-top--double">
                Real-world example: Apple Health
              </h1>

              <p>Using Apple Health as a concrete summary.</p>

              <h2 className="header--md margin-top--double text--primary">
                1. What the AI does
              </h2>

              <p>The app generates short health insight cards from your data (sleep, heart rate, activity). It's making clinical guidance from patient data.
              </p>

              <p>Example: "Your resting heart rate is higher this week and your sleep is down. Consider resting today."
              </p>

              <p>This is copy + logic + UI, not "the model." And, this is medical advice delivered by software.</p>

              <h2 className="header--md margin-top--double text--primary">
                2. What gets certified
              </h2>

              <p>Before shipping, the team submits the actual outputs:
              </p>
              <ul className="ul margin-top--none">
                <li>The text users will read</li>
                <li>The rules that trigger it</li>
                <li>The data sources used</li>
                <li>How it's shown (color, urgency, notifications)</li>
              </ul>
              <p>In this case, it's the medical artifact being approved.</p>

              <h2 className="header--md margin-top--double text--primary">
                3. Non-negotiable checks
              </h2>

              <p>Each output is reviewed against a standard schema:</p>

              <ul className="ul margin-top--none">
                <li>Safety: No diagnosis, clear uncertainty, calm tone (or appropriate thresholds, false-positive control)</li>
                <li>Scope of Practice: What the software may and may not assert</li>
                <li>Bias: Works across age, sex, medications, and baselines</li>
                <li>Accessibility: Plain language, readable, screen-reader safe (clinician and patient-readable rationale)</li>
                <li>Data provenance: Users can see what data drove the insight</li>
                <li>Regulatory fit: Wellness guidance, not medical advice</li>
                <li>Usability: Actionable, not alarming</li>
                <li>Human escalation: When and how a clinician must intervene</li>
              </ul>

              <p>Some checks are automated. All are human-verified.</p>

              <h2 className="header--md margin-top--double text--primary">
                4. Human review catches problems
              </h2>

              <div className="review-result-card review-result-card--rejected">
                <div className="review-result-card__header">
                  <span className="review-result-card__status-dot" aria-hidden="true" />
                  Review result — cardiac insight v1.2
                </div>
                <div className="review-result-card__body">
                  <span className="review-result-card__badge">REJECTED</span>
                  <p className="review-result-card__quote">"This suggests early atrial fibrillation."</p>
                  <p className="review-result-card__why">Why it fails</p>
                  <p className="review-result-card__explanation">Diagnostic language. High regulatory and patient-anxiety risk.</p>
                </div>
              </div>

              <p>If we're in the wellness world, this must be rewritten to a safe, non-diagnostic version before approval. If we're in the medical world, we'll need to:</p>

              <ul className="ul margin-top--none">
                <li>Narrow scope</li>
                <li>Add uncertainty</li>
                <li>Trigger clinical follow-up — not just self-action</li>
              </ul>

              <h2 className="header--md margin-top--double text--primary">
                5. What "Certified" means
              </h2>

              <p>Approval issues a verifiable medical certificate tied to:</p>

              <ul className="ul margin-top--none">
                <li>The exact wording</li>
                <li>The logic used</li>
                <li>The UI shown</li>
                <li>The regulatory claim made</li>
              </ul>

              <p>Once approved, the insight gets a verifiable certificate tied to that exact copy, logic, and UI.</p>

              <ul className="ul margin-top--none">
                <li>It ships with the app</li>
                <li>It's auditable later</li>
                <li>If something goes wrong, you know what was approved and why</li>
              </ul>

              <h2 className="header--md margin-top--double text--primary">
                6. What approval looks like
              </h2>

              <div className="review-result-card review-result-card--certified">
                <div className="review-result-card__header">
                  <span className="review-result-card__status-dot" aria-hidden="true" />
                  Review result — cardiac insight v1.5
                </div>
                <div className="review-result-card__body">
                  <span className="review-result-card__badge">CERTIFIED</span>
                  <p className="review-result-card__quote">"Your resting heart rate is higher this week and your sleep is down. Consider resting today."</p>
                  <p className="review-result-card__explanation">Non-diagnostic. Actionable. Calm. Wellness scope confirmed. Data provenance tagged to Apple Watch HR sensor + sleep algorithm v3.1. Accessible at Grade 7 reading level.</p>
                </div>
              </div>

              <div className="pure-g audit-trail-section margin-top--double">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <Image
                    src="/images/features/ai-design-certification/certified-example-hand.jpg"
                    alt="Certified artifact card with hand illustration showing artifact metadata"
                    className="image--max-width"
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 audit-trail-section__text">
                  <p>Any meaningful artifact change<br />
                  invalidates the certificate<br />
                  and triggers re-review,<br />
                  preventing silent regression after approval.<br />
                  This is not a one-time stamp<br />
                  — <strong>it is a living audit trail.</strong></p>
                </div>
              </div>

              <h2 className="header--md margin-top--double text--primary">
                7. The point
              </h2>

              <p>Treat AI outputs as the medical devices at the UI layer.<br />
              You're not trusting an AI model.<br />
              You're certifying the health insight itself,<br />
              the thing a human actually sees,<br />
              so teams can move fast and stay safe.</p>

              <h1 className="header--xl margin-top--double">
                How it works in your workflow
              </h1>

              <p>Certification lives where work happens. A "Request Certification" button embedded in GitHub pull requests, Figma, design systems, and CMSs. Certification as a button, not a process.</p>

              <p>Risk-based gates scale thresholds with context: a marketing site and a clinical intake form are not the same artifact. Higher risk means stricter gates, named reviewers, and shorter certificate lifetimes.</p>
              
              <p className="callout">Landing zone: <a href="https://github.com/goinvo/AIDesignCertification" target="_blank" rel="noopener noreferrer">github.com/goinvo/AIDesignCertification</a> · Open source license: Apache 2.0</p>
            </div>
          </div>
        </div>

        <div className="pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <h2 className="header--xl text--center">Authors</h2>
            <Author name="Chloe Ma" />
            <Author name="Juhan Sonin" />

            <h3 className="header--md">Contributors</h3>

            <Author name="Eric Benoit" />

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
              Interested in digital healthcare strategy and user experience design? <br />
                <a href="/contact">Contact Us</a>
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default AiDesignCertificationFeature
