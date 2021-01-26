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
  border: 1px solid ${colors.primary.dark};
  padding: 0.5em 1em;
  background-color: ${colors.primary.default};
  color: ${colors.light};
  font-size: 1.2em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary.dark};
  }
`
const CarouselItem = ({ className, image, text }) => (
  <BackgroundImage className={className} image={image}>
    <StyledInner>
      <StyledText>{text}</StyledText>
      <StyledButton>Kontakt</StyledButton>
    </StyledInner>
  </BackgroundImage>
)

export default CarouselItem
