import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import reducer from './store/reducer';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  rA:reducerA,
  rB:reducerB
})

const store = createStore(rootReducer);

 
ReactDOM.render(
  <Provider store={store}><App /></Provider>,document.getElementById('root')
);
serviceWorker.unregister();
