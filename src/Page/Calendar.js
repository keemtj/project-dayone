import React, { useReducer, useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import classNames from 'classnames/bind';
import 'react-calendar/dist/Calendar.css';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';
import { calendarReducer, calendarInitState } from '../Reducer/calendarReducer';
import CustomCalendar from '../Components/CustomCalendar';

const cx = classNames.bind(styles);

const Calendar = () => {
  const [state, dispatch] = useReducer(calendarReducer, calendarInitState);

  // const getDiarySublist = (pickedDate) => {};

  useEffect(() => {}, []);

  return (
    <main className={cx('main')}>
      {/* <ReactCalendar
        className={cx('calendar')}
        calendarType="US"
        maxDate={new Date()}
        onClickDay={(value) => console.log(value)}
        showFixedNumberOfWeeks={true}
        onChange={() => console.log('change')}
        onViewChange={() => console.log('view change')}
      /> */}
      <CustomCalendar />
      {/* <DiarySublist sublist={sublist} /> */}
    </main>
  );
};

export default Calendar;
