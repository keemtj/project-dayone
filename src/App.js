import React, { useReducer, createContext } from 'react';
import './App.css';
import { TestProvider } from './Context/testContext';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';
import { initialState, loginReducer } from './Reducer/loginReducer';

export const loginContext = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const loginData = { state, dispatch };

  return (
    <loginContext.Provider value={loginData}>
      {state.isLoggedIn ? (
        <TestProvider>
          <WrapperPage />
        </TestProvider>
      ) : (
        <Login state={state} dispatch={dispatch} />
      )}
    </loginContext.Provider>
  );
}

export default App;
