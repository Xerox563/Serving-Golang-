const radius = [3, 1, 2, 4, 5];
// // * calculating Area
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// // * calculating Circumference
// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

// // * calculating Diameter
// const calculateDiamter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDiamter(radius));

//* Optimised Way
const area = function (radius) {
  return Math.PI * radius * radius;
};

const Diameter = function (radius) {
  return 2 * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, Diameter));

// Functional Programming
/*
-> Modularity
-> Reusability
-> Here Calculate is Higher order Functions and area,Diameter,circumference are call back functions
*/

// polyfill
Array.prototype.calculate = function (logic) {
  ///
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));

// ** A Function which takes another function as a argument or returns a function is known as a higher order function.

// Reduce
ans = radius.reduce((curr, acc) => {
  acc = Math.min(curr, acc);
  return acc;
}, 10000000009);
console.log(ans);

const users = [
  { fname: "akshay", lname: "saini", age: 26 },
  { fname: "donald", lname: "trump", age: 75 },
  { fname: "eon", lname: "musk", age: 50 },
  { fname: "deepika", lname: "padukone", age: 26 },
];

map = new Map();

const res = users.filter((curr) => {
  map[curr.age]++;
});
for (const [key,val] of map) {
    
}
console.log(res);
