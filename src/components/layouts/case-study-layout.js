import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'
import Image from '../image'

export default function CaseStudyLayout({ children }) {
  return (
    <Layout>
      <MDXProvider
        components={{
          img: props => <Image {...props} />,
        }}
      >
        {children}
      </MDXProvider>
    </Layout>
  );
}
