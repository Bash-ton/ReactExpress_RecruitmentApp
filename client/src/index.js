import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {ReduxStore, Persistor} from "./Model/Redux"
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={ReduxStore}>
        <PersistGate loading={null} persistor={Persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
