import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import CounterStore from './stores/CounterStore';
import TodoStore from './stores/TodoStore';

const stores = {
    CounterStore,
    TodoStore
};
ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
