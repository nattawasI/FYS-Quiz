import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import Button from './Button'

const ListQuizButton = ({question, choice, changeQuestion}) => {
  // context
  const {addChoicesContext} = useUserActionContext()

  // function
  const handleClick = () => {
    choice.question = question
    addChoicesContext(choice)
    changeQuestion()
  }

  return (
    <Button className="list-quiz__button" onClick={handleClick}>{choice.label}</Button>
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
