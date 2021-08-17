import React from 'react'
import DatePicker from './DatePicker'
import {useDashboardStateContext} from '../../contexts/DashboardContext'

const Bar = () => {
  // context
  const {linkExportContext} = useDashboardStateContext()

  return (
    <div className="app-bar app-container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
      <div className="app-bar__button">
        <a
          href={linkExportContext}
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
