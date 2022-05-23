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



// * Services data * //

export const servicesList = [
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
      </>
    ),
  },
  {
    title: 'Event',
    path: 'events/event',
    photoUrls: [
      'event-pair/event-left_bpofcn',
      'event-pair/event-right_izf8sw',
    ],
    blurb: (
      <>
        For those special days other than weddings that you
        cherish all the same.
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
      </>
    ),
  },
]



// * Events data * //

export const eventBlurbs = {
  engagement: [
    `We know how much it means for you and your family to celebrate the passage of a child into adulthood. Our focus is in capturing the perspectives and emotions of everyone gathered to honor the tradition. From grandparents to grandchildren, everyone's face tells a story - we gather all those reactions into a collection of moments that you'll cherish forever. `,
    `Get in touch or schedule an appointment to start planning with us.
`,
  ],
  event: [
    `Celebrate the beauty and happiness of the everyday with our event photography. Whether it's a birthday on the beach or just a pleasant afternoon in the park, we capture the small moments that reflect the simple joy of being. `,
    `Contact us with your date and location to get started.`,
  ],
  mitzvah: [
    `Engagement is a special moment all its own. It's a celebration of commitment and the start of a future together. Let us help tell the story of your engagement wtih images that express the depth of feeling you have ahead of the big day.`,
    `Contact us with your date and location to get started.`,
  ],
}
