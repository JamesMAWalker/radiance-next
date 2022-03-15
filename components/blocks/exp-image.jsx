import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'

import { FSPhotoContext } from '../../contexts/fsphoto-context'
import { baseUrlPng } from '../../utils/baseUrl'

import { fadeIn } from '../../animations/fade'
import { smooth } from '../../animations/transitions'
import {
  expWrap,
  loadingShade,
  invalidMsg,
  expImage,
  expBtn,
} from '../../styles/blocks/exp-image.module.scss'
import { BrokenImageIcon } from '../svg/broken-img'
import { urlBuilder } from '../../lib/cloudinary'




export const ExpandableImage = ({
  urlFrag,
  altTag,
  loadBehavior = 'lazy',
}) => {
  
  const { setPhotoModalOpen, setCurrentImgUrl, setAltTag } =
    useContext(FSPhotoContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const [invalidSrc, setInvalidSrc] = useState(false)

  const handlePhotoSelect = () => {
    setCurrentImgUrl(urlFrag)
    setAltTag(altTag)
    setTimeout(() => {
      setPhotoModalOpen(true)
    }, 250)
  }



  return (
    <motion.div
      className={expWrap}
      variants={fadeIn}
      transition={smooth(.8)}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {!isLoaded && <div className='loading-shade' />}
      {invalidSrc && (
        <div className={invalidMsg}>
          <span>
            <BrokenImageIcon />
          </span>
          <p>{altTag}</p>
        </div>
      )}
      <Image
        className={`${expImage}`}
        src={urlBuilder(urlFrag)}
        alt={altTag}
        layout='fill'
        onClick={handlePhotoSelect}
        onLoadingComplete={() => setIsLoaded(true)}
        loading='eager'
      />
      {/* <motion.img
        className={expImage}
        // src={baseUrlPng(urlFrag, 'eco')}
        src={url}
        onClick={handlePhotoSelect}
        alt={altTag}
        loading={loadBehavior}
        onLoad={() => setIsLoaded(true)}
      /> */}
      {isLoaded && !invalidSrc && (
        <p className={`${expBtn} text-btn`}>Expand ↗</p>
      )}
    </motion.div>
  )
}
