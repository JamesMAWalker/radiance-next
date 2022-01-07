import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'

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
} from '../../styles/home/03-gallery.module.scss'
import { CircleText } from '../svg/circle-text'

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

export const Gallery = () => {
  // custom cursor logic
  const sliderRef = useRef(null)
  const cursorRef = useRef(null)

  const { ref: galleryRef, inView: galleryInView } = useInView()

  const [cursorVisible, setCursorVisible] = useState(false)

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

  return (
    <section className={gallerySection} ref={galleryRef}>
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
              gridTemplateColumns: `repeat(${galleryImgUrls.length}, 25vw)`,
            }}
          >
            {galleryImgUrls.map((url) => {
              return (
                <img
                  key={uuid()}
                  className={galleryImg}
                  src={`${BASE_URL}/${url}`}
                  alt='radiance photography selected work'
                  loading='eager'
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
