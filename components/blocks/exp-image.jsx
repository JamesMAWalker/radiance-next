import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { motion } from 'framer-motion'

import { FSPhotoContext } from '../../contexts/fsphoto-context'
import { baseUrlPng } from '../../utils/baseUrl'

import { fadeIn } from '../../animations/fade'
import {
  expWrap,
  loadingShade,
  expImage,
  expBtn,
} from '../../styles/blocks/exp-image.module.scss'

export const ExpandableImage = ({ urlFrag, altTag }) => {
  const { setPhotoModalOpen, setCurrentImgUrl, setAltTag } =
    useContext(FSPhotoContext)
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePhotoSelect = () => {
    setCurrentImgUrl(urlFrag)
    setAltTag(altTag)
    setTimeout(() => {
      setPhotoModalOpen(true) 
    }, 250)
  }

  useEffect(() => {
    console.log('isLoaded changed: ', isLoaded)
  }, [isLoaded])

  return (
    <motion.div
      className={expWrap}
      variants={fadeIn}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.8,
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {!isLoaded && <div className={loadingShade}></div>}
      <motion.img
        className={expImage}
        src={baseUrlPng(urlFrag, 'eco')}
        onClick={handlePhotoSelect}
        alt={altTag}
        loading='eager'
        onLoad={() => setIsLoaded(true)}
      />
      <p className={`${expBtn} text-btn`}>Expand ↗</p>
    </motion.div>
  )
}
