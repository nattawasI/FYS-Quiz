import React from 'react'
import DatePicker from './DatePicker'

const Bar = () => {
  return (
    <div className="app-bar app__container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
    </div>
  )
}

export default Bar
