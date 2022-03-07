import React from 'react'

import { baseUrlPng } from '../../utils/baseUrl'

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
      <div className={bannerImg}>
        <img
          src={baseUrlPng(imgUrlFrag)}
          alt='studio photography'
        />
      </div>
      <span className={divider} />
      <div className={banner}>
        <h2>
          <div className={flexWrapper}>
            <span className={product}>
              Head
              <br />
              Shots
            </span>
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
