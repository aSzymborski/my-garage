import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
