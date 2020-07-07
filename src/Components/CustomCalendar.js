import React, { useEffect, useReducer } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Style/CustomCalendar.module.scss';

const cx = classNames.bind(styles);

const initialState = {
  now: '',
  calendar: {
    year: '',
    month: '',
    date: '',
  },
};

const CustomCalendar = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const getDateArray = (yy, mm, dates) => {
    let dateArray = [];
    for (let i = 1; i <= dates; i++) {
      dateArray = dateArray.concat({ yy, mm, dd: i });
    }
    return dateArray;
  };

  const getDates = (yy, mm) => {
    switch (mm) {
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;

      case 2:
        if (yy % 400 === 0 || (yy % 4 === 0 && yy % 100 !== 0)) {
          return 29;
        } else {
          return 28;
        }

      default:
        return 31;
    }
  };

  // console.log(year, month, getDateArray(year, month, getDates(year, month)));

  useEffect(() => {
    // getDateArray(2020, 7, 31);
  }, []);

  return (
    <div className={cx('calendar')}>
      <div className={cx('navigation')}>
        <button className={cx('prevYearBtn')} type="button">
          <FontAwesomeIcon icon={faAngleDoubleLeft} className={cx('icon')} />
        </button>
        <button className={cx('prevMonthBtn')} type="button">
          <FontAwesomeIcon icon={faAngleLeft} className={cx('icon')} />
        </button>
        <span className={cx('state')}>
          {year}. {month < 10 ? '0' + month : month}.
        </span>
        <button className={cx('nextMonthBtn')} type="button">
          <FontAwesomeIcon icon={faAngleRight} className={cx('icon')} />
        </button>
        <button className={cx('nextYearBtn')} type="button">
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
        {getDateArray(year, month, getDates(year, month)).map(
          ({ yy, mm, dd }) => {
            return (
              <button key={dd} type="button" className={cx('dateBtn')}>
                <span className={cx('date')}>{dd}</span>
              </button>
            );
          },
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
