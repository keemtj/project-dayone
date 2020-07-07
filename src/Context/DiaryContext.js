import React, { useState } from 'react';

const DiaryContext = React.createContext('initial');

const DiaryProvider = ({ children, history }) => {
  const [modalState, setModalState] = useState('initial');
  const contextValue = { modalState, setModalState, history };

  return (
    <DiaryContext.Provider value={contextValue}>
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
