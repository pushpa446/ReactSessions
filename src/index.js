import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js'
import {createStore} from 'redux';

const store = createStore(reducer);
ReactDOM.render(
    <App/>,
        document.getElementById('main'));