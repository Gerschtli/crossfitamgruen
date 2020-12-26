import React from 'react'
import styled, { css } from 'styled-components'
import logo from '../img/logo.svg'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -8px 16px 2px rgba(0, 0, 0, 0.4);
`

const commonElement = css`
  margin: 8px 16px;
`

const logoSize = 80

const Logo = styled.div`
  ${commonElement}
  height: ${logoSize}px;
  width: ${logoSize}px;
`

const Links = styled.div`
  ${commonElement}
`

const Header = () => {
  return (
    <Navigation>
      <Logo>
        <object
          data={logo}
          type={'image/svg+xml'}
          height={logoSize}
          width={logoSize}
          aria-label={'Logo'}
        />
      </Logo>
      <Links>links</Links>
    </Navigation>
  )
}

export default Header
