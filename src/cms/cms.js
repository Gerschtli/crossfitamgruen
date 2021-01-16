import CMS from 'netlify-cms-app'

import IndexPreview from './preview-templates/IndexPreview'
import withStyledComponentsRendered from '../util/withStyledComponentsRendered'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPreview))
