const { override, addBabelPlugins } = require("customize-cra");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = (orginalConfig, env) => {
  const config = override(
    ...addBabelPlugins("@loadable/babel-plugin", [
      "module-resolver",
      {
        root: ["./src"],
      },
    ])
  )(orginalConfig, env);

  config.plugins.push(new LoadablePlugin());

  return config;
};
