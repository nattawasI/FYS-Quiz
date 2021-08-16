import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryCause = ({className, habitNumber, dnaNumber, bothNumber}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">โรคเบาหวานเกิดจากอะไร</div>
      </div>
      <div className="app-box-cate-summary__content">
        <ul className="app-list-text-summary">
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="พฤติกรรมการใช้ชีวิตประจำวัน"
              number={ habitNumber }
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="พันธุกรรม"
              number={ dnaNumber }
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เป็นได้ทั้ง 2 อย่าง"
              number={ bothNumber }
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryCause.propTypes = {
  className: PropTypes.string,
  habitNumber: PropTypes.number,
  dnaNumber: PropTypes.number,
  bothNumber: PropTypes.number,
}

BoxCateSummaryCause.defaultProps = {
  className: '',
  habitNumber: 0,
  dnaNumber: 0,
  bothNumber: 0,
}

export default BoxCateSummaryCause
