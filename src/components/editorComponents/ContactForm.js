import React from 'react'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../util/breakpoints'
import { colors } from '../../util/colors'
import applyButtonStyles from '../util/applyButtonStyles'

const StyledForm = styled.form`
  margin: 1em auto;
  max-width: ${breakpoints.sm}em;
`
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.4em;
  font-size: 0.8em;
`
const sharedInputFieldStyles = css`
  width: 100%;
  border: 1px solid ${colors.grey.dark};
  padding: 0.5em;
  font-size: 0.9em;

  &:focus {
    outline: none;
    border-color: ${colors.accent.dark};
  }
`
const StyledInput = styled.input`
  ${sharedInputFieldStyles}
`
const StyledTextarea = styled.textarea`
  ${sharedInputFieldStyles}

  height: 10em;
  line-height: 1.4;
  resize: vertical;
`
const StyledSpacer = styled.div`
  height: 0.8em;
`
const StyledButton = styled(applyButtonStyles())`
  width: 100%;
`

const ContactForm = () => (
  <StyledForm
    name="contact"
    method="post"
    action="/kontakt/erfolgreich"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />

    <StyledLabel for="name">Dein Name</StyledLabel>
    <StyledInput id="name" type="text" name="name" required />

    <StyledSpacer />

    <StyledLabel for="email">Deine E-Mail-Adresse</StyledLabel>
    <StyledInput id="email" type="email" name="email" required />

    <StyledSpacer />

    <StyledLabel for="message">Deine Nachricht</StyledLabel>
    <StyledTextarea id="message" name="message" required />

    <StyledSpacer />

    <StyledButton type="submit">Kontakanfrage absenden!</StyledButton>
  </StyledForm>
)

export default ContactForm
