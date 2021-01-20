import React from 'react'
import { default as ReactBackgroundImage } from 'gatsby-background-image'

const BackgroundImage = ({ className, image, children }) => {
  if (image.childImageSharp && image.childImageSharp.fluid) {
    return (
      <ReactBackgroundImage className={className} fluid={image.childImageSharp.fluid}>
        {children}
      </ReactBackgroundImage>
    )
  }

  return (
    <div className={className} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  )
}

export default BackgroundImage
