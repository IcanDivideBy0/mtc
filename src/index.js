import "./polyfills";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import "typeface-fira-sans";

import App from "mtc/components/App";

(async () => {
  const app = <App routerComponent={BrowserRouter} />;
  const root = document.getElementById("root");

  if (window.REACT_APP_SSR_HYDRATE) {
    loadableReady(() => ReactDOM.hydrate(app, root));
  } else {
    ReactDOM.render(app, root);
  }
})();
