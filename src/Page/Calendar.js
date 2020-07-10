import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';
import CustomCalendar from '../Components/CustomCalendar';
import CalendarModal from '../Components/CalendarModal';
import { CalendarProvider } from '../Context/CalendarContext';

const cx = classNames.bind(styles);

const Calendar = () => {
  useEffect(() => {}, []);

  return (
    <main className={cx('main')}>
      <CalendarProvider>
        <CustomCalendar />
        {/* <DiarySublist sublist={sublist} /> */}
        <CalendarModal />
      </CalendarProvider>
    </main>
  );
};

export default Calendar;
