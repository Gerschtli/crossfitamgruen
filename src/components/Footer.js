import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../util/colors'
import JournalLink from './JournalLink'
import { breakpoints, mediaQuery } from '../util/breakpoints'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${colors.dark};

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`
const StyledLink = styled(Link)`
  color: ${colors.light};
  text-decoration: none;
  font-size: .8em;
`

const Footer = () => (
  <StyledFooter>
    <StyledLink to={'/datenschutz/'}>Datenschutz</StyledLink>
    <JournalLink />
  </StyledFooter>
)

export default Footer
