module.exports = {
  entry: ["babel-polyfill", "./app.js"],
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', 
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};