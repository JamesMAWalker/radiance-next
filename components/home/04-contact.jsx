import React, { useContext } from 'react'
import { Blurb } from '../blocks/blurb'

import { ContactContext } from '../../contexts/contact-context'

const contactBlurb = {
  title: 'Inquiry',
  text: (
    <>
      If you're ready to move forward with your photoshoot,
      but you're not sure where to begin, get the
      conversation started by sending us a message with any
      questions you have.
      <br />
      <br />
      Click the button below to get started.
    </>
  ),
  button: `Let's Begin`,
}

export const Contact = () => {
  const { setModalOpen } = useContext(ContactContext)

  return (
    <div id="contact">
      <Blurb
        blurbTitle={contactBlurb.title}
        blurbText={contactBlurb.text}
        blurbBtn={contactBlurb.button}
        withBorder
        btnAction={() => setModalOpen(true)}
      />
    </div>
  )
}
