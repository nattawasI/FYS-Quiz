import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDashboardActionContext } from "../../contexts/DashboardContext";

const DatePicker = () => {
  // context
  const { filterDateContext } = useDashboardActionContext();

  // state
  const [valueStart, setValueStart] = useState("");
  const [valueEnd, setValueEnd] = useState("");
  const [maxStart, setMaxStart] = useState("");
  const [minEnd, setMinEnd] = useState("");
  const [maxEnd, setMaxEnd] = useState("");

  // function
  const onStartDateChange = (e) => {
    const value = e.target.value;
    setValueStart(value);

    if (dayjs(value).isSame(dayjs(maxStart)) || dayjs(value).isAfter(dayjs(valueEnd))) {
      setValueEnd(value)
    }
  };

  const onEndDateChange = (e) => {
    const value = e.target.value;
    setValueEnd(value);
  };

  const handleSubmit = () => {
    const nowDateTime = dayjs().format("YYYY-MM-DD HH-mm-ss").split(" ");

    const startDate = `${valueStart} ${nowDateTime[1]}`; // format to 'YYYY-MM-DD HH-mm-ss'
    const endDate = `${valueEnd} ${nowDateTime[1]}`; // format to 'YYYY-MM-DD HH-mm-ss'

    filterDateContext(startDate, endDate);
  };

  // useEffect
  useEffect(() => {
    const today = dayjs()
    const todayValue = today.format('YYYY-MM-DD');
    const yesterdayValue = today.add(-1, 'day').format('YYYY-MM-DD');
    const lastWeekValue = today.add(-7, 'day').format('YYYY-MM-DD');

    setValueStart(lastWeekValue)
    setValueEnd(yesterdayValue)

    setMaxStart(todayValue)
    setMaxEnd(todayValue)
  }, []);

  useEffect(() => {
    setMinEnd(valueStart)
  }, [valueStart]);

  return (
    <div className="app-datepicker">
      <label className="app-datepicker__input app-datepicker-input">
        <input
          type="date"
          value={valueStart}
          max={maxStart}
          onChange={onStartDateChange}
        />
      </label>
      <div className="app-datepicker__dash">-</div>
      <label className="app-datepicker__input app-datepicker-input">
        <input
          type="date"
          value={valueEnd}
          min={minEnd}
          max={maxEnd}
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
  );
};

export default DatePicker;
