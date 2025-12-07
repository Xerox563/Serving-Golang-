// Primitive data types : Simple, immutable values stored directly in memory.

/* Number:
Number uses 64-bit IEEE-754 floats → limited precision.
*/

// precision
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// detect NaN
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("foo")); // true (global isNaN coerces first, so be careful)
console.log(Number.isNaN("foo")); // false

// -0 vs +0
console.log(0 === -0); // true
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
console.log(Object.is(0, -0)); // false  -> use Object.is to detect -0

// safe integer check
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isSafeInteger(9007199254740992)); // false

/* String:
  immutable : Cant be chnaged
*/

let s = "abc";
console.log(s);
s[0] = "h";
console.log(s);

let s2 = s.toUpperCase(); // returns a new string
console.log(s, s2);

let name = "Ada";
console.log(`Hi ${name} , length is ${name.length}`);

let heart = "💖"; // emoji
console.log(heart.length);
// Below are Falsy values rest all are truthy values
// false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, NaN.

/*
Undefined
What it is: the absence of a value — typically indicates a variable that has been declared but not assigned.
Key points:
typeof undefined === "undefined".
*/
let a;
console.log(a); // undefined

function f() {}
console.log(f()); // undefined

// parameter not passed -> undefined
function g(x) {
  console.log(x);
}
g(); // undefined

/*
Null : expliticitily sayng "no value"
What it is: intentionally empty value; a primitive used to indicate “no value”.
*/
let x = null;
console.log(x); // null
console.log(typeof x); // "object"  (quirk)

// equality
console.log(null == undefined); // true
console.log(null === undefined); // false

/*
BigInt
-> big numbers
-> division using ceil
-> 1n + 3 -> not possible , 1n + 10n = 11n
*/
// convert explicitly
console.log(1n + BigInt(2)); // 3n
console.log(Number(10n)); // 10  (may lose precision if large)

// Symbol
// unique identifiers, safe object keys,
