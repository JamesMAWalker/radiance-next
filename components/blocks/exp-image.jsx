import React, { useContext } from 'react'

import { FSPhotoContext } from '../../contexts/fsphoto-context'
import { baseUrlPng } from '../../utils/baseUrl'

import { fadeIn } from '../../animations/fade'
import { expWrap, expImage, expBtn } from '../../styles/blocks/exp-image.module.scss'

export const ExpandableImage = ({ urlFrag, altTag }) => {
  const { setPhotoModalOpen, setCurrentImgUrl, setAltTag } = useContext(FSPhotoContext)

  const handlePhotoSelect = () => {
    setCurrentImgUrl(urlFrag)
    setAltTag(altTag)
    setTimeout(() => {
      setPhotoModalOpen(true)
    }, 250);
  }

  return (
    <div className={expWrap}>
      <img
        className={expImage}
        src={baseUrlPng(urlFrag, 'eco')}
        onClick={handlePhotoSelect}
        alt={altTag}
        loading='eager'
        variants={fadeIn}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 0.8,
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
      />
      <p className={`${expBtn} text-btn`}>Expand ↗</p>
    </div>
  )
}
