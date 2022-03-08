// 블록 스코프 변수(es6)
const users = [{
    no : 1,
    name : 'michol',
    email : 'michol@gmail.com'
},{
    no : 2,
    name : 'dooly',
    email : 'dooly@gmail.com'
}];

const {no} = users[0];
console.log(no);

// 객체분해 (es6)
function print({no, name, email}) {
    // 템플릿 문자열(es6)
    console.log(o.no + ", " + o.name + ", " + o.email);
    console.log(`${no}, ${name}, ${email}`);
}

// for..of(es6)
for(let user of users) {
    print(user);
}

