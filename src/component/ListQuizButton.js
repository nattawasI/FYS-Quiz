import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ListQuizButton = ({changeScene}) => {

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
