import React, { Fragment } from 'react'
import Head from 'next/head'


import { urlBuilder } from '../lib/cloudinary'

import { Blurb } from '../components/blocks/blurb'


import { packageData } from '../public/pacakge-data'

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
  return (
    <div className={packageBlock}>
      <div className={packageImg} style={{ background: color }}>
        <img src={urlBuilder(imgUrl)} alt={name} />
      </div>
      <h3 className={titleStyle}>
        <span style={{ color: color }}>{name}</span>
        <span>Label</span>
      </h3>
      <p className={priceStyle}>${price}</p>
      <p className={descStyle}>{description}</p>
      <a
        className={`text-btn ${packageBtn}`}
        href={process.env.SQUARE_APPT_URL}
        style={{ color: color }}
      >
        Get Started
      </a>
    </div>
  )
}

const Packages = () => {
  const { title, blurb, wedding, studio } = packageData

  return (
    <div className={packages}>
      <Head>
        <title>Radiance | Packages</title>
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
