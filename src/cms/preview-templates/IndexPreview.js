import React from 'react'
import PropTypes from 'prop-types'
import { IndexTemplate } from '../../templates/index'

const IndexPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <IndexTemplate
      title={data.title}
      description={data.description}
      content={widgetFor('body')}
      isPreview={true}
    />
  )
}

IndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPreview
