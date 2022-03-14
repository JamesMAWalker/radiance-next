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
  address
} from '../styles/about/about.module.scss'
import { LocationIcon } from '../components/svg/location'

const aboutBlurb = {
  title: `Meet the Radiance Team`,
  text: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum accumsan mollis lectus sed mollis.
      Sed consequat lorem quis est pellentesque, ut ornare
      velit lobortis. Suspendisse volutpat, metus placerat
      luctus condimentum, dui nibh tempus ligula, blandit
      pharetra augue lectus vel lacus.
    </>
  ),
  button: 'Work With Us',
}

const teamMembers = [
  {
    name: {
      first: 'Peyman',
      last: 'Khazan',
    },
    imgUrlFrag: 'about/member_2_toiisv',
    role: 'Studio Director',
    about: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum accumsan mollis lectus sed mollis.
        Sed consequat lorem quis est pellentesque, ut ornare
        velit lobortis. Suspendisse volutpat, metus placerat
        luctus condimentum, dui nibh tempus ligula, blandit
        pharetra augue lectus vel lacus. Sed consequat lorem
        quis est pellentesque, ut ornare velit lobortis.
      </>
    ),
    button: `Let's Talk →`,
  },
  {
    name: {
      first: 'Nishelle',
      last: 'Walker',
    },
    imgUrlFrag: 'about/member_4_k3yako',
    role: 'Studio Photographer',
    about: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum accumsan mollis lectus sed mollis.
        Sed consequat lorem quis est pellentesque, ut ornare
        velit lobortis. Suspendisse volutpat, metus placerat
        luctus condimentum, dui nibh tempus ligula, blandit
        pharetra augue lectus vel lacus. Sed consequat lorem
        quis est pellentesque, ut ornare velit lobortis.
      </>
    ),
    button: `Favorite Photos`,
  },
  {
    name: {
      first: 'Viktoria',
      last: 'Sirakova',
    },
    imgUrlFrag: 'about/member_3_wmixyj',
    role: 'Event Photographer',
    about: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum accumsan mollis lectus sed mollis.
        Sed consequat lorem quis est pellentesque, ut ornare
        velit lobortis. Suspendisse volutpat, metus placerat
        luctus condimentum, dui nibh tempus ligula, blandit
        pharetra augue lectus vel lacus. Sed consequat lorem
        quis est pellentesque, ut ornare velit lobortis.
      </>
    ),
    button: `Favorite Photos`,
  },
  {
    name: {
      first: 'Luba',
      last: 'Shteyn',
    },
    imgUrlFrag: 'about/member_5_ixodoe',
    role: 'Event Coordinator',
    about: (
      <>
        Already steeped in the visual arts, Luba’s formal
        education continued at the Kyiv National University
        of Culture and Art in Ukraine, where she studied
        visual arts and music. In Los Angeles, Luba worked
        for a variety of companies producing, shooting, and
        editing weddings, real estate promos, car shows,
        plays, fashion shows, concerts, and more.
      </>
    ),
    button: `Favorite Photos`,
  },
  {
    name: {
      first: 'Pablo',
      last: 'Cruz',
    },
    imgUrlFrag: 'about/member_1_fwjkyg',
    role: 'Videographer',
    about: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vestibulum accumsan mollis lectus sed mollis.
        Sed consequat lorem quis est pellentesque, ut ornare
        velit lobortis. Suspendisse volutpat, metus placerat
        luctus condimentum, dui nibh tempus ligula, blandit
        pharetra augue lectus vel lacus. Sed consequat lorem
        quis est pellentesque, ut ornare velit lobortis.
      </>
    ),
    button: `Favorite Photos`,
  },
]

const About = () => {

  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Radiance+Photography+Studio/@34.0520466,-118.4392824,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bbf11e2748bd:0x5da4428eec275e7a!8m2!3d34.0520466!4d-118.4392824?hl=en', '_blank'
      )
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
          blurbTitle={aboutBlurb.title}
          blurbText={aboutBlurb.text}
          blurbBtn={aboutBlurb.button}
          btnLink={process.env.SQUARE_APPT_URL}
          singleLineTitle
        />
        <section className={location}>
          <div className={locationInfo}>
            <h4>
              <b>Radiance</b>
              <span>Photography Studio</span>
              <span className={divider} />
            </h4>
            <p>
              <a className={address}>
                1643 Westwood Boulevard <br /> Los Angeles,
                CA
              </a>
              <a>310 . 268 . 8222</a>
              <a href='mailto:info@radiancephotographystudio.com'>
                info@radiancephotographystudio.com
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
        <section className={aboutContainer}>
          {teamMembers.map((mmbr, idx) => {
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
      </main>
    </div>
  )
}

export default About
