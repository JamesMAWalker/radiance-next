import React, { useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import {
  search,
  mapImageResources,
} from '../lib/cloudinary'

import { Blurb } from '../components/blocks/blurb'
import { BannerBlock } from '../components/blocks/banner-block'
import { PortraitGrid } from '../components/blocks/portrait-grid'

import {
  studioPage,
  photoSelectors,
  center,
  right,
} from '../styles/studio/studio.module.scss'
import { ArrowNav } from '../components/blocks/arrow-nav'

export const getStaticProps = async () => {
  // eventually replace folderNames with a request that gets all desired folder names
  const folderNames = [
    'acting-modeling',
    'corporate',
    'personal-family',
  ]
  const foldersWithData = await Promise.all(
    folderNames.map(async (fld) => {
      const { resources, next_cursor: nextCursor } =
        await search({
          expression: `folder=headshots/${fld}`,
          max_results: 10,
        })
      const imgUrls = mapImageResources(resources)
      return {
        title: fld,
        imgUrls,
        nextCursor: nextCursor || false,
      }
    })
  )

  const { resources, next_cursor: nextCursor } =
    await search({
      expression: 'folder:headshots/*',
      max_results: 10,
    })

  return {
    props: {
      folders: foldersWithData,
    },
  }
}

// Page data
const studioBlurb = {
  title: `Studio Photography`,
  text: (
    <>
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus. */}
      Our state-of-the-art studio has been carefully crafted
      to accommodate a range of different photography
      styles. Headshots, artistic editorial sets, family
      portraits - our studio and professional photographers
      bring art to life.
      <br />
      <br />
      Our Westwood location is conveniently accessible from
      anywhere in Los Angeles. Contact us, or get started
      below to schedule an appointment.
    </>
  ),
  button: 'Book Your Shoot',
}
const studioImages = {
  hero: 'headshots/hero-01_ex5hqd',
  categories: [
    {
      id: 'acting-modeling',
      title: (
        <>
          Acting & <br /> Modeling
        </>
      ),
    },
    {
      id: 'business-corporate',
      title: (
        <>
          Business & <br /> Corporate
        </>
      ),
    },
    {
      title: (
        <>
          Personal & <br /> Family
        </>
      ),
    },
  ],
}

const Studio = ({ folders }) => {
  const [photoSet, setPhotoSet] = useState(2)
  const [isMobile, setIsMobile] = useState(false)

  const [images, setImages] = useState(
    folders[photoSet].imgUrls
  )
  const [nextCursor, setNextCursor] = useState(
    folders[photoSet].nextCursor
  )

  const handleLoadMorePhotos = async (e) => {
    e.preventDefault()

    const results = await fetch('api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor: folders[photoSet].nextCursor,
        expression: `folder:headshots/${folders[photoSet].title}`,
        max_results: 5,
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

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  // indicate currently active category title
  const addLinePosClass = (photoSetIdx) => {
    if (photoSetIdx === 0) return ''

    return photoSetIdx === 1 ? center : right
  }

  // arrow navigation for mobile
  const handleOptionNav = (crement) => {
    if ((photoSet <= 0) & (crement < 1)) return
    if ((photoSet >= 2) & (crement > 0)) return
    setPhotoSet(photoSet + crement)
  }

  // set images when photoSet changes
  useEffect(() => {
    setImages(folders[photoSet].imgUrls)
    setNextCursor(folders[photoSet].nextCursor)
  }, [photoSet, folders, setImages, setNextCursor])

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
          btnLink={process.env.SQUARE_APPT_URL}
          singleLineTitle
        />
        <div
          className={`${photoSelectors} ${addLinePosClass(
            photoSet
          )}`}
        >
          {!isMobile ? (
            <>
              {studioImages.categories.map((cat, idx) => {
                return (
                  <button
                    key={cat.id}
                    className='text-btn'
                    onClick={() => setPhotoSet(idx)}
                  >
                    {cat.title}
                  </button>
                )
              })}
            </>
          ) : (
            <AnimatePresence>
              <motion.button
                className='text-btn'
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: '-100vw' }}
                transition={{ duration: 0.5 }}
                onClick={() => setPhotoSet(idx)}
              >
                {studioImages.categories[photoSet].title}
              </motion.button>
              <ArrowNav
                list={studioImages.categories}
                handleArrow={handleOptionNav}
                activeOption={photoSet}
              />
            </AnimatePresence>
          )}
        </div>
        <AnimatePresence>
          {studioImages.categories.map((cat, idx) => {
            if (idx === photoSet) {
              return (
                <Fragment key={idx}>
                  <PortraitGrid
                    imageContents={images}
                    altTag={folders[photoSet].title}
                    loadMore={handleLoadMorePhotos}
                  />
                </Fragment>
              )
            }
          })}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Studio
