import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>
      <Title>Nice title</Title>
      {children}
    </>
  )
}

export default Layout
