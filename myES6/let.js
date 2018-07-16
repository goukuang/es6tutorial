// let

// let e;
// e = 3;
// console.log(e);

{
    let a = 10;
    console.log('a', a);
    var b = 1;
    console.log('b', b);
}
// console.log('a', a);
console.log('b', b);


var c = [];
for (var e = 0; e < 10; e++) {
// for (let e = 0; e < 10; e++) {
    var d = function () {
        console.log(e);
    }
    // console.log('d', d);
    c[e] = d;
    console.log('c', c);
}
c[5]();


// 暂时性死区
var tmp='123';
if(true){
    // tmp='abc';
    let tmp;
    tmp='abc';
    console.log('tmp', tmp);
}

