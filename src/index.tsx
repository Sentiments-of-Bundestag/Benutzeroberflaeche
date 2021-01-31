import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { config } from 'dotenv';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './views/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';

config();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
