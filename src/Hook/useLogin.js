import { useReducer } from 'react';
import { initialState, loginReducer } from '../Reducer/loginReducer';

const useLogin = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const fetchLoginData = (name, value) => {
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  return [state, fetchLoginData];
};

export default useLogin;
