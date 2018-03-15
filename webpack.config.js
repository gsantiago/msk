module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "msk.browser.js",
    library: "Msk",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
