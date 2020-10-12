module.exports = {
  devtool: 'none',
  entry: {
    main: ['@babel/polyfill', './src/js/index.tsx'] // Which file we want to use to be our source file, entry point, that have modern JS
  },
  module: {
    rules: [
      {
        // where we define our loaders (e.g: babel loader)
        test: /\.(js|jsx|tsx|ts)?$/, // Look at all the files with specified extension
        exclude: /node_modules/,
        loader: 'babel-loader',
        // Where we define our presets
        query: {
          presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(mp4|webp|jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/media/[name].[hash].[ext]',
            esModule: false
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
