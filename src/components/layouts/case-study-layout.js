import React from 'react'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'

export default function CaseStudyLayout({ children }) {
  return (
    <Layout>
      <MDXProvider>
        {children}
      </MDXProvider>
    </Layout>
  );
}
