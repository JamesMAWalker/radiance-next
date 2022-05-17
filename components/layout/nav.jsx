import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { IconMark } from '../svg/iconmark'
import { MobileMenu } from './mobile-menu'

import { pageLinks } from '../../lib/ancillary-data'

import {
  phases,
  smooth,
} from '../../animations/transitions'
import { fadeRight } from '../../animations/fade'

import {
  navigation,
  navLink,
  logoWrap,
  openMenuBtn,
  mobileBtn,
} from '../../styles/layout/nav.module.scss'

const MenuLinkSet = ({ lnk }) => {
  return (
    <Link href={lnk.path} key={lnk.name}>
      <motion.a
        className={`${navLink}`}
        variants={fadeRight}
        {...phases}
      >
        {lnk.text}
      </motion.a>
    </Link>
  )
}

export const TopNav = ({
  isMobile,
  setShowColumnNav,
  showModalMenu,
  setShowMenuModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { ref: navRef, inView: navInView } = useInView()

  // stop scrolling if menu open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  // set Column Nav visible when out of view
  useEffect(() => {
    if (!navInView) {
      setShowColumnNav(true)
    } else {
      setShowColumnNav(false)
    }
  }, [navInView, setShowColumnNav])

  // handle main menu
  const handleToggleMenuModal = () => {
    setShowMenuModal(!showModalMenu)
  }

  return (
    <nav className={navigation}>
      {!isMobile ? (
        <>
          <span
            className='vp-marker'
            style={{ position: 'absolute' }}
            ref={navRef}
          />
          {navInView ? (
            <AnimatePresence exitBeforeEnter>
              {pageLinks.slice(0, 4).map((lnk) => {
                return (
                  <Fragment key={lnk.name}>
                    <MenuLinkSet lnk={lnk} />
                  </Fragment>
                )
              })}
              <Link href='/'>
                <a className={logoWrap}>
                  <IconMark />
                </a>
              </Link>
              {pageLinks.slice(4, 8).map((lnk, idx) => {
                return (
                  <Fragment key={lnk.name}>
                    <MenuLinkSet lnk={lnk} />
                  </Fragment>
                )
              })}
            </AnimatePresence>
          ) : (
            <motion.div
              className={openMenuBtn}
              variants={fadeRight}
              {...phases}
              transition={smooth(1)}
              onClick={handleToggleMenuModal}
            />
          )}
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
              <MobileMenu
                pageLinks={pageLinks}
                closeMenu={() => setMenuOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </nav>
  )
}
