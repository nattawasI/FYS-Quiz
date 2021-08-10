import React from 'react'
import PropTypes from 'prop-types'

const NavMenu = ({activeContent, changeActiveContent}) => {

  return (
    <ul className="app-nav">
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activeContent === 'Summary'? ' active': ''}`}
          onClick={() => changeActiveContent('Summary')}
        >สรุป</button>
      </li>
      <li className="app-nav__item">
        <button
          className={`app-nav__link${activeContent === 'TableReport'? ' active': ''}`}
          onClick={() => changeActiveContent('TableReport')}
        >ตารางแสดงรายละเอียด</button>
      </li>
    </ul>
  )
}

NavMenu.propTypes = {
  activeContent: PropTypes.string.isRequired,
  changeActiveContent: PropTypes.func.isRequired,
}

export default NavMenu
