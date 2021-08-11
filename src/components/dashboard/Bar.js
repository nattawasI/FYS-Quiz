import React from 'react'
import DatePicker from './DatePicker'

const Bar = () => {

  return (
    <div className="app-bar app-container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
      <div className="app-bar__total">จำนวน User ทั้งหมดที่เข้ามาเล่น Quiz : <span className="app-bar__total-number">5,000</span></div>
    </div>
  )
}

export default Bar
