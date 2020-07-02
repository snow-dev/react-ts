import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles/index.css';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";

import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/App";

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware )));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
