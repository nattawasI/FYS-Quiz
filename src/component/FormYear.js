import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import { useUserStateContext, useUserActionContext } from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import ButtonNext from './ButtonNext'
import InputText from './InputText'

// Motion Variants
const formVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 0.7
    },
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      delay: 1.5,
      duration: 0.7
    }
  },
}

const FormYourName = () => {
  // context

  // utility hook
  const isWindowSmall = UseWindowSmall()

  const handleClick = () => {
    console.log(1);
  }

  return (
    <div className="form-year">
      <motion.div className="form-year__form"
        key="motion1"
        variants={formVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="form-year__label text-story">คุณรู้จักเพื่อนสนิทคนนี้มากี่ปี?</div>
        <div className="form-year__input">
          <InputText placeholder="ใส่ตัวเลข..." />
        </div>
      </motion.div>
      <motion.div className="form-year__button"
        key="motion2"
        variants={buttonVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ButtonNext onClick={handleClick} />
      </motion.div>
    </div>
  )
}

export default FormYourName
