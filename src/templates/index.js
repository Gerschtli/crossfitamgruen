import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

export const IndexTemplate = ({ title, description, content, isPreview }) => {
  const ContentComponent = isPreview ? Content : HTMLContent
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ContentComponent content={content} />
    </>
  )
}

IndexTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node,
  isPreview: PropTypes.bool,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        content={html}
        isPreview={false}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.node,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`
