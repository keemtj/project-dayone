import React, { createContext } from 'react';
import usePosts from '../Hook/usePosts';
import useLogin from '../Hook/useLogin';
import { initialState } from '../Reducer/mainReducer';
import { loginInitialState } from '../Reducer/loginReducer';

const MainContext = createContext(initialState);
const LoginContext = createContext(loginInitialState);

const MainProvider = ({ children }) => {
  const [
    state,
    dispatch,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
  ] = usePosts();

  const [
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
  ] = useLogin();

  const mainData = {
    state,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
  };

  const loginData = {
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
    dispatch,
  };
  return (
    <MainContext.Provider value={mainData}>
      <LoginContext.Provider value={loginData}>
        {children}
      </LoginContext.Provider>
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider, LoginContext };
