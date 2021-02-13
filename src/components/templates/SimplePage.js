import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../base/Layout'
import Content from '../util/Content'
import { normalizePageInputWithBody } from '../../util/normalizer'

const SimplePage = ({ data, entry, widgetFor }) => {
  const { dataSet, html } = normalizePageInputWithBody(data, entry, widgetFor)

  return (
    <Layout title={dataSet.title} description={dataSet.description}>
      <Content content={html} isPreview={!data} />
    </Layout>
  )
}

export default SimplePage

export const query = graphql`
  fragment SimplePageFragment on MarkdownRemark {
    frontmatter {
      title
      description
    }
    html
  }
`
