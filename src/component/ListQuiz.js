import React from 'react'
import PropTypes from 'prop-types'
// import UseWindowSmall from '../utilityhook/useWindowSmall'
import ListQuizButton from './ListQuizButton'

const ListQuiz = ({changeScene}) => {
  // const isWindowSmall = UseWindowSmall()

  return (
    <div className="list-quiz">
      <div className="list-quiz__question text-story">คุณกับเพื่อนเล่นเกมดึกแค่ไหน</div>
      <ul className="list-quiz__list">
        <li className="list-quiz__item">
          <ListQuizButton changeScene={changeScene} />
        </li>
        <li className="list-quiz__item">
          <ListQuizButton changeScene={changeScene} />
        </li>
        <li className="list-quiz__item">
          <ListQuizButton changeScene={changeScene} />
        </li>
      </ul>
    </div>
  )
}

ListQuiz.propTypes = {
  changeScene: PropTypes.func,
}

ListQuiz.defaultProps = {
  changeScene: () => {},
}

export default ListQuiz
