import React, { Fragment, useState } from 'react'
import Head from 'next/head'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
// import { AlbumPair } from '../../components/blocks/album-pair'

import {
  // mapResourcesToAlbumPreviews,
  // genPathsFromResources,
  search,
  mapImageResources,
} from '../../lib/cloudinary'

import { weddingPage } from '../../styles/wedding/wedding.module.scss'
import { PortraitGrid } from '../../components/blocks/portrait-grid'

const weddingBlurb = {
  title: `Wedding Photography`,
  text: (
    <>
      Romantic, authentic, and beautiful light. Those are
      the elements we strive for most in our wedding photography.
      Our studio's theme is a love of natural light, and we use this
      passion to make the most of each photo. 
      <br />
      <br />
      We focus on the people, the moments, and the
      small details that tell the story of your day.
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
  /*
    ^^Albums version
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
  */

  // ^^Gallery version
  const { resources, next_cursor: nextCursor } =
    await search({
      expression: 'folder:wedding/*',
      max_results: 8,
    })

  const gallery = mapImageResources(resources)

  return {
    props: { gallery, nextCursor },
  }
}

// const Wedding = ({ albums }) => {
const Wedding = ({
  gallery,
  nextCursor: defaultNextCursor,
}) => {
  const [images, setImages] = useState(gallery)
  const [nextCursor, setNextCursor] = useState(
    defaultNextCursor
  )

  const handleLoadMorePhotos = async (e) => {
    e.preventDefault()

    const results = await fetch('../api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor: nextCursor,
        expression: `folder:wedding/*`,
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
        {/*
         ^^Albums version
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
        */}
        <PortraitGrid
          imageContents={images}
          loadMore={handleLoadMorePhotos}
          altTag={'wedding photo'}
        />
      </main>
    </Fragment>
  )
}

export default Wedding
