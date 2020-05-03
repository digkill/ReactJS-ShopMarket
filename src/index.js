import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {Provider} from 'react-redux';
import createStore from './store'

const store = createStore()


setTimeout(function () {
    store.dispatch({
        type: 'SET_BOOKS',
        payload: [{
            id: 0,
            title: 'dwdwdwы 1'
        } ]
    })
}, 1000)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);