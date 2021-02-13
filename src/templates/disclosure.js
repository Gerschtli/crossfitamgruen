import { graphql } from 'gatsby'

import SimplePage from '../components/templates/SimplePage'

export default SimplePage

export const pageQuery = graphql`
  query DisclosureTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "disclosure" } }) {
      ...SimplePageFragment
    }
  }
`
