import React, { useReducer, useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames/bind';
import 'react-calendar/dist/Calendar.css';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';
import { calendarReducer, calendarInitState } from '../Reducer/calendarReducer';

const cx = classNames.bind(styles);

const Calendar = () => {
  const [state, dispatch] = useReducer(calendarReducer, calendarInitState);

  useEffect(() => {
    const date = state.diaries[0].date;
    const mm = date.slice(4, 7);
    const dd = +date[8] === 0 ? date.slice(9, 10) : date.slice(8, 10);
    const yy = date.slice(11, 15);
  }, []);

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
      />
      <DiarySublist />
    </main>
  );
};

export default Calendar;
