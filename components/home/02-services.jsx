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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu.',
  },
  {
    title: 'Event',
    photoUrls: ['event-left_bpofcn', 'event-right_izf8sw'],
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu.',
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

  return (
    <section className={serviceSection}>
      <div className={`${serviceImg} ${left}`}>
        <motion.img
          src={`${BASE_IMG_URL}${servicesList[activeOption].photoUrls[0]}.png`}
        />
      </div>
      <ul className={servicesCol}>
        {servicesList.map((srvc, idx) => {
          return (
            <motion.li
              key={srvc.title}
              className={option}
              // layout
              onClick={() => setActiveOption(idx)}
            >
              <motion.h4 layout className={title}>
                <span>+</span>
                {srvc.title}
              </motion.h4>
              <AnimatePresence>
                {idx === activeOption && (
                  <motion.div
                    className={infoContainer}
                    key='info'
                    variants={{
                      expanded: {
                        opacity: 1,
                        height: 'auto',
                      },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    initial='expanded'
                    animate='expanded'
                    exit='collapsed'
                    transition={{ duration: .1 }}
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
      <div className={`${serviceImg} ${right}`}>
        <motion.img
          src={`${BASE_IMG_URL}${servicesList[activeOption].photoUrls[1]}.png`}
        />
      </div>
    </section>
  )
}
