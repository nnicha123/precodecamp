import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    // need to return request (can add something but need to return) otherwise will block
    return request;
}), error => {
    console.log(error);
    return Promise.reject(error);
};

axios.interceptors.response.use(response => {
    console.log(response);
    // need to return request (can add something but need to return) otherwise will block
    return response;
}), error => {
    console.log(error);
    return Promise.reject(error);
};
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
