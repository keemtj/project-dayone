import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import './reset.css';
import './index.css';
import App from './App';
import { MainProvider } from './Context/MainContext';

ReactDOM.render(
  <BrowserRouter>
    <LastLocationProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </LastLocationProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
