// import "@babel/polyfill";
// import "core-js/fn/object/assign";
// import "core-js/fn/object/entries";
// import "core-js/es6/promise";

import React from "react";
import ReactDOM from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

// import * as serviceWorker from "./serviceWorker";

import app from "./app";

const routerApp = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>{app}</BrowserRouter>
);

const root = document.getElementById("root");

if (window.REACT_APP_SSR) {
  loadableReady(() => ReactDOM.hydrate(routerApp, root));
} else {
  ReactDOM.render(routerApp, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
