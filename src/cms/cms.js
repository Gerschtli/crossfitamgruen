import CMS from 'netlify-cms-app'

import { default as wrapper } from '../util/withStyledComponentsRendered'
import ContactPage from '../templates/contact'
import ContactSuccessPage from '../templates/contactSuccess'
import DisclosurePage from '../templates/disclosure'
import ImprintPage from '../templates/imprint'
import IndexPage from '../templates/index'

CMS.registerPreviewTemplate('contact', wrapper(ContactPage))
CMS.registerPreviewTemplate('contactSuccess', wrapper(ContactSuccessPage))
CMS.registerPreviewTemplate('disclosure', wrapper(DisclosurePage))
CMS.registerPreviewTemplate('imprint', wrapper(ImprintPage))
CMS.registerPreviewTemplate('index', wrapper(IndexPage))
