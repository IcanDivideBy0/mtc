import React from "react";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { ServerStyleSheets } from "@material-ui/styles";
import { StaticRouter } from "react-router";
import flowRight from "lodash.flowright";

import App from "mtc/components/App";

const path = require("path");
const statsFile = path.resolve(__dirname, "../build/loadable-stats.json");

export async function render(location) {
  // loadable-components
  const chunkExtractor = new ChunkExtractor({ statsFile });

  // material-ui
  const sheets = new ServerStyleSheets();

  // react-helmet-async
  const helmetContext = {};

  const html = await flowRight(
    ReactDOMServer.renderToString,
    chunkExtractor.collectChunks.bind(chunkExtractor),
    sheets.collect.bind(sheets)
  )(
    <App
      helmetProviderProps={{ context: helmetContext }}
      routerComponent={StaticRouter}
      routerProps={{ location, context: {} }}
    />
  );

  const { helmet } = helmetContext;
  const muiCss = `<style id="jss-server-side">${sheets.toString()}</style>`;

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
    bodyContent: [chunkExtractor.getScriptTags()].join(""),
  };
}
