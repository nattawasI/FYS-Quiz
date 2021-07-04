import React, {useState} from 'react'
import IconSound from '../image/icon/icon_sound.svg'
import IconMute from '../image/icon/icon_mute.svg'

const ButtonSound = () => {
  const [mute, setMute] = useState(false)
  const handleClick = () => {
    setMute(!mute)
  }

  return (
    <button type="button" className="button-mute" onClick={handleClick}>
      {
        mute
        ? <img src={IconMute} alt="" />
        : <img src={IconSound} alt="" />
      }
    </button>
  )
}
export default ButtonSound
