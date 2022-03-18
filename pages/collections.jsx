import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { urlBuilder } from '../lib/cloudinary'
import { collectionData } from '../public/collection-data'

import { Blurb } from '../components/blocks/blurb'

import { fadeUp } from '../animations/fade'
import { smooth } from '../animations/transitions'
import {
  packages,
  packageBlock,
  packageImg,
  packageBtn,
  title as titleStyle,
  price as priceStyle,
  desc as descStyle,
  wedding as weddingStyle,
  studio as studioStyle,
} from '../styles/packages/packages.module.scss'

const PackageBlock = ({
  name,
  price,
  description,
  color = '#000',
  imgUrl = 'hero_gclne3',
}) => {
  const { ref: pkgRef, inView: pkgInView } = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (pkgInView) {
      controls.start('visible')
    }
  }, [controls, pkgInView])

  return (
    <motion.div
      className={packageBlock}
      variants={fadeUp}
      initial='hidden'
      animate={controls}
      exit='hidden'
      transition={smooth(2)}
    >
      <span className='vp-marker' ref={pkgRef}></span>
      <div
        className={packageImg}
        style={{ background: color }}
      >
        <img src={urlBuilder(imgUrl)} alt={name} />
      </div>
      <h3 className={titleStyle}>
        <span style={{ color: color }}>{name}</span>
        <span>Label</span>
      </h3>
      {/* <p className={priceStyle}>${price}</p> */}
      <p className={descStyle}>{description}</p>
      <a
        className={`text-btn ${packageBtn}`}
        href={process.env.SQUARE_APPT_URL}
        style={{ color: color }}
      >
        Get Started
      </a>
    </motion.div>
  )
}

const Packages = () => {
  const { title, blurb, wedding, studio } = collectionData

  return (
    <div className={packages}>
      <Head>
        <title>Radiance | Photography Collections</title>
        <meta
          name='description'
          content='About the Radiance Photography Team'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Blurb
        blurbTitle={title}
        blurbText={blurb}
        blurbBtn={'Book a Studio Session'}
        singleLineTitle
        btnLink={process.env.SQUARE_APPT_URL}
      />
      <section className={weddingStyle}>
        <AnimatePresence>
          {wedding.map((wd) => {
            return (
              <PackageBlock
                key={wd.name}
                name={wd.name}
                imgUrl={wd.imgUrl}
                price={wd.price}
                color={wd.color}
                description={wd.description}
              />
            )
          })}
        </AnimatePresence>
      </section>
      <section className={studioStyle}>
        {/* {studio.map((st) => {
          return (
            <PackageBlock
              key={st.name}
              name={st.name}
              price={st.price}
              description={st.description}
            />
          )
        })} */}
      </section>
    </div>
  )
}

export default Packages
