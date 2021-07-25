import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconSound from '../assets/images/icon/icon_sound.svg'
import IconSoundBlack from '../assets/images/icon/icon_sound_black.svg'
import IconMute from '../assets/images/icon/icon_mute.svg'
import IconMuteBlack from '../assets/images/icon/icon_mute_black.svg'

const ButtonSound = ({dark, onClick}) => {
  const [mute, setMute] = useState(false)

  const handleClick = () => {
    setMute(!mute)
    onClick()
  }

  return (
    <button
      type="button"
      className="button-sound"
      onClick={handleClick}>
      {
        mute
        ? <img src={dark ? IconMuteBlack: IconMute} alt="" />
        : <img src={dark ? IconSoundBlack: IconSound} alt="" />
      }
    </button>
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
