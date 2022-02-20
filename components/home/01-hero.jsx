import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { WordMark } from '../svg/wordmark'
import { Blurb } from '../blocks/blurb'

import { fadeUp } from '../../animations/fade';

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
  button: 'Learn More',
}



export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

    // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, []);

  // set modal form state
  const book = (params) => {
    
  }

  return (
    <section className={hero}>
      <HeroImg
        imageUrlFrag={'hero_yegtig'}
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
        withBorder
      />
    </section>
  )
}
