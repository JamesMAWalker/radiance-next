import Link from 'next/link'
import React from 'react'

import {
  footer,
  logoWrap,
  linksContainer,
  footerLink,
  businessInfo,
  email,
  address,
  phone
} from '../../styles/layout/footer.module.scss'
import { FullLogo } from '../svg/full-logo'
import { IconMark } from '../svg/iconmark'

const links = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'Contact',
    slug: '/#contact',
  },
  {
    name: 'Wedding',
    slug: '/wedding-albums',
  },
  {
    name: 'Event',
    slug: '/events',
  },
  {
    name: 'Studio',
    slug: '/studio',
  },
  {
    name: 'Instagram',
    slug: 'https://www.instagram.com/radiancephotostudio/',
  },
  {
    name: 'Facebook',
    slug: 'https://www.facebook.com/RadiancePhotographyStudio',
  },
]

export const Footer = () => {
  return (
    <footer className={footer}>
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
        <span className={email}>info@radiance.studio</span>
        <span className={address}>12345 Address place</span>
        <span className={phone}>223 . 445 . 9372</span>
      </div>
    </footer>
  )
}
