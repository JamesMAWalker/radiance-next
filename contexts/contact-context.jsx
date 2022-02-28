import React, { createContext, useState } from 'react'

const defaultValues = {
  modalOpen: true,
  setModalOpen: () => {},
  contactFormContent: {},
}



const eventQuestions = [
  {
    q: 'How long is your event?',
    a: [
      'Multiday',
      'All Day (12+ hours)',
      '9 hours',
      '6 hours',
    ],
  },
  {
    q: 'How many photos would you like?',
    a: ['300 - 500', '500 - 700', '800 - 1200'],
  },
  {
    q: 'Would you like video of your event?',
    a: ['Yes, please!', 'No, thank you.'],
  },
  {
    q: 'Do you have an approximate date for your wedding?',
    a: [
      'within 2 months',
      'within 6 months',
      'more than 6 months',
    ],
  },
]

const studioQuestions = [
  {
    q: 'Would you like to visit our studio? Or do you have a location in mind?',
    a: ['In studio.', 'I have a location.'],
  },
  {
    q: 'Are you interested in an editorial session?',
    a: ['In studio.', 'I have a location.'],
  },
  {
    q: 'How many photos would you like?',
    a: ['300 - 500', '500 - 700', '800 - 1200'],
  },
]

const initialQuestion = {
  q: 'What can we help you with?',
  a: [
    'wedding',
    'headshots',
    'engagement',
    'mitzvah',
    'corporate',
  ],
}

export const ContactContext = createContext(defaultValues)

export const ContactProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [initQuestion, setInitQuestion] =
    useState(initialQuestion)

  return (
    <ContactContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        eventQuestions,
        studioQuestions,
        initQuestion,
        setInitQuestion,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
