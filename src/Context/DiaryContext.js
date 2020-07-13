import React, { useState } from 'react';

const DiaryContext = React.createContext('initial');

const DiaryProvider = ({ children }) => {
  const [modalState, setModalState] = useState('initial');
  const contextValue = { modalState, setModalState };

  return (
    <DiaryContext.Provider value={contextValue}>
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
