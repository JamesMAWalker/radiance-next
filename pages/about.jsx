import React, { Fragment } from 'react'
import Head from 'next/head'

import { AboutBlock } from '../components/blocks/about-block'
import { HeroImg } from '../components/blocks/hero-img'
import { Blurb } from '../components/blocks/blurb'

import {
  aboutPage,
  aboutContainer,
  location,
  locationInfo,
  locationMap,
  locationPin,
  divider,
  address,
  teamHeader,
  backBtn
} from '../styles/about/about.module.scss'
import { LocationIcon } from '../components/svg/location'

import { aboutInfo } from '../public/about-data'

const About = () => {
  const { locationInfo: loc, members } = aboutInfo

  const handleMapClick = () => {
    window.open(process.env.GOOGLE_MAPS_URL, '_blank')
  }

  return (
    <div className={aboutPage}>
      <Head>
        <title>Radiance | About Us</title>
        <meta
          name='description'
          content='About the Radiance Photography Team'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroImg
          imageUrlFrag={'about/hero_xdlhic'}
          alt='radiance photography team photo'
        />
        <Blurb
          blurbTitle={aboutInfo.title}
          blurbText={aboutInfo.text}
          blurbBtn={aboutInfo.button}
          btnLink={process.env.SQUARE_APPT_URL}
          singleLineTitle
          wideText
        />
        <section className={location}>
          <div className={locationInfo}>
            <h4>
              {loc.name}
              <span className={divider} />
            </h4>
            <p>
              <a
                className={address}
                href={process.env.GOOGLE_MAPS_URL}
              >
                {loc.address}
              </a>
              <a href={`tel://+13102688222`}>{loc.phone}</a>
              <a href={`mailto:${loc.email}`}>
                {loc.email}
              </a>
            </p>
          </div>
          <div
            className={locationMap}
            onClick={handleMapClick}
          >
            <img
              src='/location.png'
              alt='radiance location'
            />
            <div className={locationPin}>
              <LocationIcon />
            </div>
          </div>
        </section>
        <h2 className={teamHeader}>
          Meet the Radiance Team
        </h2>
        <section className={aboutContainer}>
          {members.map((mmbr, idx) => {
            const reverse = !(idx % 2 === 0)

            return (
              <Fragment key={mmbr.imgUrlFrag}>
                <AboutBlock
                  member={mmbr}
                  reverse={reverse}
                />
              </Fragment>
            )
          })}
        </section>
        <button className={`text-btn ${backBtn}`}>Back to Home →</button>
      </main>
    </div>
  )
}

export default About
