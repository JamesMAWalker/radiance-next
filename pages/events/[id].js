import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import { eventBlurbs } from '../../lib/ancillary-data';
import {
  search,
  genPathsFromResources,
  mapResourcesToPaths,
  mapImageResources,
} from '../../lib/cloudinary'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { PortraitGrid } from '../../components/blocks/portrait-grid'

import { eventPage } from '../../styles/event/event.module.scss'

const Event = ({ event: evt }) => {
  const [images, setImages] = useState(evt.albumPhotoUrls)
  const [nextCursor, setNextCursor] = useState(
    evt.nextCursor
  )

  const handleLoadMorePhotos = async (e) => {
    e.preventDefault()
    // for some reason this prevents nextjs's unwanted scrollRestoration behavior
    if (history) {
      console.log('history: ', history)
    }

    const results = await fetch('../api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor: nextCursor,
        expression: `folder=${evt.path}/*`,
        max_results: 8,
      }),
    }).then((r) => r.json())

    const { resources, next_cursor: updatedNextCursor } =
      results

    const images = mapImageResources(resources)

    setImages((prv) => {
      return [...prv, ...images]
    })
    setNextCursor(updatedNextCursor)
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
          imageUrlFrag={
            evt.heroPhotoUrl || evt.albumPhotoUrls[0]
          }
          altText={`${evt.path} photo`}
        />
        <Blurb
          blurbTitle={`${evt.path} Photography`}
          blurbText={eventBlurbs[evt.path].map(
            (txt, idx) => (
              <span key={idx}>{txt}</span>
            )
          )}
          blurbBtn={`Book Your ${evt.path}`}
          btnLink={process.env.SQUARE_APPT_URL}
          singleLineTitle
        />
        <AnimatePresence>
          <PortraitGrid
            imageContents={images.slice(1)}
            loadMore={handleLoadMorePhotos}
          />
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Event


z``
// Page Generation

export const getStaticPaths = async () => {
  const { resources } = await search({
    expression:
      'folder=mitzvah/* || folder=engagement/* || folder=event/*',
  })

  const paths = genPathsFromResources(resources).map(
    (alb) => ({ params: { id: alb } })
  )

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const { resources, next_cursor: nextCursor } =
    await search({
      expression: `folder=${id}/*`,
      max_results: 9,
    })

  const { resources: heroImage } = await search({
    expression: `folder=${id}/* && tags=hero`,
    max_results: 1,
  })

  const data = mapResourcesToPaths([id], resources)[0]

  data.nextCursor = nextCursor || false
  data.heroPhotoUrl = heroImage[0]?.public_id || false

  return {
    props: { event: data },
  }
}
