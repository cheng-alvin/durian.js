// eslint-disable-next-line
// @ts-nocheck `webpack.config.js` is a config file and does not require checking. 
import path from "path";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "app.js"
  },
};