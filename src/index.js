import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.js'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer.js';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
        document.getElementById('main'));