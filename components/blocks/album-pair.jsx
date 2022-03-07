import React from 'react'

import { baseUrlPng } from '../../utils/baseUrl';

import {
  album,
  title,
  photoPair,
  photo,
} from '../../styles/blocks/album-pair.module.scss'
import Link from 'next/link';


export const AlbumPair = ({ coupleNames, imgUrlFrags, path }) => {
  return (
    <div className={album}>
      <h4 className={title}>{coupleNames}</h4>
      <Link href={`wedding-albums/${path}`}>
        <a className='text-btn'>View Album</a>
      </Link>
      <div className={photoPair}>
        <div className={photo}>
          <img
            src={baseUrlPng(imgUrlFrags[0])}
            alt={coupleNames}
          />
        </div>
        <div className={photo}>
          <img
            src={baseUrlPng(imgUrlFrags[1])}
            alt={coupleNames}
          />
        </div>
      </div>
    </div>
  )
}
