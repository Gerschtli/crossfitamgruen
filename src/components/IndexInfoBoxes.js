import React from 'react'
import styled from 'styled-components'

import Image from '../components/Image'
import { BREAKPOINTS } from '../util/breakpoints'
import { COLORS } from '../util/colors'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${BREAKPOINTS.md};
`
const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  box-shadow: 1px 2px 4px 1px ${COLORS.shadow.light};
  padding: .75em;

  @media (min-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
  }
`
const StyledImage = styled(Image)`
  margin-bottom: .5em;

  @media (min-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 0;
    margin-right: 1em;
    flex: 0 0 100px;
  }
`
const Text = styled.p`
  font-size: .9em;
  line-height: 1.4;
`

const InfoBox = ({ text, image }) => (
  <Item>
    <StyledImage image={image} previewStyle={{ width: 100 }} />
    <Text>{text}</Text>
  </Item>
)

const IndexInfoBoxes = ({ items }) => (
  <Wrapper>
    {items.map((item, key) => <InfoBox key={key} text={item.text} image={item.image} />)}
  </Wrapper>
)

export default IndexInfoBoxes
