import CMS from 'netlify-cms-app'

import withStyledComponentsRendered from '../util/withStyledComponentsRendered'
import IndexPage from '../templates'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPage))
