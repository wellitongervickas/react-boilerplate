import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import * as googleLibs from './utils/helpers/google';
import './assets/styles/app.scss';

// Inser lazy load font
googleLibs.insertGoogleFonts();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
