import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Style/DiaryCalendar.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryCalender = () => {
  const { setModalState } = useContext(DiaryContext);
  const { state } = useContext(MainContext);

  const onClick = () => {
    setModalState('Calendar');
  };

  return (
    <button className={cx('calendarButton')} type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faCalendar} className={cx('calendarIcon')} />
      <span className={cx('calendarDate')}>{state.currentDiary.date}</span>
    </button>
  );
};

export default DiaryCalender;
