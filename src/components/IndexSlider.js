import React from 'react'
import styled, { css } from 'styled-components'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import CarouselItem from './CarouselItem'
import { NextArrow, PrevArrow } from './IndexSliderArrows'

const sliderHeight = css`
  height: 75vh;
  max-height: 800px;
`

const StyledCarouselItem = styled(CarouselItem)`
  ${sliderHeight}

  display: flex;
  align-items: center;
  justify-content: center;
`

const IndexSliderComponent = ({ className, items }) => {
  return (
    <Slider
      className={className}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      lazyLoad={true}
    >
      {items.map((item, index) => (
        <StyledCarouselItem key={index} image={item.image} text={item.text} />
      ))}
    </Slider>
  )
}

const IndexSlider = styled(IndexSliderComponent)`
  ${sliderHeight}

  position: relative;
`

export default IndexSlider
