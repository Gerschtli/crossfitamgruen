import React from 'react'
import { Helmet } from 'react-helmet'
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

import Header from './Header'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="de" />
        <meta name="ROBOTS" content="NOINDEX,NOFOLLOW" />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
