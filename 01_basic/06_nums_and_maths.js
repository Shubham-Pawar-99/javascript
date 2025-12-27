// Numbers

const number = 200;

const newnumber = new Number(500);
// console.log(newnumber);

// let newarr = [];
// newarr.push(newnumber);
// console.log(newarr);
// console.log(Array.isArray(newarr));

// console.log(newnumber.toFixed(2)); //  500.00
// console.log(newnumber.toString()); // string => 500

const hundred = 1000000;
// console.log(hundred.toLocaleString());

// ++++++++++ Maths ++++++++++

// console.log(Math);
// console.log(Math.abs(-2)); // 2
// console.log(Math.round(4.9)); // 5
// console.log(Math.ceil(4.3)); //5
// console.log(Math.floor(4.9)); //4

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));

let min = 190;
let max = 200;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
