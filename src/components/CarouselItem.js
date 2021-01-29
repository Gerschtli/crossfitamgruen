import React from 'react'
import styled from 'styled-components'

import { colors } from '../util/colors'
import BackgroundImage from './BackgroundImage'

const StyledInner = styled.div`
  text-align: center;
`
const StyledText = styled.div`
  margin-bottom: 1em;
  color: ${colors.light};
  font-size: 1.8em;
  font-weight: bold;
  text-shadow: 0 0 0.3em ${colors.shadow.dark};
`
const StyledButton = styled.button`
  height: 2.5em;
  border: 0;
  border-radius: 2.5em;
  padding: 0.5em 1em;
  background-color: ${colors.accent.light};
  color: ${colors.light};
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent.dark};
  }
`
const CarouselItem = ({ key, className, image, text }) => {
  let options = {
    className,
    image,
  }

  if (key === 0) {
    options.loading = 'eager'
    options.fadeIn = false
  }

  return (
    <BackgroundImage {...options}>
      <StyledInner>
        <StyledText>{text}</StyledText>
        <StyledButton>Kontakt</StyledButton>
      </StyledInner>
    </BackgroundImage>
  )
}

export default CarouselItem
