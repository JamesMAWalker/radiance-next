export const search = async (options = {}) => {
  const params = {
    ...options,
  }

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor
    delete params.nextCursor
  }

  const paramString = Object.keys(params)
    .map(
      (key) => `${key}=${encodeURIComponent(params[key])}`
    )
    .join('&')

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

export const genPathsFromResources = (
  resources,
  stringToRemove
) => {
  const pathNames = new Set()
  resources.forEach((rsrc) =>
    pathNames.add(rsrc.folder.replace(stringToRemove, ''))
  )
  return Array.from(pathNames).sort()
}

export const mapResourcesToPaths = (paths, resources) => {
  const data = []
  paths.forEach((pth) => {
    const pathImages = resources
      .filter((rsc) => rsc.folder.includes(pth))
      .map((rsc) => rsc.public_id)
    const album = {
      path: pth,
      albumPhotoUrls: pathImages
    }
    data.push(album)
  })
  return data
}

export const mapResourcesToAlbumPreviews = (
  resources,
  stringToRemove
) => {
  const paths = genPathsFromResources(
    resources,
    stringToRemove
  )

  // get 1st 2 photos from each folder
  const getAlbumPairPhotos = (path, imgResources) => {
    return imgResources
      .filter((iRsc) => iRsc.folder.includes(path))
      .map(
        (filteredResources) => filteredResources.public_id
      )
      .splice(0, 2)
  }

  // return album object
  return paths.map((pth) => {
    return {
      path: pth,
      title: pth.replace('-', ' & '),
      pair: getAlbumPairPhotos(pth, resources),
    }
  })
}

export const mapImageResources = (resources) => {
  return resources.map(
    (filteredImages) => filteredImages.public_id
  )
}

export const divideImageSubfolders = (
  resources,
  ...subFolderNames
) => {
  const folderData = {}
  const folderNames = [...subFolderNames]

  folderNames.forEach((fn) => {
    const folder = resources.filter((rsc) =>
      rsc.folder.includes(fn)
    )
    const processedFolder = folder.map(
      (fldrItm) => fldrItm.public_id
    )
    folderData[fn] = processedFolder
  })

  return resources.map(
    (filteredImages) => filteredImages.public_id
  )
}
