import React from 'react'
import { Helmet } from 'react-helmet'

const TemplateWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>
      {children}
    </>
  )
}

export default TemplateWrapper
