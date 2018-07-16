// 不知从哪里来的es6教程


// function aa() {
//     if (bool) {
//         let test = 'hello man'
//     } else {
//         console.log(test);
//     }
// }

// const name = 'hz';
// const student = {
//     name: 'hz',
//     sex: 'man'
// }

// student.sex = 'woman';
// console.log('student.sex', student.sex);
// // console.log('sex', sex);

// var funcs = [];

// for (var i = 0; i < 10; i++) {
//     funcs.push(function () {
//         console.log(i);
//     })
// }
// console.log('funcs', funcs);

// funcs.forEach(function (func) {
//     func()
// })

// // const funcs = [];
// for (let i = 0; i < 10; i++) {
//     funcs.push(function () {
//         console.log(i);
//     })
// }
// const aname = 'hz';
// console.log(`hello ${aname}`);

// const template = `<div>
//     <span>hello es6</span>
//     </div>
// `;
// console.log('template', template);

// const str = 'hhhhzy!';
// console.log(str.includes('h', 'y', 'z'));

// console.log(str.repeat(2));

// console.log(str.startsWith('h'));
// console.log(str.endsWith('!'));

// function action(num) {
//     num = num || 200;

//     return num;
//     console.log('num', num);
// }

// function action(num = 200) {
//     console.log(num);

// }
// action(0);
// action();

// const a = [1, 3, 4];
// let b = a.map(x => x + 1);
// console.log('a', a);
// console.log('b', b);

// let c = a.map((function (x) {
//     return x + 1;
// }).bind(this));
// console.log('c', c);

// var calculate = function (x, y, z) {
//     if (typeof x != number) {
//         x = 0;
//     }
//     if (typeof y != number) {
//         y = 0;
//     }

//     var dwt = x % y;
//     var result;
//     if (dwt == z) {
//         result = true;
//     }

//     if (dwt !== z) {
//         result = false;
//     }
//     return result;
// }