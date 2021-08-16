import React from 'react'
import DatePicker from './DatePicker'

const Bar = () => {
  // function
  const handleDownload = () => {
    console.log('Download!');
  }

  return (
    <div className="app-bar app-container">
      <div className="app-bar__date">
        <DatePicker />
      </div>
      <div className="app-bar__button">
        <button
          type="button"
          className="app-datepicker__button app-button app-button--download"
          onClick={handleDownload}
        >
          Export
        </button>
      </div>
    </div>
  )
}

export default Bar
