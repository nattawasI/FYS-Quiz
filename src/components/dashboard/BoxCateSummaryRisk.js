import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryRisk = ({className}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">ระดับความเสี่ยง</div>
      </div>
      <div className="app-box-cate-summary__content">
        <ul className="app-list-text-summary">
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="ไม่เสี่ยง"
              number="3720"
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เสี่ยงเล็กน้อย"
              number="393"
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เสี่ยง"
              number="884"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryRisk.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryRisk.defaultProps = {
  className: '',
}

export default BoxCateSummaryRisk
