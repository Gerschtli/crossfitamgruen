import { graphql } from 'gatsby'
import React from 'react'

import { normalizePageInputWithBody } from '../util/normalizer'
import Layout from '../components/base/Layout'
import Content from '../components/util/Content'
import EversportsCalender from '../components/calender/EversportsCalender'

const ScheduleTemplate = ({ data, entry, widgetFor }) => {
  const { dataSet, html } = normalizePageInputWithBody(data, entry, widgetFor)

  return (
    <Layout
      title={dataSet.title}
      description={dataSet.description}
      isPreview={!data}
    >
      <Content content={html} isPreview={!data} />
      <EversportsCalender id={dataSet.eversportsId} />
    </Layout>
  )
}

export default ScheduleTemplate

export const pageQuery = graphql`
  query ScheduleTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "schedule" } }) {
      frontmatter {
        title
        description
        eversportsId
      }
      html
    }
  }
`
