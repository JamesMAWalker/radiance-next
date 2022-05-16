import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

import { Navigation } from '../components/layout/nav'
import { Footer } from '../components/layout/footer'
import {
  ContactContext,
  ContactProvider,
} from '../contexts/contact-context'
import {
  FSPhotoContext,
  FSPhotoProvider,
} from '../contexts/fsphoto-context'

import { layout } from '../styles/layout/layout.module.scss'
import { ContactModal } from '../components/layout/contact-modal'
import { PhotoModal } from '../components/blocks/photo-modal'

import { fadeIn } from '../animations/fade'
import '../styles/globals.scss'
import { Layout } from '../components/layout/layout'

export default function MyApp({
  Component,
  pageProps,
  router,
}) {
  const { asPath } = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const { modalOpen } = useContext(ContactContext)
  const { photoModalOpen } = useContext(FSPhotoContext)

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
  }, [])

  return (
    <FSPhotoProvider>
      <ContactProvider>
        <AnimatePresence exitBeforeEnter>
          <Layout aniKey={router.route} isMobile={isMobile}>
            <Component {...pageProps} key={router.route} />
          </Layout>
          {/* <motion.div
            key={router.route}
            className={layout}
            variants={fadeIn}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Navigation isMobile={isMobile} />

            <ContactModal />
            <PhotoModal />
            <Footer />
          </motion.div> */}
        </AnimatePresence>
      </ContactProvider>
    </FSPhotoProvider>
  )
}
