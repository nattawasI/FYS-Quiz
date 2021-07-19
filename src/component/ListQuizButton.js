import React from 'react'
import PropTypes from 'prop-types'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Button from './Button'

const ListQuizButton = ({changeScene}) => {
  const isWindowSmall = UseWindowSmall()

  const handleClick = () => {
    changeScene()
  }

  return (
    <Button className="list-quiz__button" onClick={handleClick}>เตรียมออกกำลังกายชำระบาป</Button>
  )
}

ListQuizButton.propTypes = {
  changeScene: PropTypes.func,
}

ListQuizButton.defaultProps = {
  changeScene: () => {},
}

export default ListQuizButton
