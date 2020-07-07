import React from 'react';
import classNames from 'classnames/bind';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Style/DiaryCalendar.module.scss';

const cx = classNames.bind(styles);

const DiaryCalender = () => {
  return (
    <button className={cx('calendarButton')} type="button">
      <FontAwesomeIcon icon={faCalendar} className={cx('calendarIcon')} />
    </button>
  );
};

export default DiaryCalender;
