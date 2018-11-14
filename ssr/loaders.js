const fs = require("fs");
const path = require("path");
const loaderUtils = require("loader-utils");
const mime = require("mime");
const paths = require("react-scripts/config/paths");
const mdx = require("@mdx-js/mdx");

/**
 * Webpack like file-loader
 */

function fileLoader(module) {
  const buildFilePath = loaderUtils.interpolateName(
    { resourcePath: module.id },
    "static/media/[name].[hash:8].[ext]",
    {
      context: process.cwd(),
      content: fs.readFileSync(module.id),
    }
  );

  module.exports = paths.servedPath + buildFilePath;
}

/**
 * Webpack like url-loader
 */

function urlLoader(module) {
  const content = fs.readFileSync(module.id);

  if (content.length < 10000) {
    const mimetype = mime.getType(module.id);
    const b64 = content.toString("base64");

    module.exports = `data:${mimetype ? mimetype + ";" : ""}base64,${b64}`;
  } else {
    fileLoader(module);
  }
}

/**
 * MDX loader
 */

function mdxLoader(module) {
  const mdxText = fs.readFileSync(module.id);
  const jsx = mdx.sync(mdxText);

  // See https://github.com/mdx-js/mdx/blob/master/packages/loader/index.js
  const code = `
    import React from "react";
    import { MDXTag } from "@mdx-js/tag";

    ${jsx}
  `;

  const fileName = path.join(
    path.dirname(module.id),
    `.__mdx-loader__${path.basename(module.id, ".mdx")}.js`
  );
  fs.writeFileSync(fileName, code);

  // Let babel-register do his work
  try {
    module.exports = require(fileName);
    fs.unlinkSync(fileName);
  } catch (err) {
    fs.unlinkSync(fileName);
    throw err;
  }
}

/**
 * Require's hooks
 */

require.extensions[".svg"] = fileLoader;

require.extensions[".bmp"] = urlLoader;
require.extensions[".gif"] = urlLoader;
require.extensions[".jpg"] = urlLoader;
require.extensions[".jpeg"] = urlLoader;
require.extensions[".png"] = urlLoader;
require.extensions[".webp"] = urlLoader;
require.extensions[".mp3"] = urlLoader;

require.extensions[".mdx"] = mdxLoader;

module.exports = {
  fileLoader,
  urlLoader,
};
