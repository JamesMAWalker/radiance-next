import React, { useEffect, useState } from 'react'
import {
  useAnimation,
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion'

import {
  serviceSection,
  servicesCol,
  mobileServicesNav,
  arrow,
  indicatorBullets,
  bullet,
  activeBulletStyle,
  option,
  active,
  info,
  infoContainer,
  title,
  binaryBtn,
  btnSegment,
  divider,
  serviceImg,
  left,
  right,
} from '../../styles/home/02-services.module.scss'

const BASE_IMG_URL =
  'https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1640932169/wedding/dev/'

const servicesList = [
  {
    title: 'Wedding',
    photoUrls: [
      'wedding-left_hmlvo6',
      'wedding-right_yntqaz',
    ],
    blurb:
      ' Nullam et metus arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Event',
    photoUrls: ['event-left_bpofcn', 'event-right_izf8sw'],
    blurb:
      'Consectetur adipiscing elit, lorem ipsum dolor sit amet. Nullam et metus arcu.',
  },
  {
    title: 'Studio',
    photoUrls: ['HS-right_dbwbqe', 'HS-left_oilynm'],
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu.',
  },
]

export const Services = () => {
  const [activeOption, setActiveOption] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [translatePosition, setTranslatePosition] = useState(activeOption)

  const handleOptionNav = (crement) => {
    if (activeOption <= 0 & crement < 1) return
    if (activeOption >= 2 & crement > 0) return
    setActiveOption(activeOption + crement)
  }

  // set mobile breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  // translate services column container based on current index
  useEffect(() => {
    const positions = {
      0: `translateX(0)`,
      1: `translateX(-95vw)`,
      2: `translateX(-190vw)`,
    }
    setTranslatePosition({ transform: positions[activeOption]})
  }, [activeOption])
    
  return (
    <section className={serviceSection}>
      <div className={`${serviceImg} ${left}`}>
        <motion.img
          src={`${BASE_IMG_URL}${servicesList[activeOption].photoUrls[0]}.png`}
        />
      </div>
      <ul
        className={servicesCol}
        style={isMobile ? translatePosition : null}
      >
        {servicesList.map((srvc, idx) => {
          return (
            <motion.li
              key={srvc.title}
              className={option}
              onClick={() => setActiveOption(idx)}
            >
              <motion.h4 layout className={title}>
                <span>+</span>
                {srvc.title}
              </motion.h4>
              <AnimatePresence>
                {/* desk: display only active | mobile: display all */}
                {(idx === activeOption || isMobile) && (
                  <motion.div
                    className={infoContainer}
                    key='info'
                    variants={{
                      expanded: {
                        opacity: 1,
                        height: 'auto',
                      },
                      collapsed: {
                        opacity: 0,
                        height: 0,
                      },
                    }}
                    initial='expanded'
                    animate='expanded'
                    exit='collapsed'
                    transition={{ duration: 0.1 }}
                  >
                    <p className={info}>{srvc.blurb}</p>
                    <button className={binaryBtn}>
                      <div className={btnSegment}>
                        Book Now
                      </div>
                      <span className={divider} />
                      <div className={btnSegment}>
                        View Gallery
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </ul>
      {isMobile && (
        <div className={mobileServicesNav}>
          <span
            className={arrow}
            onClick={() => handleOptionNav(-1)}
          >
            ◀
          </span>
          <div className={indicatorBullets}>
            {servicesList.map((_, idx) => {
              const activeBullet =
                idx === activeOption
                  ? activeBulletStyle
                  : null
              return (
                <span
                  className={`${bullet} ${activeBullet}`}
                />
              )
            })}
          </div>
          <span
            className={arrow}
            onClick={() => handleOptionNav(1)}
          >
            ▶
          </span>
        </div>
      )}
      <div className={`${serviceImg} ${right}`}>
        <motion.img
          src={`${BASE_IMG_URL}${servicesList[activeOption].photoUrls[1]}.png`}
        />
      </div>
    </section>
  )
}
