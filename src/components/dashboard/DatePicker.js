import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import {useDashboardActionContext} from '../../contexts/DashboardContext'

const DatePicker = () => {
  // context
  const {filterDateContext} = useDashboardActionContext()

  // state
  const [valueStart, setValueStart] = useState('')
  const [valueEnd, setValueEnd] = useState('')
  const [minEnd, setMinEnd] = useState('')

  // function
  const onStartDateChange = (e) => {
    const value = e.target.value
    setValueStart(value)
  }

  const onEndDateChange = (e) => {
    const value = e.target.value
    setValueEnd(value)
  }

  const handleSubmit = () => {
    filterDateContext(valueStart, valueEnd)
  }

  const getLengthDayOfMonth = (month) => {
    if (month === '02') {
      return '28'
    } else if (month === '04' || month === '06' || month === '09' || month === '11') {
      return '30'
    } else {
      return '31'
    }
  }

  const formatMonth = (month) => {
    return month < 10? '0' + month: month
  }

  const formatInputDate = (year, month, date) => {
    return `${year}-${formatMonth(month)}-${date}`
  }

  // useEffect
  useEffect(() => { // set value of star date
    const thisMonth = dayjs().month() + 1
    const thisYear = dayjs().year()
    const startDateValue = formatInputDate(thisYear, thisMonth, '01')
    setValueStart(startDateValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => { // set value of end date
    const thisMonth = dayjs().month() + 1
    const thisYear = dayjs().year()
    const endDate = getLengthDayOfMonth(thisMonth)
    const endDateValue = formatInputDate(thisYear, thisMonth, endDate)
    const minDateInput = dayjs(valueStart).add(1, 'day').format('YYYY-MM-DD')
    setValueEnd(endDateValue)
    setMinEnd(minDateInput)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueStart])

  return (
    <div className="app-datepicker">
      <label className="app-datepicker__input app-datepicker-input">
        <input
          type="date"
          value={valueStart}
          onChange={onStartDateChange}
        />
      </label>
      <div className="app-datepicker__dash">-</div>
      <label className="app-datepicker__input app-datepicker-input">
        <input
          type="date"
          value={valueEnd}
          min={minEnd}
          onChange={onEndDateChange}
        />
      </label>
      <button
        type="button"
        className="app-datepicker__button app-button"
        onClick={handleSubmit}
      >
        แสดงข้อมูลตามวันที่
      </button>
    </div>
  )
}

export default DatePicker
