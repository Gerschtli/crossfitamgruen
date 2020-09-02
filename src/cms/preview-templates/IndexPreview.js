import React from 'react'
import PropTypes from 'prop-types'
import { IndexTemplate } from '../../templates/index'

const IndexPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <IndexTemplate title={data.title} description={data.description} />
}

IndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPreview
