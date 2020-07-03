import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Page/Login';
import Main from './Components/Main';

function App() {
  // const isLogin = false;
  const isLogin = true;

  return (
    <>
      {isLogin ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
