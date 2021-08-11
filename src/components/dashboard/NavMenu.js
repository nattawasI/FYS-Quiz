import React from 'react'
import {useDashboardStateContext, useDashboardActionContext} from '../../contexts/DashboardContext'

const NavMenu = () => {
  // context
  const {activePageContext} = useDashboardStateContext()
  const {changeActivePageContext} = useDashboardActionContext()

  return (
    <ul className="app-nav">
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activePageContext === 'SummaryPage'? ' active': ''}`}
          onClick={() => changeActivePageContext('SummaryPage')}
        >สรุป</button>
      </li>
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activePageContext === 'TablePage'? ' active': ''}`}
          onClick={() => changeActivePageContext('TablePage')}
        >ตารางแสดงรายละเอียด</button>
      </li>
    </ul>
  )
}

export default NavMenu
