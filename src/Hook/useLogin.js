import { useReducer } from 'react';
import { initialState, loginReducer } from '../Reducer/loginReducer';

const useLogin = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const fetchChange = (name, value) => {
    return dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  const fetchUserCheck = (id, password) => {
    return dispatch({ type: 'USER_CHECK', userId: id, password });
  };

  const fetchErrorMessage = () => {
    return dispatch({ type: 'ERROR_MESSAGE' });
  };

  const fetchReset = () => {
    return dispatch({ type: 'RESET_INPUT' });
  };

  return [state, fetchChange, fetchUserCheck, fetchErrorMessage, fetchReset];
};

export default useLogin;
