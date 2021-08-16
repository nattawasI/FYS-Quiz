import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'
import IconGame from '../../assets/images/icon/icon_game.svg'

const BoxCateSummaryGame = ({className}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนเล่นเกม</div>
      </div>
      <div className="app-box-cate-summary__content app-box-cate-summary__content--space-between">
        <TextSummary
          size="large"
          icon={IconGame}
          number={0}
        />
        <ul className="app-list-text-summary">
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศหญิง"
              number={0}
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศชาย"
              number={0}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryGame.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryGame.defaultProps = {
  className: '',
}

export default BoxCateSummaryGame
