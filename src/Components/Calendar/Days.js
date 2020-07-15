import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/CustomCalendar.module.scss';

const cx = classNames.bind(styles);

const Days = () => {
  return (
    <ul className={cx('days')}>
      <li>SUN</li>
      <li>MON</li>
      <li>TUE</li>
      <li>WED</li>
      <li>THU</li>
      <li>FRI</li>
      <li>SAT</li>
    </ul>
  );
};

export default Days;
