import React from 'react'
import styled, { css } from 'styled-components'

import { default as SlickSlider } from 'react-slick'
import 'slick-carousel/slick/slick.css'

import SliderItem from './SliderItem'
import { NextArrow, PrevArrow } from './SliderArrows'
import { graphql } from 'gatsby'

const sliderHeight = css`
  height: 75vh;
  max-height: 800px;
`

const StyledSliderItem = styled(SliderItem)`
  ${sliderHeight}

  display: flex;
  align-items: center;
  justify-content: center;
`

const SliderComponent = ({ className, items }) => {
  return (
    <SlickSlider
      className={className}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      lazyLoad={true}
    >
      {items.map((item, index) => (
        <StyledSliderItem key={index} image={item.image} text={item.text} />
      ))}
    </SlickSlider>
  )
}

const Slider = styled(SliderComponent)`
  ${sliderHeight}

  position: relative;
`

export default Slider

export const query = graphql`
  fragment SliderFragment on MarkdownRemarkFrontmatter {
    slider {
      text
      image {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
