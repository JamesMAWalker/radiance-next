import Head from 'next/head'

import { server } from '../config/index'
import {
  search,
  mapImageResources,
} from '../lib/cloudinary'

import { Hero } from '../components/home/01-hero'
import { Services } from '../components/home/02-services'
import { Gallery } from '../components/home/03-gallery'
import { Contact } from '../components/home/04-contact'
import { useEffect } from 'react'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/events`)

  if (res.status !== 200) {
    console.log('res from GSPaths in [id] of events: ', res)
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()
  console.log('data from gsPaths in [id] of events: ', data)

  const { resources, next_cursor: nextCursor } =
    await search({ expression: 'folder=index/_gallery' })

  const images = mapImageResources(resources)

  return {
    props: {
      events: data,
      gallery: images,
      nextCursor: nextCursor || false,
    },
  }
}

export default function Home({ gallery, nextCursor }) {
  return (
    <>
      <Head>
        <title>Radiance Photography</title>
        <meta
          name='description'
          content='Photography portfolio and booking site'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <Services />
        <Gallery images={gallery} nextCursor={nextCursor} />
        <Contact />
      </main>
    </>
  )
}
