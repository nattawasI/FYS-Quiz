import React from 'react'
import PropTypes from 'prop-types'
import {useUserActionContext} from '../contexts/UserContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import ImgCardGameMd from '../assets/images/page/investigate/img_card_game_md.svg'
import ImgCardGameSm from '../assets/images/page/investigate/img_card_game_sm.svg'
import ImgCardFoodMd from '../assets/images/page/investigate/img_card_food_md.svg'
import ImgCardFoodSm from '../assets/images/page/investigate/img_card_food_sm.svg'
import ImgCardExerciseMd from '../assets/images/page/investigate/img_card_exercise_md.svg'
import ImgCardExerciseSm from '../assets/images/page/investigate/img_card_exercise_sm.svg'
import {playSoundClick} from '../variables/SoundMethods'

const ListCardActivity = ({type, changeScene, chooseActivity}) => {
  // context
  const {addActivityOftenContext, addActivityTodayContext} = useUserActionContext()
  const {muteContext} = useSoundStateContext()

  // utility
  const isWindowSmall = UseWindowSmall()

  const handleClick = (activity) => {
    chooseActivity(activity)

    if (type === 'often') {
      addActivityOftenContext(activity)
    } else {
      addActivityTodayContext(activity)
    }

    playSoundClick(muteContext)
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
          <span className="list-card-activity__text list-card-activity__text--game md-show">ชวนเล่นเกม</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--food">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('food')}>
          <img
            className="list-card-activity__img list-card-activity__img--food"
            src={isWindowSmall ? ImgCardFoodSm: ImgCardFoodMd}
            alt="ชวนกิน"
          />
          <span className="list-card-activity__text list-card-activity__text--food md-show">ชวนกิน</span>
        </button>
      </li>
      <li className="list-card-activity__item list-card-activity__item--exercise">
        <button type="button" className="list-card-activity__button" onClick={() => handleClick('exercise')}>
          <img
            className="list-card-activity__img list-card-activity__img--exercise"
            src={isWindowSmall ? ImgCardExerciseSm: ImgCardExerciseMd}
            alt="ชวนออกกำลังกาย"
          />
          <span className="list-card-activity__text list-card-activity__text--exercise md-show">ชวนออกกำลังกาย</span>
        </button>
      </li>
    </ul>
  )
}

ListCardActivity.propTypes = {
  type: PropTypes.string.isRequired,
  changeScene: PropTypes.func,
  chooseActivity: PropTypes.func,
}

ListCardActivity.defaultProps = {
  changeScene: () => {},
  chooseActivity: () => {},
}

export default ListCardActivity
