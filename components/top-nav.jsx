import Link from 'next/link'
import React from 'react'

import { topNav, navLink } from '../styles/layout/top-nav.module.scss'

export const TopNav = () => {
  return (
    <nav className={topNav}>
      <Link href="#" className={navLink}><a>Home</a></Link>
      <Link href="#" className={navLink}><a>About</a></Link>
      <Link href="#" className={navLink}><a>Packages</a></Link>
      <Link href="#" className={navLink}><a>Contact</a></Link>
      <Link href="#" className={navLink}>
        <a>
          LOGO
        </a>
      </Link>
      <Link href="#" className={navLink}><a>Wedding</a></Link>
      <Link href="#" className={navLink}><a>Engagement</a></Link>
      <Link href="#" className={navLink}><a>Mitzvah</a></Link>
      <Link href="#" className={navLink}><a>Headshots</a></Link>
    </nav>
  )
}
