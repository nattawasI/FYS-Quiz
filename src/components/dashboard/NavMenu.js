import React from 'react'
import {
  Link,
  useRouteMatch
} from "react-router-dom";

const NavMenu = () => {
  let { url } = useRouteMatch();

  return (
    <ul className="app-nav">
      <li className="app-nav__item">
        <Link to={`${url}`} className="app-nav__link active">หน้าแรก</Link>
      </li>
      <li className="app-nav__item">
        <Link to={`${url}/table`} className="app-nav__link">ตารางแสดงรายละเอียด</Link>
      </li>
    </ul>
  )
}

export default NavMenu
