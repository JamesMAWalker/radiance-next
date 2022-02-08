import React, { Fragment } from 'react'
import Link from 'next/link'

import { IconMark } from '../svg/iconmark'

import {
  topNav,
  left,
  right,
  navLink,
  logoWrap,
} from '../../styles/layout/top-nav.module.scss'

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
    path: '/event',
    text: 'Engagement'
  },
  {
    path: '/event',
    text: 'Mitzvah' 
  },
  {
    path: '/studio',
    text: 'Studio' 
  },
]

export const TopNav = () => {

  return (
    <nav className={topNav}>
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
        const hRef = ( idx === 1 || idx === 2 )
          ? {
            pathname: lnk.name,
            query: { photosetParam: `${idx - 1}` }
          }
          : lnk.name
        
        return (
          <Fragment key={lnk.name}>
            <Link href={`${lnk.path}`}>
              <a className={`${navLink}`}>{lnk.text}</a>
            </Link>
          </Fragment>
        )
      })}
    </nav>
  )
}
