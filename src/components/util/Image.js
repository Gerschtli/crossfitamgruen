import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = ({ className, image, previewStyle }) => {
  if (image?.childImageSharp?.gatsbyImageData) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        className={className}
      />
    )
  }

  return <img className={className} src={image} alt={''} style={previewStyle} />
}

export default Image
