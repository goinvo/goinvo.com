import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'
import Image from '../image'
import Hero from '../hero'
import Divider from '../divider'
import Results from '../results'

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
            <h2 className="header--lg" {...props}>{children}</h2>
          ),
          h3: ({children, ...props}) => (
            <h3 className="header--sm" {...props}>{children}</h3>
          ),
          h4: ({children, ...props}) => (
            <h4 className="header--md" {...props}>{children}</h4>
          ),
          hr: <Divider />,
          img: props => <Image {...props} />,
        }}
      >
        <>
          <Hero image={frontmatter.image} />
          <div className="max-width content-padding">
            {props.children}
          </div>
          <Results stats={frontmatter.results} />
        </>
      </MDXProvider>
    </Layout>
  );
}
