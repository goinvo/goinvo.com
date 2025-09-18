import React from 'react'
import Layout from '../components/layouts/layout'

import config from '../../config'

const NotFoundPage = () => (
  <Layout>
    <div className="max-width content-padding pad-vertical" style={{ textAlign: 'center', paddingBottom: 0, marginBottom: 0 }}>
      <h1 className="header--xl" style={{ fontWeight: 700 }}>NOT FOUND</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '12px' }}>You just hit a route that doesn't exist... the sadness.</p>
      <img
        src={`${config.cloudfrontUrl}/images/404/404-website.png`}
        alt="Page not found"
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: 'auto', display: 'block', margin: '12px auto 0', clipPath: 'inset(24px 3px 0 0)' }}
      />
    </div>
  </Layout>
)

export default NotFoundPage
