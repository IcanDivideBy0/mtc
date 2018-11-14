import React from "react";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { Helmet } from "react-helmet";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";
import compose from "lodash.flowright";

import { App } from "modules/app";

const path = require("path");
const statsFile = path.resolve(__dirname, "../build/loadable-stats.json");

export async function render(url) {
  const chunkExtractor = new ChunkExtractor({ statsFile });
  const sheet = new ServerStyleSheet();

  const html = compose(
    ReactDOMServer.renderToString,
    sheet.collectStyles.bind(sheet),
    chunkExtractor.collectChunks.bind(chunkExtractor)
  )(
    <StaticRouter location={url} context={{}}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

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
      sheet.getStyleTags(),
    ].join(""),
    bodyAttrs: helmet.bodyAttributes.toString(),
    appContent: html,
    bodyContent: chunkExtractor.getScriptTags(),
  };
}
