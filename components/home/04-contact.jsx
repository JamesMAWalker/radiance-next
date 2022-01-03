import React from 'react'
import { Blurb } from '../blocks/blurb'

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
  return (
    <div>
      <Blurb
        blurbTitle={contactBlurb.title}
        blurbText={contactBlurb.text}
        blurbBtn={contactBlurb.button}
        withBorder
      />
    </div>
  )
}
