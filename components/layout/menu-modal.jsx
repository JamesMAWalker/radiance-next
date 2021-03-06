import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { IconMark } from '../svg/iconmark'

import { mainMenuLinks } from '../../lib/ancillary-data'

import { slideDown } from '../../animations/slide'
import { fadeUp } from '../../animations/fade'
import {
  phases,
  punch,
  smooth,
} from '../../animations/transitions'

import {
  modal,
  logoBtn,
  closeBtn,
  linksContainer,
  divider,
  primary,
  secondary,
  menuFooter,
} from '../../styles/layout/menu-modal.module.scss'

export const MenuModal = ({
  showModal,
  setShowMenuModal,
}) => {
  // esc key closes modal
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowMenuModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [showModal, setShowMenuModal])

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          key='menu-modal'
          className={modal}
          variants={slideDown}
          {...phases}
          transition={punch(0.8)}
        >
          <Link href={'/'}>
            <a
              className={logoBtn}
              onClick={() => setShowMenuModal(false)}
            >
              <IconMark />
            </a>
          </Link>
          <div
            className={closeBtn}
            onClick={() => setShowMenuModal(false)}
          >
            &times;
          </div>
          <motion.section
            key='modal-content'
            className={linksContainer}
            variants={fadeUp}
            {...phases}
            transition={smooth(1.5, 0.8)}
            onClick={() => {
              setTimeout(() => {
                setShowMenuModal(false)
              }, 300)
            }}
          >
            <ul className={primary}>
              {mainMenuLinks.primary.map((lnk) => {
                return (
                  <Fragment key={lnk.name}>
                    <Link href={lnk.slug}>
                      <a>{lnk.name}</a>
                    </Link>
                  </Fragment>
                )
              })}
            </ul>
            <span className={divider} />
            <ul className={secondary}>
              {mainMenuLinks.secondary.map((lnk) => {
                return (
                  <Fragment key={lnk.name}>
                    <Link href={lnk.slug}>
                      <a>{lnk.name}</a>
                    </Link>
                  </Fragment>
                )
              })}
            </ul>
          </motion.section>
          <div className={menuFooter}>
            <a
              href={process.env.GOOGLE_MAPS_URL}
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              1643 Westwood Boulevard
            </a>
            <a href='mailto:info@radiancephotographystudio.com'>
              info@radiancephotographystudio.com
            </a>
            <a href={`tel://+13102688222`}>
              310 . 268 . 8222
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
