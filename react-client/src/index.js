import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './stores/index';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
