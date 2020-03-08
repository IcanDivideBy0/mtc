import React from "react";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { Helmet } from "react-helmet-async";
import { SheetsRegistry } from "jss";
import { createGenerateClassName } from "@material-ui/core/styles";
import { StaticRouter } from "react-router";
import flowRight from "lodash.flowright";

import App from "mtc/components/App";

const path = require("path");
const statsFile = path.resolve(__dirname, "../build/loadable-stats.json");

export async function render(location) {
  // loadable-components
  const chunkExtractor = new ChunkExtractor({ statsFile });

  // material-ui
  const generateClassName = createGenerateClassName({
    productionPrefix: "jss-ssr",
  });
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();

  const html = await flowRight(
    ReactDOMServer.renderToString,
    chunkExtractor.collectChunks.bind(chunkExtractor)
  )(
    <App
      muiThemeProviderProps={{ sheetsManager }}
      jssProviderProps={{ registry: sheetsRegistry, generateClassName }}
      routerComponent={StaticRouter}
      routerProps={{ location, context: {} }}
    />
  );

  const helmet = Helmet.renderStatic();
  const muiCss = `<style id="jss-ssr">${sheetsRegistry.toString()}</style>`;

  return {
    htmlAttrs: helmet.htmlAttributes.toString(),
    headContent: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.noscript.toString(),
      helmet.script.toString(),
      helmet.style.toString(),
      chunkExtractor.getLinkTags(),
      chunkExtractor.getStyleTags(),
      muiCss,
    ].join(""),
    bodyAttrs: helmet.bodyAttributes.toString(),
    appContent: html,
    bodyContent: chunkExtractor.getScriptTags(),
  };
}
