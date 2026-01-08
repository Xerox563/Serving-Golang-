const crypto = require("node:crypto");
const { stringify } = require("node:querystring");

console.log("Program started ");

//pbkdf2- Password based key derivative function version-2

//This is an synchronous function of pbkdf2 which will block the main thread and these type of synchronus functions does not have any callback functions
crypto.pbkdf2Sync("AmitGangwar54321", "salt", 5000000, 20, "sha512");
console.log("First synchronous key is generated ");
// The Above task asynchronous one , blocks the main thread [which is bad]

//Asynchronous function
crypto.pbkdf2("amitGangwar", "salt", 500, 20, "sha512", (err, key) => {
  console.log("Below is the Asynchronous Key of your password !!");
});

function add(x, y) {
  console.log(x + y);
}

console.log(add(199, 37419));
