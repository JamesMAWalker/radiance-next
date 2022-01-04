import React from 'react'

import { album, title, photoPair, photo } from '../../styles/blocks/album-pair.module.scss'



const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641194888/wedding/dev`


export const AlbumPair = ({ coupleNames, imgUrlFrags }) => {

  return (
    <div className={album}>
      <h4 className={title}>{coupleNames}</h4>
      <button className='text-btn'>View Album</button>
      <div className={photoPair}>
        <div className={photo}>
          <img
            src={`${BASE_IMG_URL}/${imgUrlFrags[0]}`}
            alt={coupleNames}
          />
        </div>
        <div className={photo}>
          <img
            src={`${BASE_IMG_URL}/${imgUrlFrags[1]}`}
            alt={coupleNames}
          />
        </div>
      </div>
    </div>
  )
}
