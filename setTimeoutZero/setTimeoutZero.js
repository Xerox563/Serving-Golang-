const crypto = require("node:crypto");

console.log("SetTimeoutZero demonstration");

var a = 5;
var b = 10;

function multiply(x, y) {
  const result = x * y;
  return result;
}

const c = multiply(a, b);
console.log("Multiplication answer is : " + c);

setTimeout(() => {
  console.log("SetTimeout function after 3 seconds");
}, 30000);

crypto.pbkdf2Sync("AmitGangwar54321", "salt", 50000000, 20, "sha512");
console.log("First synchronous key is generated ");

//this function only will be pushed in to the callstack of v8 once its become empty so its doesn,t matter its for 0 second or more than that
setTimeout(() => {
  console.log("Call me asap");
}, 0); //Trust issues with the set timeout

/*
Order of execution
-> Multiplication answer is : 50
-> 

*/
