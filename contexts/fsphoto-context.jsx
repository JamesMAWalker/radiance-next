import React, { createContext, useState } from 'react'

const defaultValues = {
  photoModalOpen: false,
  currentImgUrl: ''
}

export const FSPhotoContext = createContext(defaultValues)

export const FSPhotoProvider = ({ children }) => {
  const [photoModalOpen, setPhotoModalOpen] = useState(false)
  const [currentImgUrl, setCurrentImgUrl] = useState('')
  const [altTag, setAltTag] = useState('')
  return (
    <FSPhotoContext.Provider
      value={{
        photoModalOpen,
        setPhotoModalOpen,
        currentImgUrl,
        setCurrentImgUrl,
        altTag,
        setAltTag
      }}
    >
      {children}
    </FSPhotoContext.Provider>
  )
}
