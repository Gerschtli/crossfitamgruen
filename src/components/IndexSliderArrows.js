import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'
import React from 'react'

import { colors } from '../util/colors'

const arrowCommon = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 60px;
  width: 60px;
  color: ${colors.light};
  font-size: 60px;
  cursor: pointer;

  &:hover {
    color: ${colors.grey.light};
  }
`
const StyledNextArrow = styled.span`
  ${arrowCommon}

  right: 0;
`
const StyledPrevArrow = styled.span`
  ${arrowCommon}

  left: 0;
`

export const PrevArrow = ({ onClick }) => (
  <StyledPrevArrow onClick={onClick}>
    <MdKeyboardArrowLeft />
  </StyledPrevArrow>
)

export const NextArrow = ({ onClick }) => (
  <StyledNextArrow onClick={onClick}>
    <MdKeyboardArrowRight />
  </StyledNextArrow>
)
