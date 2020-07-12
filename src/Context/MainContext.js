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
    bookmarkDiary,
  ] = usePosts();

  const [
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
    logOut,
  ] = useLogin();

  const mainData = {
    state,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
    bookmarkDiary,
    dispatch,
  };

  const loginData = {
    loginState,
    fetchChange,
    fetchUserCheck,
    fetchErrorMessage,
    fetchReset,
    dispatch,
    logOut,
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
