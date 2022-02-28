import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import FocusTrap from 'focus-trap-react'
import { AnimatePresence, motion } from 'framer-motion'

import { ContactContext } from '../../contexts/contact-context'
import { fadeIn, fadeUp } from '../../animations/fade.js'

import {
  shade,
  modal,
  closeBtn,
  form as formStyle,
  pageNum,
  question,
  answers,
  grid5,
  answerBtn,
  backBtn,
} from '../../styles/layout/contact-modal.module.scss'

export const ContactModal = () => {
  const {
    modalOpen,
    setModalOpen,
    eventQuestions,
    studioQuestions,
  } = useContext(ContactContext)
  const [modalContent, setModalContent] = useState({
    q: 'What can we help you with?',
    a: [
      'wedding',
      'headshots',
      'engagement',
      'mitzvah',
      'corporate',
    ],
  })
  const [modalPageNum, setModalPageNum] = useState(0)

  // stop scrolling when contact modal is open
  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
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
  }, [modalOpen])

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    // console.log('modalContent changed: ', modalContent)
  }, [modalContent])

  const handleSetModalContent = (selection) => {
    if (selection === 'studio') {
      setModalContent(studioQuestions[modalPageNum])
      setTimeout(() => {
        setModalPageNum((prvSt) => prvSt + 1)
      }, 250)
    } else {
      setModalContent(eventQuestions[modalPageNum])
      setTimeout(() => {
        setModalPageNum((prvSt) => prvSt + 1)
      }, 250)
    }
    /*
      TODO: 
      Set modal content to form when user has reached the 
      end of the questions array.
    */
  }

  const handleBackBtn = () => {
    setModalPageNum((prvSt) => prvSt - 1).then(() =>
      handleSetModalContent(modalPageNum)
    )
    /*
      TODO: 
      Add a back button to make use of this function.
    */
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
              <form className={formStyle} tabIndex={0}>
                <p className={pageNum}>
                  {modalPageNum + 1}/6
                </p>
                <h2 className={question}>
                  {modalContent.q}
                </h2>
                <div className={`${answers} ${grid5}`}>
                  {modalContent.a.map((ans, idx) => {
                    return (
                      <span
                        key={ans}
                        className={`${answerBtn} text-btn`}
                        onClick={() =>
                          handleSetModalContent(ans)
                        }
                        style={{ gridArea: `op${idx + 1}` }}
                      >
                        {ans}
                      </span>
                    )
                  })}
                </div>
              </form>
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  )
}
