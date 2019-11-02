import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Routes } from './navigation';
import { history } from './navigation/history';

// Styles
import './index.scss';

ReactDOM.render(
    <div className="app">
        <div className="app-container">
            <Router history={ history }>
                <Routes />
            </Router>
        </div>
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
