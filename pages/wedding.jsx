import React from 'react'
import Head from 'next/head'

import { HeroImg } from '../components/blocks/hero-img'
import { Blurb } from '../components/blocks/blurb'
import { AlbumPair } from '../components/blocks/album-pair'

import { weddingPage } from '../styles/wedding/wedding.module.scss'

const weddingBlurb = {
  title: `Wedding Photography`,
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
  button: 'Book Your Wedding',
}

const albumsList = [
  {
    title: `Frank & Estelle`,
    photos: ['pair-1_wmwf6h.png', 'pair-2_jfoyvz.png'],
  },
  {
    title: `Fouad & Elaine`,
    photos: [
      'photo-couple-04_rfp3aa.png',
      'photo-couple-03_rcgown.png',
    ],
  },
  {
    title: `Frederic & Effie`,
    photos: [
      'photo-couple-01_njmuqe.png',
      'photo-couple-02_eefotn.png',
    ],
  },
  {
    title: `Francis & Edith`,
    photos: [
      'photo-couple-06_nku61v.png',
      'photo-couple-05_yrsdn7.png',
    ],
  },
]

const Wedding = () => {
  return (
    <div>
      <Head>
        <title>Radiance | Wedding Photography</title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={weddingPage}>
        <HeroImg
          imageUrlFrag={'wedding_tohrlj.png'}
          altText={
            'bridesmaids & groomsmen surround wedding couple'
          }
        />
        <Blurb
          blurbTitle={weddingBlurb.title}
          blurbText={weddingBlurb.text}
          blurbBtn={weddingBlurb.button}
          singleLineTitle
        />
        {albumsList.map(albm => {
          return (
            <AlbumPair
              key={albm.title}
              coupleNames={albm.title}
              imgUrlFrags={albm.photos}
            />
          )
        })}
      </main>
    </div>
  )
}

export default Wedding
