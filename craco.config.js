const {
  addBeforeLoader,
  loaderByName,
  getLoader,
  throwUnexpectedConfigError,
} = require("@craco/craco");

const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = {
  babel: {
    plugins: [
      "@loadable/babel-plugin",
      ["module-resolver", { root: ["./src"] }],
    ],
  },
  webpack: {
    plugins: [new LoadablePlugin()],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );

      if (!isFound) {
        throwUnexpectedConfigError({
          packageName: "craco-mdx",
          githubRepo: "IcanDivideBy0/craco-mdx",
          message: "Can’t find babel-loader in the webpack config!",
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
