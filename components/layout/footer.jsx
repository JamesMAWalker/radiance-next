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
        <a
          className={email}
          href='mailto:info@radiancephotographystudio.com'
        >
          info@radiancephotographystudio.com
        </a>
        <a
          className={address}
          href={process.env.GOOGLE_MAPS_URL}
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          1643 Westwood Boulevard
        </a>
        <a className={phone} href={`tel://+13102688222`}>
          310 . 268 . 8222
        </a>
      </div>
    </footer>
  )
}
