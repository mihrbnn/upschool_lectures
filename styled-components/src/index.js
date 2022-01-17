import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
