import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../../util/colors'
import BackgroundImage from '../util/BackgroundImage'
import { breakpoints, mediaQuery } from '../../util/breakpoints'
import applyButtonStyles from '../util/applyButtonStyles'

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
const StyledLink = applyButtonStyles(Link)
const SliderItem = ({ className, image, text }) => {
  let options = {
    className,
    image,
  }

  return (
    <BackgroundImage {...options}>
      <StyledInner>
        <StyledText>{text}</StyledText>
        <StyledLink to={'/kontakt/'}>Kontakt</StyledLink>
      </StyledInner>
    </BackgroundImage>
  )
}

export default SliderItem
