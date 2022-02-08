import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Navigation } from '../components/layout/nav'
import { Footer } from '../components/layout/footer'

import '../styles/globals.scss'
import { layout } from '../styles/layout/layout.module.scss'

export default function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter()
  const [isMobile, setIsMobile] = useState(false);

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

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, []);
  

  return (
    <div className={layout}>
      <Navigation isMobile={isMobile} />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
