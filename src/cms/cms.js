import CMS from 'netlify-cms-app'

import { default as wrapper } from '../util/withStyledComponentsRendered'
import DisclosurePage from '../templates/disclosure'
import IndexPage from '../templates/index'

CMS.registerPreviewTemplate('disclosure', wrapper(DisclosurePage))
CMS.registerPreviewTemplate('index', wrapper(IndexPage))
