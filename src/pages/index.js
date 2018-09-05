import React from 'react'

import Layout from '../components/layouts/layout'
import Divider from '../components/divider'
import Quote from '../components/quote'
import ImageBlock from '../components/image-block'
import Card from '../components/card'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <Hero image="features/careplans/part3/hero_image.jpg">
      <h1 className="header--xl">
        Designing<br/>
        the future of<br/>
        healthcare<span className="styled-period">.</span>
      </h1>
    </Hero>
    <br/>
    <br/>
    <Hero image="features/careplans/part3/hero_image.jpg" caption="We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, & governments." isLarge withLogo>
      <h1 className="header--xl">
        Designing<br/>
        the future of<br/>
        healthcare<span className="styled-period">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding">
      <h1 className="header--xl">Heading extra large</h1>
      <h2 className="header--lg">Heading large</h2>
      <h3 className="header--md">Heading medium</h3>
      <h4 className="header--sm">Heading small</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Turpis massa sed elementum tempus egestas sed. Aliquam faucibus purus in massa. Amet est placerat in egestas erat imperdiet sed euismod nisi. Turpis egestas integer eget aliquet. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Quis imperdiet massa tincidunt nunc pulvinar. Eu turpis egestas pretium aenean. Sapien eget mi proin sed libero enim sed faucibus turpis. Suspendisse in est ante in nibh mauris cursus. Tincidunt arcu non sodales neque sodales ut etiam sit.</p>
      <p className="text--caption">
        By some person
        <br/>
        From some place
      </p>
      <ul className="ul">
        <li>One thing</li>
        <li>Two thing</li>
        <li>Three thing</li>
      </ul>
      <Divider />
      <Divider animated />
      <div>
        <button className="button">View all work</button>
      </div>
      <Quote quotee="Eric Topol" quoteeSub="MD, Director, Scripps Translational Science Institute">
        The GoInvo studio is one of the most talented group of designers I have ever met in the health care space. Not only are their ideas, designs, and graphics remarkable, but I haven’t yet figured out how they know so much about medicine and its future.
      </Quote>
      <ImageBlock image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before."/>
      <Card link="#">
        <ImageBlock hoverable="true" image="features/determinants-of-health/feature_banner.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
      </Card>
      <Card>
        <ImageBlock image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
      </Card>
      <Card>
        Here is a card with just some text in it or whatever.
      </Card>
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-lg-1-3 pad-all">
          <Card link="#">
            <ImageBlock hoverable="true" image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
          </Card>
        </div>
        <div className="pure-u-1 pure-u-lg-1-3 pad-all">
          <Card link="#">
            <ImageBlock hoverable="true" image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
          </Card>
        </div>
        <div className="pure-u-1 pure-u-lg-1-3 pad-all">
          <Card link="#">
            <ImageBlock hoverable="true" image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
          </Card>
        </div>
      </div>
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-md-1-2 pad-all">
          <ImageBlock image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
        </div>
        <div className="pure-u-1 pure-u-md-1-2 pad-all">
          <ImageBlock image="home/culture-2017.jpg" title="Awesome project #1!" caption="Some really cool thing we've worked on some time before." />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
