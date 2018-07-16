// const a;
// Uncaught SyntaxError: Missing initializer in const declaration
const a = 1;
console.log('a', a);
// a=3;
// const.js:4 Uncaught TypeError: Assignment to constant variable.

{
    const b = 5;
    console.log('b', b);
}
// b;   

const c = {
    d1: "d111",
    d2: "d222"
}
const gn = {
    sex: 'man',
    love: 'man'
}
// console.log(gn.sex);
console.log(gn.love);

console.log('c.d1', c.d1);
const d1 = "ddd";
console.log('c.d1', c.d1);
console.log('c.d2', c.d2);

{
    let a = 10;
    console.log('a', a);
    var b = 1;
    console.log('b', b);
}
// console.log('a', a);
console.log('b', b);

