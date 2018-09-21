import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'
import Image from '../image'

export default function CaseStudyLayout({ children }) {
  return (
    <Layout>
      <MDXProvider
        components={{
          h1: props => <h1 className="header--xl" {...props} />,
          h2: props => <h2 className="header--lg" {...props} />,
          h3: props => <h3 className="header--md" {...props} />,
          h4: props => <h4 className="header--md" {...props} />,
          img: props => <Image {...props} />,
        }}
      >
        {children}
      </MDXProvider>
    </Layout>
  );
}
