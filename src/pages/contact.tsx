import React from 'react'
import { withLayout } from 'src/layout/Layout'
import { ContactPageComponent } from 'src/pageComponent'

const ContactPage = () => {
  return (
    <ContactPageComponent/>
  )
}

export default withLayout(ContactPage)