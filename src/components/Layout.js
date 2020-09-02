import React from 'react'
import { Helmet } from 'react-helmet'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="de" />
      </Helmet>
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
