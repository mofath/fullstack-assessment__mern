import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/containers';
import 'normalize.css';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
