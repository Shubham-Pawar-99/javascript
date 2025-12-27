const mySym = Symbol("my identifier");

let myObj = {
  name: "Shubham",
  "full name": "Shubham Pawar",
  [mySym]: "Hello Sym",
  age: 25,
  city: "Sangli",
  email: "sp4634588@gmail.com",
  isLoggedin: false,
  lastLogin: ["monday"],
};

// console.log(myObj.lastLogin);
// console.log(myObj["city"]);
// console.log(myObj["full name"]);

myObj.email = "shubham@google.com";
// Object.freeze(myObj);
myObj.email = "shubham@microsoft.com";

myObj.greeting = function () {
  console.log(`Hello User From greeting`);
};

myObj.greetingTwo = function greeting() {
  console.log(`Hello user ${this.name}`);
};

// console.log(myObj.greeting);
console.log(myObj.greeting());

console.log(myObj.greetingTwo());
