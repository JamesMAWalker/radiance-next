import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import { Blurb } from '../components/blocks/blurb'
import { BannerBlock } from '../components/blocks/banner-block'
import { PortraitGrid } from '../components/blocks/portrait-grid'

import {
  studioPage,
  photoSelectors,
  center,
  right,
} from '../styles/studio/studio.module.scss'
import { ArrowNav } from '../components/blocks/arrow-nav'

const studioBlurb = {
  title: `Studio Photography`,
  text: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nullam et metus arcu.
    </>
  ),
  button: 'Book Your Shoot',
}

const studioImages = {
  hero: 'HS-right_dbwbqe.png',
  categories: [
    {
      id: 'acting-modeling',
      title: (
        <>
          Acting & <br /> Modeling
        </>
      ),
      photos: [
        'studio-photo005_bkfunf.png',
        'studio-photo010_jkryvh.png',
        'studio-photo009_oauenb.png',
        'studio-photo004_a7r6oa.png',
        'studio-photo003_vjsse5.png',
        'studio-photo003_vqeer0.png',
        'studio-photo007_aody40.png',
        'studio-photo002_f44eib.png',
      ],
    },
    {
      id: 'business-corporate',
      title: (
        <>
          Business & <br /> Corporate
        </>
      ),
      photos: [
        'studio-photo004_a7r6oa.png',
        'studio-photo010_jkryvh.png',
        'studio-photo007_aody40.png',
        'studio-photo003_vjsse5.png',
        'studio-photo003_vqeer0.png',
        'studio-photo005_bkfunf.png',
        'studio-photo002_f44eib.png',
        'studio-photo009_oauenb.png',
      ],
    },
    {
      title: (
        <>
          Personal & <br /> Family
        </>
      ),
      photos: [
        'studio-photo002_f44eib.png',
        'studio-photo004_a7r6oa.png',
        'studio-photo005_bkfunf.png',
        'studio-photo010_jkryvh.png',
        'studio-photo009_oauenb.png',
        'studio-photo007_aody40.png',
        'studio-photo003_vqeer0.png',
        'studio-photo003_vjsse5.png',
      ],
    },
  ],
}

const Studio = () => {
  const [photoSet, setPhotoSet] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleLoadMorePhotos = () => {
    alert('More photos loaded!')
  }

  // indicate currently active category title
  const addLinePosClass = (photoSetIdx) => {
    if (photoSetIdx === 0) return ''

    return photoSetIdx === 1 ? center : right
  }

  // arrow navigation for mobile
  const handleOptionNav = (crement) => {
    if ((photoSet <= 0) & (crement < 1)) return
    if ((photoSet >= 2) & (crement > 0)) return
    setPhotoSet(photoSet + crement)
  }

  return (
    <div className={studioPage}>
      <Head>
        <title>Radiance | Studio Photography</title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <BannerBlock imgUrlFrag={studioImages.hero} />
        <Blurb
          blurbTitle={studioBlurb.title}
          blurbText={studioBlurb.text}
          blurbBtn={studioBlurb.button}
          singleLineTitle
        />
        <div
          className={`${photoSelectors} ${addLinePosClass(
            photoSet
          )}`}
        >
          <AnimatePresence>
            {!isMobile ? (
              <>
                {studioImages.categories.map((cat, idx) => {
                  return (
                    <button
                      key={cat.id}
                      className='text-btn'
                      onClick={() => setPhotoSet(idx)}
                    >
                      {cat.title}
                    </button>
                  )
                })}
              </>
            ) : (
              <>
                <motion.button
                  className='text-btn'
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100vw' }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setPhotoSet(idx)}
                >
                  {studioImages.categories[photoSet].title}
                </motion.button>
                <ArrowNav
                  list={studioImages.categories}
                  handleArrow={handleOptionNav}
                  activeOption={photoSet}
                />
              </>
            )}
          </AnimatePresence>
        </div>
        {studioImages.categories.map((cat, idx) => {
          if (idx === photoSet) {
            return (
              <AnimatePresence>
                <PortraitGrid
                  imageContents={cat.photos}
                  loadMore={handleLoadMorePhotos}
                />
              </AnimatePresence>
            )
          }
        })}
      </main>
    </div>
  )
}

export default Studio
