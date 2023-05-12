import React from 'react';
import './index.css';
import App from './App';
import store from "./Redux/store";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
