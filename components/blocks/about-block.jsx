import React from 'react'
import Image from 'next/image'

import { urlBuilder } from '../../lib/cloudinary';

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


export const AboutBlock = ({ member, reverse }) => {
  return (
    <div
      className={`${block} ${
        reverse ? reversedBlock : null
      }`}
    >
      <div className={imageContainer}>
        <Image
          src={urlBuilder(member.imgUrlFrag)}
          layout='fill'
          alt={`Radiance team member ${member.name.first} ${member.name.last}`}
          placeholder='blur'
          blurDataURL={process.env.NEXT_BLUR_URL}
        />
      </div>
      <div className={descContainer}>
        <h3 className={memberName}>
          <span className={red}>{member.name.first}</span>
          <span className={blk}>{member.name.last}</span>
        </h3>
        <h5 className={role}>{member.role}</h5>
        {/* {member.name.first === 'Peyman' && (
          <>
            <p className={about}>{member.about}</p>
            <button className={aboutBtn}>
              {member.button}
            </button>
          </>
        )} */}
      </div>
    </div>
  )
}
