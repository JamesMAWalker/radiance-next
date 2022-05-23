import React, { createContext, useState } from 'react'

const defaultValues = {
  contactModalOpen: false,
  setContactModalOpen: () => {},
  menuModalOpen: false,
  setMenuModalOpen: () => {},
  photoModalOpen: false,
  setPhotoModalOpen: () => {},
}

export const LayoutContext = createContext(defaultValues)

export const LayoutProvider = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [menuModalOpen, setMenuModalOpen] = useState(false)
  
  const [photoModalOpen, setPhotoModalOpen] = useState(false)
  const [currentImgUrl, setCurrentImgUrl] = useState('')
  const [altTag, setAltTag] = useState('')

  return (
    <LayoutContext.Provider
      value={{
        contactModalOpen,
        setContactModalOpen,
        menuModalOpen,
        setMenuModalOpen,
        photoModalOpen,
        setPhotoModalOpen,
        currentImgUrl,
        setCurrentImgUrl,
        altTag,
        setAltTag,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
