import React from 'react'
import styled from 'styled-components'

import { colors } from '../util/colors'
import BackgroundImage from './BackgroundImage'
import { breakpoints, mediaQuery } from "../util/breakpoints";

const StyledInner = styled.div`
  text-align: center;
`
const StyledText = styled.div`
  margin-bottom: 1em;
  color: ${colors.light};
  font-size: 1.8em;
  font-weight: bold;
  text-shadow: 0 0 0.3em ${colors.shadow.dark};

  ${mediaQuery(breakpoints.sm)} {
    margin-bottom: 0.7em;
    font-size: 2.5em;
  }
`
const StyledButton = styled.button`
  height: 3em;
  border: 0;
  border-radius: 3em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: ${colors.accent.light};
  color: ${colors.light};
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  ${mediaQuery(breakpoints.sm)} {
    font-size: 1.2em;
  }

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
