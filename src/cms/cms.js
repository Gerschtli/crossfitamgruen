import CMS from 'netlify-cms-app'
import React from 'react'

import { default as wrapper } from '../util/withStyledComponentsRendered'
import ContactSuccessTemplate from '../templates/contactSuccess'
import ContactTemplate from '../templates/contact'
import DisclosureTemplate from '../templates/disclosure'
import ImprintTemplate from '../templates/imprint'
import IndexTemplate from '../templates/index'
import NotFoundTemplate from '../templates/notFound'
import ScheduleTemplate from '../templates/schedule'
import ContactForm from '../components/editorComponents/ContactForm'
import { HeaderTemplate } from '../components/base/Header'
import { wrapDataComponent } from '../components/util/wrapDataComponent'

CMS.registerEditorComponent({
  id: 'contactForm',
  label: 'Contact form',
  pattern: /^<contact-form \/>$/,
  fromBlock: () => {},
  toBlock: () => '<contact-form />',
  toPreview: () => <ContactForm />,
})

CMS.registerPreviewTemplate(
  'header',
  wrapper(wrapDataComponent(HeaderTemplate))
)

CMS.registerPreviewTemplate('contact', wrapper(ContactTemplate))
CMS.registerPreviewTemplate('contactSuccess', wrapper(ContactSuccessTemplate))
CMS.registerPreviewTemplate('disclosure', wrapper(DisclosureTemplate))
CMS.registerPreviewTemplate('imprint', wrapper(ImprintTemplate))
CMS.registerPreviewTemplate('index', wrapper(IndexTemplate))
CMS.registerPreviewTemplate('notFound', wrapper(NotFoundTemplate))
CMS.registerPreviewTemplate('schedule', wrapper(ScheduleTemplate))
