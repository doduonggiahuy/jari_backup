/* config-overrides.js */
const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  addWebpackModuleRule,
} = require("customize-cra");
const path = require("path");
module.exports = override(
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  }),
  addWebpackAlias({
    ["@services/*"]: path.resolve(__dirname, "./src/services/*"),
    ["@assets"]: path.resolve(__dirname, "./src/assets"),
    ["@configs"]: path.resolve(__dirname, "./src/configs"),
    ["@components"]: path.resolve(__dirname, "./src/components"),
    ["@constants"]: path.resolve(__dirname, "./src/constants"),
    ["@redux"]: path.resolve(__dirname, "./src/redux"),
    ["@routes"]: path.resolve(__dirname, "./src/routes"),
    ["@screens"]: path.resolve(__dirname, "./src/screens"),
    ["@utils"]: path.resolve(__dirname, "./src/utils"),
    ["@views"]: path.resolve(__dirname, "./src/views"),
    ["@src"]: path.resolve(__dirname, "./src"),
  })
);
