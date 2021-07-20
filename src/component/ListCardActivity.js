import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import ImgCardGameMd from '../image/page/investigate/img_card_game_md.svg'
import ImgCardGameSm from '../image/page/investigate/img_card_game_sm.svg'
import ImgCardFoodMd from '../image/page/investigate/img_card_food_md.svg'
import ImgCardFoodSm from '../image/page/investigate/img_card_food_sm.svg'
import ImgCardExerciseMd from '../image/page/investigate/img_card_exercise_md.svg'
import ImgCardExerciseSm from '../image/page/investigate/img_card_exercise_sm.svg'

const ListCardActivity = ({changeScene, chooseActivity}) => {
  const {addActivityOftenContext} = useUserActionContext()
  const isWindowSmall = UseWindowSmall()

  const handleClick = (activity) => {
    chooseActivity(activity)
    addActivityOftenContext(activity)
    changeScene()
  }

  return (
    <ul className="list-card-activity">
      <li className="list-card-activity__item list-card-activity__item--game">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('game')}>
          <img
            className="list-card-activity__img list-card-activity__img--game"
            src={isWindowSmall ? ImgCardGameSm: ImgCardGameMd}
            alt="ชวนเล่นเกม"
          />
          <span className="list-card-activity__text md-show">ชวนเล่นเกม</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--food">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('food')}>
          <img
            className="list-card-activity__img list-card-activity__img--food"
            src={isWindowSmall ? ImgCardFoodSm: ImgCardFoodMd}
            alt="ชวนกิน"
          />
          <span className="list-card-activity__text md-show">ชวนกิน</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--exercise">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('exercise')}>
          <img
            className="list-card-activity__img list-card-activity__img--exercise"
            src={isWindowSmall ? ImgCardExerciseSm: ImgCardExerciseMd}
            alt="ชวนออกกำลังกาย"
          />
          <span className="list-card-activity__text md-show">ชวนออกกำลังกาย</span>
        </button>
      </li>
    </ul>
  )
}

ListCardActivity.propTypes = {
  changeScene: PropTypes.func,
  chooseActivity: PropTypes.func,
}

ListCardActivity.defaultProps = {
  changeScene: () => {},
  chooseActivity: () => {},
}

export default ListCardActivity
