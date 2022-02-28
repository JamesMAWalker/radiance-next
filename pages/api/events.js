const events = [
  {
    "title": "engagement",
    "heroImgUrl": "engagement_i0ov0f",
    "header": "Engagement Photography",
    "blurbs": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan mollis lectus sed mollis. Sed consequat lorem quis est pellentesque, ut ornare velit lobortis. Suspendisse volutpat, metus placerat luctus condimentum, dui nibh tempus ligula, blandit pharetra augue lectus vel lacus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu."
    ],
    "button": "Book Your Event",
    "photos": [
      "studio-photo005_bkfunf.png",
      "studio-photo010_jkryvh.png",
      "studio-photo009_oauenb.png",
      "studio-photo004_a7r6oa.png",
      "studio-photo003_vjsse5.png",
      "studio-photo003_vqeer0.png",
      "studio-photo007_aody40.png",
      "studio-photo002_f44eib.png"
    ]
  },
  {
    "title": "mitzvah",
    "heroImgUrl": "bar-1_uhjdd0",
    "header": "Mitzvah Photography",
    "blurbs": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan mollis lectus sed mollis. Sed consequat lorem quis est pellentesque, ut ornare velit lobortis. Suspendisse volutpat, metus placerat luctus condimentum, dui nibh tempus ligula, blandit pharetra augue lectus vel lacus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu."
    ],
    "button": "Book Your Event",
    "photos": [
      "studio-photo004_a7r6oa.png",
      "studio-photo010_jkryvh.png",
      "studio-photo007_aody40.png",
      "studio-photo003_vjsse5.png",
      "studio-photo003_vqeer0.png",
      "studio-photo005_bkfunf.png",
      "studio-photo002_f44eib.png",
      "studio-photo009_oauenb.png"
    ]
  },
  {
    "title": "events",
    "heroImgUrl": "event/stock_tu4j1f",
    "header": "Event Photography",
    "blurbs": [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan mollis lectus sed mollis. Sed consequat lorem quis est pellentesque, ut ornare velit lobortis. Suspendisse volutpat, metus placerat luctus condimentum, dui nibh tempus ligula, blandit pharetra augue lectus vel lacus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus arcu."
    ],
    "button": "Book Your Event",
    "photos": [
      "studio-photo004_a7r6oa.png",
      "studio-photo010_jkryvh.png",
      "studio-photo007_aody40.png",
      "studio-photo003_vjsse5.png",
      "studio-photo003_vqeer0.png",
      "studio-photo005_bkfunf.png",
      "studio-photo002_f44eib.png",
      "studio-photo009_oauenb.png"
    ]
  }
]

export default async function handler(req, res) {
  res.status(200).json(events)
}