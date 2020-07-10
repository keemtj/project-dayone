import React from 'react';
import useCalendar from '../Hook/useCalendar';

export const CalendarContext = React.createContext(null);

export const CalendarProvider = ({ children, history }) => {
  const calendarHook = useCalendar();
  const contextValue = { history, calendarHook };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
