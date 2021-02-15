import React from 'react'
import styled, { css } from 'styled-components'
import rehypeReact from 'rehype-react'

import { breakpoints, mediaQuery } from '../../util/breakpoints'
import ContactForm from '../editorComponents/ContactForm'
import { colors } from '../../util/colors'

const ContentComponent = ({
  content,
  className,
  isPreview,
  injectComponents,
}) => {
  if (isPreview) {
    return <main className={className}>{content}</main>
  }

  if (injectComponents) {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: { 'contact-form': ContactForm },
    }).Compiler

    return <main className={className}>{renderAst(content)}</main>
  }

  return (
    <main className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = styled(ContentComponent)`
  margin: 0 auto;
  max-width: ${breakpoints.md}em;
  padding: 1em;

  ${mediaQuery(breakpoints.sm)} {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.4;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul p,
  ol p,
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props) =>
    props.isPreview &&
    css`
      img {
        display: block;
        margin: 0 auto;
      }

      form[name='contact'] {
        position: relative;
        margin: 1em auto;
        max-width: ${breakpoints.sm}em;
        padding: 0.3em;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.3)
          );
          content: 'Contact form (for final design consult live page)';
          color: ${colors.light};
          font-weight: bold;
          font-size: 1em;
        }
      }
    `}
`

export default Content
