import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { gridContainer, imgCell, loadMoreBlock } from '../../styles/blocks/portrait-grid.module.scss'
import { baseUrlPng } from '../../utils/baseUrl'
import { ExpandableImage } from './exp-image'

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641289269/wedding/dev`

const fadeIn = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}


export const PortraitGrid = ({ imageContents, loadMore, altTag }) => {
  const [isMobile, setIsMobile] = useState(false)

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  

  return (
    <motion.section
      className={gridContainer}
      variants={fadeIn}
      transition={{ type: 'tween', ease: 'easeOut', duration: .8 }}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {imageContents.map((image, idx) => {
        return (
          <motion.div
            key={`${image}${idx}`}
            className={imgCell}
          > 
            <ExpandableImage 
              urlFrag={image}
              altTag={altTag}
              loadBehavior={idx < 8 ? 'eager' : 'lazy'}
            />
          </motion.div>
        )
      })}
      <div className={loadMoreBlock}>
        <button className='text-btn' onClick={loadMore}>
          + Load More
        </button>
      </div>
    </motion.section>
  )
}
