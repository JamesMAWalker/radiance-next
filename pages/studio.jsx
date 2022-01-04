import React, { useState } from 'react'
import Head from 'next/head'

import { Blurb } from '../components/blocks/blurb'
import { BannerBlock } from '../components/blocks/banner-block'
import { PortraitGrid } from '../components/blocks/portrait-grid'

import {
  studioPage,
  photoSelectors,
} from '../styles/studio/studio.module.scss'

const studioBlurb = {
  title: `Studio Photography`,
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
  button: 'Book Your Shoot',
}

const studioImages = {
  hero: 'HS-right_dbwbqe.png',
  categories: [
    {
      title: (
        <>
          Acting & <br /> Modeling
        </>
      ),
      photos: [
        'studio-photo005_bkfunf.png',
        'studio-photo010_jkryvh.png',
        'studio-photo009_oauenb.png',
        'studio-photo004_a7r6oa.png',
        'studio-photo003_vjsse5.png',
        'studio-photo003_vqeer0.png',
        'studio-photo007_aody40.png',
        'studio-photo002_f44eib.png',
      ],
    },
    {
      title: (
        <>
          Business & <br /> Corporate
        </>
      ),
      photos: [
        'studio-photo004_a7r6oa.png',
        'studio-photo010_jkryvh.png',
        'studio-photo007_aody40.png',
        'studio-photo003_vjsse5.png',
        'studio-photo003_vqeer0.png',
        'studio-photo005_bkfunf.png',
        'studio-photo002_f44eib.png',
        'studio-photo009_oauenb.png',
      ],
    },
    {
      title: (
        <>
          Personal & <br /> Family
        </>
      ),
      photos: [
        'studio-photo002_f44eib.png',
        'studio-photo004_a7r6oa.png',
        'studio-photo005_bkfunf.png',
        'studio-photo010_jkryvh.png',
        'studio-photo009_oauenb.png',
        'studio-photo007_aody40.png',
        'studio-photo003_vqeer0.png',
        'studio-photo003_vjsse5.png',
      ],
    },
  ],
}

const Studio = () => {
  const [photoSet, setPhotoSet] = useState(0)

  const handleLoadMorePhotos = () => {
    alert('More photos loaded!')
  }

  return (
    <div className={studioPage}>
      <Head>
        <title>Radiance | Studio Photography</title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <BannerBlock imgUrlFrag={studioImages.hero} />
        <Blurb
          blurbTitle={studioBlurb.title}
          blurbText={studioBlurb.text}
          blurbBtn={studioBlurb.button}
          singleLineTitle
        />
        <div className={photoSelectors}>
          {studioImages.categories.map((cat, idx) => {
            return (
              <button
                className='text-btn'
                onClick={() => setPhotoSet(idx)}
              >
                {cat.title}
              </button>
            )
          })}
        </div>
        <PortraitGrid
          imageContents={
            studioImages.categories[photoSet].photos
          }
          loadMore={handleLoadMorePhotos}
        />
      </main>
    </div>
  )
}

export default Studio
