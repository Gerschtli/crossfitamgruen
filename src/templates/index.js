import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/base/Layout'
import Slider from '../components/index/Slider'
import InfoBoxes from '../components/index/InfoBoxes'

const IndexPage = ({ data, entry }) => {
  // data is not set in preview mode
  let dataSet = data
    ? data.markdownRemark.frontmatter
    : entry.getIn(['data']).toJS()

  return (
    <Layout title={dataSet.title} description={dataSet.description}>
      <main>
        <Slider items={dataSet.slider} />
        <InfoBoxes items={dataSet.infoBoxes} />
      </main>
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
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        infoBoxes {
          text
          image {
            childImageSharp {
              fixed(quality: 90, width: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
