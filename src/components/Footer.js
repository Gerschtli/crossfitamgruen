import React from 'react'
import styled from 'styled-components'

import { colors } from '../util/colors'
import JournalLink from './JournalLink'
import { breakpoints, mediaQuery } from '../util/breakpoints'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  background-color: ${colors.dark};

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`

const Footer = () => (
  <StyledFooter>
    <JournalLink />
  </StyledFooter>
)

export default Footer
