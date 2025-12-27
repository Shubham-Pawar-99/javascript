// const tinderUser = new Object();
const tinderUser = {};

// console.log(tinderUser);

tinderUser.name = "Shubham";
tinderUser.age = 28;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "two@gmail.com",
  fullname: {
    userFullName: {
      firstname: "Shubham",
      lastName: "Pawar",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = [
  {
    id: 1,
    name: "Shubham",
  },
  {
    id: 2,
    name: "sham",
  },
  {
    id: 3,
    name: "Ghansham",
  },
  {
    id: 4,
    name: "Ram",
  },
];

user[1].name;

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(regularUser.hasOwnProperty("email"));

const cource = {
  name: "JavaScript",
  courceInstructor: "Hitesh",
  price: 399,
};

// cource.courceInstructor

const { courceInstructor: instructor } = cource;
// console.log(courceInstructor);
console.log(instructor);
