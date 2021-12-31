import React from 'react'

import { WordMark } from '../wordmark'

import {
  hero,
  heroImg,
  logoWrap,
  blurb,
  title,
  text
} from '../../styles/home/01-hero.module.scss'

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroImg}>
        <img
          src='https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:best/v1640679131/wedding/Photo_Jan_21_4_07_44_PM_gtn6iz.jpg'
          alt='wedding couple'
        />
      </div>
      <div className={logoWrap}>
        <WordMark />
      </div>
      <div className={blurb}>
        <h4 className={title}>Capture the <br /> Moment</h4>
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum accumsan mollis lectus sed
          mollis. Sed consequat lorem quis est pellentesque,
          ut ornare velit lobortis. Suspendisse volutpat,
          metus placerat luctus condimentum, dui nibh tempus
          ligula, blandit pharetra augue lectus vel lacus.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam et metus arcu.
        </p>
        <button className="text-btn">
          Learn More
        </button>
      </div>
    </section>
  )
}
