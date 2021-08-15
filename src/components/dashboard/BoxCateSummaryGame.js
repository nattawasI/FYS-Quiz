import React from 'react'
import PropTypes from 'prop-types'
import {useDashboardActionContext} from '../../contexts/DashboardContext'
import TextSummary from './TextSummary'
import IconGame from '../../assets/images/icon/icon_game.svg'

const BoxCateSummaryGame = ({className}) => {
  // context
  const {changeActiveTabContext, changeActivePageContext} = useDashboardActionContext()

  // function
  const handleViewAll = () => {
    changeActiveTabContext('game')
    changeActivePageContext('TablePage')
  }

  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนเล่นเกม</div>
        <button
          type="button"
          className="app-box-cate-summary__view-all"
          onClick={handleViewAll}
        >
          ดูทั้งหมด
        </button>
      </div>
      <div className="app-box-cate-summary__content app-box-cate-summary__content--space-between">
        <TextSummary
          size="large"
          icon={IconGame}
          number="2000"
        />
        <ul className="app-list-text-summary">
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศหญิง"
              number="1000"
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              title="จำนวนเพศชาย"
              number="800"
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
