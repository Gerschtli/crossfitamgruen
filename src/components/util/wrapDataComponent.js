import React from 'react'

import Layout from '../base/Layout'

export const wrapDataComponent = (Component) => ({ entry }) => (
  <Layout isPreview={true}>
    <Component entry={entry} />
  </Layout>
)
