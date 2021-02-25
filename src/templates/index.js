import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/base/Layout'
import Slider from '../components/index/Slider'
import InfoBoxes from '../components/index/InfoBoxes'
import { normalizePageInput } from '../util/normalizer'

const IndexPage = ({ data, entry }) => {
  let dataSet = normalizePageInput(data, entry)

  return (
    <Layout
      indexable={dataSet.indexable}
      title={dataSet.title}
      description={dataSet.description}
      isPreview={!data}
    >
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
        indexable
        title
        description
        ...SliderFragment
        ...InfoBoxesFragment
      }
    }
  }
`
