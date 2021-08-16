import React from 'react'
import PropTypes from 'prop-types'
import TextSummary from './TextSummary'

const BoxCateSummaryShare = ({className, number}) => {
  return (
    <div className={`app-box-cate-summary${className? ' '+ className: ''}`}>
      <div className="app-box-cate-summary__heading">
        <div className="app-box-cate-summary__title">Share Quiz</div>
      </div>
      <div className="app-box-cate-summary__content">
        <TextSummary
          direction="horizontal"
          title="Facebook"
          number={number}
        />
      </div>
    </div>
  )
}

BoxCateSummaryShare.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number,
}

BoxCateSummaryShare.defaultProps = {
  className: '',
  number: 0
}

export default BoxCateSummaryShare
