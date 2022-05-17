import React, { Fragment, useState } from 'react'
import Head from 'next/head'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
// import { AlbumPair } from '../../components/blocks/album-pair'

import {
  albumsList,
  weddingBlurb,
} from '../../lib/ancillary-data'

import { weddingPage } from '../../styles/wedding/wedding.module.scss'
import { PortraitGrid } from '../../components/blocks/portrait-grid'

import {
  // mapResourcesToAlbumPreviews,
  // genPathsFromResources,
  search,
  mapImageResources,
} from '../../lib/cloudinary'

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
    
    // for some reason this prevents nextjs's unwanted scrollRestoration behavior
    if (history) {
      console.log('history: ', history)
    }

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

// api
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
