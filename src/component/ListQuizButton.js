import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ListQuizButton = ({choice, changeQuestion, goToNextQuestion}) => {
  const choiceLabel = choice.label
  // const choiceScore = choice.score

  const handleClick = () => {
    changeQuestion()
  }

  return (
    <Button className="list-quiz__button" onClick={handleClick}>{choiceLabel}</Button>
  )
}

ListQuizButton.propTypes = {
  choice: PropTypes.object,
  changeQuestion: PropTypes.func,
  changeScene: PropTypes.func,
  goToNextQuestion: PropTypes.func,
}

ListQuizButton.defaultProps = {
  choice: {},
  changeQuestion: () => {},
  goToNextQuestion: () => {}
}

export default ListQuizButton
