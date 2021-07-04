import React from 'react'
import IconSound from '../image/icon/icon_sound.svg'

const ButtonMute = () => {
  return (
    <button type="button" className="button-mute">
      <img src={IconSound} alt="" />
    </button>
  )
}
export default ButtonMute
