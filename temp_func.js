// modules protects their variables and functions from leaking .
// we cannot just export and use the variables and functions of one module into other just by requiring them .
// When you require teh file that code of the file is executed but we can not access its variables and methods without exporting.
// Inorder to use this calculation function/variales into other files , then we have to export this function and other file had to import it .

function twoSum(a, b) {
  const sum = a + b;
  console.log("Sum is: ", sum);
}

const x = 34;
function calcProduct(...arr) {
  let p = 1;
  for (let i = 0; i < arr.length; i++) {
    p *= arr[i];
  }
  console.log("Product of Array Elements is: ", p);
}

function arrSum(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of Array Elements is: ", sum);
}

module.exports.x = x;
module.exports = { twoSum, arrSum, calcProduct };
