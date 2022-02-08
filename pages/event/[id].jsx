import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import { server } from '../../config/index';

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { PortraitGrid } from '../../components/blocks/portrait-grid'

import {
  eventPage,
  photoSelectors,
  right,
} from '../../styles/event/event.module.scss'


export const getStaticPaths = async () => {
  const res = await fetch(`${server}/events.json`)

  if (res.status !== 200) {
    console.log('res from GSP in [id]: ', res)
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  const eventPaths = data.map((evt) => {
    return {
      params: { id: evt.title },
    }
  })

  return {
    paths: eventPaths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const res = await fetch(`${server}/events.json`)

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()
  const pageData = data.filter((d) => d.title === id)[0]

  return {
    props: { event: pageData },
  }
}


const Event = ({ event }) => {
  // console.log('event: ', event);
  // const {
  //   query: { photoSetParam },
  // } = useRouter()

  // const [photoSet, setPhotoSet] = useState(0)
  // const [initialPhotoSet, setInitialPhotoSet] = useState(0)

  // // set correct photoset based on query params
  // useEffect(() => {
  //   setInitialPhotoSet(photoSetParam)
  // }, [])
  // useEffect(() => {
  //   setPhotoSet(initialPhotoSet)
  // }, [initialPhotoSet])

  // useEffect(() => {
  //   initialPhotoSet
  //   console.log('initialPhotoSet: ', initialPhotoSet)
  // }, [])

  // const handleLoadMorePhotos = () => {
  //   alert('More photos loaded!')
  // }

  // const addLinePosClass = (photoSetIdx) => {
  //   return photoSetIdx === 1 ? right : ''
  // }

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
        {/* <HeroImg
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
              eventImages.categories[
                photoSet ? photoSet : 0
              ]?.photos
            }
            loadMore={handleLoadMorePhotos}
          />
        </AnimatePresence> */}
      </main>
    </div>
  )
}

export default Event
