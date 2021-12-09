import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './Redux/store'
import { Provider } from 'react-redux'


//Provider is a higher order component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


