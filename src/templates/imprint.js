import { graphql } from 'gatsby'

import SimplePage from '../components/templates/SimplePage'

export default SimplePage

export const pageQuery = graphql`
  query ImprintTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "imprint" } }) {
      ...SimplePageFragment
    }
  }
`
