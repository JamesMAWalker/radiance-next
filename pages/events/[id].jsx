import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import { server } from '../../config/index'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { PortraitGrid } from '../../components/blocks/portrait-grid'

import {
  eventPage,
  galleryHeader,
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

const Event = ({ event: evt }) => {
  console.log('event: ', evt)


  const handleLoadMorePhotos = () => {
    console.log('loaded more photos!');
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
          imageUrlFrag={evt.heroImgUrl}
          altText={'engagement couple at waters edge'}
        />
        <Blurb
          blurbTitle={evt.header}
          blurbText={evt.blurbs.map((txt) => (
            <span>{txt}</span>
          ))}
          blurbBtn={evt.button}
          singleLineTitle
        />
        <AnimatePresence>
          <PortraitGrid
            imageContents={evt.photos}
            // loadMore={handleLoadMorePhotos}
          />
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Event
