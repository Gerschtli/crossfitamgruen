import { graphql } from 'gatsby'

import SimplePage from '../components/templates/SimplePage'

export default SimplePage

export const pageQuery = graphql`
  query NotFoundTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "notFound" } }) {
      ...SimplePageFragment
    }
  }
`
