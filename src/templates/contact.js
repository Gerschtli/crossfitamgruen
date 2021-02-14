import { graphql } from 'gatsby'
import React from 'react'

import { normalizePageInputWithBody } from '../util/normalizer'
import Layout from '../components/base/Layout'
import Content from '../components/util/Content'
import ContactForm from '../components/contact/ContactForm'

const ContactTemplate = ({ data, entry, widgetFor }) => {
  const { dataSet, html } = normalizePageInputWithBody(data, entry, widgetFor)

  return (
    <Layout
      title={dataSet.title}
      description={dataSet.description}
      isPreview={!data}
    >
      <Content content={html} isPreview={!data} />
      <ContactForm />
    </Layout>
  )
}

export default ContactTemplate

export const pageQuery = graphql`
  query ContactTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`
