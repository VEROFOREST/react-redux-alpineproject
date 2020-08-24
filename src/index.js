import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Version from './components/version'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from '../src/components/nav';


import store from "./store/index.js";


ReactDOM.render (<Provider store={store}>
                <NavComponent/>
                <Version/>
                </Provider>, document.getElementById('root'));
         

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

