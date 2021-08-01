import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import ImgCardGameMd from '../assets/images/page/investigate/img_card_game_md.svg'
import ImgCardGameSm from '../assets/images/page/investigate/img_card_game_sm.svg'
import ImgCardFoodMd from '../assets/images/page/investigate/img_card_food_md.svg'
import ImgCardFoodSm from '../assets/images/page/investigate/img_card_food_sm.svg'
import ImgCardExerciseMd from '../assets/images/page/investigate/img_card_exercise_md.svg'
import ImgCardExerciseSm from '../assets/images/page/investigate/img_card_exercise_sm.svg'

const ListCardActivity = ({type, changeScene, animateCompleted}) => {
  // context
  const {addActivityOftenContext, addActivityTodayContext} = useUserActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // utility
  const isWindowSmall = UseWindowSmall()

  const handleClick = (activity) => {
    if (animateCompleted) {
      if (type === 'often') {
        addActivityOftenContext(activity)
      } else {
        addActivityTodayContext(activity)
      }

      playClickSoundContext()
      changeScene()
    }
  }

  return (
    <ul className="list-card-activity">
      <li className="list-card-activity__item list-card-activity__item--game">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('game')}>
          <object
            className="list-card-activity__img list-card-activity__img--game"
            data={isWindowSmall ? ImgCardGameSm: ImgCardGameMd}
            type="image/svg+xml"
            aria-labelledby="activity-object-alt-01"
          >
            <span id="activity-object-alt-01">ชวนเล่นเกม</span>
          </object>
          <span className="list-card-activity__text list-card-activity__text--game md-show">ชวนเล่นเกม</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--food">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('food')}>
          <object
            className="list-card-activity__img list-card-activity__img--food"
            data={isWindowSmall ? ImgCardFoodSm: ImgCardFoodMd}
            type="image/svg+xml"
            aria-labelledby="activity-object-alt-02"
          >
            <span id="activity-object-alt-02">ชวนกิน</span>
          </object>
          <span className="list-card-activity__text list-card-activity__text--food md-show">ชวนกิน</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--exercise">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('exercise')}>
          <object
            className="list-card-activity__img list-card-activity__img--exercise"
            data={isWindowSmall ? ImgCardExerciseSm: ImgCardExerciseMd}
            type="image/svg+xml"
            aria-labelledby="activity-object-alt-03"
          >
            <span id="activity-object-alt-03">ชวนออกกำลังกาย</span>
          </object>
          <span className="list-card-activity__text list-card-activity__text--exercise md-show">ชวนออกกำลังกาย</span>
        </button>
      </li>
    </ul>
  )
}

ListCardActivity.propTypes = {
  type: PropTypes.string.isRequired,
  changeScene: PropTypes.func,
  animateCompleted: PropTypes.bool
}

ListCardActivity.defaultProps = {
  changeScene: () => {},
  animateCompleted: false,
}

export default ListCardActivity
