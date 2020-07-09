import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/CalendarModal.module.scss';

const cx = classNames.bind(styles);

const CalendarModal = ({
  state,
  closeModal,
  changeInputs,
  warning,
  inputValues,
}) => {
  return (
    <div className={cx('dimmed')} style={{ display: state }}>
      <div className={cx('modal')}>
        <input
          type="text"
          placeholder="YEAR"
          onChange={changeInputs}
          value={inputValues.year}
        />
        <input
          type="text"
          placeholder="MONTH"
          onChange={changeInputs}
          value={inputValues.month}
        />
        <button type="button" className={cx('goBtn')} onClick={closeModal}>
          이동
        </button>
        <button type="button" className={cx('closeBtn')} onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <span
          className={cx('warning')}
          style={{ display: warning === '' ? 'none' : 'block' }}
        >
          {warning}
        </span>
      </div>
    </div>
  );
};

export default CalendarModal;
