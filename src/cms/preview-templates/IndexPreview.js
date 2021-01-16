import React from 'react'
import PropTypes from 'prop-types'
import { IndexTemplate } from '../../templates/index'
import Layout from '../../components/Layout'

const IndexPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <Layout>
      <IndexTemplate
        title={data.title}
        description={data.description}
        slider={data.slider}
      />
    </Layout>
  )
}

IndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPreview
