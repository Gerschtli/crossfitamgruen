import React from 'react'
import { Helmet } from 'react-helmet'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import { graphql, useStaticQuery } from 'gatsby'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Didact Gothic", sans-serif;
  }
`

const MetaData = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      dataYaml(dataKey: { eq: "settings" }) {
        appName
        titleSuffix
      }
    }
  `)

  const titleFull = `${title} ${data.dataYaml.titleSuffix}`

  return (
    <Helmet defer={false}>
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
      <meta name="apple-mobile-web-app-title" content={data.dataYaml.appName} />
      <meta name="application-name" content={data.dataYaml.appName} />
      <meta name="msapplication-TileColor" content="#18c47c" />
      <meta name="theme-color" content="#18c47c" />
    </Helmet>
  )
}

const Layout = ({ children, title, description, isPreview }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      {isPreview ? (
        children
      ) : (
        <>
          <MetaData title={title} description={description} />
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
