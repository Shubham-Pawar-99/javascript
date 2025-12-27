const user = {
  username: "Sam",
  price: 511,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to the Website`);
  },
};

// user.welcomeMessage();
// console.log(this);

// function chai() {
//   const username = "Samual";
//   console.log(this.username); // undefined
// }

// chai();

// Arrow Function

const chai = () => {
  const username = "Samual";
  console.log(this.username); // undefined
  console.log(this); // {}
};

// chai();

const addTwo = (a, b) => {
  return a + b; // Implicit return
};

// const addTwo = (a, b) => (a + b);

console.log(addTwo(10, 30));
