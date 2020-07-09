import React, { createContext } from 'react';
import useLogin from '../Hook/useLogin';
import { initialState } from '../Reducer/loginReducer';

const loginContext = createContext(initialState);

const LoginProvider = ({ children }) => {
  const [state, fetchLoginData] = useLogin();

  const loginData = {
    state,
    fetchLoginData,
  };
  return (
    <loginContext.Provider value={loginData}>{children}</loginContext.Provider>
  );
};

export { loginContext, LoginProvider };
