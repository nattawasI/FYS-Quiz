import React from 'react'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import TextSummary from './TextSummary'
import BoxCateSummaryEat from './BoxCateSummaryEat'
import BoxCateSummaryGame from './BoxCateSummaryGame'
import BoxCateSummaryExercise from './BoxCateSummaryExercise'
import BoxCateSummaryRisk from './BoxCateSummaryRisk'
import BoxCateSummaryCause from './BoxCateSummaryCause'
import BoxCateSummaryShare from './BoxCateSummaryShare'

const SummaryPage = () => {
  // context
  const {summaryDataContext} = useDashboardStateContext()

  return (
    <div className="app-summary-page scrollbar-style1">
      <div className="app-summary-page__inner app-container">
        <div className="app-summary-page__side">
          <ul className="app-list-general-summary">
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวน User ทั้งหมด ที่เข้ามาเล่น"
                number={ summaryDataContext.all_users? summaryDataContext.all_users: 0 }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Mobile"
                number={ summaryDataContext.mobile? summaryDataContext.mobile: 0 }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Desktop"
                number={ summaryDataContext.desktop? summaryDataContext.desktop: 0 }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศหญิง"
                number={ summaryDataContext.female? summaryDataContext.female: 0 }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศชาย"
                number={ summaryDataContext.male? summaryDataContext.male: 0 }
              />
            </li>
          </ul>
        </div>
        <div className="app-summary-page__main">
          <ul className="app-list-main-summary">
            <li className="app-list-main-summary__item">
              <BoxCateSummaryGame
                className="app-list-main-summary__box"
                allNumber={ summaryDataContext.game }
                maleNumber={ summaryDataContext.game_male }
                femaleNumber={ summaryDataContext.game_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryEat
                className="app-list-main-summary__box"
                allNumber={ summaryDataContext.food }
                maleNumber={ summaryDataContext.food_male }
                femaleNumber={ summaryDataContext.food_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryExercise
                className="app-list-main-summary__box"
                allNumber={ summaryDataContext.exercise }
                maleNumber={ summaryDataContext.exercise_male }
                femaleNumber={ summaryDataContext.exercise_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryRisk
                className="app-list-main-summary__box"
                noRiskNumber={ summaryDataContext.score['1'] }
                quiteRiskNumber={ summaryDataContext.score['2'] }
                riskNumber={ summaryDataContext.score['3'] }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryCause
                className="app-list-main-summary__box"
                habitNumber={ summaryDataContext.cause['พฤติกรรมการใช้ชีวิตประจำวัน'] }
                dnaNumber={ summaryDataContext.cause['พันธุกรรม'] }
                bothNumber={ summaryDataContext.cause['เป็นได้ทั้ง 2 อย่าง'] }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryShare
                className="app-list-main-summary__box"
                number={ summaryDataContext.share_count }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage