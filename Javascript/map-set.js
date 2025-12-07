// Map
/* 
- stores key-value pairs , [keys can be of any type : "objects,array,functions,number,strings"]
- keeps insertion order
method:
creation :
const map = new Map();
const map = new Map([["x",1],["y":2],["z":3]]);
* Functions
map.set("m",5);
mp.get("m");
mp.clear();
mp.delete("m","5");
mp.has("m")
mp.size;
*/

// function fn() {
//   console.log("Hello Myself Amit !!");
// }

// const map1 = new Map();
// map1.set(fn, "Function");
// x = map1.get(fn());
// console.log(x);

// const map = new Map([
//   ["x", 1],
//   ["y", 2],
//   ["z", 3],
//   ["a", 26],
//   ["b", 27],
// ]);

// //  iteration
// for (const [K, V] of map) {
//   console.log(K, V);
// }

// map.forEach((key, val) => {
//   console.log(key, val);
// });
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// Set : A Set stores unique values (no duplicates) also Order is preserved.

// const set = new Set([1, 2, 3, 4, 5, 6, 5, 4]);
// console.log(set.size);
// console.log(set.has(2)); // true
// console.log(set.add(9)); // returns whole set
// console.log(set.has(9)); // true
// console.log(set.delete(2)); // true

// for (const key of set) {
//   console.log(key);
// }

// Weak map, weak set : use when Don’t want iteration (for privacy)
// * Weak map: [Stores only objects] Object keys with automatic garbage collector

/*
let user = {name:"Aman"};
const vm = new WeakMap();
WeakMap.add(user,"secret data")

They are weak because it the key object becomes unreachable,its entry in the weakmap is removed automatically
means data becomes unreachable when the key becomes unreachable.
no memory leaks.
Need per-object metadata without memory leaks
Weakmap methods : has,get,add,delete [no iteration]
*/

/*
 * Weakset: Similar to set stores objects only , but weakly referenced.
Methods:
-> add , delete, has [no iteration]
*/
