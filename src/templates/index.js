import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import IndexSlider from '../components/IndexSlider'
import IndexInfoBoxes from '../components/IndexInfoBoxes'

const IndexPage = ({ data, entry }) => {
  // data is not set in preview mode
  let dataSet = data
    ? data.markdownRemark.frontmatter
    : entry.getIn(['data']).toJS()

  return (
    <Layout title={dataSet.title} description={dataSet.description}>
      <IndexSlider items={dataSet.slider} />
      <IndexInfoBoxes items={dataSet.infoBoxes} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
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
        infoBoxes {
          text
          image {
            childImageSharp {
              fixed(quality: 90, width: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
