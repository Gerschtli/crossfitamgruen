import { Slide } from 'react-slideshow-image'
import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'

import { COLORS } from '../util/colors'
import BackgroundImage from './BackgroundImage'

const sliderHeight = css`
  height: 80vh;
  max-height: 800px;
`

const Inner = styled.div`
  text-align: center;
`
const Text = styled.div`
  margin-bottom: 1em;
  color: ${COLORS.light};
  font-size: 1.8em;
  font-weight: bold;
  text-shadow: 0 0 0.3em ${COLORS.shadow};
`
const Button = styled.button`
  border: 1px solid ${COLORS.primary.dark};
  padding: 0.5em 1em;
  background-color: ${COLORS.primary.default};
  color: ${COLORS.light};
  font-size: 1.2em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary.dark};
  }
`

const CarouselItem = ({ className, image, text }) => {
  return (
    <BackgroundImage className={className} image={image}>
      <Inner>
        <Text>{text}</Text>
        <Button>Kontakt</Button>
      </Inner>
    </BackgroundImage>
  )
}
const StyledCarouselItem = styled(CarouselItem)`
  ${sliderHeight}

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-size: cover;
  background-position: center;
`

const arrowWrapperCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 60px;
  width: 60px;
  color: ${COLORS.light};
  font-size: 4em;
  cursor: pointer;
`
const NextArrowWrapper = styled.span`
  ${arrowWrapperCommon}
  margin-left: -60px;
`
const PrevArrowWrapper = styled.span`
  ${arrowWrapperCommon}
  margin-right: -60px;
`

const PrevArrow = ({ slideRef }) => {
  const action = () => {
    slideRef.current.goBack()
  }

  return (
    <PrevArrowWrapper onClick={action}>
      <MdKeyboardArrowLeft />
    </PrevArrowWrapper>
  )
}

const NextArrow = ({ slideRef }) => {
  const action = () => {
    slideRef.current.goNext()
  }

  return (
    <NextArrowWrapper onClick={action}>
      <MdKeyboardArrowRight />
    </NextArrowWrapper>
  )
}

const IndexSliderComponent = ({ className, items }) => {
  const slideRef = useRef()

  return (
    <Slide
      class={className}
      ref={slideRef}
      easing="ease"
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
