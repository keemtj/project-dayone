import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/CustomCalendar.module.scss';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const CustomCalendar = () => {
  return (
    <div className={cx('calendar')}>
      <div className={cx('navigation')}>
        <button className={cx('prevYearBtn')} type="button">
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button>
        <button className={cx('prevMonthBtn')} type="button">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <span className={cx('state')}></span>
        <button className={cx('nextMonthBtn')} type="button">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button className={cx('nextYearBtn')} type="button">
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
      <ul className={cx('days')}>
        <li>SUN</li>
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
      </ul>
      <div className={cx('view')}></div>
    </div>
  );
};

export default CustomCalendar;
