import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import calendarStyles from '../Style/CustomCalendar.module.scss';
import diaryStyles from '../Style/ModalCalendar.module.scss';

const Navigation = ({ pageCtx }) => {
  const { page } = pageCtx;
  const cx = classNames.bind(page === 'diary' ? diaryStyles : calendarStyles);
  const {
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    now,
    year,
    month,
  } = pageCtx;

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
        disabled={month === 12 && year === now.year + 100}
      >
        <FontAwesomeIcon icon={faAngleRight} className={cx('icon')} />
      </button>
      <button
        className={cx('nextYearBtn')}
        type="button"
        onClick={onClickNextYear}
        disabled={year === now.year + 100}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} className={cx('icon')} />
      </button>
    </div>
  );
};

export default Navigation;
