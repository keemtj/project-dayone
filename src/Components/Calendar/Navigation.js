import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/CustomCalendar.module.scss';
import { CalendarContext } from '../../Context/CalendarContext';

const cx = classNames.bind(styles);

const Navigation = () => {
  const calCtx = React.useContext(CalendarContext);
  const {
    calendarState,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
  } = calCtx;

  const { now, calendar } = calendarState;
  const { year, month } = calendar;

  return (
    <div className={cx('navigation')}>
      <button
        className={cx('prevYearBtn')}
        type="button"
        onClick={onClickPrevYear}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} className={cx('icon')} />
      </button>
      <button
        className={cx('prevMonthBtn')}
        type="button"
        onClick={onClickPrevMonth}
      >
        <FontAwesomeIcon icon={faAngleLeft} className={cx('icon')} />
      </button>
      <button type="button" className={cx('calendarState')} onClick={openModal}>
        {`${year}. ${month < 10 ? `0${month}` : month}.`}
      </button>
      <button
        className={cx('nextMonthBtn')}
        type="button"
        onClick={onClickNextMonth}
        disabled={month === now.month && year === now.year}
      >
        <FontAwesomeIcon icon={faAngleRight} className={cx('icon')} />
      </button>
      <button
        className={cx('nextYearBtn')}
        type="button"
        onClick={onClickNextYear}
        disabled={year === now.year}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} className={cx('icon')} />
      </button>
    </div>
  );
};

export default Navigation;
