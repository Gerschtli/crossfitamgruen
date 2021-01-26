import React from 'react'

const Content = ({ content, className, isPreview }) => {
  if (isPreview) {
    return <main className={className}>{content}</main>
  }

  return (
    <main className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Content
