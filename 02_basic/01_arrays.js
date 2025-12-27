const myArr = [1, 2, 3, 4, 5, 6, 7];

const newArr = myArr.join();
console.log("Original : ", myArr);
// console.log(newArr);

const mynewarr1 = myArr.slice(1, 3);
console.log("Using Splice : ", mynewarr1);
console.log("Original after Splice : ", myArr);

const mynewarr2 = myArr.splice(1, 3);   
console.log("Using Splice : ", mynewarr2);
console.log("Original after Splice : ", myArr);
