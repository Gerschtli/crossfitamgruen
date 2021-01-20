import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import Layout from '../components/Layout'
import IndexSlider from '../components/IndexSlider'

const IndexTemplate = ({ title, description, slider }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <IndexSlider items={slider} />
    </>
  )
}

IndexTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string,
    }),
  ),
}

const IndexPage = ({ data, entry }) => {
  // data is not set in preview mode
  let dataSet = data
    ? data.markdownRemark.frontmatter
    : entry.getIn(['data']).toJS()

  return (
    <Layout>
      <IndexTemplate
        title={dataSet.title}
        description={dataSet.description}
        slider={dataSet.slider}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
