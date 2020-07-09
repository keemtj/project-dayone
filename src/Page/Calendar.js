import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Calendar.module.scss';
import DiarySublist from '../Components/DiarySublist';
import CustomCalendar from '../Components/CustomCalendar';
import CalendarModal from '../Components/CalendarModal';
import { CalendarProvider } from '../Context/CalendarContext';

const cx = classNames.bind(styles);

const Calendar = ({ history }) => {
  useEffect(() => {}, []);

  return (
    <main className={cx('main')}>
      <CalendarProvider history={history}>
        <CustomCalendar />
        {/* <DiarySublist sublist={sublist} /> */}
        {/* <CalendarModal
        state={state.modal.state}
        closeModal={closeModal}
        changeInputs={changeInputs}
        warning={state.modal.warning}
        inputValues={state.modal.inputs}
        now={now}
        changeCalendarState={changeCalendarState}
        onClickDimmed={onClickDimmed}
        /> */}
      </CalendarProvider>
    </main>
  );
};

export default Calendar;
