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
  const {summaryData} = useDashboardStateContext()

  return (
    <div className="app-summary-page scrollbar-style1">
      <div className="app-summary-page__inner app-container">
        <div className="app-summary-page__side">
          <ul className="app-list-general-summary">
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวน User ทั้งหมด ที่เข้ามาเล่น"
                number={ summaryData.data.all_users }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Mobile"
                number={ summaryData.data.mobile }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="User ที่ใช้ Desktop"
                number={ summaryData.data.desktop }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศหญิง"
                number={ summaryData.data.female }
              />
            </li>
            <li className="app-list-general-summary__item">
              <TextSummary
                size="large"
                title="จำนวนเพศชาย"
                number={ summaryData.data.male }
              />
            </li>
          </ul>
        </div>
        <div className="app-summary-page__main">
          <ul className="app-list-main-summary">
            <li className="app-list-main-summary__item">
              <BoxCateSummaryGame
                className="app-list-main-summary__box"
                allNumber={ summaryData.data.game }
                maleNumber={ summaryData.data.game_male }
                femaleNumber={ summaryData.data.game_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryEat
                className="app-list-main-summary__box"
                allNumber={ summaryData.data.food }
                maleNumber={ summaryData.data.food_male }
                femaleNumber={ summaryData.data.food_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryExercise
                className="app-list-main-summary__box"
                allNumber={ summaryData.data.exercise }
                maleNumber={ summaryData.data.exercise_male }
                femaleNumber={ summaryData.data.exercise_female }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryRisk
                className="app-list-main-summary__box"
                noRiskNumber={ summaryData.data.score['1'] }
                quiteRiskNumber={ summaryData.data.score['2'] }
                riskNumber={ summaryData.data.score['3'] }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryCause
                className="app-list-main-summary__box"
                habitNumber={ summaryData.data.cause['พฤติกรรมการใช้ชีวิตประจำวัน'] }
                dnaNumber={ summaryData.data.cause['พันธุกรรม'] }
                bothNumber={ summaryData.data.cause['เป็นได้ทั้ง 2 อย่าง'] }
              />
            </li>
            <li className="app-list-main-summary__item">
              <BoxCateSummaryShare
                className="app-list-main-summary__box"
                number={ summaryData.data.share_count }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage