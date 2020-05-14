import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import {watchAgeUp} from './sagas/saga';

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

