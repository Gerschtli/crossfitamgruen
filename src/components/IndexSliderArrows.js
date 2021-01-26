import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'
import React from 'react'

import { colors } from '../util/colors'

const arrowCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 60px;
  width: 60px;
  color: ${colors.light};
  font-size: 60px;
  cursor: pointer;
`
const StyledNextArrow = styled.span`
  ${arrowCommon}

  margin-left: -60px;
`
const StyledPrevArrow = styled.span`
  ${arrowCommon}

  margin-right: -60px;
`

export const PrevArrow = ({ slideRef }) => {
  const action = () => {
    slideRef.current.goBack()
  }

  return (
    <StyledPrevArrow onClick={action}>
      <MdKeyboardArrowLeft />
    </StyledPrevArrow>
  )
}

export const NextArrow = ({ slideRef }) => {
  const action = () => {
    slideRef.current.goNext()
  }

  return (
    <StyledNextArrow onClick={action}>
      <MdKeyboardArrowRight />
    </StyledNextArrow>
  )
}
