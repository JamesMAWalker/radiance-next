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
  // const res1 = await fetch(`${server}/api/events`)

  // if (res1.status !== 200) {
  //   console.log('res from GSPaths in [id] of events: ', res1)
  //   throw new Error(
  //     `There was an error! Status code is ${res1.status}`
  //   )
  // }
  // const res2 = await fetch(`${server}/api/events`)

  // if (res2.status !== 200) {
  //   console.log('res from GSPaths in [id] of events: ', res2)
  //   throw new Error(
  //     `There was an error! Status code is ${res1.status}`
  //   )
  // }

  // const evtData = await res1.json()
  // const albData = await res2.json()
  // console.log('data from gsPaths in [id] of events: ', evtData)

  // const { resources, next_cursor: nextCursor } =
  //   await search({ expression: 'folder=index/_gallery' })

  // const images = mapImageResources(resources)

  // return {
  //   props: {
  //     events: evtData,
  //     albums: albData,
  //     gallery: images,
  //     nextCursor: nextCursor || false,
  //   },
  // }
}

// export default function Home({ gallery, nextCursor }) {
export default function Home() {
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
        {/* <Gallery images={gallery} nextCursor={nextCursor} /> */}
        <Contact />
      </main>
    </>
  )
}
