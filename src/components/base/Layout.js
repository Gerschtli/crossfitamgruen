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

const Layout = ({ children, title, description, isPreview }) => {
  const titleFull = `${title} // CrossFit am Grün`

  const helmet = (
    <Helmet>
      <html lang="de" />
      <title>{titleFull}</title>
      <meta name="description" content={description} />
      <meta name="ROBOTS" content="NOINDEX,NOFOLLOW" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#18c47c"
      />
      <meta name="apple-mobile-web-app-title" content="CrossFit am Gr&uuml;n" />
      <meta name="application-name" content="CrossFit am Gr&uuml;n" />
      <meta name="msapplication-TileColor" content="#18c47c" />
      <meta name="theme-color" content="#18c47c" />
    </Helmet>
  )

  return (
    <>
      <Normalize />
      <GlobalStyle />
      {isPreview ? <></> : helmet}
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
