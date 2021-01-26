import React from 'react'

const JournalLink = () => {
  // see https://journal.crossfit.com/badges
  const title = 'CrossFit Journal: The Performance-Based Lifestyle Resource'
  const width = 125
  const height = 63

  return (
    <a
      href={'https://journal.crossfit.com'}
      target={'_blank'}
      rel={'noopener noreferrer'}
      title={title}
    >
      <img
        src={`https://de45qwmlmgefw.cloudfront.net/badges/white-${width}x${height}.png`}
        width={width}
        height={height}
        alt={title}
      />
    </a>
  )
}

export default JournalLink
