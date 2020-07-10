import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Style/CustomCalendar.module.scss';
import { CalendarContext } from '../Context/CalendarContext';
import { testContext } from '../Context/testContext';

const cx = classNames.bind(styles);

const CustomCalendar = () => {
  const calCtx = React.useContext(CalendarContext);
  const testCtx = React.useContext(testContext);
  const { state } = testCtx;
  const {
    calendarState,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
  } = calCtx;

  const { diaries } = state;
  const { now, calendar } = calendarState;
  const { year, month, datesArray, startDay } = calendar;
  console.log(diaries.map(({ date }) => date));

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
          <button
            type="button"
            className={cx('calendarState')}
            onClick={openModal}
          >
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
            const amount = `amount_${
              diaries.filter((diary) => diary.date === fullDate).length
            }`;

            return (
              <button
                key={dd}
                type="button"
                className={cx(
                  `${fullDate}`,
                  `${amount}`,
                  {
                    today:
                      yy === now.year && mm === now.month && dd === now.date,
                  },
                  { firstDay: dd === 1 },
                )}
                disabled={yy === now.year && mm === now.month && dd > now.date}
                style={{ marginLeft: dd === 1 ? `${startDay * 6}rem` : 0 }}
              >
                <span className={cx('date')}>{dd}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomCalendar;
