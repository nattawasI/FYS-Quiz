import React, {} from 'react'
import PropTypes from 'prop-types'
import {useSoundStateContext, useSoundActionContext} from '../contexts/SoundContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import IconSound from '../assets/images/icon/icon_sound.svg'
import IconSoundBlack from '../assets/images/icon/icon_sound_black.svg'
import IconMute from '../assets/images/icon/icon_mute.svg'
import IconMuteBlack from '../assets/images/icon/icon_mute_black.svg'
import effectClick from '../assets/sounds/sound-click.mp3'
import {playSoundClick} from '../variables/SoundMethods'

const ButtonSound = ({dark}) => {
  const effectAudio = new Audio(effectClick)

  // context
  const {toggleMuteSoundContext} = useSoundActionContext()
  const {muteContext} = useSoundStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  const handleClick = () => {
    playSoundClick(effectAudio, muteContext)
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
