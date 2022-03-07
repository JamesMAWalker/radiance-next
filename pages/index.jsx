import Head from 'next/head'

import {
  search,
  mapImageResources,
} from '../lib/cloudinary'

import { Hero } from '../components/home/01-hero'
import { Services } from '../components/home/02-services'
import { Gallery } from '../components/home/03-gallery'
import { Contact } from '../components/home/04-contact'

export const getStaticProps = async () => {

  const { resources, next_cursor: nextCursor } =
    await search({ expression: 'folder=index/_gallery', max_results: 5 })

  const images = mapImageResources(resources)

  return {
    props: {
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
