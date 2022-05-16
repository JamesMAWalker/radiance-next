import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { mainMenuLinks } from '../../lib/ancillary-data'

import { slideDown } from '../../animations/slide'
import { phases, punch, smooth } from '../../animations/transitions'

import {
  modal,
  closeBtn,
  linksContainer,
  divider,
  primary,
  secondary,
  menuFooter,
} from '../../styles/layout/menu-modal.module.scss'
import { fadeIn, fadeUp } from '../../animations/fade'

export const MenuModal = ({
  showModal,
  setShowMenuModal,
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowMenuModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [showModal])

  return (
    <motion.div
      key='menu-modal'
      className={modal}
      variants={slideDown}
      {...phases}
      transition={punch(0.8)}
      // onClick={() => setShowMenuModal(false)}
    >
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
        transition={smooth(1.5, .8)}
        onClick={() => {
          setTimeout(() => {
            setShowMenuModal(false)
          }, 300);
        }}
      >
        <ul className={primary}>
          {mainMenuLinks.primary.map((lnk) => {
            return (
              <Link href={lnk.slug}>
                <a key={lnk.name}>{lnk.name}</a>
              </Link>
            )
          })}
        </ul>
        <span className={divider} />
        <ul className={secondary}>
          {mainMenuLinks.secondary.map((lnk) => {
            return (
              <Link href={lnk.slug}>
                <a key={lnk.name}>{lnk.name}</a>
              </Link>
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
        <a
          href='mailto:info@radiancephotographystudio.com'
        >
          info@radiancephotographystudio.com
        </a>
        <a
          href={`tel://+13102688222`}
        >
          310 . 268 . 8222
        </a>
      </div>
    </motion.div>
  )
}
