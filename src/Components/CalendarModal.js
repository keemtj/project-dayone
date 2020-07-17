/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/CalendarModal.module.scss';
import { CalendarContext } from '../Context/CalendarContext';

const cx = classNames.bind(styles);

const CalendarModal = () => {
  const calCtx = React.useContext(CalendarContext);
  const {
    calendarState,
    closeModal,
    onClickDimmed,
    changeCalendarState,
    enterInputs,
    changeMonthInput,
    changeYearInput,
  } = calCtx;

  const { now, modal } = calendarState;
  const { warning, inputs, display } = modal;

  return (
    <div
      className={cx('dimmed')}
      style={{ display: display ? 'block' : 'none' }}
      onClick={onClickDimmed}
    >
      <div className={cx('modal')}>
        <ul className={cx('inputs')}>
          <li>
            <input
              className="year"
              type="number"
              min="1970"
              max={now.year + 100}
              placeholder={now.year}
              onChange={changeYearInput}
              onKeyUp={enterInputs}
              value={inputs.year}
            />
            <span>년</span>
          </li>
          <li>
            <input
              className="month"
              type="number"
              min="1"
              max="12"
              placeholder={now.month}
              onChange={changeMonthInput}
              onKeyUp={enterInputs}
              value={inputs.month}
            />
            <span>월</span>
          </li>
        </ul>
        <button
          type="button"
          className={cx('goBtn')}
          onClick={changeCalendarState}
        >
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
