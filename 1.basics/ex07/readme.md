ex07: ex00.cra Reconfiguration

1. 설치
$ npm i -D
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader
    $ npm i react react-dom
    $ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react

2. 설정
    - babel config
    - webpack.config

3. npm 스크립트
"scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }

4. 실행
$ npm start
$ npm run build