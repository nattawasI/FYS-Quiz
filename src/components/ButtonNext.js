import React from 'react'
import PropTypes from 'prop-types'
import {useSoundActionContext} from '../contexts/SoundContext'

const ButtonNext = ({dark, onClick}) => {
  // context
  const {playClickSoundContext} = useSoundActionContext()

  const classStyle = () => {
    return dark ? 'button-next button-next--dark' : 'button-next'
  }

  const handleClick = (e) => {
    playClickSoundContext()
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
