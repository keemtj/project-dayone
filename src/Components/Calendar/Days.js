import React from 'react';
import classNames from 'classnames/bind';
import calendarStyles from '../Style/CustomCalendar.module.scss';
import diaryStyles from '../Style/ModalCalendar.module.scss';

const Days = ({ pageCtx }) => {
  const { page } = pageCtx;
  const cx = classNames.bind(page === 'diary' ? diaryStyles : calendarStyles);

  console.log('days render');
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
