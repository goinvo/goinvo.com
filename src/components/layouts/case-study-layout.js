import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'
import Image from '../image'
import Hero from '../hero'
import Divider from '../divider'
import Results from '../results'

import config from '../../../config'

export default function CaseStudyLayout(props) {
  const frontmatter = props.pageContext.frontmatter;

  return (
    <Layout>
      <MDXProvider
        components={{
          h1: ({children, ...props}) => (
            <h1 className="header--xl" {...props}>{children}</h1>
          ),
          h2: ({children, ...props}) => (
            <h2 className="header--lg text--center" {...props}>{children}</h2>
          ),
          h3: ({children, ...props}) => (
            <h3 className="header--md margin-bottom--half" {...props}>{children}</h3>
          ),
          h4: ({children, ...props}) => (
            <h4 className="header--sm margin-bottom--half" {...props}>{children}</h4>
          ),
          p: ({children, ...props}) => (
            <p className="text--gray margin-top--none margin-bottom--double">{children}</p>
          ),
          img: props => <Image className="image--max-width" sizes={config.sizes.caseStudy} {...props} />
        }}
      >
        <div className="case-study">
          <Hero image={frontmatter.image} />
          <div className="max-width max-width--md content-padding">
            {props.children}
            <Divider />
          </div>
          <Results stats={frontmatter.results} />
        </div>
      </MDXProvider>
    </Layout>
  );
}
