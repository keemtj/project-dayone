import React from 'react';
import useCalendar from '../Hook/useCalendar';

export const CalendarContext = React.createContext(null);

export const CalendarProvider = ({ children }) => {
  const {
    calendarState,
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
    changeInputs,
    getSublist,
  } = useCalendar();

  const contextValue = {
    calendarState,
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
    changeInputs,
    getSublist,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
