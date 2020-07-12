import { useReducer } from 'react';
import { loginInitialState, loginReducer } from '../Reducer/loginReducer';

const useLogin = () => {
  const [loginState, dispatch] = useReducer(loginReducer, loginInitialState);

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

  const logOut = () => dispatch({ type: 'LOG_OUT' });

  return [
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
    logOut,
  ];
};

export default useLogin;
