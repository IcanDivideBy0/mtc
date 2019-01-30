process.env.NODE_ENV = "production";
process.env.REACT_APP_SSR_HYDRATE = true;
process.env.REACT_APP_SSR = true;

const path = require("path");
const url = require("url");
const { promisify } = require("util");
const fs = require("fs");
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const mkdirp = promisify(require("mkdirp"));
const sm = require("sitemap");
const chalk = require("chalk");

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
global.fetch = require("node-fetch");

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
 * Write a file to the build folder
 */

async function writeDeployedFile(fileName, fileContent) {
  const filePath = path.join(paths.appBuild, fileName);

  console.log(chalk`  {grey ${fileName}}`);

  await mkdirp(path.dirname(filePath));
  await writeFile(filePath, fileContent);
}

/**
 * Write an url to corresponding deployed files
 */

async function writeDeployedUrl(uri, fileContent) {
  const promises = [];

  uri = uri.replace(/^\//, "");
  if (uri) promises.push(writeDeployedFile(`${uri}.html`, fileContent));

  const indexFilePath = path.join(uri, "index.html");
  promises.push(writeDeployedFile(indexFilePath, fileContent));

  return Promise.all(promises);
}

/**
 * Main
 */

(async () => {
  await move("index.html", "200.html");
  const routes = process.env.DEBUG_ROUTE
    ? process.env.DEBUG_ROUTE.split(";")
        .filter(v => !!v)
        .map(url => ({ url }))
    : await getRoutes();

  /**
   * Sitemap
   */

  console.log(chalk`Generating {bold sitemap.xml}`);
  const sitemap = await sm.createSitemap({
    hostname: paths.publicUrl,
    cacheTime: 600000, // 600 sec - cache purge period
    urls: routes
      // sm module mutates routes objects, make a copy of these objects…
      .map(route => ({ ...route }))
      // remove unwanted routes
      .filter(route => !!route.priority),
  });
  const xml = await promisify(sitemap.toXML.bind(sitemap))();
  await writeDeployedFile("sitemap.xml", xml);

  /**
   * Routes
   */

  for (const route of routes) {
    console.log(chalk`Generating {bold ${route.url}}`);

    const templateVars = await render(route.url);
    const html = template(templateVars).replace(
      /%PUBLIC_URL%/g,
      paths.publicUrl
    );

    if (process.env.DEBUG_ROUTE) {
      // console.log(html);
      // continue;
    }

    const fileContent =
      !!process.env.DEBUG_ROUTE || true ? html : minify(html, minifyOptions);

    const promises = [];
    promises.push(writeDeployedUrl(route.url, fileContent));

    for (const alias of route.aliases || []) {
      promises.push(writeDeployedUrl(alias, fileContent));
    }

    await Promise.all(promises);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
