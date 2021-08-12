import React from 'react'
import PropTypes from 'prop-types'
import {useDashboardActionContext} from '../../contexts/DashboardContext'
import TextSummary from './TextSummary'
import IconCake from '../../assets/images/icon/icon_cake.svg'

const BoxCateSummaryEat = ({className}) => {
  // context
  const {changeActiveTabContext, changeActivePageContext} = useDashboardActionContext()

  // function
  const handleViewAll = () => {
    changeActiveTabContext('food')
    changeActivePageContext('TablePage')
  }

  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนกิน</div>
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
          icon={IconCake}
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

BoxCateSummaryEat.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryEat.defaultProps = {
  className: '',
}

export default BoxCateSummaryEat
