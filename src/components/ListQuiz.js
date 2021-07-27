import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
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

const ListQuiz = ({changeScene, listQuiz, nextQuestion, currentQuestion, boxQuizControl}) => {
  const [indexQuiz, setIndexQuiz] = useState(0)

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
  }, [currentQuestion])

  return (
    <motion.div className="list-quiz"
      initial={false}
      animate={boxQuizControl}
      variants={quizVariant}
    >
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
                />
              </li>
            )
          })
        }
      </ul>
    </motion.div>
  )
}

ListQuiz.propTypes = {
  changeScene: PropTypes.func,
  listQuiz: PropTypes.array,
  currentQuestion: PropTypes.number,
  nextQuestion: PropTypes.func,
  boxQuizControl: PropTypes.object,
}

ListQuiz.defaultProps = {
  changeScene: () => {},
  listQuiz: [],
  currentQuestion: 0,
  nextQuestion: () => {},
  boxQuizControl: () => {},
}

export default ListQuiz
