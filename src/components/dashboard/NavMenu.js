import React from 'react'
import {useDashboardStateContext, useDashboardActionContext} from '../../contexts/DashboardContext'

const NavMenu = () => {
  // context
  const {activeContentContext} = useDashboardStateContext()
  const {changeActiveContentContext} = useDashboardActionContext()

  return (
    <ul className="app-nav">
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activeContentContext === 'Summary'? ' active': ''}`}
          onClick={() => changeActiveContentContext('Summary')}
        >สรุป</button>
      </li>
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activeContentContext === 'TableReport'? ' active': ''}`}
          onClick={() => changeActiveContentContext('TableReport')}
        >ตารางแสดงรายละเอียด</button>
      </li>
    </ul>
  )
}

export default NavMenu
