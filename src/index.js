import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'reset-css/reset.css';
import App from './App';
import './index.css';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
