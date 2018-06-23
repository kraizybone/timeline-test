import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { watchers } from './watchers';

import Root from './components/Root';

import './assets/styles/app.scss';

const loggerMiddleware = createLogger({ level: 'debug', collapsed: true });

const sagaMiddleware = createSagaMiddleware();

const middlewares = [loggerMiddleware, sagaMiddleware];

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(watchers);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
