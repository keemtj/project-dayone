import React, { useReducer, useEffect } from 'react';
import classNames from 'classnames/bind';
import 'react-calendar/dist/Calendar.css';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';
import CustomCalendar from '../Components/CustomCalendar';

const cx = classNames.bind(styles);

const Calendar = () => {
  useEffect(() => {}, []);

  return (
    <main className={cx('main')}>
      <CustomCalendar />
      {/* <DiarySublist sublist={sublist} /> */}
    </main>
  );
};

export default Calendar;
