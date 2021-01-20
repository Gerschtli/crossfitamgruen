import React from 'react'
import styled from 'styled-components'

import logo from '../img/logo.svg'
import { BREAKPOINTS } from '../util/breakpoints'
import { COLORS } from '../util/colors'

const Navigation = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  box-shadow: 0 -8px 16px 2px ${COLORS.shadow.dark};

  @media (min-width: 480px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const logoSize = 80

const Logo = styled.div`
  margin-right: 12px;
  height: ${logoSize}px;
  width: ${logoSize}px;

  @media (min-width: ${BREAKPOINTS.sm}) {
    margin-right: 24px;
  }
`

const Title = styled.div`
  font-size: 1.4em;

  @media (min-width: ${BREAKPOINTS.sm}) {
    font-size: 1.8em;
  }
`

const DesktopSuffix = styled.span`
  display: none;

  @media (min-width: ${BREAKPOINTS.sm}) {
    display: block;
    margin-top: 0.2em;
    font-size: 0.7em;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
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

const Header = () => {
  return (
    <Navigation>
      <Logo>
        <img src={logo} height={logoSize} width={logoSize} alt={'Logo'} />
      </Logo>
      <Title>
        <strong>CrossFit am Grün</strong>
        <DesktopSuffix>CrossFit / Community / Coaching</DesktopSuffix>
      </Title>
    </Navigation>
  )
}

export default Header
