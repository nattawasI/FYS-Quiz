import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc  from "dayjs/plugin/utc";
import { useDashboardActionContext } from "../../contexts/DashboardContext";

dayjs.extend(utc)

const DatePicker = () => {
  // context
  const { getSummaryDataContext } = useDashboardActionContext();

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

    if (
      dayjs(value).isSame(dayjs(maxStart)) ||
      dayjs(value).isAfter(dayjs(valueEnd))
    ) {
      setValueEnd(value);
    }
  };

  const onEndDateChange = (e) => {
    const value = e.target.value;
    setValueEnd(value);
  };

  const handleSubmit = () => {
    const now = dayjs().format().split('T')
    const currentTime = `T${now[1]}`
    const startDate = `${dayjs(valueStart).format('YYYY-MM-DD')}${currentTime}`;
    const endDate = `${dayjs(valueEnd).format('YYYY-MM-DD')}${currentTime}`;
    getSummaryDataContext(startDate, endDate);
  };

  // useEffect
  useEffect(() => {
    const today = dayjs();
    const yesterday = today.add(-1, "day");
    const lastWeek = today.add(-7, "day");

    // set format for rendering in Input
    const todayValue = today.format("YYYY-MM-DD");
    const yesterdayValue = yesterday.format("YYYY-MM-DD");
    const lastWeekValue = lastWeek.format("YYYY-MM-DD");

    setValueStart(lastWeekValue);
    setValueEnd(yesterdayValue);

    setMaxStart(todayValue);
    setMaxEnd(todayValue);
  }, []);

  useEffect(() => {
    setMinEnd(valueStart);
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
