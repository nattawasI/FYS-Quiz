import React from 'react'
import PropTypes from 'prop-types'
import {useSoundStateContext} from '../contexts/SoundContext'
import {playSoundClick} from '../variables/SoundMethod'

const ButtonNext = ({dark, onClick}) => {
  // context
  const {muteContext} = useSoundStateContext()

  const classStyle = () => {
    return dark ? 'button-next button-next--dark' : 'button-next'
  }

  const handleClick = (e) => {
    playSoundClick(muteContext)
    onClick(e)
  }

  return (
    <button type="button" className={classStyle()} onClick={handleClick}>
      ไปต่อ
    </button>
  )
}

ButtonNext.propTypes = {
  dark: PropTypes.bool,
  onClick: PropTypes.func,
}

ButtonNext.defaultProps = {
  dark: false,
  onClick: () => {},
}

export default ButtonNext
