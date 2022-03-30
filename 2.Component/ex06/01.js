import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "c002-003",
    "name": "블루양말",
    "price": 4000,
    "amount": 2
});

// 변경 안일어남, 변경이 되어야 렌더링 됨.
console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("====================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts2 = state.order.products.concat(
    {
        "no": "c002-003",
        "name": "블루양말",
        "price": 4000,
        "amount": 2
    }
)

console.log(state.order.products, updateProducts1, state.order.products === updateProducts2);

console.log("====================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts3 = [...state.order.products, {
    "no": "c002-003",
    "name": "블루양말",
    "price": 4000,
    "amount": 2
}];

console.log(state.order.products, updateProducts1, state.order.products === updateProducts3);