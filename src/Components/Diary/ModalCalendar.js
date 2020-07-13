import React from 'react';
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
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const ModalCalendar = () => {
  const mainCtx = React.useContext(MainContext);
  const { dispatch } = mainCtx;
  const hook = useCalendar();
  const {
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
  } = hook;
  const { now, calendar } = hook.calendarState;
  const { month, year, datesArray, startDay } = calendar;

  const changeDate = (e) => {
    // const target =
    // e.target.nodeName === 'span' ? e.target.parentNode : e.target;
    const date = e.target.className.split(' ')[0];
    dispatch({ type: 'CHANGE_DATE', date });
  };

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
                onClick={changeDate}
                className={cx(
                  `${fullDate}`,
                  {
                    today:
                      yy === now.year && mm === now.month && dd === now.date,
                  },
                  { firstDay: dd === 1 },
                )}
                disabled={yy === now.year && mm === now.month && dd > now.date}
                style={{ marginLeft: dd === 1 ? `${startDay * 3.6}rem` : 0 }}
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

export default ModalCalendar;
