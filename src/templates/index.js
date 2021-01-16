import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import Layout from '../components/Layout'
import IndexSlider from '../components/IndexSlider'

export const IndexTemplate = ({ title, description, slider, content, isPreview }) => {
  // const ContentComponent = isPreview ? Content : HTMLContent
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <IndexSlider
        items={slider}
      />
      {/*<ContentComponent content={content} />*/}
    </>
  )
}

IndexTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slider: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    text: PropTypes.string,
  })),
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
        slider={frontmatter.slider}
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
        slider {
          text
          image
        }
      }
      html
    }
  }
`
