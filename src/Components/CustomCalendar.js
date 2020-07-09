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
import CalendarModal from './CalendarModal';

const cx = classNames.bind(styles);

const initialState = {
  now: {
    year: '',
    month: '',
    date: '',
  },
  calendar: {
    startDay: '',
    year: '',
    month: '',
    datesArray: [],
  },
  modal: {
    state: 'none',
    inputs: { year: '', month: '' },
    warning: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_NOW':
      return {
        ...state,
        now: action.now,
        calendar: {
          ...state.calendar,
          year: action.year,
          month: action.month,
        },
      };
    case 'GET_DATESARRAY':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          datesArray: action.datesArray,
        },
      };
    case 'GET_FIRSTDAY':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          startDay: action.firstDay,
        },
      };
    case 'GET_NEW_CALENDAR':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          year: action.year,
          month: action.month,
        },
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          state: 'block',
          inputs: {
            year: state.now.year,
            month: state.now.month,
          },
          warning: '',
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          state: 'none',
        },
      };
    case 'CHANGE_INPUTS':
      return {
        ...state,
        modal: {
          ...state.modal,
          inputs: { ...state.modal.inputs, [action.inputType]: action.value },
        },
      };
    case 'SHOW_WARNING':
      return {
        ...state,
        modal: {
          ...state.modal,
          warning: action.msg,
        },
      };
    case 'REMOVE_WARNING':
      return {
        ...state,
        modal: {
          ...state.modal,
          warning: '',
        },
      };
    default:
      throw new Error('ERROR');
  }
};

const CustomCalendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { now, calendar, modal } = state;
  const { year, month, datesArray, startDay } = calendar;

  const getFirstDay = (array) => {
    const startDate = array[0];
    const firstDay = new Date(
      startDate.yy,
      startDate.mm - 1,
      startDate.dd,
    ).getDay();

    dispatch({ type: 'GET_FIRSTDAY', firstDay });
  };

  const getDatesArray = (yy, mm) => {
    let array = [];
    let dates = 0;

    switch (mm) {
      case 4:
      case 6:
      case 9:
      case 11:
        dates = 30;
        break;
      case 2:
        if (yy % 400 === 0 || (yy % 4 === 0 && yy % 100 !== 0)) {
          dates = 29;
        } else {
          dates = 28;
        }
        break;
      default:
        dates = 31;
    }

    for (let i = 1; i <= dates; i++) {
      array = array.concat({ yy, mm, dd: i });
    }

    dispatch({ type: 'GET_DATESARRAY', datesArray: array });
    getFirstDay(array);
  };

  const getNow = () => {
    const today = new Date();
    const yy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd =
      new String(today)[11] === '0'
        ? new String(today).slice(10, 11)
        : new String(today).slice(9, 11);

    dispatch({
      type: 'GET_NOW',
      now: { year: yy, month: mm, date: Number(dd) },
      year: yy,
      month: mm,
    });

    getDatesArray(yy, mm);
  };

  const onClickPrevYear = () => {
    if (year < 1970) return;
    dispatch({ type: 'GET_NEW_CALENDAR', year: year - 1, month });
    getDatesArray(year - 1, month);
  };

  const onClickNextYear = () => {
    if (year >= now.year) return;
    dispatch({ type: 'GET_NEW_CALENDAR', year: year + 1, month });
    getDatesArray(year + 1, month);
  };

  const onClickPrevMonth = () => {
    if (month <= 1) {
      dispatch({ type: 'GET_NEW_CALENDAR', year: year - 1, month: 12 });
      getDatesArray(year - 1, 12);
    } else {
      dispatch({ type: 'GET_NEW_CALENDAR', year, month: month - 1 });
      getDatesArray(year, month - 1);
    }
  };

  const onClickNextMonth = () => {
    if (year === now.year && month === now.month) return;
    if (month >= 12) {
      dispatch({ type: 'GET_NEW_CALENDAR', year: year + 1, month: 1 });
      getDatesArray(year + 1, 1);
    } else {
      dispatch({ type: 'GET_NEW_CALENDAR', year, month: month + 1 });
      getDatesArray(year, month + 1);
    }
  };

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  const onClickDimmed = ({ target }) => {
    if (!target.className.includes('dimmed')) return;
    closeModal();
  };

  const changeCalendarState = () => {
    let modalYear = modal.inputs.year;
    let modalMonth = modal.inputs.month;
    if (modal.warning !== '') return;
    if (modalYear === '') modalYear = now.year;
    if (modalMonth === '') modalMonth = now.month;
    if (modalYear !== '' && modalYear < 1970) {
      dispatch({
        type: 'SHOW_WARNING',
        msg: '1970년 이후 달력만 볼 수 있습니다.',
      });
      return;
    }

    dispatch({ type: 'GET_NEW_CALENDAR', year: modalYear, month: modalMonth });
    getDatesArray(modalYear, modalMonth);
    closeModal();
  };

  const changeInputs = ({ target }) => {
    const inputType = target.className;
    const { value } = target;

    dispatch({ type: 'CHANGE_INPUTS', inputType, value });

    if (inputType === 'month' && ((value !== '' && value < 1) || value > 12)) {
      dispatch({ type: 'SHOW_WARNING', msg: '월 선택은 1 ~ 12만 가능합니다.' });
    } else if (
      (inputType === 'year' && value > now.year) ||
      (modal.inputs.year === now.year && value > now.month) ||
      (value === now.year && modal.inputs.month > now.month)
    ) {
      dispatch({
        type: 'SHOW_WARNING',
        msg: '오늘 날짜 이후의 달력은 볼 수 없습니다.',
      });
    } else {
      dispatch({ type: 'REMOVE_WARNING' });
    }
  };

  useEffect(() => {
    getNow();
  }, []);

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
          <button type="button" className={cx('state')} onClick={openModal}>
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
            return (
              <button
                key={dd}
                type="button"
                className={cx(
                  `${yy}-${mm}-${dd}`,
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
