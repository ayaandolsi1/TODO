import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import SampleComponent from './Sample';

ReactDOM.render(
  <Provider Store={Store}>
    <SampleComponent />
  </Provider>,
  document.getElementById('root')
);