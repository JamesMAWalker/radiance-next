import React from 'react'
import { motion } from 'framer-motion'

import { fadeSlideUp } from '../../animations/fade'

import {
  mobileMenu,
  navLinks,
  navLink,
} from '../../styles/layout/mobile-menu.module.scss'

export const MobileMenu = ({ pageLinks }) => {
  return (
    <motion.div
      className={mobileMenu}
      variants={fadeSlideUp}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{
        duration: 1,
        type: 'tween',
        ease: [1, 0, 0.115, 0.995],
      }}
    >
      
      <ul className={navLinks}>
        {pageLinks.map((lnk) => {
          return (
            <li className={navLink} key={lnk.name}>
              <span>{lnk.text}</span>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
