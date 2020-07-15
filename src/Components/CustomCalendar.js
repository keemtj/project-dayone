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
  const { calendarState, getTodaySublist } = calCtx;
  const { diaries } = state;
  const { now } = calendarState;

  useEffect(() => {
    getTodaySublist(now, diaries);
  }, [now]);

  return (
    <>
      <div className={cx('calendar')}>
        <Navigation />
        <Days />
        <Dates />
      </div>
    </>
  );
};

export default CustomCalendar;
