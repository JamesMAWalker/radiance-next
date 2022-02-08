import React from 'react'
import { motion } from 'framer-motion'

import { baseUrlPng } from '../../utils/baseUrl';

import { fadeIn } from '../../animations/fade';
import { zoomOut } from '../../animations/zoom';

import { heroImg } from '../../styles/blocks/hero-img.module.scss'


export const HeroImg = ({ imageUrlFrag, altText }) => {
  return (
    <motion.div
      className={heroImg}
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{ duration: 1.5 }}
    >
      <motion.img
        src={baseUrlPng(imageUrlFrag)}
        alt={altText}
        variants={zoomOut}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={{
          duration: 3,
          type: 'tween',
          ease: [0.115, 0.905, 0.32, 1],
        }}
      />
    </motion.div>
  )
}
