import React from 'react'

import { blurb, bordered, title, text } from '../../styles/blocks/blurb.module.scss'

export const Blurb = ({ blurbTitle, blurbText, blurbBtn, withBorder }) => {
  return (
    <div className={`${blurb} ${withBorder ? bordered : null }`}>
      <h4 className={title}>
        {blurbTitle}
      </h4>
      <p className={text}>
        {blurbText}
      </p>
      <button className='text-btn'>{blurbBtn}</button>
    </div>
  )
}
