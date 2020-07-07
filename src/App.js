import React from 'react';
import './App.css';
import { TestProvider } from './Context/testContext';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';

function App() {
  // const isLogin = false;
  const isLogin = true;

  return (
    <>
      {isLogin ? (
        <TestProvider>
          <WrapperPage />
        </TestProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
