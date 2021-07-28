import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import Button from './Button'

const ListQuizButton = ({question, choice, changeQuestion, completedStateQuizScene}) => {
  // context
  const {addChoicesContext} = useUserActionContext()

  // ref
  const buttonRef = useRef(null)

  // function
  const handleClick = () => {
    if (completedStateQuizScene === 'start') {
      choice.question = question
      addChoicesContext(choice)
      changeQuestion()
    }
  }

  return (
    <Button className="list-quiz__button" onClick={handleClick}>{choice.label}</Button>
  )
}

ListQuizButton.propTypes = {
  choice: PropTypes.object,
  changeQuestion: PropTypes.func,
  changeScene: PropTypes.func,
  animateStateComplete: PropTypes.string,
  completedStateQuizScene: PropTypes.string,
}

ListQuizButton.defaultProps = {
  choice: {},
  changeQuestion: () => {},
  completedStateQuizScene: 'end'
}

export default ListQuizButton
