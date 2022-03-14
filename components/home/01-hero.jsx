import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { WordMark } from '../svg/wordmark'
import { Blurb } from '../blocks/blurb'

import { fadeUp } from '../../animations/fade'

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
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus. */}
      As a high-end photography studio, Radiance captures
      all the moments in life you don't want lost to time.
      Whether it&apos;s the day you say "I do", or just a day in the park,
      we're there to help you cherish your precious moments.
      <br />
      <br />
      Radiance is based in Los Angeles, but we'll happily
      accompany you if your event is outside the city.
    </>
  ),
  button: 'Learn More',
}

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  // set modal form state
  const book = (params) => {}

  return (
    <section className={hero}>
      <HeroImg
        imageUrlFrag={'index/hero_yegtig'}
        altText={'radiant wedding couple'}
      />
      <motion.div
        className={logoWrap}
        variants={fadeUp}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{ duration: 1.5 }}
      >
        <WordMark />
      </motion.div>
      <Blurb
        blurbTitle={heroBlurb.title}
        blurbText={heroBlurb.text}
        blurbBtn={heroBlurb.button}
        btnLink={'/about'}
        withBorder
      />
    </section>
  )
}
