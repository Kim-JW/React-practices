ex02: Component Styling(Working with UI)

01. Inline Styling
02. Normal CSS(css loader options : {module: false})
    - $ npm run debug scr=03 css-modules=false
03. Normal CSS(css loader options : {module: true})
    - $ npm run debug scr=03 css-modules=true

04. CSS Module(css loader options : {module: true}) - 왜 모듈화를 해야 하는가?
    - $ npm run debug scr=03 css-modules=true

05. SACC & SCSS 
06. 
07. 
08. 

1. 설치
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    $ npm i react react-dom

2. 설정
    - babel config
    - webpack.config

3. npm 스크립트
"scripts": {
    "debug" : "npx webpack serve --progress --mode development --env",
    "build" : "npx webpack"
  }

4. 실행
$ npm run debug src={01 | 02 | 03 | 04 | ...} css-modules={[true]|false}

npx webpack serve --progress --mode development --env src=01