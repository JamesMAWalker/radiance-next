import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FullLogo } from '../svg/full-logo'

import { fadeSlideUp } from '../../animations/fade'

import {
  mobileMenu,
  logoWrapper,
  navLinks,
  navLink,
  secondary,
  divider,
  contact
} from '../../styles/layout/mobile-menu.module.scss'

export const MobileMenu = ({ pageLinks, closeMenu }) => {
  const sortedPageLinks = pageLinks.sort((a, b) => a.mmOrder - b.mmOrder)
  console.log('sortedPageLinks: ', sortedPageLinks);

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
        {sortedPageLinks.slice(0, 5).map((lnk) => {
          return (
            <li className={navLink} key={lnk.name} onClick={closeMenu}>
              <Link href={lnk.path}>
                <a>{lnk.text}</a>
              </Link>
            </li>
          )
        })}
        <span className={divider}></span>
        {sortedPageLinks.slice(5, 8).map((lnk) => {
          return (
            <li
              className={`${navLink} ${secondary}`}
              key={lnk.name}
              onClick={closeMenu}
            >
              <Link href={lnk.path}>
                <a>{lnk.text}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className={logoWrapper}>
        <FullLogo />
      </div>
    </motion.div>
  )
}
