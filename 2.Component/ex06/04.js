import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 잘못된 예
// let updateOrder = Object.assign({}, state.order, {
//     receive: '부산시 해운대구 우동...'
// });

let updateOrder = update(state.order, {
    // 해당 패스의 값 변경1
    receive: {
        $set: '부산시 해운대구 우동...'
    },

    // 해당 패스의 값 변경2
    payment: {
        method: {
            $set: 'Mobile'
        }
    },

    // 배열
    products: {
        // 배열 요소 변경(인덱스로 찾아야함)
        0: {
            amount: {
                $set: 5
            }
        },
        // 배열 요소 추가
        $push: [{
            "no": "c002-003",
            "name": "블루양말",
            "price": 4000,
            "amount": 2
        }]
    }
})

console.log(
    state.order,
    updateOrder
    );

console.log("===============================================================");
