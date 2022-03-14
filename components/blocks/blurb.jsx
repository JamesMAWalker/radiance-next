import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { fadeUp } from '../../animations/fade';

import { blurb, bordered, title, text, lgTitleText } from '../../styles/blocks/blurb.module.scss'

export const Blurb = ({ blurbTitle, blurbText, blurbBtn, withBorder, singleLineTitle, btnLink=null, btnAction=() => {}}) => {
  const controls = useAnimation();
  const { ref: blurbRef, inView: blurbInView } =
    useInView()

  useEffect(() => {
    if (blurbInView) {
      controls.start('visible')
    }
  }, [controls, blurbInView])
  
  return (
    <>
      <span className='vp-marker' ref={blurbRef}/>
        <motion.div
          className={`${blurb} ${
            withBorder ? bordered : null
          }`}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          <h4
            className={`${title} ${
              singleLineTitle ? lgTitleText : null
            }`}
          >
            {blurbTitle}
          </h4>
          <p className={text}>{blurbText}</p>
          <a className='text-btn' href={btnLink} onClick={btnAction}>{blurbBtn}</a>
        </motion.div>
    </>
  )
}
