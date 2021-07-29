import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7
    }
  },
}

const ButtonBack = ({dark, onClick}) => {
  // hooks
  const isWindowSmall = UseWindowSmall()

  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-back'
  }

  const handleClick = () => {
    onClick()
  }

  const renderButton = () => {
    if (isWindowSmall) {
      return (
        <motion.button
          type="button"
          className={classStyle()}
          onTouchStart={handleClick}
          variants={buttonVariant}
          initial="hidden"
          animate="show"
        >
          ย้อนกลับ
        </motion.button>
      )
    } else {
      return (
        <motion.button
          type="button"
          className={classStyle()}
          onClick={handleClick}
          variants={buttonVariant}
          initial="hidden"
          animate="show"
        >
          ย้อนกลับ
        </motion.button>
      )
    }
  }

  return (
    renderButton()
  )
}

ButtonBack.propTypes = {
  dark: PropTypes.bool,
  path: PropTypes.string,
}

ButtonBack.defaultProps = {
  dark: false,
  path: '',
}

export default ButtonBack
