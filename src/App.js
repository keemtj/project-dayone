import React, { useContext } from 'react';
import './App.css';
import { TestProvider } from './Context/testContext';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';
import { loginContext } from './Context/loginContext';

function App() {
  const context = useContext(loginContext);
  const { state } = context;
  const { isLoggedIn } = state;

  return (
    <>
      {isLoggedIn ? (
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
