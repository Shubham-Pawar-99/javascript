const nums = [1, 2, 3];

const myTotal = nums.reduce(function (acc, curr) {
  //   console.log(`acc: ${acc} , curr: ${curr}`);
  return acc + curr;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    cource: "JS Cource",
    price: 299,
  },
  {
    cource: "py Cource",
    price: 3299,
  },
  {
    cource: "Java Cource",
    price: 8299,
  },
  {
    cource: "Cloud Cource",
    price: 5999,
  },
  {
    cource: "MObile Dev Cource",
    price: 9999,
  },
];

const priceToPay = shoppingCart
  .filter((item) => item.price <= 5000)
  .reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
