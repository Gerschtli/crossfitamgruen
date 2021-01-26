import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { breakpoints } from "../util/breakpoints";

const StyledContent = styled.main`
  margin: 0 auto;
  max-width: ${breakpoints.md}em;
  padding: 1em;
`

const NotFoundPage = () => {
  const title = "Seite nicht gefunden";

  return (
    <Layout title={title} description={title}>
      <StyledContent>
        <h1>{title}</h1>
        <p>Entschuldigung, aber es scheint, als gäbe es diese Seite nicht...</p>
      </StyledContent>
    </Layout>
  )
}

export default NotFoundPage
