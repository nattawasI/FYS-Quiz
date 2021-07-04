import React from 'react'
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div className="start">
      <div>
        <div>Start</div>
        <Link to="/scene1">ไปต่อ</Link>
      </div>
    </div>
  )
}

export default Start
