import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

import configureStore, { history } from './store';

const { store } = configureStore();

console.log('test')

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
