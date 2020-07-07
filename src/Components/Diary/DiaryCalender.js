import React from 'react';
import classNames from 'classnames/bind';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Style/DiaryCalendar.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const DiaryCalender = () => {
  const { setModalState } = React.useContext(DiaryContext);

  const onClick = () => {
    setModalState('Calendar');
  };

  return (
    <button className={cx('calendarButton')} type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faCalendar} className={cx('calendarIcon')} />
    </button>
  );
};

export default DiaryCalender;
