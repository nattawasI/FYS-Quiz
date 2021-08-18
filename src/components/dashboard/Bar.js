import React from 'react'
import DatePicker from './DatePicker'
import dayjs from "dayjs";

const Bar = () => {
  const getUrl = () => {
    const today = dayjs();
    const lastWeek = today.add(-7, "day")
    const yesterday = today.add(-1, "day")
    const startDate = lastWeek.startOf('date').format()
    const endDate = yesterday.endOf('date').format()
    return `https://www.foryoursweetheart.org/Api/createExcel?start_date=${startDate}&end_date=${endDate}`
  }

  return (
    <div className="app-bar app-container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
      <div className="app-bar__button">
        <a
          href={getUrl()}
          className="app-datepicker__button app-button app-button--download"
          download
        >
          Export
        </a>
      </div>
    </div>
  )
}

export default Bar
