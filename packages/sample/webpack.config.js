// @ts-nocheck `webpack.config.js` is a config file and does not require checking.
const path = require("path");

module.exports = {
  mode: "development", // Note:  Set to `development` for testing, please use `production` for production environments.
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "app.js",
  },
};
