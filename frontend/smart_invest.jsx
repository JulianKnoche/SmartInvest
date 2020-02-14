import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add( faLinkedin );

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.getState = configureStore.getState;
    ReactDOM.render(<Root store={configureStore()}/>, root)
    // ReactDOM.render(<h1>hello</h1>, root)
})

