import { Slide } from 'react-slideshow-image'
import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'

import { COLORS } from '../util/colors'

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-size: cover;
  background-position: center;
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

  &:hover {
    background-color: ${COLORS.primary.dark};
  }
`

const CarouselItem = ({ image, text }) => {
  return (
    <Outer style={{ backgroundImage: `url(${image})` }}>
      <Inner>
        <Text>{text}</Text>
        <Button>Kontakt</Button>
      </Inner>
    </Outer>
  )
}

const arrowWrapperCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 60px;
  width: 60px;
  color: ${COLORS.light};
  font-size: 4em;
`

const PrevArrow = ({ slideRef }) => {
  const Wrapper = styled.span`
    ${arrowWrapperCommon}
    margin-right: -60px;
  `

  const action = () => {
    slideRef.current.goBack()
  }

  return (
    <Wrapper onClick={action}>
      <MdKeyboardArrowLeft />
    </Wrapper>
  )
}

const NextArrow = ({ slideRef }) => {
  const Wrapper = styled.span`
    ${arrowWrapperCommon}
    margin-left: -60px;
  `

  const action = () => {
    slideRef.current.goNext()
  }

  return (
    <Wrapper onClick={action}>
      <MdKeyboardArrowRight />
    </Wrapper>
  )
}

const IndexSlider = ({ items }) => {
  const slideRef = useRef()

  return (
    <Slide
      ref={slideRef}
      easing="ease"
      autoplay={false}
      prevArrow={<PrevArrow slideRef={slideRef} />}
      nextArrow={<NextArrow slideRef={slideRef} />}
    >
      {items.map(item => <CarouselItem image={item.image} text={item.text} />)}
    </Slide>
  )
}

export default IndexSlider
