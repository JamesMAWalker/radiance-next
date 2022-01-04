import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { gridContainer, imgCell, loadMoreBlock } from '../../styles/blocks/portrait-grid.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641289269/wedding/dev`

export const PortraitGrid = ({ imageContents, loadMore }) => {
  const [numRows, setNumRows] = useState(4)
  
  const getNumRows = (numImages, isButton) => {
    const rowQuotient = Math.ceil(numImages / 2) || 4
    // add 1 row for loadMore button
    return rowQuotient + 1
  }

  // set number of rows whenever imageContents changes
  useEffect(() => {
    setNumRows(getNumRows(imageContents?.length, (loadMore && true)))
  }, [imageContents])

  return (
    <section
      className={gridContainer}
      style={{ gridTemplateRows: `repeat(${numRows}, 90vh)` }}
    >
      {imageContents.map((image) => {
        return (
          <div key={uuid()} className={imgCell}>
            <img src={`${BASE_IMG_URL}/${image}`} alt='studio-photography' />
          </div>
        )
      })}
      <div className={loadMoreBlock}>
        <button className="text-btn">+ Load More</button>
      </div>
    </section>
  )
}
