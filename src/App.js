import React from 'react';
import './App.css';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';

function App() {
  // const isLogin = false;
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <>
          <WrapperPage />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
