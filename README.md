### Installation

---

1. Assuming you have [`git`](https://git-scm.com/downloads) installed type in console: `git clone https://github.com/grecdev/GrecTraveling.git`

2. Make sure you have the latest version of [Node.js](https://nodejs.org/en/download/)

3. [node package manager](https://docs.npmjs.com/about-npm/), run the following command in the `CLI` (command line interface):

```
npm install -g npm@latest
```

4. Create a `package.json` file, run the following command in the `CLI` (command line interface):

```
npm init -y
```

### Global dependencies

1. Webpack

---

- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge

```
npm i webpack webpack-cli webpack-dev-server webpack-merge --save
```

2. Babel

---

- @babel/core
- @babel/polyfill
- @babel/preset-env
- babel-loader
- babel-plugin-module-resolver

```
npm i @babel/core @babel/polyfill @babel/preset-env babel-loader babel-plugin-module-resolver --save-dev
```

3. Utilities

---

- html-webpack-plugin
- html-loader
- style-loader
- css-loader
- node-sass
- sass-loader
- mini-css-extract-plugin
- optimize-css-assets-webpack-plugin
- clean-webpack-plugin
- file-loader

```
npm i html-webpack-plugin html-loader style-loader css-loader node-sass sass-loader mini-css-extract-plugin optimize-css-assets-webpack-plugin clean-webpack-plugin file-loader --save-dev
```

**Package.json scripts**

---

```
"scripts": {
   "start": "webpack-dev-server --config webpack.dev.js --content-base src/ --open",
   "build": "webpack --config webpack.prod.js"
},
```

**If we use _React.js_**

---

1. `npm i react react-dom react-scripts --save`

2. Babel setup:

- @babel/preset-react
- @babel/plugin-syntax-jsx
- @babel/plugin-transform-react-display-name
- @babel/plugin-transform-react-jsx
- @babel/plugin-transform-react-jsx-self
- @babel/plugin-transform-react-jsx-source
- @babel/plugin-proposal-class-properties

```
npm i @babel/preset-react @babel/plugin-syntax-jsx @babel/plugin-transform-react-display-name @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-self @babel/plugin-transform-react-jsx-source @babel/plugin-proposal-class-properties --save-dev
```

And in `webpack.config.js` file add following:

```
query: {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
 }
```

and at the bottom add:

```
resolve: {extensions: ['.js','.jsx']}
```

If we want to use
_[`React router`](https://www.npmjs.com/package/react-router-dom)_:

```
npm i react-router-dom
```

1. Add in `webpack.dev.js` file: `devServer: { historyApiFallback: true }`

**_*Additional features:*_**

For `custom imports`:

1. Create a `.babelrc` file in the `root` folder
2. Add the following in the created file:

```
{
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@folder": "./src/...location..."
        }
      }
    ]
  ]
}
```

---

`environment variables`:

---

- Install [`dotenv-webpack`](https://www.npmjs.com/package/dotenv-webpack) and follow the instructions from there
- Create `.env` file in the `root folder`

---

`Promises / Fetch` for IE:

---

- es6-promise
- isomorphic-fetch

```
npm i es6-promise isomorphic-fetch --save-dev
```

And in the main `index.js` file add:

```
require('es6-promise').polyfill();
require('isomorphic-fetch');
```

---

To install _React code splitting_ you need to use `lazy()` && `Suspense` (see more here: [Source 1](https://digitalfortress.tech/debug/how-to-use-webpack-analyzer-bundle/) / [Source 2](https://reactjs.org/docs/code-splitting.html)):

---

1. `npm install --save-dev webpack-bundle-analyzer`

2. Add the following config in the `webpack.prod.js`:

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
```

3. And the plugin in the `plugins` property:

```
new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
    statsOptions: { source: false }
})
```

4. Add the following script in the `package.json` file:

```
"build-report": "webpack-bundle-analyzer --port 8888 ./dist/stats.json"
```

and to run it you do something like this in the `CLI`:

```
npm run build
npm run build-report
```

---

To use `ESLint`

---

1. `npm install eslint eslint-plugin-html eslint-plugin-import eslint-import-resolver-babel-module --save-dev`
2. Set config file: `npx eslint --init`
3. `npx eslint yourfile`

Add the following

```
parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
plugins: ['react', 'html'],
settings: {
  'import/resolver': {
    'babel-module': {},
  },
},

//  npx eslint ./src --ext .jsx,.js - check all js / jsx in the src directory including subdirectories
```

---

To use typescript

---

1. npm install --save-dev typescript @babel/preset-typescript
2. add in `webpack.config.js` in presets: `'@babel/preset-typescript'`

<details>
  <summary>VS code extensions</summary>
  
  ![Vs code extensions](https://i.imgur.com/Fy2vPI6.jpg "Vs code extensions")
</details>
