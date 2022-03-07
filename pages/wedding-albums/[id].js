import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { server } from '../../config/index'
import {
  mapImageResources,
  genPathsFromResources,
  search,
  mapResourcesToPaths,
} from '../../lib/cloudinary'

import { HeroImg } from '../../components/blocks/hero-img'
import { Blurb } from '../../components/blocks/blurb'
import { albumBlurbs } from '../../public/albums'

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
  viewAll,
} from '../../styles/wedding/wedding-album.module.scss'
import { baseUrlPng } from '../../utils/baseUrl'
import { ExpandableImage } from '../../components/blocks/exp-image'

const sizeMatrix = {
  q: quart,
  f: full,
  h: half,
}

export const getStaticPaths = async () => {
  const { resources, next_cursor: nextCursor } =
    await search({
      expression: 'folder=wedding/albums/*',
    })

  const paths = genPathsFromResources(
    resources,
    'wedding/albums/'
  ).map((alb) => ({ params: { id: alb } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const { resources } = await search({
    expression: `folder=wedding/albums/*`,
  })

  const pathNames = genPathsFromResources(
    resources,
    'wedding/albums/'
  )

  const data = mapResourcesToPaths(pathNames, resources)
  const pageIdx = data.findIndex((d) => d.path === id)
  const finalIdx = data.length - 1

  const pageData = data.filter((d) => d.path === id)[0]
  const nextPageData = data.filter((_, idx) => {
    return pageIdx === finalIdx
      ? idx === 0
      : idx === pageIdx + 1
  })[0]
  const prevPageData = data.filter((_, idx) => {
    return pageIdx === 0
      ? idx === finalIdx
      : idx === pageIdx - 1
  })[0]

  return {
    props: {
      album: pageData,
      next: nextPageData,
      prev: prevPageData,
    },
  }
}

const WeddingAlbum = (props) => {
  const { album: alb, next: nxt, prev: prv } = props

  const [needsEven, setNeedsEven] = useState(false)

  useEffect(() => {
    if (alb.albumPhotoUrls.slice(1).length % 2 !== 0) {
      setNeedsEven(true)
    }
  }, [setNeedsEven])

  return (
    <div>
      <Head>
        <title>
          Radiance |{' '}
          {alb.path.replace('-', ' & ').toUpperCase()}
        </title>
        <meta
          name='description'
          content='Wedding photography gallery'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={albumPage}>
        <HeroImg
          imageUrlFrag={alb.albumPhotoUrls[0]}
          altText={'radiant wedding couple'}
        />
        <Blurb
          blurbTitle={alb.path
            .replace('-', ' & ')
            .toUpperCase()}
          blurbText={albumBlurbs[alb.path]}
          blurbBtn={'Book Your Wedding'}
          singleLineTitle
        />
        <section className={masonryGallery}>
          {alb.albumPhotoUrls.slice(1).map((photo) => {
            return (
              <div
                key={photo}
                className={`${galleryImg} ${
                  sizeMatrix[photo.gridSpace]
                }`}
              >
                <ExpandableImage 
                  urlFrag={photo}
                  alt={`${alb.path} wedding photo`}
                />
                {/* <img
                  src={baseUrlPng(photo, 'eco')}
                  alt='wedding album photo'
                /> */}
              </div>
            )
          })}
          {needsEven && <span> </span>}
          <Link href={`/wedding-albums/${prv.path}`}>
            <a
              className={`${albumNavCard} ${prev} ${quart}`}
            >
              <div className={photoWrap}>
                <img
                  src={baseUrlPng(
                    prv.albumPhotoUrls[0],
                    'eco'
                  )}
                  alt={prv.path}
                />
              </div>
              <h5 className={cardTitle}>
                {prv.path
                  .replace('-', ' &*')
                  .split('*')
                  .map((ttl) => (
                    <span>{ttl}</span>
                  ))}
              </h5>
            </a>
          </Link>
          <Link href={`/wedding-albums/${nxt.path}`}>
            <a
              className={`${albumNavCard} ${next} ${quart}`}
            >
              <div className={photoWrap}>
                <img
                  src={baseUrlPng(
                    nxt.albumPhotoUrls[0],
                    'eco'
                  )}
                  alt={nxt.path}
                />
              </div>
              <h5 className={cardTitle}>
                {nxt.path
                  .replace('-', ' &*')
                  .split('*')
                  .map((ttl) => (
                    <span>{ttl}</span>
                  ))}
              </h5>
            </a>
          </Link>
        </section>
        <Link href='/wedding-albums'>
          <a className={viewAll}>
            <span className='text-btn'>
              Return to Albums
            </span>
          </a>
        </Link>
      </main>
    </div>
  )
}

export default WeddingAlbum
