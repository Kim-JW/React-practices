## React Pracractices - Integration(개발 환경 통합)
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
$ npm i react react-dom prop-types react-addons-update

## emaillist
   - 개발 통합 설정(with Spring Boot Backend)
   - backend: Fully APIs
   - Frontend: React(SPA)
   - AJAX: fetch 기반

## Configuration
1. Application(Project) Structure
   <pre>
   /emaillist
    |--- /backend
    |       |--- /src
    |       |--- pom.xml
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |       |--- /assets
    |       |--- /node_modules
    |       |--- package.json
    |       |--- package-lock.json
   </pre>
2. webpack dev server
3. package.json
4. concurrently

# CORS (Cross Origin)
    