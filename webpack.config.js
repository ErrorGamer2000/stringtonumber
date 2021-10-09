const path = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "browser.js",
    library: {
      name: "strToNum",
      type: "window"
    }
  },
  target: "web"
};
