import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import IndexSlider from '../components/IndexSlider'

const IndexPage = ({ data, entry }) => {
  // data is not set in preview mode
  let dataSet = data
    ? data.markdownRemark.frontmatter
    : entry.getIn(['data']).toJS()

  return (
    <Layout>
      <Helmet>
        <title>{dataSet.title}</title>
        <meta name="description" content={dataSet.description} />
      </Helmet>
      <IndexSlider items={dataSet.slider} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index"}}) {
      frontmatter {
        title
        description
        slider {
          text
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
