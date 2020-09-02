import React from 'react'
import PropTypes from 'prop-types'

const HtmlContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

HtmlContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default HtmlContent
