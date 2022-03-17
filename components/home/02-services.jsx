import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  useAnimation,
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion'
import Link from 'next/link'

import { urlBuilder } from '../../lib/cloudinary'
import { ContactContext } from '../../contexts/contact-context'

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
import { ArrowNav } from '../blocks/arrow-nav'
import { baseUrlPng } from '../../utils/baseUrl'

const servicesList = [
  {
    title: 'Wedding',
    path: '/wedding-albums',
    photoUrls: [
      'wedding-pair/wedding-left_hmlvo6',
      'wedding-pair/wedding-right_yntqaz',
    ],
    blurb: (
      <>
        Let us help you curate and capture your special day.
        {/* Nullam et metus arcu. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. */}
      </>
    ),
  },
  {
    title: 'Event',
    path: 'events',
    photoUrls: [
      'event-pair/event-left_bpofcn',
      'event-pair/event-right_izf8sw',
    ],
    blurb: (
      <>
        For those special days other than weddings that you
        cherish all the same.
        {/* Nullam et metus arcu. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. */}
      </>
    ),
  },
  {
    title: 'Studio',
    path: 'studio',
    photoUrls: [
      'headshots-pair/Gallery_Image-2_da0mrv',
      'headshots-pair/Gallery_Image-3_dztesw',
    ],
    blurb: (
      <>
        In house photography for professional headshots, as
        well as family portraits.
        {/* Nullam et metus arcu. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. */}
      </>
    ),
  },
]

export const Services = () => {
  const [activeOption, setActiveOption] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [translatePosition, setTranslatePosition] =
    useState(activeOption)
  const { setModalOpen } = useContext(ContactContext)

  const handleServiceNav = (crement) => {
    if ((activeOption <= 0) & (crement < 1)) return
    if ((activeOption >= 2) & (crement > 0)) return
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
    setTranslatePosition({
      transform: positions[activeOption],
    })
  }, [activeOption])


  return (
    <section className={serviceSection}>
      <div className={`${serviceImg} ${left}`}>
        <motion.img
          src={baseUrlPng(
            `index/${servicesList[activeOption].photoUrls[0]}`
          )}
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
                      <a
                        className={btnSegment}
                        // onClick={() => setModalOpen(true)}
                        target='_blank'
                        rel='noreferrer'
                        href={process.env.SQUARE_APPT_URL}
                      >
                        Book Now
                      </a>
                      <span className={divider} />
                      <Link href={`/${srvc.path}`}>
                        <a className={btnSegment}>
                          View Gallery
                        </a>
                      </Link>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </ul>
      {isMobile && (
        <ArrowNav
          handleArrow={handleServiceNav}
          list={servicesList}
          activeOption={activeOption}
        />
      )}
      <div className={`${serviceImg} ${right}`}>
        <motion.img
          // src={baseUrlPng(
          //   `index/${servicesList[activeOption].photoUrls[1]}`
          // )}
          src={urlBuilder(
            `index/${servicesList[activeOption].photoUrls[1]}`
          )}
        />
      </div>
    </section>
  )
}
