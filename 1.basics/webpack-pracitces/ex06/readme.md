이미지 모듈 번들링하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. CSS Loader 설정(webpack.config.js)
output: {
        path : path.resolve('public'),
        filename : 'bundle.js',
        assetModuleFilename : 'assets/images/[hash][ext]'
    },
module : {
        rules : [{
            test : /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type : 'asset/resource'
        }]
    }

3. 개발 서버 실행 (번들링은 배포 후)
$ npm start

