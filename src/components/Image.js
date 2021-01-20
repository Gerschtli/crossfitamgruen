import React from 'react'
import Img from 'gatsby-image'

const Image = ({ className, image, previewStyle }) => {
  if (image?.childImageSharp?.fixed) {
    return (
      <Img className={className} fixed={image.childImageSharp.fixed} />
    )
  }

  return (
    <img className={className} src={image} alt={''} style={previewStyle} />
  )
}

export default Image
