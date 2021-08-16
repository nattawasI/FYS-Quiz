import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'
import IconCake from '../../assets/images/icon/icon_cake.svg'

const BoxCateSummaryEat = ({className, allNumber, maleNumber, femaleNumber}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ชวนกิน</div>
      </div>
      <div className="app-box-cate-summary__content app-box-cate-summary__content--space-between">
        <TextSummary
          size="large"
          icon={IconCake}
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

BoxCateSummaryEat.propTypes = {
  className: PropTypes.string,
  allNumber: PropTypes.number,
  maleNumber: PropTypes.number,
  femaleNumber: PropTypes.number,
}

BoxCateSummaryEat.defaultProps = {
  className: '',
  allNumber: 0,
  maleNumber: 0,
  femaleNumber: 0,
}

export default BoxCateSummaryEat
