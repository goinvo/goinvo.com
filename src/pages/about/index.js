import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import ImageBlock from '../../components/image-block'
import TeamMember from '../../components/team-member'
import Image from '../../components/image'
import Columns from '../../components/columns'
import Card from '../../components/card'

import team from '../../data/team.json'

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
    link: '/work/?category=open-source',
    image: '/images/services/hgraph-ipad.jpg',
    title: 'Open source healthcare products',
    caption:
      'Learn about our opensource projects and why we’re passionate about making healthcare open.',
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
  metaTitle: 'About GoInvo, a Healthcare UX design company in Boston',
  metaDescription:
    'Over the past decade, we’ve created beautiful software for patients, clinicians, researchers, and administrators.',
  heroImage: '/images/about/care-cards-hand.jpg',
}

const AboutPage = () => (
  <Layout frontmatter={frontmatter}>
    <Hero image={frontmatter.heroImage}>
      <h1 className="header--xl">
        Our shared purpose:
        <br />
        better health access +<br />
        outcomes thru design
        <span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding pad-vertical--double--only-lg">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <h2 className="header--lg pad-right--only-lg">
            GoInvo is a digital design studio in Boston, crafting the future of
            healthcare through strategy, creativity, and vision.
          </h2>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <p className="text--gray pad-left--only-lg">
            With backgrounds spanning from medical illustration to physics, we
            share a foundational knowledge of development, design, and
            healthcare in the shared pursuit of impact for good.
          </p>
        </div>
      </div>
    </div>
    <div className="background--blue pad-vertical--quad--only-lg">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <ImageBlock
              image="/images/about/beth-working.jpg"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              title="Open office hours"
              caption="Receive design advice on your product’s strategy, layout, and data visualization. Alternatively, meet the tribe, or plot your career direction."
            />
            <Link
              to="/about/open-office-hours/"
              className="button button--secondary button--block margin-bottom--double hidden--lg"
            >
              Schedule a chat
            </Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <ImageBlock
              image="/images/about/bai-laughing.jpg"
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              title="Join the team"
              caption="If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler."
            />
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
                If you’re looking to engage in meaningful work, learn from a
                diverse team and thrive with autonomy on complex projects, we’d
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
          src="https://my.matterport.com/show/?m=dbnEE1ZHex8&brand=0"
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
    </div>
    <div className="max-width content-padding pad-bottom--double pad-vertical--quad--only-lg">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2 margin-bottom--double">
          <div className="pad-left--only-lg">
            <h3 className="header--md text--center text--md">Our Story</h3>
            <p className="text--gray margin-bottom pad-right--only-lg">
              With early roots designing for Apple, Microsoft, Oracle, and
              Obama’s 2008 campaign, GoInvo is now focused exclusively on
              healthcare. We’ve delivered over 110 products with partners
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
              sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              className="image--max-width"
            />
          </div>
        </div>
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
                  title={item.title}
                  image={item.image}
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
)

export default AboutPage
