import { graphql } from 'gatsby'
import React from 'react'

import { normalizePageInputWithParsedBody } from '../util/normalizer'
import Layout from '../components/base/Layout'
import Content from '../components/util/Content'

const ContactTemplate = ({ data, entry, widgetFor }) => {
  const { dataSet, html } = normalizePageInputWithParsedBody(
    data,
    entry,
    widgetFor
  )

  return (
    <Layout
      indexable={dataSet.indexable}
      title={dataSet.title}
      description={dataSet.description}
      isPreview={!data}
    >
      <Content content={html} isPreview={!data} injectComponents={true} />
    </Layout>
  )
}

export default ContactTemplate

export const pageQuery = graphql`
  query ContactTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        indexable
        title
        description
      }
      htmlAst
    }
  }
`
