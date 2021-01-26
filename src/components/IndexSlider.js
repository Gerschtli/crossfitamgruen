import { Slide } from 'react-slideshow-image'
import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

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
  width: 100vw;
  background-size: cover;
  background-position: center;
`

const IndexSliderComponent = ({ className, items }) => {
  const slideRef = useRef()

  return (
    <Slide
      class={className}
      ref={slideRef}
      easing={'ease'}
      autoplay={false}
      prevArrow={<PrevArrow slideRef={slideRef} />}
      nextArrow={<NextArrow slideRef={slideRef} />}
    >
      {items.map((item, index) => (
        <StyledCarouselItem key={index} image={item.image} text={item.text} />
      ))}
    </Slide>
  )
}

const IndexSlider = styled(IndexSliderComponent)`
  ${sliderHeight}

  overflow: hidden;
`

export default IndexSlider
