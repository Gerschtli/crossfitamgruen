import { graphql } from 'gatsby'

import SimplePage from '../components/templates/SimplePage'

export default SimplePage

export const pageQuery = graphql`
  query ContactSuccessTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contactSuccess" } }) {
      ...SimplePageFragment
    }
  }
`
