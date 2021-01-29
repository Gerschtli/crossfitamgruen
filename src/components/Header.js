import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../img/logo.svg'
import { breakpoints, mediaQuery } from '../util/breakpoints'
import { colors } from '../util/colors'

const logoSize = 80

const StyledNavigation = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0.75em 1em;
  box-shadow: 0 -0.5em 1em 0.1em ${colors.shadow.dark};

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`
const StyledLogoLink = styled(Link)`
  display: block;
  margin-right: 0.75em;
  height: ${logoSize}px;
  width: ${logoSize}px;

  ${mediaQuery(breakpoints.sm)} {
    margin-right: 1.5em;
  }
`
const StyledTitle = styled.div`
  color: ${colors.grey.dark};
  font-size: 1.4em;

  ${mediaQuery(breakpoints.sm)} {
    font-size: 1.8em;
  }
`
const StyledDesktopSuffix = styled.span`
  display: none;

  ${mediaQuery(breakpoints.sm)} {
    display: block;
    margin-top: 0.2em;
    font-size: 0.7em;
  }

  ${mediaQuery(breakpoints.md)} {
    display: inline;
    margin-top: 0;
    margin-left: 0.3em;
    font-size: 0.8em;

    &::before {
      margin-right: 0.3em;
      content: '–';
    }
  }
`

const Header = () => (
  <StyledNavigation>
    <StyledLogoLink to={'/'}>
      <img src={logo} height={logoSize} width={logoSize} alt={'Logo'} />
    </StyledLogoLink>
    <StyledTitle>
      <strong>CrossFit am Grün</strong>
      <StyledDesktopSuffix>CrossFit / Community / Coaching</StyledDesktopSuffix>
    </StyledTitle>
  </StyledNavigation>
)

export default Header
