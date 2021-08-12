import React, {useState} from 'react'

const DatePicker = () => {
  // state
  const [disabled, setDisabled] = useState(false)

  // function
  const handleClick = () => {
    console.log('1');
  }

  return (
    <div className="app-datepicker">
      <label className="app-datepicker__input app-datepicker-input">
        <input type="date" />
      </label>
      <div className="app-datepicker__dash">-</div>
      <label className="app-datepicker__input app-datepicker-input">
        <input type="date" />
      </label>
      <button
        type="button"
        className={`app-datepicker__button app-button${disabled? ' disabled': ''}`}
        onClick={handleClick}
        disabled={disabled}
      >
        แสดงข้อมูลตามวันที่
      </button>
    </div>
  )
}

export default DatePicker
