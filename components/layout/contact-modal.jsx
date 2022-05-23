import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import FocusTrap from 'focus-trap-react'
import { AnimatePresence, motion } from 'framer-motion'
import { send } from 'emailjs-com'

import { LayoutContext } from '../../contexts/layout-context'
import { fadeIn, fadeUp } from '../../animations/fade.js'
import {
  phases,
  punch,
  smooth,
} from '../../animations/transitions'

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
  thanksMsg,
} from '../../styles/layout/contact-modal.module.scss'

export const ContactModal = () => {
  const { contactModalOpen, setContactModalOpen } =
    useContext(LayoutContext)
  const [msgSubmitted, setMsgSubmitted] = useState(false)

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Radiance Photography',
    message: '',
    reply_to: '',
  })

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setContactModalOpen(false)
        setMsgSubmitted(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [contactModalOpen, setContactModalOpen])

  const handleCloseModal = () => {
    setContactModalOpen(false)
  }

  // Email form functions
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

    setMsgSubmitted(true)
    send(
      `${process.env.EMAILJS_SERVICE_ID}`,
      `${process.env.EMAILJS_TEMPLATE_ID}`,
      toSend,
      `${process.env.EMAILJS_USER_ID}`
    )
      .then((response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      })
      .catch((err) => {})
  }

  const handleFormReset = () => {
    handleCloseModal()
    setTimeout(() => {
      setMsgSubmitted(false)
    }, 200)
  }

  return (
    <AnimatePresence>
      {contactModalOpen && (
        <FocusTrap active={contactModalOpen}>
          <motion.div
            className={shade}
            variants={fadeIn}
            {...phases}
            transition={smooth(0.5)}
          >
            <motion.div
              className={modal}
              variants={fadeUp}
              {...phases}
              transition={punch(1, 0.5)}
            >
              <div
                className={closeBtn}
                onClick={handleCloseModal}
              >
                &times;
              </div>
              {!msgSubmitted ? (
                <motion.form
                  className={formStyle}
                  variants={fadeIn}
                  {...phases}
                  transition={smooth(0.5)}
                >
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
                </motion.form>
              ) : (
                <motion.div
                  className={thanksMsg}
                  variants={fadeUp}
                  {...phases}
                  transition={smooth(1)}
                >
                  <h2>Thanks for your message!</h2>
                  <p>We'll be in touch shortly.</p>
                  <button
                    className={submitBtn}
                    onClick={handleFormReset}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  )
}
