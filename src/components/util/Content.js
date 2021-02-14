import React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

import { breakpoints, mediaQuery } from '../../util/breakpoints'
import ContactForm from '../editorComponents/ContactForm'

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

  // necessary for preview
  img {
    display: block;
    margin: 0 auto;
  }
`

export default Content
