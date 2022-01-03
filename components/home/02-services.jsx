import React, { useEffect, useState } from 'react'
import {
  AnimateSharedLayout,
  AnimatePresence,
  motion,
} from 'framer-motion'
import { v4 as uuid } from 'uuid'

import {
  serviceSection,
  servicesCol,
  option,
  active,
  inactive,
  info,
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

const infoAnimation = {
  visible: {
    opacity: 1,
    height: 'unset',
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
}

const imgAnimation = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

/*
  Figure out a good way of fade animating between the images.
*/

export const Services = () => {
  const [activeOption, setActiveOption] = useState(0)

  return (
    <section className={serviceSection}>
      <div className={`${serviceImg} ${left}`}>
          {servicesList.map((srvc, idx) => {
            if (idx === activeOption) {
              return (
                <motion.img
                  key={uuid()}
                  variants={imgAnimation}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  src={`${BASE_IMG_URL}${srvc.photoUrls[0]}.png`}
                  alt={srvc.title}
                />
              )
            }
          })}
      </div>
      <AnimatePresence>
        <ul className={servicesCol}>
          {servicesList.map((srvc, idx) => {
            return (
              <li
                key={srvc.title}
                className={option}
                onClick={() => setActiveOption(idx)}
              >
                <motion.h4
                  className={title}
                  layout
                  transition={{ duration: 0.2 }}
                >
                  <span>+</span>
                  {srvc.title}
                </motion.h4>
                {idx === activeOption && (
                  <>
                    <motion.p
                      layout
                      className={info}
                      variants={infoAnimation}
                      initial='hidden'
                      animate='visible'
                      exit='hidden'
                      transition={{ duration: 0.3 }}
                    >
                      {srvc.blurb}
                    </motion.p>
                    <motion.button
                      className={binaryBtn}
                      layout
                      variants={infoAnimation}
                      initial='hidden'
                      animate='visible'
                      exit='hidden'
                      transition={{ duration: 0.4 }}
                    >
                      <div className={btnSegment}>
                        Book Now
                      </div>
                      <span className={divider} />
                      <div className={btnSegment}>
                        View Gallery
                      </div>
                    </motion.button>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </AnimatePresence>
      <div className={`${serviceImg} ${right}`}>
          {servicesList.map((srvc, idx) => {
            if (idx === activeOption) {
              return (
                <motion.img
                  key={uuid()}
                  variants={imgAnimation}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  src={`${BASE_IMG_URL}${srvc.photoUrls[1]}.png`}
                  alt={srvc.title}
                />
              )
            }
          })}
      </div>
    </section>
  )
}
