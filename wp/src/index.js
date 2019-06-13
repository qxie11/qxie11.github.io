import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
//const store = createStore(rootReducer);

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);