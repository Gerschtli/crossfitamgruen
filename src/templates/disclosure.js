import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/base/Layout'
import Content from '../components/util/Content'
import { breakpoints } from '../util/breakpoints'

const StyledContent = styled(Content)`
  margin: 0 auto;
  max-width: ${breakpoints.md}em;
  padding: 1em;

  p {
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.4;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul p,
  ol p,
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  // necessary for preview
  img {
    display: block;
    margin: 0 auto;
  }
`

const DisclosurePage = ({ data, entry, widgetFor }) => {
  // data is not set in preview mode
  const dataSet = data
    ? data.markdownRemark.frontmatter
    : entry.getIn(['data']).toJS()

  const html = data ? data.markdownRemark.html : widgetFor('body')

  return (
    <Layout title={dataSet.title} description={dataSet.description}>
      <StyledContent content={html} isPreview={!data} />
    </Layout>
  )
}

export default DisclosurePage

export const pageQuery = graphql`
  query DisclosureTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "disclosure" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`
