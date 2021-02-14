import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../../util/colors'
import JournalLink from './JournalLink'
import { breakpoints, mediaQuery } from '../../util/breakpoints'

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

const Footer = () => (
  <StyledFooter>
    <StyledLinkBox>
      <StyledLinkColumn>
        <StyledLink to={'/datenschutz/'}>Datenschutz</StyledLink>
        <StyledLinkSeparator />
        <StyledLink to={'/impressum/'}>Impressum</StyledLink>
      </StyledLinkColumn>
      <StyledLinkColumnSeparator />
      <StyledLinkColumn>
        <StyledLink to={'/kontakt/'}>Kontakt</StyledLink>
        <StyledLinkSeparator />
        <StyledLink to={'/stundenplan/'}>Stundenplan</StyledLink>
      </StyledLinkColumn>
    </StyledLinkBox>
    <StyledSeparator />
    <JournalLink />
  </StyledFooter>
)

export default Footer
