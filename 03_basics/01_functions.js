function sayHello() {
  console.log("Functions in JavaScript");
}

// sayHello()
// sayHello

function add(a, b) {
  console.log(a + b);
  return a + b;
}

// const result = add(2, 4);

// console.log(result);

function loggedInUser(username) {
  if (!username) {
    console.log("Please Login with user");
    return;
  }
  return `${username} just logged In...`;
}

// console.log(loggedInUser("Shubham"));
// console.log(loggedInUser());

function calcuateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calcuateCartPrice(100, 200, 3000, 4000));

const user = {
  username: "Sam",
  price: 233,
};

function authUser(anyObject) {
  return console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// authUser(user);
// authUser({
//   username: "Shree",
//   price: 599,
// });

const newArray = [100, 200, 300, 400, 500];

function getSecondValue(getValue) {
  return getValue[1];
}

// console.log(getSecondValue(newArray));
// console.log(getSecondValue([500, 800, 600, 400]));
