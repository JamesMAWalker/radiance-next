import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import { IconMark } from '../svg/iconmark'

import {
  navigation,
  left,
  right,
  navLink,
  logoWrap,
  mobileBtn
} from '../../styles/layout/nav.module.scss'
import { MobileMenu } from './mobile-menu'
import { AnimatePresence } from 'framer-motion'

const pageLinks = [
  {
    path: '/',
    text: 'Home' 
  },
  {
    path: '/about',
    text: 'About' 
  },
  {
    path: '/',
    text: 'Packages' 
  },
  {
    path: '/',
    text: 'Contact' 
  },
  {
    path: '/',
    text: 'Wedding' 
  },
  {
    path: '/events/engagement',
    text: 'Engagement'
  },
  {
    path: '/events/mitzvah',
    text: 'Mitzvah' 
  },
  {
    path: '/studio',
    text: 'Studio' 
  },
]

export const Navigation = ({ isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  // stop scrolling if menu open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className={navigation}>
      {!isMobile ? (
        <>
          {pageLinks.slice(0, 4).map((lnk) => {
            return (
              <Fragment key={lnk.text}>
                <Link href={`${lnk.path}`}>
                  <a className={`${navLink}`}>{lnk.text}</a>
                </Link>
              </Fragment>
            )
          })}
          <Link href='#'>
            <a className={logoWrap}>
              <IconMark />
            </a>
          </Link>
          {pageLinks.slice(4, 8).map((lnk, idx) => {
            return (
              <Fragment key={lnk.name}>
                <Link href={`${lnk.path}`}>
                  <a className={`${navLink}`}>{lnk.text}</a>
                </Link>
              </Fragment>
            )
          })}
        </>
      ) : (
        <>
          <div
            className={mobileBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <span>Close</span>
            ) : (
              <span>Menu</span>
            )}
          </div>
          <AnimatePresence>
            {menuOpen && (
              <MobileMenu pageLinks={pageLinks} />
            )}
          </AnimatePresence>
        </>
      )}
    </nav>
  )
}
