import React from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames/bind';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';

const cx = classNames.bind(styles);

const Calendar = () => {
  return (
    <main className={cx('main')}>
      <ReactCalendar className={cx('calendar')} />
      <DiarySublist />
    </main>
  );
};

export default Calendar;
