import React, { Fragment } from 'react'
import Head from 'next/head'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { AlbumPair } from '../../components/blocks/album-pair'

import { server } from '../../config/index'
import {
  mapResourcesToAlbumPreviews,
  genPathsFromResources,
  search,
} from '../../lib/cloudinary'

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
  const { resources, next_cursor: nextCursor } =
    await search({
      expression: 'folder:wedding/albums/*',
    })

  const albumPreviews = mapResourcesToAlbumPreviews(
    resources,
    'wedding/albums/'
  )

  return {
    props: { albums: albumPreviews },
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
          imageUrlFrag={'wedding/wedell-367_iggt8e'}
          quality={'best'}
          altText={'bridesmaids'}
        />
        <Blurb
          blurbTitle={weddingBlurb.title}
          blurbText={weddingBlurb.text}
          blurbBtn={weddingBlurb.button}
          btnLink={process.env.SQUARE_APPT_URL}
          singleLineTitle
        />
        {albums.map((albm) => {
          return (
            <AlbumPair
              key={albm.title}
              coupleNames={albm.title}
              imgUrlFrags={albm.pair}
              path={albm.path}
            />
          )
        })}
      </main>
    </Fragment>
  )
}

export default Wedding
