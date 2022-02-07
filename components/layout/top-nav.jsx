import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IconMark } from '../svg/iconmark'

import {
  topNav,
  left,
  right,
  navLink,
  logoWrap,
} from '../../styles/layout/top-nav.module.scss'

export const TopNav = () => {
  const router = useRouter()

  return (
    <nav className={topNav}>
      <Link href='/'>
        <a className={`${navLink}`}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={`${navLink}`}>About</a>
      </Link>
      <Link href='#'>
        <a className={`${navLink}`}>Packages</a>
      </Link>
      <Link href='#'>
        <a className={`${navLink}`}>Contact</a>
      </Link>
      <Link href='#'>
        <a className={logoWrap}>
          <IconMark />
        </a>
      </Link>
      <Link href='/wedding'>
        <a className={`${navLink}`}>Wedding</a>
      </Link>
      <Link
        href={{
          pathname: `/event`,
          query: { photoSetParam: 1 },
        }}
        as={`/event`}
      >
        <a className={`${navLink}`}>Engagement</a>
      </Link>
      <Link
        href={{
          pathname: `/event`,
          query: { photoSetParam: 0 },
        }}
        as={`/event`}
      >
        <a className={`${navLink}`}>Mitzvah</a>
      </Link>
      <Link href='/studio'>
        <a className={`${navLink}`}>Studio</a>
      </Link>
    </nav>
  )
}
