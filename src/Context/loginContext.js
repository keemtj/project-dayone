// import React, { createContext } from 'react';
// import useLogin from '../Hook/useLogin';
// import { initialState } from '../Reducer/loginReducer';

// const loginContext = createContext(initialState);

// const LoginProvider = ({ children }) => {
//   const [
//     state,
//     fetchChange,
//     fetchUserCheck,
//     fetchErrorMessage,
//     fetchReset,
//   ] = useLogin();

//   const loginData = {
//     state,
//     fetchChange,
//     fetchUserCheck,
//     fetchErrorMessage,
//     fetchReset,
//   };

//   return (
//     <loginContext.Provider value={loginData}>{children}</loginContext.Provider>
//   );
// };

// export { loginContext, LoginProvider };
