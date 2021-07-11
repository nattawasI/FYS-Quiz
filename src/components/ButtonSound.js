import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import IconSound from '../image/icon/icon_sound.svg'
import IconSoundBlack from '../image/icon/icon_sound_black.svg'
import IconMute from '../image/icon/icon_mute.svg'
import IconMuteBlack from '../image/icon/icon_mute_black.svg'

const ButtonSound = ({dark, onClick}) => {
  const [mute, setMute] = useState(false)

  const handleClick = () => {
    setMute(!mute)
    onClick()
  }

  return (
    <motion.button
      type="button"
      className="button-mute"
      whileHover={{ scale: 1.1}}
      onClick={handleClick}>
      {
        mute
        ? <img src={dark ? IconMuteBlack: IconMute} alt="" />
        : <img src={dark ? IconSoundBlack: IconSound} alt="" />
      }
    </motion.button>
  )
}

ButtonSound.propTypes = {
  dark: PropTypes.bool,
  onClick: PropTypes.func
}

ButtonSound.defaultProps = {
  dark: false,
  onClick: () => {}
}

export default ButtonSound
