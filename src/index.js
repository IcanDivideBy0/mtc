import React from "react";
import ReactDOM from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import { App } from "modules/app";

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
const root = document.getElementById("root");

if (window.REACT_APP_SSR) {
  loadableReady(() => ReactDOM.hydrate(app, root));
} else {
  ReactDOM.render(app, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
