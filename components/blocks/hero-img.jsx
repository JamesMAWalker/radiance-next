import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { baseUrlPng } from '../../utils/baseUrl'

import { fadeIn } from '../../animations/fade'
import { zoomOut } from '../../animations/zoom'
import { smooth } from '../../animations/transitions'

import { heroImg } from '../../styles/blocks/hero-img.module.scss'

export const HeroImg = ({
  imageUrlFrag,
  quality = 'good',
  altText,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={heroImg}
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={smooth(3)}
    >
      <motion.img
        src={baseUrlPng(imageUrlFrag, quality)}
        alt={altText}
        variants={zoomOut}
        initial='hidden'
        animate='visible'
        exit='hidden'
        onLoad={() => setIsLoaded(true)}
        transition={smooth(3)}
      />
    </motion.div>
  )
}
