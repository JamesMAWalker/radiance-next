import React from 'react'

import { WordMark } from '../svg/wordmark'
import { Blurb } from '../blocks/blurb'

import {
  hero,
  logoWrap,
} from '../../styles/home/01-hero.module.scss'
import { HeroImg } from '../blocks/hero-img'

const heroBlurb = {
  title: (
    <>
      Capture the <br />
      Moment
    </>
  ),
  text: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nullam et metus arcu.
    </>
  ),
  button: 'Learn More'
}

export const Hero = () => {
  return (
    <section className={hero}>
      <HeroImg
        imageUrlFrag={'hero_yegtig'}
        altText={'radiant wedding couple'}
      />
      <div className={logoWrap}>
        <WordMark />
      </div>
      <Blurb
        blurbTitle={heroBlurb.title}
        blurbText={heroBlurb.text}
        blurbBtn={heroBlurb.button}
        withBorder
      />
    </section>
  )
}
