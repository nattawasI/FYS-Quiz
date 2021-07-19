import React, {useRef, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
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
      duration: 1
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
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
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
    }
  }
}

const FormYourName = () => {
  // context
  const {friendInfoContext} = useUserStateContext()
  const {addFriendInfoContext} = useUserActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  const handleClick = () => {
    console.log(1);
  }

  return (
    <AnimatePresence>
      <div className="form-your-name">
        <motion.div className="form-your-name__form"
          variants={formVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="form-your-name__label text-story">สวัสดีครับคุณ</div>
          <div className="form-your-name__input">
            <InputText placeholder="ชื่อตัวเอง" />
          </div>
        </motion.div>
        <motion.div className="form-your-name__button"
          variants={buttonVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ButtonNext onClick={handleClick} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default FormYourName
