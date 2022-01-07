import React from 'react'

import {
  block,
  reversedBlock,
  imageContainer,
  descContainer,
  memberName,
  red,
  blk,
  role,
  about,
  aboutBtn,
} from '../../styles/blocks/about-block.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_65/v1641527536/wedding/dev`

export const AboutBlock = ({ member, reverse }) => {
  return (
    <div className={`${block} ${reverse ? reversedBlock : null }`}>
      <div className={imageContainer}>
        <img
          src={`${BASE_IMG_URL}/${member.imgUrlFrag}`}
          alt='radiance team member'
        />
      </div>
      <div className={descContainer}>
        <h3 className={memberName}>
          <span className={red}>{member.name.first}</span>
          <span className={blk}>{member.name.last}</span>
        </h3>
        <h5 className={role}>{member.role}</h5>
        <p className={about}>{member.about}</p>
        <button className={aboutBtn}>
          {member.button}
        </button>
      </div>
    </div>
  )
}
