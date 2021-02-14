const isPreviewMode = (data) => {
  // data is not set in preview mode
  return !data
}

const getDataSet = (data, entry) => {
  return isPreviewMode(data)
    ? entry.getIn(['data']).toJS()
    : data.markdownRemark.frontmatter
}

export const normalizePageInput = (data, entry) => {
  return getDataSet(data, entry)
}

export const normalizePageInputWithBody = (data, entry, widgetFor) => {
  const dataSet = getDataSet(data, entry)

  const html = isPreviewMode(data)
    ? widgetFor('body')
    : data.markdownRemark.html

  return { dataSet, html }
}

export const normalizePageInputWithParsedBody = (data, entry, widgetFor) => {
  const dataSet = getDataSet(data, entry)

  const html = isPreviewMode(data)
    ? widgetFor('body')
    : data.markdownRemark.htmlAst

  return { dataSet, html }
}
