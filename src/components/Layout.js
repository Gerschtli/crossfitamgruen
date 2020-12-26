import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
      <Title>Nice title</Title>
      {children}
    </>
  )
}

export default Layout
