import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import Layout from '../components/Layout'
import imgSlider1 from '../img/slider1.jpg'
import imgSlider2 from '../img/slider2.jpg'
import IndexSlider from '../components/IndexSlider'

export const IndexTemplate = ({ title, description, content, isPreview }) => {
  // const ContentComponent = isPreview ? Content : HTMLContent
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <IndexSlider
        items={[
          { image: imgSlider1, text: 'Tolle Box' },
          { image: imgSlider2, text: 'Noch ein Text' },
        ]}
      />
      {/*<ContentComponent content={content} />*/}
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
