import React from 'react';
import useCalendar from '../Hook/useCalendar';

export const CalendarContext = React.createContext(null);

export const CalendarProvider = ({ children, history }) => {
  const contextValue = { history, useCalendar };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
