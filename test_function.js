/*

let a = 5 ;
console.log(typeof a);

let b = 'Hello W';
console.log(typeof b);

function test() {
    console.log("My test 1")
}

let col = test;
console.log(typeof col);

let d = test();
console.log(typeof d);
*/

function vol() {
    return function() {
        console.log('Here I am.');
    }
}

let home = vol();
home();

