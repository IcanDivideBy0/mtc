const {
  addBeforeLoader,
  loaderByName,
  getLoader,
  throwUnexpectedConfigError,
} = require("@craco/craco");

const LoadablePlugin = require("@loadable/webpack-plugin");
const VisualizerPlugin = require("webpack-visualizer-plugin");

module.exports = {
  babel: {
    plugins: [
      "@loadable/babel-plugin",
      ["module-resolver", { alias: { mtc: "./src" } }],
    ],
  },
  webpack: {
    plugins: [new LoadablePlugin(), new VisualizerPlugin()],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );

      if (!isFound) {
        throwUnexpectedConfigError({
          packageName: "mdx-js",
          githubRepo: "@mdx-js/loader",
          message: "[craco] Can’t find babel-loader in the webpack config!",
        });
      }

      const babelLoader = match.loader;

      addBeforeLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /.mdx$/,
        use: [
          {
            loader: babelLoader.loader,
            options: babelLoader.options,
          },
          "@mdx-js/loader",
        ],
      });

      return webpackConfig;
    },
  },
};
