import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/CalendarModal.module.scss';

const cx = classNames.bind(styles);

const CalendarModal = () => {
  return (
    <div className={cx('dimmed')}>
      <div className={cx('modal')}>
        <input type="text" placeholder="YEAR" />
        <input type="text" placeholder="MONTH" />
        <input type="text" placeholder="DATE" />
        <button type="button" className={cx('goBtn')}>
          이동
        </button>
        <button type="button" className={cx('closeBtn')}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
