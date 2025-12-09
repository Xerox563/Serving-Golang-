const fs = require("fs");
const https = require("https");

console.log("Synchronous Javascript");

var x = 5132314;
var y = 1143114;

// Async task -> moves to the libuv
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data Fetched Successfully [Api Called]");
});

// Async task -> moves to the libuv
setTimeout(() => {
  console.log("Execute after 5 sec");
}, 5000);

// Async task -> moves to the libuv
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data);
});

function multiply(x, y) {
  return x * y;
}

const c = multiply(x, y);
console.log(c);
