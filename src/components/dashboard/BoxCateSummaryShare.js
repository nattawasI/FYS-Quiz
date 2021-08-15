import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryShare = ({className}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">Share Quiz</div>
      </div>
      <div className="app-box-cate-summary__content">
        <TextSummary
          direction="horizontal"
          title="Facebook"
          number="500"
        />
      </div>
    </div>
  )
}

BoxCateSummaryShare.propTypes = {
  className: PropTypes.string,
}

BoxCateSummaryShare.defaultProps = {
  className: '',
}

export default BoxCateSummaryShare
