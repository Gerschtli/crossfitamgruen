import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { colors } from '../../util/colors'
import JournalLink from './JournalLink'
import { breakpoints, mediaQuery } from '../../util/breakpoints'
import { normalizeDataInput } from '../../util/normalizer'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${colors.grey.dark};

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`
const StyledLinkBox = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery(breakpoints.sm)} {
    flex-direction: row;
  }
`
const StyledLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLinkColumnSeparator = styled.div`
  height: 0.8em;

  ${mediaQuery(breakpoints.sm)} {
    height: auto;
    width: 3em;
  }
`
const StyledLink = styled(Link)`
  color: ${colors.light};
  text-decoration: none;
  font-size: 0.8em;
`
const StyledLinkSeparator = styled.div`
  height: 0.8em;
`
const StyledSeparator = styled.div`
  width: 1.5em;
`

export const FooterTemplate = ({ data, entry }) => {
  const dataSet = normalizeDataInput(data, entry)

  let columns = []
  if (dataSet.linkColumns) {
    for (let i = 0; i < dataSet.linkColumns.length; i++) {
      let links = []
      if (dataSet.linkColumns[i].links) {
        for (let j = 0; j < dataSet.linkColumns[i].links.length; j++) {
          if (j !== 0) {
            links.push(<StyledLinkSeparator />)
          }

          const linkEntry = dataSet.linkColumns[i].links[j]
          links.push(
            <StyledLink to={linkEntry.link}>{linkEntry.text}</StyledLink>
          )
        }
      }

      if (i !== 0) {
        columns.push(<StyledLinkColumnSeparator />)
      }

      columns.push(<StyledLinkColumn>{links}</StyledLinkColumn>)
    }
  }

  return (
    <StyledFooter>
      <StyledLinkBox>{columns}</StyledLinkBox>
      <StyledSeparator />
      <JournalLink />
    </StyledFooter>
  )
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      dataYaml(dataKey: { eq: "footer" }) {
        linkColumns {
          links {
            text
            link
          }
        }
      }
    }
  `)

  return <FooterTemplate data={data} />
}

export default Footer
