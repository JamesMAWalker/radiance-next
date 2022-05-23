import React, {
  useContext,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { LayoutContext } from '../../contexts/layout-context'

import { fadeIn, fadeUp } from '../../animations/fade'
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
}) => {
  
  const { setPhotoModalOpen, setCurrentImgUrl, setAltTag } =
    useContext(LayoutContext)
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
      variants={fadeUp}
      transition={smooth()}
      whileInView='visible'
      initial='hidden'
      exit='hidden'
    >
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
        placeholder='blur'
        onError={() => setInvalidSrc(true)}
        blurDataURL={process.env.NEXT_BLUR_URL}
      />
      {isLoaded && !invalidSrc && (
        <p className={`${expBtn} text-btn`}>Expand ↗</p>
      )}
    </motion.div>
  )
}
