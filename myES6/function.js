function log(x, y) {
    y = y || 'world';
    console.log('x', x, 'y', y);
}

log();
log('hello');
log('hello', '');
log('hello', 'es6');


function loa(a, b = 'world') {
    console.log('a', a, 'b', b);
}
loa();
loa('hello');
loa('hello', '');
loa('hello', 'es6');

// 箭头函数

var f = v => v;
f();
console.log('f()', f());

var g = function (v) {
    return v;
    console.log('v', v);
}
g();
console.log('g()', g());

var h = () => 5;
h();
console.log('h()', h());

var i = function () {
    return 5;
}
i();
console.log('i()', i());

var sum = (sum1, sum2) => sum1 - sum2;
sum(3, 4);
console.log('sum(3, 4)', sum(3, 4));

var sumb = (sum1, sum2) => {
    var temp = sum2;
    sum2 = sum1;
    sum1 = temp;
    return sum1 - sum2;
}
// Uncaught SyntaxError: Unexpected identifier
sumb(5, 6);
console.log('sumb(5, 6)', sumb(5, 6));


let j = id => ({
    id: id,
    age: "age"
})
j();
console.log('j()', j(), "// Uncaught SyntaxError: Unexpected token :");


// 错误的例子
let k = a => ({
    a: 1
})
k();
console.log('k()', k());

// 回调函数

var l = [1, 2, 3].map(function (x) {
    return x * x;
})
console.log('l', l);
let n = [1, 2, 3].map(x => x * x);
console.log('n', n);

// 排序
// 常规升序排序
arr = [1, 4, 5, 3, 2, 6];
var o = arr.sort(function (a, b) {
    return a - b;
});
console.log('o', o, "//常规升序排序");
//es6降序
var p = arr.sort((a, b) => b - a);
console.log('p', p, "//es6降序");



function m() {
    setTimeout(() => {
        console.log('id', this.id);
    }, 1000)
}
m();
var id = 20;
m.call({
    id: 40
})