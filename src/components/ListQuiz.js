import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import {useUserStateContext} from '../contexts/UserContext'
import {QuizData} from '../variables/QuizData'
import ListQuizButton from './ListQuizButton'

const quizVariant = {
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  }
}

const ListQuiz = ({changeScene, nextQuestion, currentQuestion, boxQuizControl}) => {
  // context
  const {activityOftenContext} = useUserStateContext()

  // state
  const [indexQuiz, setIndexQuiz] = useState(0)
  const [listQuiz, setListQuiz] = useState([])
  const [disabledButton, setDisabledButton] = useState(false)

  const goToNextQuestion = () => {
    if (indexQuiz < listQuiz.length - 1) {
      boxQuizControl.start('hidden')

      setTimeout(() => {
        nextQuestion()
        boxQuizControl.start('show')
      }, 1000)
    } else {
      changeScene()
    }
  }

  useEffect(() => {
    setIndexQuiz(currentQuestion)
    setDisabledButton(false)
  }, [currentQuestion])

  useEffect(() => {
    if (activityOftenContext === 'game') {
      setListQuiz(QuizData.game)
    } else if (activityOftenContext === 'food') {
      setListQuiz(QuizData.food)
    } else {
      setListQuiz(QuizData.exercise)
    }

  }, [activityOftenContext])

  return (
    <motion.div className="list-quiz"
      initial={false}
      animate={boxQuizControl}
      variants={quizVariant}
    >
      {
        listQuiz.length
        && <>
            <div className="list-quiz__question text-story">{ listQuiz[indexQuiz].question }</div>
            <ul className="list-quiz__list">
              {
                listQuiz[indexQuiz].choices.map(choice => {
                  return (
                    <li className="list-quiz__item" key={choice.id}>
                      <ListQuizButton
                        question={listQuiz[indexQuiz].question}
                        choice={choice}
                        changeQuestion={goToNextQuestion}
                        disabled={disabledButton}
                        updateDisabled={() => setDisabledButton(true)}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </>
      }
    </motion.div>
  )
}

ListQuiz.propTypes = {
  changeScene: PropTypes.func,
  currentQuestion: PropTypes.number,
  nextQuestion: PropTypes.func,
  boxQuizControl: PropTypes.object,
}

ListQuiz.defaultProps = {
  changeScene: () => {},
  currentQuestion: 0,
  nextQuestion: () => {},
  boxQuizControl: () => {},
}

export default ListQuiz
