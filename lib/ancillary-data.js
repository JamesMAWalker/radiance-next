// * Link data * //

export const pageLinks = [
  {
    mmOrder: 6,
    path: '/',
    text: 'Home',
  },
  {
    mmOrder: 7,
    path: '/about',
    text: 'About',
  },
  {
    mmOrder: 5,
    path: '/collections',
    text: 'Collections',
  },
  {
    mmOrder: 8,
    path: '/#contact',
    text: 'Contact',
  },
  {
    mmOrder: 1,
    path: '/wedding-albums',
    text: 'Wedding',
  },
  {
    mmOrder: 3,
    path: '/events/engagement',
    text: 'Engagement',
  },
  {
    mmOrder: 4,
    path: '/events/mitzvah',
    text: 'Mitzvah',
  },
  {
    mmOrder: 2,
    path: '/studio',
    text: 'Studio',
  },
]


export const footerLinks = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'Contact',
    slug: '/#contact',
  },
  {
    name: 'Wedding',
    slug: '/wedding-albums',
  },
  {
    name: 'Mitzvah',
    slug: '/events/mitzvah',
  },
  {
    name: 'Engagement',
    slug: '/events/engagement',
  },
  {
    name: 'Studio',
    slug: '/studio',
  },
  {
    name: 'Instagram',
    slug: 'https://www.instagram.com/radiancephotostudio/',
  },
  {
    name: 'Facebook',
    slug: 'https://www.facebook.com/RadiancePhotographyStudio',
  },
]

export const mainMenuLinks = {
  primary: [
    {
      name: 'Wedding',
      slug: '/wedding-albums',
    },
    {
      name: 'Studio',
      slug: '/studio',
    },
    {
      name: 'Mitzvah',
      slug: '/events/mitzvah',
    },
    {
      name: 'Engagement',
      slug: '/events/engagement',
    },
    {
      name: 'Collections',
      slug: '/collections',
    },
  ],
  secondary: [
    {
      name: 'Home',
      slug: '/',
    },
    {
      name: 'About',
      slug: '/about',
    },
    {
      name: 'Contact',
      slug: '/#contact',
    },
  ],
}


// * Wedding data structures * //

export const albumsList = [
  {
    title: `Frank & Estelle`,
    photos: ['pair-2_jfoyvz.png', 'pair-1_wmwf6h.png'],
  },
  {
    title: `Fouad & Elaine`,
    photos: [
      'photo-couple-04_rfp3aa.png',
      'photo-couple-03_rcgown.png',
    ],
  },
  {
    title: `Frederic & Effie`,
    photos: [
      'photo-couple-01_njmuqe.png',
      'photo-couple-02_eefotn.png',
    ],
  },
  {
    title: `Francis & Edith`,
    photos: [
      'photo-couple-06_nku61v.png',
      'photo-couple-05_yrsdn7.png',
    ],
  },
]

export const weddingBlurb = {
  title: `Wedding Photography`,
  text: (
    <>
      Romantic, authentic, and beautiful light. Those are
      the elements we strive for most in our wedding
      photography. Our studio's theme is a love of natural
      light, and we use this passion to make the most of
      each photo.
      <br />
      <br />
      We focus on the people, the moments, and the small
      details that tell the story of your day.
    </>
  ),
  button: 'Book Your Wedding',
}



// * Studio data * //

export const studioBlurb = {
  title: `Studio Photography`,
  text: (
    <>
      Our state-of-the-art studio has been carefully crafted
      to accommodate a range of different photography
      styles. Headshots, artistic editorial sets, family
      portraits - our studio and professional photographers
      bring art to life.
      <br />
      <br />
      Our Westwood location is conveniently accessible from
      anywhere in Los Angeles. Contact us, or get started
      below to schedule an appointment.
    </>
  ),
  button: 'Book Your Shoot',
}

export const studioImages = {
  hero: 'headshots/hero-01_ex5hqd',
  categories: [
    {
      id: 'acting-modeling',
      title: (
        <>
          Acting & <br /> Modeling
        </>
      ),
    },
    {
      id: 'business-corporate',
      title: (
        <>
          Business & <br /> Corporate
        </>
      ),
    },
    {
      title: (
        <>
          Personal & <br /> Family
        </>
      ),
    },
  ],
}