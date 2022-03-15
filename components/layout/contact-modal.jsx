import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import FocusTrap from 'focus-trap-react'
import { AnimatePresence, motion } from 'framer-motion'
import { send } from 'emailjs-com'

import { ContactContext } from '../../contexts/contact-context'
import { fadeIn, fadeUp } from '../../animations/fade.js'

import {
  shade,
  modal,
  closeBtn,
  form as formStyle,
  question,
  inputs,
  fullname,
  email,
  message,
  submitBtn,
} from '../../styles/layout/contact-modal.module.scss'

export const ContactModal = () => {
  const {
    modalOpen,
    setModalOpen,
    eventQuestions,
    studioQuestions,
  } = useContext(ContactContext)
  const [modalPageNum, setModalPageNum] = useState(0)

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Radiance Photography',
    message: '',
    reply_to: '',
  })

  // stop scrolling when contact modal is open
  useEffect(() => {
    // if (modalOpen) {
    //   document.documentElement.style.overflow = 'hidden'
    // } else {
    //   document.documentElement.style.overflow = ''
    // }
  }, [modalOpen])

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [modalOpen, setModalOpen])

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  // Email form functions

  useEffect(() => {
    console.log('toSend changed: ', toSend)
  }, [toSend])

  const handleChange = (e) => {
    setToSend((prv) => {
      return {
        ...prv,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    send(
      `${process.env.EMAILJS_SERVICE_ID}`,
      `${process.env.EMAILJS_TEMPLATE_ID}`,
      toSend,
      `${process.env.EMAILJS_USER_ID}`,
    )
      .then((response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  return (
    <AnimatePresence>
      {modalOpen && (
        <FocusTrap active={modalOpen}>
          <motion.div
            className={shade}
            variants={fadeIn}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={modal}
              variants={fadeUp}
              initial='hidden'
              animate='visible'
              exit='hidden'
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div
                className={closeBtn}
                onClick={handleCloseModal}
              >
                &times;
              </div>
              <form className={formStyle}>
                <h2 className={question}>
                  Have questions before scheduling a
                  consult? Submit the form below and
                  we&apos;ll provide some answers.
                </h2>
                <div className={inputs} tabIndex={0}>
                  <input
                    name='from_name'
                    className={fullname}
                    type='text'
                    placeholder='Full Name'
                    value={toSend.from}
                    onChange={handleChange}
                  />
                  <input
                    name='reply_to'
                    email={email}
                    type='email'
                    placeholder='Email Address'
                    value={toSend.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name='message'
                    className={message}
                    placeholder='Enter your message...'
                    value={toSend.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className={submitBtn}
                  type='submit'
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  )
}
