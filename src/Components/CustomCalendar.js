import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/CustomCalendar.module.scss';
import { CalendarContext } from '../Context/CalendarContext';
import { MainContext } from '../Context/MainContext';
import Days from './Calendar/Days';
import Navigation from './Calendar/Navigation';
import Dates from './Calendar/Dates';

const cx = classNames.bind(styles);

const CustomCalendar = () => {
  const calCtx = React.useContext(CalendarContext);
  const mainCtx = React.useContext(MainContext);
  const { state } = mainCtx;
  const {
    calendarState,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    getSublist,
    getTodaySublist,
  } = calCtx;

  const { diaries } = state;
  const { now, calendar } = calendarState;
  const { year, month, datesArray, startDay } = calendar;

  const calPageCtx = {
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    getSublist,
    diaries,
    now,
    year,
    month,
    datesArray,
    startDay,
  };

  useEffect(() => {
    getTodaySublist(now, diaries);
  }, [now]);

  return (
    <>
      <div className={cx('calendar')}>
        <Navigation pageCtx={calPageCtx} />
        <Days pageCtx={calPageCtx} />
        <Dates pageCtx={calPageCtx} />
      </div>
    </>
  );
};

export default CustomCalendar;
