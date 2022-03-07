import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion'

import {
  search,
  mapImageResources,
} from '../../lib/cloudinary'

import { fadeIn, fadeUp } from '../../animations/fade'

import {
  gallerySection,
  title,
  description,
  slideBase,
  slideContainer,
  gallerySlider,
  galleryImg,
  galleryCursor,
  point,
  loadMore,
} from '../../styles/home/03-gallery.module.scss'
import { CircleText } from '../svg/circle-text'
import { baseUrlPng } from '../../utils/baseUrl'
import { ExpandableImage } from '../blocks/exp-image'

const BASE_URL =
  'https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1640679114/wedding'

const galleryImgUrls = [
  'Photo_Oct_12_2_23_19_PM_ixan4l.jpg',
  'Photo_Jun_24_9_45_24_AM_tu3a1p.jpg',
  'Photo_Oct_16_7_29_13_AM_ek0g9u.jpg',
  'Photo_Oct_12_2_23_21_PM_t13efu.jpg',
  'Photo_Oct_16_7_55_29_AM_vk1vra.jpg',
  'Photo_Oct_16_6_37_08_AM_el3mji.jpg',
  'Photo_Oct_12_2_23_19_PM_ixan4l.jpg',
  'Photo_Jun_24_9_45_24_AM_tu3a1p.jpg',
  'Photo_Oct_16_7_29_13_AM_ek0g9u.jpg',
  'Photo_Oct_12_2_23_21_PM_t13efu.jpg',
  'Photo_Oct_16_7_55_29_AM_vk1vra.jpg',
  'Photo_Oct_16_6_37_08_AM_el3mji.jpg',
]

export const Gallery = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) => {
  const [images, setImages] = useState(defaultImages)
  const [nextCursor, setNextCursor] = useState(
    defaultNextCursor
  )
  const controls = useAnimation()

  const handleLoadMore = async (e) => {
    e.preventDefault()

    const results = await fetch('api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
        expression: 'folder=index/_gallery',
        // expression: 'folder:headshots/*',
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

  // custom cursor logic
  const sliderRef = useRef(null)
  const cursorRef = useRef(null)

  const { ref: galleryRef, inView: galleryInView } =
    useInView()

  const [cursorVisible, setCursorVisible] = useState(false)

  // detect cursor position and show if at edges of viewport
  useEffect(() => {
    const detectCursorAtPageMargin = (cursorPos) => {
      const showCursorAtLeft =
        sliderRef.current.scrollLeft > 0
      const { clientWidth } = document.documentElement
      const positionQuotient = cursorPos / clientWidth
      const showCursor =
        (positionQuotient < 0.15 && showCursorAtLeft) ||
        positionQuotient > 0.85
      return showCursor && galleryInView
    }

    const onMouse = (e) => {
      const { clientX, clientY } = e
      const mouseX =
        clientX - cursorRef?.current?.clientWidth
      const mouseY =
        clientY - cursorRef?.current?.clientHeight
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      setCursorVisible(detectCursorAtPageMargin(clientX))
    }

    document.addEventListener('mousemove', onMouse)
    return () => {
      document.removeEventListener('mousemove', onMouse)
    }
  }, [cursorRef, galleryInView])

  useEffect(() => {
    if (galleryInView) {
      controls.start('visible')
    }
  }, [controls, galleryInView])

  return (
    <motion.section
      className={gallerySection}
      ref={galleryRef}
      variants={fadeUp}
      initial='hidden'
      animate={controls}
      transition={{ duration: 1.5 }}
    >
      <h2 className={title}>Gallery</h2>
      <p className={description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. <br /> Etiam fermentum.{' '}
      </p>
      <div className={slideBase}>
        <div
          className={galleryCursor}
          ref={cursorRef}
          style={{ opacity: `${cursorVisible ? 1 : 0}` }}
        >
          <CircleText />
          <span className={point} />
        </div>
        <div className={slideContainer} ref={sliderRef}>
          <div
            className={gallerySlider}
            style={{
              gridTemplateColumns: `repeat(${
                images.length + 1
              }, 25vw)`,
            }}
          >
            <AnimatePresence>
              {images.map((url, idx) => {
                return (
                  <ExpandableImage 
                    urlFrag={url}
                    altTag={'gallery image'}
                  />
                  // <motion.img
                  //   key={`${url}${idx}`}
                  //   className={galleryImg}
                  //   src={baseUrlPng(url)}
                  //   alt='radiance photography selected work'
                  //   variants={fadeIn}
                  //   initial='hidden'
                  //   animate='visible'
                  //   exit='hidden'
                  //   transition={{
                  //     duration: 2,
                  //     ease: [0.115, 0.905, 0.32, 1],
                  //   }}
                  // />
                )
              })}
            </AnimatePresence>
            <span
              className={loadMore}
              onClick={handleLoadMore}
            >
              <button className='text-btn'>
                Load More
              </button>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
