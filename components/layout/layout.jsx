import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { PhotoModal } from '../blocks/photo-modal'
import { ContactModal } from './contact-modal'
import { MenuModal } from '../layout/menu-modal'
import { Footer } from './footer'
import { TopNav } from './nav'

import { fadeIn, fadeRight } from '../../animations/fade'
import {
  phases,
  smooth,
} from '../../animations/transitions'

import {
  layout,
  columnNav,
  scrollProgress as scrollProgressStyle,
  track,
  thumb,
  social,
  logoBtn,
  contactBtn,
} from '../../styles/layout/layout.module.scss'
import { IconMark } from '../svg/iconmark'

export const Layout = ({ children, aniKey, isMobile }) => {
  const { push } = useRouter()

  // scroll progress functionality
  const [scrollProgress, setScrollProgress] = useState(0)
  const [realHeight, setRealHeight] = useState(0)
  const [showColumnNav, setShowColumnNav] = useState(false)
  const [showMenuModal, setShowMenuModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRealHeight(window.document.body.offsetHeight)
    }, 500)
  })

  useEffect(() => {
    // * only set scrollProgress on desktop
    if (window.innerWidth <= 1024) return

    const maxScroll = realHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      setScrollProgress((currentScroll / maxScroll) * 100)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollProgress(0)
      })
    }
  }, [realHeight])

  return (
    <motion.div
      className={layout}
      variants={fadeIn}
      {...phases}
      key={aniKey}
    >
      <TopNav
        isMobile={isMobile}
        setShowColumnNav={setShowColumnNav}
        setShowMenuModal={setShowMenuModal}
        showMenuModal={showMenuModal}
      />
      <AnimatePresence>
        {showMenuModal && !isMobile && (
          <MenuModal
            showModal={showMenuModal}
            setShowMenuModal={setShowMenuModal}
          />
        )}
      </AnimatePresence>
      {children}
      <ContactModal />
      <PhotoModal />
      <Footer setShowColumnNav={setShowColumnNav} />
      {showColumnNav && (
        <motion.div
          className={columnNav}
          variants={fadeRight}
          {...phases}
          transition={smooth(1)}
        >
          <div className={scrollProgressStyle}>
            <span
              className={thumb}
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          <div className={social}>
            <a href='https://www.instagram.com/radiancephotostudio/'>
              IG
            </a>
            <a href='https://www.facebook.com/RadiancePhotographyStudio'>
              FB
            </a>
          </div>
          <div
            className={logoBtn}
            onClick={() => push('/')}
          >
            <IconMark />
          </div>
          <div className={contactBtn}>contact</div>
        </motion.div>
      )}
    </motion.div>
  )
}
