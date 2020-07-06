import React from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames/bind';
import 'react-calendar/dist/Calendar.css';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';

const cx = classNames.bind(styles);

const Calendar = () => {
  return (
    <main className={cx('main')}>
      <ReactCalendar
        className={cx('calendar')}
        calendarType="US"
        maxDate={new Date()}
        onClickDay={(value) => console.log(value)}
        showFixedNumberOfWeeks={true}
        onChange={() => console.log('change')}
        onViewChange={() => console.log('view change')}
        onClickMonth={() => console.log('click month')}
        onClick={() => console.log('clicked!!!!!!!!!!!!!1')}
      />
      <DiarySublist />
    </main>
  );
};

export default Calendar;
