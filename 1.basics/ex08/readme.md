ex08 : JSX Tutorials

01. 특징 1 : HTML과 차이점
02. 특징 2 : Single Root node
03. 함수 컴포넌트 만들기
04. Pure React(React API)로 컴포넌트 작성하기
05. 클래스 컴포넌트 만들기
06. 특징3 : JSX 표현식 표기법({js expression})과 문제점, 공백
07. Dynamic HTML Rendering
08. Comment

1. 설치
    $ npm i -D
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
$ npm run debug src={01 | 02 | 03 | 04 | ...}

npx webpack serve --progress --mode development --env src=01