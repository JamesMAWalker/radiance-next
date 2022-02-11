import Head from 'next/head'

import { server } from '../config/index'

import { Hero } from '../components/home/01-hero'
import { Services } from '../components/home/02-services'
import { Gallery } from '../components/home/03-gallery'
import { Contact } from '../components/home/04-contact'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/events.json`)

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  return {
    props: { events: data },
  }
}




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
        <Gallery />
        <Contact />
      </main>
    </>
  )
}
