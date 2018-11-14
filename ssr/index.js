process.env.NODE_ENV = "production";
process.env.REACT_APP_SSR = true;

const path = require("path");
const url = require("url");
const { promisify } = require("util");
const fs = require("fs");
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const mkdirp = promisify(require("mkdirp"));

const paths = require("react-scripts/config/paths");
const getClientEnvironment = require("react-scripts/config/env");
const { minify } = require("html-minifier");

const { protocol, host } = url.parse(paths.publicUrl);
const REACT_APP_LOCATION_ORIGIN = protocol + "//" + host;

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
Object.assign(process.env, getClientEnvironment(publicUrl).raw, {
  REACT_APP_LOCATION_ORIGIN,
});

require("module").Module._initPaths();
require("@babel/polyfill");
require("@babel/register");

require("./loaders");
const { render } = require("./renderer");
const { getRoutes } = require("./routes");
const template = require("./template");

const minifyOptions = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};

/**
 * Move a file
 */

async function move(from, to) {
  const fromPath = path.join(paths.appBuild, from);
  const toPath = path.join(paths.appBuild, to);

  try {
    await stat(fromPath);
  } catch (err) {
    if (err.code === "ENOENT") return;
    throw err;
  }

  await mkdirp(path.dirname(toPath));
  await rename(fromPath, toPath);
}

/**
 * Main
 */

(async () => {
  await move("index.html", "200.html");

  const routes = await getRoutes();

  for (const route of routes) {
    const templateVars = await render(route.url);
    const html = template(templateVars).replace(
      /%PUBLIC_URL%/g,
      paths.publicUrl
    );

    const fileContent = minify(html, minifyOptions);
    const fileName =
      route.url + (route.url.endsWith("/") ? "index.html" : ".html");
    const filePath = path.join(paths.appBuild, fileName);

    await mkdirp(path.dirname(filePath));
    await writeFile(filePath, fileContent);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
