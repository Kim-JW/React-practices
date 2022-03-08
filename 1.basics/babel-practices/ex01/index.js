const babel = require('@babel/core');

// const fn = function() {
//     return 1;
// }
// const fn = () => 1 와 같은 의미

const result = babel.transform('const fn = () => 1;', {});
console.log(result);