const fs = require("fs");
const loaderUtils = require("loader-utils");
const mime = require("mime");
const paths = require("react-scripts/config/paths");

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

module.exports = {
  fileLoader,
  urlLoader,
};
