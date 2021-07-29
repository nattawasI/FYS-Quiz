// กลับสู่หน้าเริ่มต้น
import React from 'react'
import PropTypes from 'prop-types'
import {useSoundStateContext} from '../contexts/SoundContext'

const ButtonRestart = ({onClick}) => {
  // context
  const {muteContext} = useSoundStateContext()

  const handleClick = () => {
    onClick()
  }

  return (
    <button type="button" className="button-restart" onClick={handleClick}>
      กลับสู่หน้าเริ่มต้น
    </button>
  )
}

ButtonRestart.propTypes = {
  onClick: PropTypes.func,
}

ButtonRestart.defaultProps = {
  onClick: () => {},
}

export default ButtonRestart