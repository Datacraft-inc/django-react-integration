var config = {

    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/build',
        filename: "[name]_webpack.js",
        sourceMapFilename: "[name]_webpack.map"
    },
    cache: true,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
]
    },

    devtool: "source-map"
};


module.exports = config;
