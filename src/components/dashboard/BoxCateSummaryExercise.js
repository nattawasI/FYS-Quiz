import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'
import IconBarbell from '../../assets/images/icon/icon_barbell.svg'

const BoxCateSummaryExercise = ({className}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนออกกำลังกาย</div>
        <button type="button" className="app-box-cate-summary__view-all">ดูทั้งหมด</button>
      </div>
      <div className="app-box-cate-summary__content app-box-cate-summary__content--space-between">
        <TextSummary
          size="large"
          icon={IconBarbell}
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

BoxCateSummaryExercise.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryExercise.defaultProps = {
  className: '',
}

export default BoxCateSummaryExercise
