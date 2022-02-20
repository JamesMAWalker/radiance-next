import React, { createContext, useState } from 'react'

const defaultValues = {
  modalOpen: true,
  setModalOpen: () => {},
}

export const ContactContext = createContext(defaultValues)

export const ContactProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <ContactContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
