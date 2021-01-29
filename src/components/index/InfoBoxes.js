import React from 'react'
import styled from 'styled-components'

import Image from '../util/Image'
import { breakpoints, mediaQuery } from '../../util/breakpoints'
import { colors } from '../../util/colors'

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.md}em;
`
const StyledItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  box-shadow: 1px 2px 4px 1px ${colors.shadow.light};
  padding: 0.75em;

  ${mediaQuery(breakpoints.sm)} {
    flex-direction: row;
  }
`
const StyledImage = styled(Image)`
  margin-bottom: 0.5em;

  ${mediaQuery(breakpoints.sm)} {
    margin-bottom: 0;
    margin-right: 1em;
    flex: 0 0 100px;
  }
`
const StyledText = styled.p`
  font-size: 0.9em;
  line-height: 1.4;
`

const InfoBox = ({ text, image }) => (
  <StyledItem>
    <StyledImage image={image} previewStyle={{ width: 100 }} />
    <StyledText>{text}</StyledText>
  </StyledItem>
)

const InfoBoxes = ({ items }) => (
  <StyledWrapper>
    {items.map((item, key) => (
      <InfoBox key={key} text={item.text} image={item.image} />
    ))}
  </StyledWrapper>
)

export default InfoBoxes
