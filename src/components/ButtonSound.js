import React, {} from 'react'
import PropTypes from 'prop-types'
import {useSoundStateContext, useSoundActionContext} from '../contexts/SoundContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import IconSound from '../assets/images/icon/icon_sound.svg'
import IconSoundBlack from '../assets/images/icon/icon_sound_black.svg'
import IconMute from '../assets/images/icon/icon_mute.svg'
import IconMuteBlack from '../assets/images/icon/icon_mute_black.svg'

const ButtonSound = ({dark}) => {
  // context
  const {muteContext} = useSoundStateContext()
  const {toggleMuteSoundContext, playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()


  const handleClick = () => {
    playClickSoundContext()
    toggleMuteSoundContext()
  }

  const renderButton = () => {
    if (isWindowSmall) {
      return (
        <button
          type="button"
          className="button-sound"
          onTouchStart={handleClick}>
          {
            muteContext
            ? <img src={dark ? IconMuteBlack: IconMute} alt="" />
            : <img src={dark ? IconSoundBlack: IconSound} alt="" />
          }
        </button>
      )
    } else {
      return (
        <button
          type="button"
          className="button-sound"
          onClick={handleClick}>
          {
            muteContext
            ? <img src={dark ? IconMuteBlack: IconMute} alt="" />
            : <img src={dark ? IconSoundBlack: IconSound} alt="" />
          }
        </button>
      )
    }
  }

  return (
    renderButton()
  )
}

ButtonSound.propTypes = {
  dark: PropTypes.bool,
}

ButtonSound.defaultProps = {
  dark: false,
}

export default ButtonSound
