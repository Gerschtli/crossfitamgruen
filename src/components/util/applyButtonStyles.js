import styled from 'styled-components'

import { colors } from '../../util/colors'

const applyButtonStyles = (tagName) => {
  const styledElement = tagName ? styled(tagName) : styled.button

  return styledElement`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: fit-content;
    border: 0;
    border-radius: 3em;
    padding-left: 2em;
    padding-right: 2em;
    background-color: ${colors.accent.light};
    color: ${colors.light};
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${colors.accent.dark};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${colors.accent.light};
    }
  `
}

export default applyButtonStyles
