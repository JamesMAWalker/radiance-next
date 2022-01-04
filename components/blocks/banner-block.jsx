import React from 'react'

import { bannerContainer, bannerImg, banner, product, price, disclaimer, flexWrapper } from '../../styles/blocks/banner-block.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/v1641282231/wedding/dev`

export const BannerBlock = ({ imgUrlFrag }) => {
  return (
    <div className={bannerContainer}>
      <div className={bannerImg}>
        <img
          src={`${BASE_IMG_URL}/${imgUrlFrag}`}
          alt='studio photography'
        />
      </div>
      <div className={banner}>
        <h2>
          <div className={flexWrapper}>
            <span className={product}>Head <br /> Shots</span>
            <span className={price}>$125</span>
            <span className={disclaimer}>
              For a <br /> Limited <br /> Time*
            </span>
          </div>
        </h2>
      </div>
    </div>
  )
}
