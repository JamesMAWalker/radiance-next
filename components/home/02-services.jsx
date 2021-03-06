// 3rd party imports
import React, {
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

// Internal Utils and Data
import { baseUrlPng } from '../../utils/baseUrl'
import { servicesList } from '../../lib/ancillary-data'

// Components
import { ArrowNav } from '../blocks/arrow-nav'

// Animations
import {
  fadeIn,
  fadeUp,
} from '../../animations/fade.js'
import {
  phases,
  smooth,
} from '../../animations/transitions'

// Styles
import {
  serviceSection,
  servicesCol,
  option,
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



const BinaryButton = ({ path }) => {
  return (
    <button className={binaryBtn}>
      <a
        className={btnSegment}
        target='_blank'
        rel='noreferrer'
        href={process.env.SQUARE_APPT_URL}
      >
        Book Now
      </a>
      <span className={divider} />
      <Link href={`/${path}`}>
        <a className={btnSegment}>View Gallery</a>
      </Link>
    </button>
  )
}



export const Services = () => {
  const [activeOption, setActiveOption] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [translatePosition, setTranslatePosition] =
    useState(activeOption)

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

  const layoutAniProps = {
    layout: true,
    // ...phases,
    // ...fadeIn
  }
  

  return (
    <motion.section
      className={serviceSection}
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      transition={smooth(1)}
    >
      <div className={`${serviceImg} ${left}`}>
        <AnimatePresence exitBeforeEnter>
          {servicesList.map((srvc, idx) => {
            if (idx !== activeOption) return
            return (
              <motion.img
                key={`img-L-0${idx}`}
                variants={fadeIn}
                animate='visible'
                exit='hidden'
                transition={smooth(0.5)}
                src={baseUrlPng(
                  `index/${srvc.photoUrls[0]}`
                )}
              />
            )
          })}
        </AnimatePresence>
      </div>
      <motion.ul
        className={servicesCol}
        layout
        style={isMobile ? translatePosition : null}
      >
        {servicesList.map((srvc, idx) => {
          const selectStyle = {
            color: `${
              idx === activeOption
                ? 'var(--text-color)'
                : 'var(--the-good-silver)'
            }`,
          }

          return (
            <motion.li
              key={srvc.title}
              className={option}
              onClick={() => setActiveOption(idx)}
            >
              <motion.h1
                className={title}
                style={selectStyle}
              >
                <span>+</span>
                {srvc.title}
              </motion.h1>
              {(idx === activeOption || isMobile) && (
                <div className={infoContainer}>
                  <motion.p
                    key={srvc.title}
                    className={info}
                    variants={fadeIn}
                    layout
                    {...phases}
                  >
                    {srvc.blurb}
                  </motion.p>
                  <BinaryButton path={srvc.path} />
                </div>
              )}
            </motion.li>
          )
        })}
      </motion.ul>
      {isMobile && (
        <ArrowNav
          handleArrow={handleServiceNav}
          list={servicesList}
          activeOption={activeOption}
        />
      )}
      <div className={`${serviceImg} ${right}`}>
        <AnimatePresence exitBeforeEnter>
          {servicesList.map((srvc, idx) => {
            if (idx !== activeOption) return
            return (
              <motion.img
                key={`img-R-0${idx}`}
                variants={fadeIn}
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={smooth(0.5)}
                src={baseUrlPng(
                  `index/${srvc.photoUrls[1]}`
                )}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
