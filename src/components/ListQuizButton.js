import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import Button from './Button'

const ListQuizButton = ({question, choice, changeQuestion, disabled, updateDisabled}) => {
  // context
  const {addChoicesContext} = useUserActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // function
  const handleClick = () => {
    if (!disabled) {
      playClickSoundContext()
      choice.question = question
      addChoicesContext(choice)
      changeQuestion()
      updateDisabled()
    }
  }

  return (
    <Button className={`list-quiz__button${disabled? ' disabled': ''}`} onClick={handleClick}>{choice.label}</Button>
  )
}

ListQuizButton.propTypes = {
  choice: PropTypes.object,
  changeQuestion: PropTypes.func,
  changeScene: PropTypes.func,
  disabled: PropTypes.bool,
  updateDisabled: PropTypes.func,
}

ListQuizButton.defaultProps = {
  choice: {},
  changeQuestion: () => {},
  disabled: false,
  updateDisabled: () => {}
}

export default ListQuizButton
