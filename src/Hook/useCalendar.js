import { useReducer, useEffect } from 'react';
import { calendarInitState, calendarReducer } from '../Reducer/calendarReducer';

const useCalendar = () => {
  const [state, dispatch] = useReducer(calendarReducer, calendarInitState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await 'api';
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useCalendar;
