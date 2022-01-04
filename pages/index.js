import Head from 'next/head'

import { Hero } from '../components/home/01-hero'
import { Services } from '../components/home/02-services'
import { Gallery } from '../components/home/03-gallery'
import { Contact } from '../components/home/04-contact'

export default function Home() {
  return (
    <div>
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
      <footer>FOOT</footer>
    </div>
  )
}
