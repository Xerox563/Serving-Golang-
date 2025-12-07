// const arr = [10, 20, 30, 40, 50];
// const [a, b, ...t] = arr;
// const [f, , ...c] = arr;
// console.log(f, c);

// const at = [1];
// const [ax = 10, bx = 20] = at;
// console.log(ax, bx); // bx -> default

// use case

function getMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

const numbers = [3, 5, 1, 4, 8, 6, 9];
const [min, max] = getMinMax(numbers);
console.log(min, max);

// rename : username
const user = {
  name: "Aman",
  age: 20,
};

const { name: username, age } = user;
console.log(username);

// Syntax	Meaning
// Spread (...)	Expands elements OUT of a structure
// Rest (...)	Gathers elements INTO a structure

// Spread → right side (expanding)
const arr = [...[1, 2, 3]];

// Rest → left side (collecting)
const [...nums] = [1, 2, 3];

// Use cases:
// Copying // shallow copy
const a1 = [1, 2, 3];
const b1 = [...a1];
if (a1 == b1) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// concatenation
x = [...a1, ...b1, 9];
console.log(x);
