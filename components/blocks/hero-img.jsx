import React from 'react'

import { heroImg } from '../../styles/blocks/hero-img.module.scss'
export const HeroImg = ({ imageUrlFrag, altText }) => {
  return (
    <div className={heroImg}>
      <img
        src={`https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:best/v1640932197/wedding/dev/${imageUrlFrag}`}
        alt={altText}
      />
    </div>
  )
}
