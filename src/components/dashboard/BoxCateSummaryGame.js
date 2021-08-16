import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'
import IconGame from '../../assets/images/icon/icon_game.svg'

const BoxCateSummaryGame = ({className, allNumber, maleNumber, femaleNumber}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนเล่นเกม</div>
      </div>
      <div className="app-box-cate-summary__content app-box-cate-summary__content--space-between">
        <TextSummary
          size="large"
          icon={IconGame}
          number={allNumber}
        />
        <ul className="app-list-text-summary">
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศหญิง"
              number={maleNumber}
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศชาย"
              number={femaleNumber}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryGame.propTypes = {
  className: PropTypes.string,
  allNumber: PropTypes.number,
  maleNumber: PropTypes.number,
  femaleNumber: PropTypes.number,
}

BoxCateSummaryGame.defaultProps = {
  className: '',
  allNumber: 0,
  maleNumber: 0,
  femaleNumber: 0,
}

export default BoxCateSummaryGame
