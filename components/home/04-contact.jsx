import React, { useContext } from 'react'
import { Blurb } from '../blocks/blurb'

import { ContactContext } from '../../contexts/contact-context'

const contactBlurb = {
  title: 'Enquiry',
  text: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Suspendisse consequat lorem eget diam tincidunt,
      eu suscipit purus ultricies. Aenean pellentesque.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nullam et metus arcu.
    </>
  ),
  button: `Let's Begin`,
}

export const Contact = () => {
  const { setModalOpen } = useContext(ContactContext)

  return (
    <div>
      <Blurb
        blurbTitle={contactBlurb.title}
        blurbText={contactBlurb.text}
        blurbBtn={contactBlurb.button}
        withBorder
        btnAction={()=> setModalOpen(true)}
      />
    </div>
  )
}
