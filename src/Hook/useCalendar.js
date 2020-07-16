import { useReducer, useEffect } from 'react';
import { calendarInitState, calendarReducer } from '../Reducer/calendarReducer';

const useCalendar = () => {
  const [calendarState, dispatch] = useReducer(
    calendarReducer,
    calendarInitState,
  );
  const { now, calendar, modal } = calendarState;
  const { year, month } = calendar;

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
    const dd = today.getDate();

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
    if (target.nodeName !== 'DIV') return;
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

  const changeMonthInput = ({ target }) => {
    const { value } = target;
    const numberValue = parseInt(value, 10);

    dispatch({ type: 'CHANGE_MONTH_INPUT', value: numberValue });

    if ((value !== '' && numberValue < 1) || numberValue > 12) {
      dispatch({ type: 'SHOW_WARNING', msg: '월 선택은 1 ~ 12만 가능합니다.' });
    } else if (modal.inputs.year > now.year + 100) {
      dispatch({
        type: 'SHOW_WARNING',
        msg: '100년 이후의 달력은 볼 수 없습니다.',
      });
    } else {
      dispatch({ type: 'REMOVE_WARNING' });
    }
  };

  const changeYearInput = ({ target }) => {
    const { value } = target;
    const numberValue = parseInt(value, 10);

    dispatch({ type: 'CHANGE_YEAR_INPUT', value: numberValue });

    if (numberValue > now.year + 100) {
      dispatch({
        type: 'SHOW_WARNING',
        msg: '100년 이후의 달력은 볼 수 없습니다.',
      });
    } else {
      dispatch({ type: 'REMOVE_WARNING' });
    }
  };

  const enterInputs = (e) => {
    if (e.keyCode !== 13) return;
    changeCalendarState();
  };

  const getSublist = (e, diaryList) => {
    const target =
      e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;
    const date = target.className.split(' ')[1];
    const sublist = diaryList.filter((diary) => diary.date === date);
    dispatch({ type: 'GET_SUBLIST', sublist, selectedDate: date });
  };

  const getTodaySublist = (present, diaryList) => {
    const today = `${present.year}-${present.month}-${present.date}`;
    const sublist = diaryList.filter((diary) => diary.date === today);
    dispatch({ type: 'GET_SUBLIST', sublist, selectedDate: today });
  };

  useEffect(() => {
    getNow();
  }, []);

  return {
    calendarState,
    dispatch,
    getFirstDay,
    getDatesArray,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    closeModal,
    onClickDimmed,
    changeCalendarState,
    enterInputs,
    changeYearInput,
    changeMonthInput,
    getSublist,
    getTodaySublist,
  };
};

export default useCalendar;
