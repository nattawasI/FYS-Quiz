import React from 'react'
import TextSummary from './TextSummary'
import BoxCateSummaryEat from './BoxCateSummaryEat'
import BoxCateSummaryGame from './BoxCateSummaryGame'
import BoxCateSummaryExercise from './BoxCateSummaryExercise'
import BoxCateSummaryRisk from './BoxCateSummaryRisk'
import BoxCateSummaryCause from './BoxCateSummaryCause'
import BoxCateSummaryShare from './BoxCateSummaryShare'

const SummaryPage = () => {
  return (
    <div className="app-summary-page scrollbar-style1">
      <div className="app-summary-page__inner app-container">
        <div className="app-summary-page__side">
          <ul className="app-list-general-summary">
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวน User ทั้งหมด ที่เข้ามาเล่น"
                number="5000"
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Mobile"
                number="3400"
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Desktop"
                number="1600"
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศหญิง"
                number="2300"
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศชาย"
                number="2700"
              />
            </li>
          </ul>
        </div>
        <div className="app-summary-page__main">
          <ul className="app-list-main-summary">
            <li className="app-list-main-summary__item">
              <BoxCateSummaryEat className="app-list-main-summary__box" />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryGame className="app-list-main-summary__box" />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryExercise className="app-list-main-summary__box" />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryRisk className="app-list-main-summary__box" />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryCause className="app-list-main-summary__box" />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryShare className="app-list-main-summary__box" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage