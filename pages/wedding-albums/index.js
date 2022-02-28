import React, { Fragment } from 'react'
import Head from 'next/head'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { AlbumPair } from '../../components/blocks/album-pair'

import { server } from '../../config/index'

import { weddingPage } from '../../styles/wedding/wedding.module.scss'

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
    photos: ['pair-2_jfoyvz.png', 'pair-1_wmwf6h.png'],
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/albums`)

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  return {
    props: { albums: data },
  }
}

const Wedding = ({ albums }) => {
  return (
    <Fragment>
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
          imageUrlFrag={'wedding_tohrlj'}
          quality={'best'}
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
        {albums.map((albm) => {
          return (
            <AlbumPair
              key={albm.title}
              coupleNames={albm.title}
              imgUrlFrags={albm.pairPhotoUrls}
              path={albm.path}
            />
          )
        })}
      </main>
    </Fragment>
  )
}

export default Wedding
