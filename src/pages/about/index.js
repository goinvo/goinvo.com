import React, { Component, useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import Image from '../../components/image'
import TeamMember from '../../components/team-member'
import Columns from '../../components/columns'
import Card from '../../components/card'
import ImageBlock from '../../components/image-block'
import Collapsible from '../../components/collapsible'
import team from '../../data/team.json'
import SubscribeForm from '../../components/form-subscribe'

import config from '../../../config'

const ethics = [
  {
    title: 'Speak the Truth',
    content:
      'We will be honest and objective. We will be transparent, and provide insight into our thinking and work.',
  },
  {
    title: 'Make the World Useful, Beautiful, and Delightful',
    content:
      'We exercise the discipline required to produce ideas and things that are useful to and beautiful in the world.',
  },
  {
    title: 'Learn, Build, and Share',
    content:
      'We are curious, open creators who welcome new ideas and the input of others.',
  },
  {
    title: 'Commit to Community',
    content:
      'We protect the public by holding paramount the safety, health, welfare, and the rights of human beings.',
  },
  {
    title: 'Go like Hell',
    content:
      'We are driven and committed to what we do, putting in extra effort in our quest for exceptional results.',
  },
]

const upNextList = [
  {
    link: 'http://www.opensourcehealthcare.org',
    externalLink: true,
    image:
      '/images/features/open-source-healthcare/open-source-healthcare-featured.jpg',
    title: 'Open Source Healthcare Journal',
    caption:
      'The debut issue of our Open Source Healthcare Journal, advocating innovative open source ideas to change healthcare for the better.',
  },
  {
    link: '/open-source-health-design/',
    image: '/images/services/hgraph-ipad.jpg',
    title: 'Open Source Health Design',
    caption:
      "Learn about our opensource projects and why we're passionate about making healthcare open.",
  },
  {
    link: 'https://www.goinvo.com/features/print-big/',
    externalLink: true,
    suppressNewTab: true,
    image:
      '/images/features/print-big-print-often/print-big-print-often-featured.jpg',
    title: 'Print big. Print often.',
    caption:
      'In strategy, the pieces and parts are typically nested in different documents that do not allow everything to be seen at once. The ability to see everything at once, at anytime, is core to our approach.',
  },
]

const frontmatter = {
  metaTitle: 'About GoInvo, a UX design company in Boston',
  metaDescription:
    "Over the past decade, we've created beautiful software for patients, clinicians, researchers, and administrators.",
  heroImage: '/images/about/care-cards-hand.jpg',
}

const AboutPage = () => {
  const [bibliographyExpanded, setBibliographyExpanded] = useState(false);
  
  return (
  <Layout frontmatter={frontmatter}>
    <Hero image={frontmatter.heroImage}>
      <h1 className="header--xl">
        Our shared purpose:
        <br />
        better systems +<br />
        better lives thru design
        <span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    
    {/* About GoInvo Section - Visual Layout */}
    <div className="background--gray pad-vertical--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <h2 className="header--lg pad-right--only-lg margin-top--none">
              Crafting the future of software through strategy, creativity, and vision.
            </h2>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <p className="text--gray pad-left--only-lg margin-top--none">
              GoInvo is a digital design studio in Boston helping health, policy, and civic organizations turn complexity into clarity through research, UX design, illustration, data visualization, and ethical AI. With backgrounds in engineering, illustration, design, and software development, we share a foundational technical and creative expertise in the shared pursuit of impact for good.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Our Values - Visual Grid */}
    <div className="pad-vertical--double">
      <div className="max-width content-padding">
        <h3 className="header--lg text--center margin-bottom--double">Our Values</h3>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 pad-horizontal margin-bottom--double">
            <div className="text--center">
              <Image
                src="/images/open_source/public-good.png"
                alt="Ethics"
                className="image--max-width-80 margin-bottom"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--bold margin-bottom--half">Ethics aren't optional</p>
              <p className="text--gray text--sm">Every interface and policy we design touches real lives.</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 pad-horizontal margin-bottom--double">
            <div className="text--center">
              <Image
                src="/images/open_source/trust.png"
                alt="Trust"
                className="image--max-width-80 margin-bottom"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--bold margin-bottom--half">Clarity builds trust</p>
              <p className="text--gray text--sm">When people can see how a system works, they can use it — and question it — better.</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 pad-horizontal margin-bottom--double">
            <div className="text--center">
              <Image
                src="/images/open_source/innovation.png"
                alt="Craft"
                className="image--max-width-80 margin-bottom"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--bold margin-bottom--half">Craft matters</p>
              <p className="text--gray text--sm">Precision and beauty make complex ideas understandable.</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 pad-horizontal margin-bottom--double">
            <div className="text--center">
              <Image
                src="/images/open_source/innovation.png"
                alt="Small teams"
                className="image--max-width-80 margin-bottom"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--bold margin-bottom--half">Small scales smarter</p>
              <p className="text--gray text--sm">Fewer layers mean faster learning and stronger relationships.</p>
            </div>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-5 pad-horizontal margin-bottom--double">
            <div className="text--center">
              <Image
                src="/images/open_source/public-good.png"
                alt="Human data"
                className="image--max-width-80 margin-bottom"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="text--bold margin-bottom--half">Data is human</p>
              <p className="text--gray text--sm">Behind every dataset is someone's story. We design to keep that visible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* How We Work - Two Column */}
    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <h3 className="header--lg margin-bottom">Our Approach</h3>
            <p className="text--gray">
              Each project runs as a self-contained studio: research, design, and engineering working together with the client.
            </p>
            <p className="text--gray">
              That structure lets us adapt quickly, minimize overhead, and integrate seamlessly into teams much larger than ours.
            </p>
            <p className="text--gray">
              Decisions happen where information is richest, close to the people doing the work and the users they serve.
            </p>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <h3 className="header--lg margin-bottom">Why We Stay Small</h3>
            <p className="text--gray">
              We organize around <strong>knowledge, not hierarchy.</strong>
            </p>
            <p className="text--gray">
              Each project functions as its own independent yet connected studio, collaborating through shared ethics and open communication.
            </p>
            <p className="text--gray">
              Smaller, self-organizing teams consistently outperform large, centralized ones in both quality and adaptability.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* How We Use AI - Feature Section */}
    <div className="pad-vertical--double about-ai">
      <div className="max-width content-padding">
        <h3 className="header--lg margin-bottom text--center">How We Use AI</h3>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <p className="text--gray margin-bottom">
              <strong>AI helps us see more, not decide for us.</strong>
            </p>
            <p className="text--gray">
              We use it as an extension of research and synthesis to search and summarize faster, surface patterns and insights across data and interviews, and assist in visual communication.
            </p>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <div className="background--gray pad-vertical pad-horizontal about-ai__options-box">
              <ul className="about-ai__options-list">
                <li>Designers remain the authors of every insight</li>
                <li>Transparency, privacy, and human oversight</li>
                <li>AI amplifies judgment, not replaces it</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collapsible Bibliography */}
        <div className="pad-vertical--double">
          <button
            onClick={() => setBibliographyExpanded(!bibliographyExpanded)}
            className="button button--link header--md margin-bottom"
            style={{ padding: 0, textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666' }}
          >
            <span>Bibliography & Research</span>
            <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s', transform: bibliographyExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </button>
          <Collapsible collapsed={!bibliographyExpanded}>
            <ul className="ul text--gray text--sm margin-top">
              <li className="margin-bottom--half">
                "Design Thinking and Teamwork — Measuring Impact: A Systematic Literature Review." <em>Journal of Organization Design</em> (2024).
              </li>
              <li className="margin-bottom--half">
                "Failure or Success of Self-Organizing Teams in Long-Term Care Organizations." <em>BMC Health Services Research</em> (2025).
              </li>
              <li className="margin-bottom--half">
                Friedrich Hayek. "The Use of Knowledge in Society." <em>American Economic Review</em> (1945).
              </li>
              <li className="margin-bottom--half">
                Michael Beer & Russell A. Eisenstat. <em>High Commitment, High Performance: How to Build a Resilient Organization for Sustained Advantage.</em> Jossey-Bass (2009).
              </li>
              <li className="margin-bottom--half">
                Herbert A. Simon. <em>The Sciences of the Artificial.</em> (1969).
              </li>
              <li className="margin-bottom--half">
                "Scaling or Growing Agile? Proposing a Manifesto for Agile Organization Development." <em>Journal of Organization Design</em> (2025).
              </li>
              <li className="margin-bottom--half">
                Elinor Ostrom. <em>Governing the Commons.</em> (1990).
              </li>
              <li className="margin-bottom--half">
                Amartya Sen. <em>Development as Freedom.</em> (1999).
              </li>
              <li className="margin-bottom--half">
                Edward Tufte. <em>The Visual Display of Quantitative Information.</em> (1983).
              </li>
              <li className="margin-bottom--half">
                "The Power of Shared Positivity: Organizational Psychological Capital and Firm Performance During Exogenous Crises." <em>Small Business Economics</em> (2021).
              </li>
            </ul>
          </Collapsible>
        </div>
      </div>
    </div>

    {/* Duplicate intro removed per request */}
    <div className="background--blue pad-vertical--quad--only-lg">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <Image
              src="/images/about/design-markup.jpg"
              alt="Open office hours"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              className="image--max-width"
            />
            <div className="margin-bottom">
              <h3 className="header--md margin-bottom--half">Open office hours</h3>
              <p className="text--gray margin--none">
                Receive design advice on your product's strategy, layout, and data visualization. Alternatively, meet the tribe, or plot your career direction.
              </p>
            </div>
            <Link
              to="/about/open-office-hours/"
              className="button button--secondary button--block margin-bottom--double hidden--lg"
            >
              Schedule a chat
            </Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <Image
              src="/images/about/megan-and-claire-ultrasound.jpg"
              alt="Join the team"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              className="image--max-width"
            />
            <div className="margin-bottom">
              <h3 className="header--md margin-bottom--half">Join the team</h3>
              <p className="text--gray margin--none">
                If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler.
              </p>
            </div>
            <Link
              to="/about/careers/"
              className="button button--secondary button--block margin-bottom--double hidden--lg"
            >
              Careers
            </Link>
          </div>
        </div>
        <div className="pure-g hidden--until-lg">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right">
            <Link
              to="/about/open-office-hours/"
              className="button button--secondary button--block"
            >
              Schedule a chat
            </Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left">
            <Link
              to="/about/careers/"
              className="button button--secondary button--block"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding">
      <h2 className="header--xl text--center pad-vertical--double">Our team</h2>
      {team.slice(0, 3).map(member => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
    <div className="background--blue margin-bottom--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-right--only-lg">
              <Image
                src="/images/about/silhouette.jpg"
                alt="Career opportunities at GoInvo"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                className="image--max-width"
              />
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-left--only-lg pad-top--double">
              <p className="text--bold margin-top--none margin-bottom--half">
                Your Career Awaits
              </p>
              <p className="text--gray margin--none">
                Designer and/or Engineer
              </p>
              <p className="text--gray">
                If you're looking to engage in meaningful work, learn from a
                diverse team and thrive with autonomy on complex projects, we'd
                be a good fit.
              </p>
              <Link
                to="/about/careers/"
                className="button button--secondary button--lg margin-bottom"
              >
                Learn about careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding pad-bottom--double">
      {team.slice(3, team.length).map(member => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
    <div className="background--gray pad-vertical--double--only-lg pad-top--double">
      <div className="max-width content-padding">
        <h3 className="header--md text--center text--md">Code of Ethics</h3>
        <ul className="ul flex-wrap flex-wrap--half">
          {ethics.map(ethic => {
            return (
              <li key={ethic.title} className="margin-bottom">
                <p>
                  <span className="display--block text--bold margin-bottom--half">
                    {ethic.title}
                  </span>
                  <span className="text--gray">{ethic.content}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <div className="max-width content-padding pad-bottom--double pad-vertical--quad--only-lg">
      <div className="pure-g">
        <iframe
          title="GoInvo Tour"
          width="956"
          height="538"
          src="https://my.matterport.com/show/?m=KDRR1E7jZwf&brand=0"
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
    </div>

    <div className="background--gray pad-vertical--double--only-lg pad-top--double">
      <div className="max-width content-padding">
        <div className="pure-u-1 pure-u-lg-1-2 margin-bottom--double">
          <div className="pad-left--only-lg">
            <h3 className="header--md text--center text--md">Our Story</h3>
            <p className="text--gray margin-bottom pad-right--only-lg">
              With early roots designing for Apple, Microsoft, Oracle, and
              Obama's 2008 campaign, GoInvo is now focused exclusively on
              healthcare. We've delivered over 110 products with partners
              ranging from 3M, U.S. Department of Health and Human Services,
              Partners Healthcare, and a variety of startups.
            </p>
            <Link
              to="/about/studio-timeline/"
              className="display--inline-block margin-right--double"
            >
              Studio timeline
            </Link>
            <a
              href="https://www.goinvo.com/features/an-oral-history"
              className="display--inline-block"
            >
              Oral history
            </a>
          </div>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <div className="pad-left--only-lg">
            <Image
              src="/images/about/bowling.jpg"
              alt="GoInvo team bowling"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              className="image--max-width"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="pad-vertical--double">
      <div className="max-width max-width--md content-padding">
        <SubscribeForm />
      </div>
    </div>

    <div className="background--blue">
      <div className="max-width content-padding pad-vertical pad-vertical--quad--only-lg">
        <h4 className="header--md">Up next</h4>
        <Columns columns={3}>
          {upNextList.map(item => {
            return (
              <Card
                key={item.link}
                link={item.link}
                externalLink={item.externalLink}
                suppressNewTab={item.suppressNewTab}
              >
                <ImageBlock
                  image={item.image}
                  title={item.title}
                  caption={item.caption}
                  sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                  hoverable
                />
              </Card>
            )
          })}
        </Columns>
      </div>
    </div>
  </Layout>
  );
};

export default AboutPage
