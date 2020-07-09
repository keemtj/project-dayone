import React, { useReducer, createContext } from 'react';
import './App.css';
import { TestProvider } from './Context/testContext';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';

const initialState = {
  isLoggedIn: false,
  users: [
    { id: 1, userId: 'dorodoro', userPw: '123', active: false },
    { id: 2, userId: 'jay', userPw: '123', active: false },
    { id: 3, userId: 'jimmy', userPw: '123', active: false },
    { id: 4, userId: 'haeuni', userPw: '123', active: false },
  ],
  inputs: {
    id: '',
    password: '',
  },
};

const loginReducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'RESET_INPUT':
      return {
        inputs: { id: '', password: '' },
      };
    case 'USER_CHECK':
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.userId === action.userId && user.userPw === action.userPw
              ? { ...user, active: !user.active }
              : user,
          ),
        ],
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const loginContext = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const loginData = { state, dispatch };

  return (
    <loginContext.Provider value={loginData}>
      {false ? (
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
