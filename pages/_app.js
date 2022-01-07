import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Footer } from '../components/layout/footer'
import { TopNav } from '../components/layout/top-nav'

import '../styles/globals.scss'
import { layout } from '../styles/layout/layout.module.scss'

export default function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter()

  // check path and set theme color accordingly
  useEffect(() => {
    let themeColor = `var(--the-good-silver)`

    const weddingThemed = ['/wedding', '/wedding-album']
    const studioThemed = ['/studio', '/event']

    if (weddingThemed.includes(asPath)) {
      themeColor = `var(--wedding-color)`
    } else {
      themeColor = studioThemed.includes(asPath)
        ? `var(--studio-color)`
        : `var(--the-good-silver)`
    }

    document.documentElement.style.setProperty(
      '--primary-accent',
      `${themeColor}`
    )
  }, [asPath])

  return (
    <div className={layout}>
      <TopNav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
