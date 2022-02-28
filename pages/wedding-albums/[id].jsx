import React from 'react'

const weddingssss = () => {
  return (
    <div>weddingssss</div>
  )
}

export default weddingssss

// import React from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// import { server } from '../../config/index'

// import { HeroImg } from '../../components/blocks/hero-img'
// import { Blurb } from '../../components/blocks/blurb'

// import {
//   albumPage,
//   masonryGallery,
//   galleryImg,
//   quart,
//   half,
//   full,
//   albumNavCard,
//   photoWrap,
//   cardTitle,
//   prev,
//   next,
//   viewAll,
// } from '../../styles/wedding/wedding-album.module.scss'

// const albumInfo = {
//   title: `Frank & Estelle`,
//   text: (
//     <>
//       Lorem ipsum dolor sit amet, consectetur adipiscing
//       elit. Vestibulum accumsan mollis lectus sed mollis.
//       Sed consequat lorem quis est pellentesque, ut ornare
//       velit lobortis. Suspendisse volutpat, metus placerat
//       luctus condimentum, dui nibh tempus ligula, blandit
//       pharetra augue lectus vel lacus.
//     </>
//   ),
//   button: 'Book Your Wedding',
//   nextAlbum: {
//     imgUrlFrag: 'album-photo-05_yt5aa9.png',
//     title: 'Fouad & Elaine',
//     link: 'fouad-elaine',
//   },
//   prevAlbum: {
//     imgUrlFrag: 'album-photo-04_slvyj2.png',
//     title: 'Frederic & Effie',
//     link: 'frederic-effie',
//   },
// }

// const BASE_IMG_URL = `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:good/v1641261714/wedding/dev/`

// const albumPhotos = [
//   {
//     urlFrag: 'album-photo-08_skjtwt.png',
//     gridSpace: quart,
//   },
//   {
//     urlFrag: 'album-photo-02_wjl52i.png',
//     gridSpace: quart,
//   },
//   {
//     urlFrag: 'album-photo-07_aue8iu.png',
//     gridSpace: full,
//   },
//   {
//     urlFrag: 'album-photo-06_tdja6u.png',
//     gridSpace: quart,
//   },
//   {
//     urlFrag: 'album-photo-01_fb4jvy.png',
//     gridSpace: quart,
//   },
//   {
//     urlFrag: 'album-photo-03_lc6bek.png',
//     gridSpace: half,
//   },
// ]

// const sizeMatrix = {
//   q: quart,
//   f: full,
//   h: half,
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/w-albums.js`)

//   // if (res.status !== 200) {
//   //   console.log('res from GSP in [id] of weddings: ', res)
//   //   throw new Error(
//   //     `There was an error! Status code is ${res.status}`
//   //   )
//   // }

//   const data = await res.json()
//   console.log(
//     'data from gsPaths in [id] of weddings: ',
//     data
//   )

//   const eventPaths = data.map((alb) => {
//     return {
//       params: { id: alb.path },
//     }
//   })

//   return {
//     paths: eventPaths,
//     fallback: true,
//   }
// }

// export const getStaticProps = async (context) => {
//   const { id } = context.params

//   const res = await fetch(`${server}/api/w-albums.js`)

//   // if (res.status !== 200) {
//   //   throw new Error(
//   //     `There was an error! Status code is ${res.status}`
//   //   )
//   // }

//   const data = await res.json()
//   const pageIdx = data.findIndex((d) => d.path === id)
//   const finalIdx = data.length - 1

//   const pageData = data.filter((d) => d.path === id)[0]
//   const nextPageData = data.filter((_, idx) => {
//     return pageIdx === finalIdx
//       ? idx === 0
//       : idx === pageIdx + 1
//   })[0]
//   const prevPageData = data.filter((_, idx) => {
//     return pageIdx === 0
//       ? idx === finalIdx
//       : idx === pageIdx - 1
//   })[0]

//   return {
//     props: {
//       album: pageData,
//       next: nextPageData,
//       prev: prevPageData,
//     },
//   }
// }

// const WeddingAlbum = (props) => {
//   const { album: alb, next: nxt, prev: prv } = props

//   const router = useRouter()
//   console.log('router: ', router)

//   return (
//     <div>
//       <Head>
//         <title>Radiance | {albumInfo.title}</title>
//         <meta
//           name='description'
//           content='Wedding photography gallery'
//         />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <main className={albumPage}>
//         <HeroImg
//           imageUrlFrag={alb.heroPhotoUrl}
//           altText={'radiant wedding couple'}
//         />
//         <Blurb
//           blurbTitle={alb.title}
//           blurbText={albumInfo.text}
//           blurbBtn={albumInfo.button}
//           singleLineTitle
//         />
//         <section className={masonryGallery}>
//           {alb.albumPhotoUrls.map((photo) => {
//             return (
//               <div
//                 key={photo.urlFrag}
//                 className={`${galleryImg} ${
//                   sizeMatrix[photo.gridSpace]
//                 }`}
//               >
//                 <img
//                   src={`${BASE_IMG_URL}/${photo.urlFrag}`}
//                   alt='wedding album photo'
//                 />
//               </div>
//             )
//           })}
//           <Link href={`/wedding-albums/${prv.path}`}>
//             <a
//               className={`${albumNavCard} ${prev} ${quart}`}
//             >
//               <div className={photoWrap}>
//                 <img
//                   src={`${BASE_IMG_URL}/${prv.heroPhotoUrl}`}
//                   alt=''
//                 />
//               </div>
//               <h5 className={cardTitle}>{prv.title}</h5>
//             </a>
//           </Link>
//           <Link href={`/wedding-albums/${nxt.path}`}>
//             <a
//               className={`${albumNavCard} ${next} ${quart}`}
//             >
//               <div className={photoWrap}>
//                 <img
//                   src={`${BASE_IMG_URL}/${nxt.heroPhotoUrl}`}
//                   alt=''
//                 />
//               </div>
//               <h5 className={cardTitle}>{nxt.title}</h5>
//             </a>
//           </Link>
//         </section>
//         <Link href='/wedding-albums'>
//           <a className={viewAll}>
//             <span className='text-btn'>
//               Return to Albums
//             </span>
//           </a>
//         </Link>
//       </main>
//     </div>
//   )
// }

// export default WeddingAlbum
