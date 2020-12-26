import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

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
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
