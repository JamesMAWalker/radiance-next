import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FocusTrap from 'focus-trap-react'

import { baseUrlPng } from '../../utils/baseUrl'
import { FSPhotoContext } from '../../contexts/fsphoto-context'

import { IconMark } from '../svg/iconmark'

import { fadeIn } from '../../animations/fade'

import {
  shade,
  modal,
  imgWrap,
  closeBtn,
  loading,
} from '../../styles/blocks/photo-modal.module.scss'

export const PhotoModal = () => {
  const {
    photoModalOpen,
    setPhotoModalOpen,
    currentImgUrl,
    altTag,
  } = useContext(FSPhotoContext)
  const [imgLoaded, setImgLoaded] = useState(false)

  const handleCloseModal = useCallback(() => {
    setPhotoModalOpen(false)
    setImgLoaded(false)
  }, [second])

  // stop scrolling when contact modal is open
  useEffect(() => {
    if (photoModalOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [photoModalOpen])

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal()
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [handleCloseModal])

  return (
    <AnimatePresence>
      {photoModalOpen && (
        <FocusTrap active={photoModalOpen}>
          <motion.div
            className={shade}
            variants={fadeIn}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 0.5 }}
          >
            <span className={closeBtn}>
              <button onClick={handleCloseModal}>
                &times;
              </button>
            </span>
            <div className={modal}>
              <div className={imgWrap}>
                {!imgLoaded && (
                  <div className={loading}>
                    <IconMark />
                  </div>
                )}
                <img
                  src={baseUrlPng(currentImgUrl, 'best')}
                  alt={altTag}
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    opacity: `${imgLoaded ? 1 : 0}`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  )
}
