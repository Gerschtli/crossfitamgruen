import React from 'react'
import styled from 'styled-components'

import Layout from '../base/Layout'
import Content from '../util/Content'
import { breakpoints, mediaQuery } from '../../util/breakpoints'
import { graphql } from 'gatsby'
import { normalizePageInputWithBody } from '../../util/normalizer'

const StyledContent = styled(Content)`
  margin: 0 auto;
  max-width: ${breakpoints.md}em;
  padding: 1em;

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

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
const SimplePage = ({ data, entry, widgetFor }) => {
  const { dataSet, html } = normalizePageInputWithBody(data, entry, widgetFor)

  return (
    <Layout title={dataSet.title} description={dataSet.description}>
      <StyledContent content={html} isPreview={!data} />
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
