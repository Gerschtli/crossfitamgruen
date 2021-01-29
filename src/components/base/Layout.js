import React from 'react'
import { Helmet } from 'react-helmet'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Didact Gothic", sans-serif;
  }
`

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="ROBOTS" content="NOINDEX,NOFOLLOW" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="apple-mobile-web-app-title"
          content="CrossFit am Gr&uuml;n"
        />
        <meta name="application-name" content="CrossFit am Gr&uuml;n" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout