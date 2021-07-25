import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import Button from './Button'

const ListQuizButton = ({choice, changeQuestion}) => {
  const choiceLabel = choice.label
  // const choiceScore = choice.score

  const {addChoicesContext} = useUserActionContext()

  const handleClick = () => {
    addChoicesContext(choice)
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
}

ListQuizButton.defaultProps = {
  choice: {},
  changeQuestion: () => {},
}

export default ListQuizButton
