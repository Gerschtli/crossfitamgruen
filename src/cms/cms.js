import CMS from 'netlify-cms-app'

import withStyledComponentsRendered from '../util/withStyledComponentsRendered'
import DisclosurePage from '../templates/disclosure'
import IndexPage from '../templates/index'

CMS.registerPreviewTemplate(
  'disclosure',
  withStyledComponentsRendered(DisclosurePage)
)
CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPage))
