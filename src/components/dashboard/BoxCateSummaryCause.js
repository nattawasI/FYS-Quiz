import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryCause = ({className}) => {
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
              number="3720"
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="พันธุกรรม"
              number="393"
            />
          </li>
          <li className="app-list-text-summary__item">
            <TextSummary
              direction="horizontal"
              title="เป็นได้ทั้ง 2 อย่าง"
              number="884"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

BoxCateSummaryCause.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryCause.defaultProps = {
  className: '',
}

export default BoxCateSummaryCause
