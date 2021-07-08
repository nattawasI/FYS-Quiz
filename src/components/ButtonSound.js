import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import IconSound from '../image/icon/icon_sound.svg'
import IconSoundBlack from '../image/icon/icon_sound_black.svg'
import IconMute from '../image/icon/icon_mute.svg'
import IconMuteBlack from '../image/icon/icon_mute_black.svg'

const ButtonSound = ({color, onClick}) => {
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
        ? <img src={color === "black" ? IconMuteBlack: IconMute} alt="" />
        : <img src={color === "black" ? IconSoundBlack: IconSound} alt="" />
      }
    </motion.button>
  )
}

ButtonSound.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
}

ButtonSound.defaultProps = {
  color: 'white', // set color="black" if you want to change to black theme
  onClick: () => {}
}

export default ButtonSound
