import React from 'react';
import useCalendar from '../Hook/useCalendar';

export const CalendarContext = React.createContext(null);

export const CalendarProvider = ({ children }) => {
  const {
    calendarState,
    dispatch,
    getFirstDay,
    getDatesArray,
    getNow,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    closeModal,
    onClickDimmed,
    changeCalendarState,
    enterInputs,
    changeMonthInput,
    changeYearInput,
    getSublist,
    getTodaySublist,
  } = useCalendar();

  const contextValue = {
    calendarState,
    dispatch,
    getFirstDay,
    getDatesArray,
    getNow,
    onClickPrevMonth,
    onClickPrevYear,
    onClickNextMonth,
    onClickNextYear,
    openModal,
    closeModal,
    onClickDimmed,
    changeCalendarState,
    enterInputs,
    changeMonthInput,
    changeYearInput,
    getSublist,
    getTodaySublist,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
