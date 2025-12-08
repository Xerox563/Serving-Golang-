require("./xyz"); // one module into another module
const calc = require("./temp_func");
var name = "Namaste Nodejs";

var a = 10;
var b = 20;

const arr = [23, 24, 26, 29, 49];
calc.twoSum(a, b);
calc.arrSum(...arr);
calc.calcProduct(...arr);
console.log("X's Value: ", calc.x);
console.log(globalThis === global);
