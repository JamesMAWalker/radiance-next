import React from 'react'
import Head from 'next/head'
import { v4 as uuid } from 'uuid'

import { HeroImg } from '../components/blocks/hero-img'
import { Blurb } from '../components/blocks/blurb'

import {
  albumPage,
  masonryGallery,
  galleryImg,
  quart,
  half,
  full,
  albumNavCard,
  photoWrap,
  cardTitle,
  prev,
  next,
} from '../styles/wedding/wedding-album.module.scss'

const albumInfo = {
  title: `Frank & Estelle`,
  text: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus.
    </>
  ),
  button: 'Book Your Wedding',
  nextAlbum: {
    imgUrlFrag: 'album-photo-05_yt5aa9.png',
    title: 'Fouad & Elaine',
    link: 'fouad-elaine',
  },
  prevAlbum: {
    imgUrlFrag: 'album-photo-04_slvyj2.png',
    title: 'Frederic & Effie',
    link: 'frederic-effie',
  },
}

const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641261714/wedding/dev/`

const albumPhotos = [
  {
    urlFrag: 'album-photo-08_skjtwt.png',
    gridSpace: quart,
  },
  {
    urlFrag: 'album-photo-02_wjl52i.png',
    gridSpace: quart,
  },
  {
    urlFrag: 'album-photo-07_aue8iu.png',
    gridSpace: full,
  },
  {
    urlFrag: 'album-photo-06_tdja6u.png',
    gridSpace: quart,
  },
  {
    urlFrag: 'album-photo-01_fb4jvy.png',
    gridSpace: quart,
  },
  {
    urlFrag: 'album-photo-03_lc6bek.png',
    gridSpace: half,
  },
]

// Write a useCursor hook 

const WeddingAlbum = () => {
  return (
    <div>
      <Head>
        <title>Radiance | {albumInfo.title}</title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={albumPage}>
        <HeroImg
          imageUrlFrag={'hero_yegtig'}
          altText={'radiant wedding couple'}
        />
        <Blurb
          blurbTitle={albumInfo.title}
          blurbText={albumInfo.text}
          blurbBtn={albumInfo.button}
          singleLineTitle
        />
        <section className={masonryGallery}>
          {albumPhotos.map((photo) => {
            return (
              <div
                key={uuid()}
                className={`${galleryImg} ${photo.gridSpace}`}
              >
                <img
                  src={`${BASE_IMG_URL}/${photo.urlFrag}`}
                  alt='wedding album photo'
                />
              </div>
            )
          })}
          <div
            className={`${albumNavCard} ${next} ${quart}`}
          >
            <div className={photoWrap}>
              <img
                src={`${BASE_IMG_URL}/${albumInfo.prevAlbum.imgUrlFrag}`}
                alt=''
              />
            </div>
            <h5 className={cardTitle}>
              {albumInfo.prevAlbum.title}
            </h5>
          </div>
          <div
            className={`${albumNavCard} ${prev} ${quart}`}
          >
            <div className={photoWrap}>
              <img
                src={`${BASE_IMG_URL}/${albumInfo.nextAlbum.imgUrlFrag}`}
                alt=''
              />
            </div>
            <h5 className={cardTitle}>
              {albumInfo.nextAlbum.title}
            </h5>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WeddingAlbum
