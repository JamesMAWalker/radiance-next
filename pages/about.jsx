import React, { Fragment } from 'react'
import Head from 'next/head'

import { AboutBlock } from '../components/blocks/about-block'
import { HeroImg } from '../components/blocks/hero-img'
import { Blurb } from '../components/blocks/blurb'

import {
  aboutPage,
  aboutGrid,
} from '../styles/about/about.module.scss'

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
    imgUrlFrag: 'member_2_toiisv',
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
    imgUrlFrag: 'member_4_k3yako',
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
    imgUrlFrag: 'member_3_wmixyj',
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
      last: 'Myshkin',
    },
    imgUrlFrag: 'member_5_ixodoe',
    role: 'Event Coordinator',
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
      first: 'Pablo',
      last: 'Cruz',
    },
    imgUrlFrag: 'member_1_fwjkyg',
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
          imageUrlFrag={'about_xdlhic'}
          alt='radiance photography team photo'
        />
        <Blurb
          blurbTitle={aboutBlurb.title}
          blurbText={aboutBlurb.text}
          blurbBtn={aboutBlurb.button}
          singleLineTitle
        />
        <section className={aboutGrid}>
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
