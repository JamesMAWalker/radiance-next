import React, { useContext, useEffect } from 'react'
import FocusTrap from 'focus-trap-react'

import { ContactContext } from '../../contexts/contact-context'

import {
  shade,
  modal,
  closeBtn,
  form as formStyle,
} from '../../styles/layout/contact-modal.module.scss'

export const ContactModal = () => {
  const { modalOpen, setModalOpen } =
    useContext(ContactContext)

  // stop scrolling when contact modal is open
  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [modalOpen])

  const handleCloseModal = () => {
    console.log('tried to close modal!')
    setModalOpen(false)
  }

  return (
    <>
      {modalOpen && (
        <FocusTrap active={modalOpen}>
          <div className={shade}>
            <div className={modal}>
              <div
                className={closeBtn}
                onClick={handleCloseModal}
              >
                close
              </div>
              <form className={formStyle} tabIndex={0}>
                <h2>GET AT ME</h2>
              </form>
            </div>
          </div>
        </FocusTrap>
      )}
    </>
  )
}
