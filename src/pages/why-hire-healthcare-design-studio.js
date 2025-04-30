import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import Columns from '../components/columns'
import MailerLiteContactForm from '../components/mailerlite-contact-form'

import config from '../../config'

const frontmatter = {
  metaTitle: 'Why hire a Healthcare design studio? - GoInvo',
  metaDescription:
    'For over a decade, GoInvo’s design approach to digital health has incorporated a deep understanding of clinicians, patients, and administrators.',
  heroImage: '/images/homepage/open-source-bgd-9.jpg',
}

class ServicesPage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="center" />
        <div className="pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <h1 className="header--xl margin-bottom--none">
              Hiring a Digital Health Design Firm
            </h1>

            <p className="margin-top--none">
              As you and your organization begin the process of finding the
              right design partner for your health software project, there are
              several factors to be considered.
            </p>

            <ul>
              <li>
                One element of particular importance is the design firm's
                ability to understand an often-complex problem space and user
                base, then translate features into a product experience that is
                usable, efficient, even beautiful.
              </li>
              <li>
                You'll need a vision to drive the product design, one that is
                compelling enough to earn buy-in from your executives and
                product team, and realizable in a buildable user experience
                within a realistic timeframe.
              </li>
              <li>
                Equipped with an in-depth understanding of digital
                transformation in healthcare and insight into trends and tech
                advances, GoInvo can guide and inform your product design.
              </li>
            </ul>

            <h2 className="header--lg margin-bottom--none margin-top--none">
              A multi-disciplinary approach to digital health design
            </h2>

            <p className="margin-top--none">
              GoInvo is a unique firm with multiple areas of expertise necessary
              for digital health product design. Our multidisciplinary approach
              to clinical software leverages our skills in user experience
              design, engineering, medical illustration, and behavior change,
              among many others. We understand the complexities of both software
              creation and healthcare practice, the real-world implications of
              health policy changes, and the intricacies of health data.
            </p>

            <h2 className="header--lg margin-bottom--none margin-top--none">
              Practical experience and technical expertise
            </h2>

            <p className="margin-top--none">
              As patients and clinicians demand more from their software-driven
              healthcare experiences, human-centered design is essential to the
              future of digital health. GoInvo has the practical experience and
              technical expertise, with experience designing across the spectrum
              of digital health — from mobile medical apps and digital
              therapeutics to clinical decision support and electronic health
              records. Our designers have helped create software for digital
              health technologies spanning artificial intelligence, genomics,
              and advanced analytics. We have a proven track record of
              delivering innovative digital health projects and products on time
              and within budget.
            </p>

            <h1 className="header--xl margin-bottom--none">
              Why hire a design firm focused on digital health?
            </h1>

            <h2 className="header--lg margin-bottom--none margin-top--none">
              Deep design experience across the digital health continuum
            </h2>

            <p className="margin-top--none">
              For over a decade, GoInvo’s design approach to digital health has
              incorporated a deep understanding of clinicians, patients, and
              administrators, with technical knowledge of health IT, integrated
              with UX design best practice and software engineering. Our
              knowledge of the health field is tightly paired with our design
              practice: our staff have backgrounds in engineering,
              bioinformatics, and medical design.
            </p>

            <p>
              We’ve had the privilege of working with organizations as
              far-reaching as AstraZeneca, Becton Dickinson, Johnson & Johnson,
              3M Health Information Services, and the U.S. Department of Health
              and Human Services. Working across the healthcare system — from
              patient-facing experiences to life-saving clinical software, to
              government health IT and patient-data policy — has not only been
              rewarding, it has given us the right experiences to help digital
              health clients realize their vision. More than 80% of GoInvo’s
              customers are enthusiastic about our work and return for repeat
              engagements.
            </p>

            <h2 className="header--lg margin-bottom--none">
              Understanding of users and use cases
            </h2>

            <p className="margin-top--none">
              We have extensive knowledge of healthcare specific user types and
              roles — from clinicians to patients, administrators to analysts —
              having conducted dozens of usability research studies, spoken with
              hundreds of users, and shipped digital healthcare software. We
              understand the spectrum of audiences, what they’re looking for,
              their workflows, and context of use.
            </p>

            <h2 className="header--lg margin-bottom--none">
              The benefits of working together
            </h2>

            <p className="margin-top--none">
              Hiring a design firm that specializes in digital health, like
              GoInvo, substantially mitigates the risk that comes with designing
              new products and services. Our design approach is health-specific,
              but more importantly realistic, informed, and seasoned. In the
              end, this means a high-quality overall design solution for digital
              health clients, resulting in beautiful, usable software that is
              tailor fit to the patient’s needs and highly engaging for users.
            </p>
          </div>
        </div>

        <Quote
          background="gray"
          quotee="Serban Georgescu, MD"
          quoteeSub="InfoBionic Director of Clinical Development"
        >
          With Invo, design wasn't just design. It impacted our IP portfolio. It
          changed our business.
        </Quote>

        <div className="pad-vertical--double">
          <div className="max-width max-width--md content-padding">
            <MailerLiteContactForm />
          </div>
        </div>

        <div className="max-width content-padding pad-vertical--double">
          <Columns columns={3}>
            <ImageBlock
              key={'1'}
              image="/images/services/emerging-tech-shr-layers.jpg"
              title="Emerging technology"
              caption="We’ve worked on projects across the spectrum of emerging technology from artificial intelligence for medical coding to self-documenting voice encounters and wearable devices."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <a href="https://www.goinvo.com/features/from-bathroom-to-healthroom/">
                  From bathroom to healthroom
                </a>
              </div>
              <div>
                <Link to="/work/wuxi-nextcode-familycode/">WuXi NextCODE</Link>
              </div>
            </ImageBlock>
            <ImageBlock
              key={'2'}
              image="/images/services/doh-preview.jpg"
              title="Information visualizations"
              caption="We create beautiful printed and interactive health-related data visualizations that span payment dashboards to visualizing the social determinants of health to clinical practice guidelines for Zika."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <a href="https://www.goinvo.com/features/determinants-of-health/">
                  Determinants of Health
                </a>
              </div>
              <div>
                <a href="https://www.goinvo.com/features/ebola-care-guideline/">
                  Clinical Practice Guidelines for Zika
                </a>
              </div>
            </ImageBlock>
            <ImageBlock
              key={'3'}
              image="/images/services/inspired-ehrs-book.jpg"
              title="Open source healthcare products"
              caption="We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <Link to="/work/inspired-ehrs/">Inspired EHRs</Link>
              </div>
              <div>
                <Link to="/work/paintrackr/">PainTrackr</Link>
              </div>
              <div>
                <Link to="/work/?category=open-source">
                  See all open source products
                </Link>
              </div>
            </ImageBlock>
          </Columns>
        </div>
      </Layout>
    )
  }
}

export default ServicesPage
