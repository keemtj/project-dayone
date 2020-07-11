import React, { useContext } from 'react';
import './App.css';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';
import { LoginContext } from './Context/MainContext';

function App() {
  const context = useContext(LoginContext);
  const { loginState } = context;
  const { isLoggedIn } = loginState;

  return (
    <>
      {/* {isLoggedIn ? <WrapperPage /> : <Login />} */}
      {/* 새로고침시 로그인 하기 귀찮아서 만듦 원본코드는 윗줄 */}
      {<WrapperPage />}
    </>
  );
}

export default App;
