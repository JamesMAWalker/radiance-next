import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { baseUrlPng } from '../../utils/baseUrl'
import { fadeUp, fadeRight } from '../../animations/fade'
import { zoomOut, panRight } from '../../animations/zoom'
import { smooth } from '../../animations/transitions'

import {
  bannerContainer,
  bannerImg,
  banner,
  divider,
  product,
  price,
  disclaimer,
  flexWrapper,
} from '../../styles/blocks/banner-block.module.scss'


export const BannerBlock = ({ imgUrlFrag }) => {
  return (
    <div className={bannerContainer}>
      <motion.div
        className={bannerImg}
        variants={fadeRight}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={smooth()}
      >
        <motion.img
          src={baseUrlPng(imgUrlFrag)}
          alt='studio photography'
          variants={panRight}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={smooth()}
        />
      </motion.div>
      <span className={divider} />
      <motion.div
        className={banner}
        variants={fadeUp}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={smooth()}
      >
        <h2>
          <div className={flexWrapper}>
            <span className={product}>
              Head
              <br />
              Shots
            </span>
            <span className={price}>$99</span>
            <span className={disclaimer}>
              For a <br /> Limited <br /> Time*
            </span>
          </div>
        </h2>
      </motion.div>
    </div>
  )
}
