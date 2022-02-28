const wAlbums = [
  {
    path: 'frank-and-estelle',
    title: 'Frank & Estelle',
    pairPhotoUrls: ['pair-2_jfoyvz', 'pair-1_wmwf6h'],
    heroPhotoUrl: 'hero_yegtig',
    albumPhotoUrls: [
      {
        urlFrag: 'album-photo-08_skjtwt',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-02_wjl52i',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-07_aue8iu',
        gridSpace: 'f',
      },
      {
        urlFrag: 'album-photo-06_tdja6u',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-01_fb4jvy',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-03_lc6bek',
        gridSpace: 'h',
      },
    ],
  },
  {
    path: 'fouad-and-elaine',
    title: 'Fouad & Elaine',
    pairPhotoUrls: [
      'photo-couple-04_rfp3aa',
      'photo-couple-03_rcgown',
    ],
    heroPhotoUrl: 'photo-couple-03_rcgown',
    albumPhotoUrls: [
      {
        urlFrag: 'album-photo-08_skjtwt',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-02_wjl52i',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-07_aue8iu',
        gridSpace: 'f',
      },
      {
        urlFrag: 'album-photo-06_tdja6u',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-01_fb4jvy',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-03_lc6bek',
        gridSpace: 'h',
      },
    ],
  },
  {
    path: 'frederic-and-effie',
    title: 'Frederic & Effie',
    pairPhotoUrls: [
      'photo-couple-01_njmuqe',
      'photo-couple-02_eefotn',
    ],
    heroPhotoUrl: 'wedding_tohrlj',
    albumPhotoUrls: [
      {
        urlFrag: 'album-photo-08_skjtwt',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-02_wjl52i',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-07_aue8iu',
        gridSpace: 'f',
      },
      {
        urlFrag: 'album-photo-06_tdja6u',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-01_fb4jvy',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-03_lc6bek',
        gridSpace: 'h',
      },
    ],
  },
  {
    path: 'francis-and-edith',
    title: 'Francis & Edith',
    pairPhotoUrls: [
      'photo-couple-05_yrsdn7',
      'photo-couple-06_nku61v',
    ],
    heroPhotoUrl: 'columns-kiss_dvlhj7',
    albumPhotoUrls: [
      {
        urlFrag: 'album-photo-08_skjtwt',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-02_wjl52i',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-07_aue8iu',
        gridSpace: 'f',
      },
      {
        urlFrag: 'album-photo-06_tdja6u',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-01_fb4jvy',
        gridSpace: 'q',
      },
      {
        urlFrag: 'album-photo-03_lc6bek',
        gridSpace: 'h',
      },
    ],
  },
]

export default async function handler(req, res) {
  res.status(200).json(wAlbums)
}
