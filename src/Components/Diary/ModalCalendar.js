import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/ModalCalendar.module.scss';
import useCalendar from '../../Hook/useCalendar';
// import { MainContext } from '../../Context/MainContext';
import ModalButtons from './ModalButtons';

const cx = classNames.bind(styles);

const ModalCalendar = () => {
  // const mainCtx = React.useContext(MainContext);
  // const { dispatch } = mainCtx;
  const hook = useCalendar();
  const {
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
  } = hook;
  const { now, calendar } = hook.calendarState;
  const { month, year, datesArray, startDay } = calendar;

  const [dateState, setDateState] = useState('');

  const onClickDate = (e) => {
    const target =
      e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;
    const date = target.className.split(' ')[0];
    setDateState(date);
  };

  // const onBlurDate = () => setDateState('');

  return (
    <>
      <div className={cx('calendar')}>
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
          <button type="button" className={cx('calendarState')}>
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
        <ul className={cx('days')}>
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THU</li>
          <li>FRI</li>
          <li>SAT</li>
        </ul>
        <div className={cx('dateView')}>
          {datesArray.map(({ yy, mm, dd }) => {
            const fullDate = `${yy}-${mm}-${dd}`;
            return (
              <button
                key={dd}
                type="button"
                onClick={onClickDate}
                className={cx(
                  `${fullDate}`,
                  {
                    today:
                      yy === now.year && mm === now.month && dd === now.date,
                  },
                  { firstDay: dd === 1 },
                )}
                disabled={yy === now.year && mm === now.month && dd > now.date}
                style={{
                  marginLeft: dd === 1 ? `${startDay * 3.6}rem` : 0,
                  border:
                    dateState === fullDate
                      ? '2px solid rgb(255, 114, 98)'
                      : 'none',
                  borderRadius: dateState === fullDate ? '3px' : 'none',
                }}
              >
                <span className={cx('date')}>{dd}</span>
              </button>
            );
          })}
        </div>
      </div>
      <ModalButtons dateState={dateState} />
    </>
  );
};

export default ModalCalendar;
