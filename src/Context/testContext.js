/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import usePosts from '../Hook/usePosts';
import { initialState } from '../Reducer/testReducer';

const testContext = createContext(initialState);

const TestProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [
    state,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
  ] = usePosts();

  const data = {
    state,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
  };
  return <testContext.Provider value={data}>{children}</testContext.Provider>;
};

export { testContext, TestProvider };
