import React from 'react'
import {useDashboardStateContext, useDashboardActionContext} from '../../contexts/DashboardContext'

const Tab = () => {
  // context
  const {activeTabContext} = useDashboardStateContext()
  const {changeActiveTabContext} = useDashboardActionContext()

  // function
  const handleClick = (activity) => {
    changeActiveTabContext(activity)
  }

  return (
    <nav className="app-tab">
      <ul className="app-tab__list app-container">
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${activeTabContext === 'game'? ' active': ''}`}
            onClick={() => handleClick('game')}
          >ชวนเล่นเกม</button>
        </li>
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${activeTabContext === 'food'? ' active': ''}`}
            onClick={() => handleClick('food')}
          >ชวนกิน</button>
        </li>
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${activeTabContext === 'exercise'? ' active': ''}`}
            onClick={() => handleClick('exercise')}
          >ชวนออกกำลังกาย</button>
        </li>
      </ul>
    </nav>
  )
}

export default Tab
