import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/work/">Work</Link>
  </Layout>
)

export default IndexPage
