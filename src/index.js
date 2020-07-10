import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import App from './App';
// import { LoginProvider } from './Context/loginContext';
import { MainProvider } from './Context/MainContext';

ReactDOM.render(
  <BrowserRouter>
    <MainProvider>
      {/* <LoginProvider> */}
      <App />
      {/* </LoginProvider> */}
    </MainProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
