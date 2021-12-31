import React from 'react'

import { TopNav } from '../components/top-nav'

import '../styles/globals.scss'
import { layout } from '../styles/layout/layout.module.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={layout}>
      <TopNav />
      <Component {...pageProps} />
    </div>
  )
}
