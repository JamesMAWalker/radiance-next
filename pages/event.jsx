import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import { HeroImg } from '../components/blocks/hero-img'
import { Blurb } from '../components/blocks/blurb'
import { PortraitGrid } from '../components/blocks/portrait-grid'

import {
  eventPage,
  photoSelectors,
  right,
} from '../styles/event/event.module.scss'

const eventBlurb = {
  title: `Event Photography`,
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
  button: 'Book Your Event',
}

const eventImages = {
  hero: 'engagement_i0ov0f',
  categories: [
    {
      title: <>Mitzvah</>,
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
      title: <>Engagement</>,
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
  ],
}

const Event = () => {
  const {
    query: { photoSetParam },
  } = useRouter()

  const [photoSet, setPhotoSet] = useState(0)
  const [initialPhotoSet, setInitialPhotoSet] = useState(0)

  // set correct photoset based on query params
  useEffect(() => {
    setInitialPhotoSet(photoSetParam)
  }, [])
  useEffect(() => {
    setPhotoSet(initialPhotoSet)
  }, [initialPhotoSet])

  useEffect(() => {
    initialPhotoSet
    console.log('initialPhotoSet: ', initialPhotoSet);
  }, [])

  const handleLoadMorePhotos = () => {
    alert('More photos loaded!')
  }

  const addLinePosClass = (photoSetIdx) => {
    return photoSetIdx === 1 ? right : ''
  }

  return (
    <div className={eventPage}>
      <Head>
        <title>Radiance | Event Photography</title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroImg
          imageUrlFrag={eventImages.hero}
          altText={'engagement couple at waters edge'}
        />
        <Blurb
          blurbTitle={eventBlurb.title}
          blurbText={eventBlurb.text}
          blurbBtn={eventBlurb.button}
          singleLineTitle
        />
        <div
          className={`${photoSelectors} ${addLinePosClass(
            photoSet
          )}`}
        >
          {eventImages.categories.map((cat, idx) => {
            return (
              <button
                key={`${cat.title}${idx}`}
                className='text-btn'
                onClick={() => setPhotoSet(idx)}
              >
                {cat.title}
              </button>
            )
          })}
        </div>
        <AnimatePresence>
            <PortraitGrid
              imageContents={
                eventImages.categories[photoSet ? photoSet : 0]?.photos
              }
              loadMore={handleLoadMorePhotos}
            />
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Event
