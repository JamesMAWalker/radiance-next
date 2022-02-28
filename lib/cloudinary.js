export const search = async (options = {}) => {
  const params = {
    ...options,
    max_results: 5,
    expression: 'folder=index/_gallery',
  }

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor
    delete params.nextCursor
  }

  const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')

  const res = await fetch(
    `
    https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}
  `,
    {
      headers: {
        Authorization: `Basic ${Buffer(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  )

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  return data
}

export const mapImageResources = (resources) => {
  return resources.map((filteredImages) => filteredImages.public_id)
}











// const nextGalleryData = nextCursor
//   .filter((rsrc) => rsrc.public_id.includes('_gallery'))
//   .map((filteredImages) => filteredImages.public_id)
