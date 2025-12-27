const marvel_heroes = ["Ironman", "hulk", "thor"];

const dc_heroes = ["Flash", "Superman", "batman"];

const new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(new_heroes);

const another_array = [
  1,
  2,
  3,
  [4, 5, 6, [0, 0]],
  7,
  8,
  9,
  [10, 11, 12, 13, [14, 15, 16]],
];

const flat_arrays = another_array.flat(Infinity);
// console.log(flat_arrays);

console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));

// console.log(Array.from({name:"Hamla"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, another_array, dc_heroes));
