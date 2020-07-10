import React, { useEffect } from 'react';
import DiarySublist from '../Components/DiarySublist';
import CustomCalendar from '../Components/CustomCalendar';
import CalendarModal from '../Components/CalendarModal';
import { CalendarProvider } from '../Context/CalendarContext';

const Calendar = () => {
  useEffect(() => {}, []);

  return (
    <main style={{ position: 'relative' }}>
      <CalendarProvider>
        <CustomCalendar />
        <DiarySublist />
        <CalendarModal />
      </CalendarProvider>
    </main>
  );
};

export default Calendar;
