import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import {useSoundStateContext} from '../contexts/SoundContext'
import ClickAudio from '../assets/sounds/sound-click.mp3'

const soundClick = new Audio(ClickAudio)

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
  // context
  const {muteContext} = useSoundStateContext()

  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-back'
  }

  const playClickSound = () => {
    if (!muteContext) {
      soundClick.play()
    }
  }

  const handleClick = () => {
    playClickSound()
    onClick()
  }

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

ButtonBack.propTypes = {
  dark: PropTypes.bool,
  path: PropTypes.string,
}

ButtonBack.defaultProps = {
  dark: false,
  path: '',
}

export default ButtonBack
