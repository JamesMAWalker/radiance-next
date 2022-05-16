import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion'

import { mapImageResources } from '../../lib/cloudinary'

import {
  fadeUp,
  fadeFromRight,
} from '../../animations/fade'
import { smooth }  from '../../animations/transitions'

import {
  gallerySection,
  title,
  description,
  slideBase,
  slideContainer,
  gallerySlider,
  galleryCursor,
  point,
  loadMore,
} from '../../styles/home/03-gallery.module.scss'
import { CircleText } from '../svg/circle-text'
import { ExpandableImage } from '../blocks/exp-image'
import { Fragment } from 'react/cjs/react.production.min'

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
      if (!galleryInView) return;
      
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
        Browse this collection of our favorite photography
        <br /> from across all categories.{' '}
      </p>
      <motion.div
        className={slideBase}
        variants={fadeFromRight}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={smooth(2.5)}
      >
        {galleryInView && (
          <div
            className={galleryCursor}
            ref={cursorRef}
            style={{ opacity: `${cursorVisible ? 1 : 0}` }}
          >
            <CircleText />
            <span className={point} />
          </div>
        )}
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
                  <Fragment key={`${url}${idx}`}>
                    <ExpandableImage
                      urlFrag={url}
                      altTag={'gallery image'}
                    />
                  </Fragment>
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
      </motion.div>
    </motion.section>
  )
}
