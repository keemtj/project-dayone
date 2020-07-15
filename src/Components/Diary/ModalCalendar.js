import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/ModalCalendar.module.scss';
import useCalendar from '../../Hook/useCalendar';
import ModalButtons from './ModalButtons';
import Navigation from '../Calendar/Navigation';
import Days from '../Calendar/Days';
import Dates from '../Calendar/Dates';

const cx = classNames.bind(styles);

const ModalCalendar = () => {
  const [dateState, setDateState] = useState('');
  const hook = useCalendar();
  const {
    calendarState,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
  } = hook;

  const { now, calendar } = calendarState;
  const { year, month, datesArray, startDay } = calendar;

  const diaryPageCtx = {
    page: 'diary',
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    now,
    year,
    month,
    datesArray,
    startDay,
  };

  const onClickDate = (e) => {
    const target =
      e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;
    const date = target.className.split(' ')[0];
    setDateState(date);
  };

  return (
    <>
      <div className={cx('calendar')}>
        <Navigation pageCtx={diaryPageCtx} />
        <Days pageCtx={diaryPageCtx} />
        <Dates pageCtx={diaryPageCtx} onClickDate={onClickDate} />
      </div>
      <ModalButtons dateState={dateState} setDateState={setDateState} />
    </>
  );
};

export default ModalCalendar;
