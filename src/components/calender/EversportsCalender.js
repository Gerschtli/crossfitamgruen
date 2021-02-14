import React from 'react'
import styled from 'styled-components'

import { colors } from '../../util/colors'
import { breakpoints, mediaQuery } from '../../util/breakpoints'

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 70em;
  padding: 1em;

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
`
const StyledIframe = styled.iframe`
  padding: 1em;
  box-shadow: 1px 2px 4px 1px ${colors.shadow.light};
`

const EversportsCalender = ({ id }) => {
  const widgetUrl = 'https://widget.eversports.com/w/' + id

  return (
    <StyledWrapper>
      <StyledIframe
        width="100%"
        height="1000px"
        src={widgetUrl}
        frameBorder="0"
      />
    </StyledWrapper>
  )
}

export default EversportsCalender
