import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

const BackgroundImage = ({ className, image, children }) => {
  if (image?.childImageSharp?.gatsbyImageData) {
    return (
      <BgImage className={className} image={getImage(image)}>
        {children}
      </BgImage>
    )
  }

  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      {children}
    </div>
  )
}

export default BackgroundImage
