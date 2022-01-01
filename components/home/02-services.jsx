import React, { useEffect, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

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
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu.',
  },
  {
    title: 'Event',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu.',
  },
  {
    title: 'Studio',
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

export const Services = () => {
  const [activeOption, setActiveOption] = useState(0)

  return (
    <section className={serviceSection}>
      <div className={`${serviceImg} ${left}`}>
        <img
          src={`${BASE_IMG_URL}wedding-left_hmlvo6.png`}
          alt='bride with crown'
        />
      </div>
      <AnimateSharedLayout>
        <ul className={servicesCol}>
          {servicesList.map((srvc, idx) => {
            return (
              <li
                key={srvc.title}
                className={option}
                onClick={() => setActiveOption(idx)}
              >
                <motion.h4 className={title} layout transition={{ duration: .2 }}>
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
      </AnimateSharedLayout>
      <div className={`${serviceImg} ${right}`}>
        <img
          src={`${BASE_IMG_URL}wedding-right_yntqaz.png`}
          alt='tall wedding cake'
        />
      </div>
    </section>
  )
}
