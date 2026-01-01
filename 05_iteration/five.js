const coading = ["js", "py", "java", "php", "ruby", "html", "rust"];

// coading.forEach(function (item) {
//   console.log(item);
// });

// coading.forEach((item) => console.log(item));

function printMe(item) {
  console.log(item);
}

// coading.forEach(printMe);

// coading.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoading = [
  {
    name: "javascript",
    file: ".js",
  },
  {
    name: "java",
    file: ".java",
  },
  {
    name: "python",
    file: ".py",
  },
];

myCoading.forEach((item) => {
  console.log(`${item.name}, ${item.file}`);
});
