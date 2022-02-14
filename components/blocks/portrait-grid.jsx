import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { gridContainer, imgCell, loadMoreBlock } from '../../styles/blocks/portrait-grid.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641289269/wedding/dev`

const fadeIn = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}


export const PortraitGrid = ({ imageContents, loadMore, isMobile }) => {
  const [numRows, setNumRows] = useState(4)
  
  const getNumRows = (numImages) => {
    const rowQuotient = Math.ceil(numImages / 2) || 4
    // add 1 row for loadMore button
    return rowQuotient + 1
  }

  // set number of rows whenever imageContents changes
  useEffect(() => {
    setNumRows(getNumRows(imageContents?.length, (loadMore && true)))
  }, [imageContents, loadMore])

  return (
    <motion.section
      className={gridContainer}
      variants={fadeIn}
      transition={{ type: 'tween', ease: 'easeOut', duration: .8 }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      style={{
        gridTemplateRows: `repeat(${numRows}, ${isMobile ? '25vh' : '90vh'})`,
      }}
    >
      {imageContents.map((image, idx) => {
        return (
          <div key={`${image}${idx}`} className={imgCell}>
            <img
              src={`${BASE_IMG_URL}/${image}`}
              alt='studio-photography'
            />
          </div>
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
