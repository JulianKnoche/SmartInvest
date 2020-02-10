import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(<Root store={configureStore()}/>, root)
    // ReactDOM.render(<h1>hello</h1>, root)
})

window.getState = configureStore.getState;