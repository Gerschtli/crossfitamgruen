import React from 'react'

const Content = ({ content, className, isPreview }) => {
  if (isPreview) {
    return <div className={className}>{content}</div>
  }

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default Content
