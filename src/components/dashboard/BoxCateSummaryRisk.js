import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryRisk = ({className, noRiskNumber, quiteRiskNumber, riskNumber}) => {
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
              number={ noRiskNumber }
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เสี่ยงเล็กน้อย"
              number={ quiteRiskNumber }
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เสี่ยง"
              number={ riskNumber }
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryRisk.propTypes = {
  className: PropTypes.string,
  noRisk: PropTypes.number,
  quiteRisk: PropTypes.number,
  risk: PropTypes.number,
}

BoxCateSummaryRisk.defaultProps = {
  className: '',
  noRisk: 0,
  quiteRisk: 0,
  risk: 0,
}

export default BoxCateSummaryRisk
