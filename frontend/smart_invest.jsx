import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// library.add( faLinkedin );

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    //testing
    window.getState = store.getState();
    window.store = store;

    const root = document.getElementById("root");
    window.getState = configureStore.getState;
    ReactDOM.render(<Root store={store}/>, root)
    // ReactDOM.render(<h1>hello</h1>, root)
})

