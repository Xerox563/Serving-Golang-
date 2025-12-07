// var sum = function (a) {
//   console.log("Live Viewers", a);
//   var c = 4;
//   return function (b) {
//      c ka j scope yeha pr accessible hai : lexical scope
//     console.log(a + b + c);
//     return function (d) {
//       return a + b + c + d;
//     };
//   };
// };

// var store = sum(2);
// var store1 = store(4);
// console.log(store1(8));

var sum = function (a, b, c) {
  return {
    getSum2: function () {
      return a + b;
    },
    getSum3: function () {
      return a + b + c;
    },
  };
};

var store = sum(1, 2, 3);
console.log(store.getSum2());
console.log(store.getSum3());

// *Closure means a function remembers the variables of its parent function even after the parent function has finished running.
/*
- Why Closures are created ?
-Inner function needs access to outer variables Even after the outer function finishes.
- For data privacy (like private variables) so that such outside one can access inner functiosn such as account , balance and all.
- Whenever you return a function from another function, Js automatically creates a closure.
*/
