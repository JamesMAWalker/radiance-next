import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import { footerLinks as links } from '../../lib/ancillary-data'

import { FullLogo } from '../svg/full-logo'

import {
  footer,
  logoWrap,
  linksContainer,
  footerLink,
  businessInfo,
  email,
  address,
  phone,
} from '../../styles/layout/footer.module.scss'

export const Footer = ({ setShowColumnNav }) => {
  return (
    <motion.footer
      className={footer}
      onViewportEnter={() => setShowColumnNav(false)}
      onViewportLeave={() => setShowColumnNav(true)}
    >
      <Link href='/'>
        <a className={logoWrap}>
          <FullLogo />
        </a>
      </Link>
      <nav className={linksContainer}>
        {links.map((lnk) => {
          return (
            <Link href={lnk.slug} key={lnk.name}>
              <a className={footerLink}>{lnk.name}</a>
            </Link>
          )
        })}
      </nav>
      <div className={businessInfo}>
        <a
          className={address}
          href={process.env.GOOGLE_MAPS_URL}
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          1643 Westwood Boulevard
        </a>
        <a
          className={email}
          href='mailto:info@radiancephotographystudio.com'
        >
          info@radiancephotographystudio.com
        </a>
        <a className={phone} href={`tel://+13102688222`}>
          310 . 268 . 8222
        </a>
      </div>
    </motion.footer>
  )
}
