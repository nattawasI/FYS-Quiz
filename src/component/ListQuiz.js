import React from 'react'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import ListQuizButton from './ListQuizButton'

const ListQuiz = () => {
  const isWindowSmall = UseWindowSmall()

  return (
    <div className="list-quiz">
      <div className="list-quiz__question text-story">คุณกับเพื่อนเล่นเกมดึกแค่ไหน</div>
      <ul className="list-quiz__list">
        <li className="list-quiz__item">
          <ListQuizButton />
        </li>
        <li className="list-quiz__item">
          <ListQuizButton />
        </li>
        <li className="list-quiz__item">
          <ListQuizButton />
        </li>
      </ul>
    </div>
  )
}

export default ListQuiz
