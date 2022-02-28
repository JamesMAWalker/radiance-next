import React from 'react'

const eventsss = () => {
  return (
    <div>eventsss</div>
  )
}

export default eventsss

// import React, { Fragment, useEffect, useState } from 'react'
// import Head from 'next/head'
// import { AnimatePresence } from 'framer-motion'

// import { server } from '../../config/index'

// import { HeroImg } from '../../components/blocks/hero-img'
// import { Blurb } from '../../components/blocks/blurb'
// import { PortraitGrid } from '../../components/blocks/portrait-grid'

// import {
//   eventPage,
//   galleryHeader,
// } from '../../styles/event/event.module.scss'

// // + /////////////// + //
// // TODO TODO TODO TODO //
// // + /////////////// + //
// /*
//   ^ Build commmand is erroring out. This may be due to: ^
//   * 1. Adding and element to events JSON:
//   Though it was after adding this that I first encountered the error, I suspect that this is because doing so triggered the need for a rebuild of all the paths, which brought out an error.
//   * 2. Adding cloudinary API functionality:
//   This seems like the more likely cause, since it was here that I changed the most without entirely understanding the implications of those changes. 
//   Perhaps moving the event/wedding data to the API folder as well will fix this issue.
// */

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/events`)

//   if (res.status !== 200) {
//     console.log('res from GSPaths in [id] of events: ', res)
//     throw new Error(
//       `There was an error! Status code is ${res.status}`
//     )
//   }

//   const data = await res.json()
//   console.log('data from gsPaths in [id] of events: ', data);

//   const eventPaths = data.map((evt) => {
//     return {
//       params: { id: evt.title },
//     }
//   })

//   return {
//     paths: eventPaths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const { id } = context.params

//   const res = await fetch(`${server}/events.json`)

//   if (res.status !== 200) {
//     throw new Error(
//       `There was an error! Status code is ${res.status}`
//     )
//   }

//   const data = await res.json()
//   const pageData = data.filter((d) => d.title === id)[0]

//   return {
//     props: { event: pageData },
//   }
// }

// const Event = ({ event: evt }) => {
//   const handleLoadMorePhotos = () => {
//     console.log('loaded more photos!')
//   }

//   return (
//     <div className={eventPage}>
//       <Head>
//         <title>Radiance | Event Photography</title>
//         <meta
//           name='description'
//           content='Wedding photography gallery'
//         />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <main>
//         <HeroImg
//           imageUrlFrag={evt.heroImgUrl}
//           altText={'engagement couple at waters edge'}
//         />
//         <Blurb
//           blurbTitle={evt.header}
//           blurbText={evt.blurbs.map((txt, idx) => (
//             <span key={idx}>{txt}</span>
//           ))}
//           blurbBtn={evt.button}
//           singleLineTitle
//         />
//         <AnimatePresence>
//           <PortraitGrid
//             imageContents={evt.photos}
//             // loadMore={handleLoadMorePhotos}
//           />
//         </AnimatePresence>
//       </main>
//     </div>
//   )
// }

// export default Event
