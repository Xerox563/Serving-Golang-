/*
* Optional Chaining: 
Optional chaining, introduced in ECMAScript 2020, is a feature that simplifies the process of accessing properties and methods of nested objects or arrays when intermediate properties may be null or undefined.
The optional chaining operator (?.) allows you to access properties or methods without the need for explicit null or undefined checks. If any intermediate property in the chain is null or undefined, the expression short-circuits, and the result is set to undefined.
In programming, "short-circuiting" refers to the behavior where the evaluation of an expression stops as soon as a null or undefined value is encountered along the chain of properties or methods being accessed. Instead of continuing to evaluate the expression, the result is immediately set to undefined, and any subsequent property or method access is skipped.
*/

// const user = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipcode: "243001",
//   },
// };

// // Traditional way
// let city;

// if (user && user.address && user.address.city) {
//   city = user.address.city;
// } else {
//   city = "Unknown";
// }

// console.log("Tradiional approach: ", city);

// // using optional chaining
// const n_city = user?.address?.city || "Unknown";
// console.log("Optional approach: ", n_city);

// const user1 = {
//   name: "Alice",
//   getAddress() {
//     return {
//       area: "San Francisco",
//       zipcode: "94105",
//     };
//   },
// };

// let ans;

// if (user1 && user1.getAddress) {
//   const address = user1.getAddress();
//   if (address) {
//     ans = address.area;
//   } else {
//     ans = "unknown";
//   }
// }

// console.log("Tradiotional Way: ", ans);

// let ans1 = user1?.getAddress();
// if (ans1?.area) {
//   console.log("Optional Chaining way: ", ans1.area);
// } else {
//   console.log("Unknown");
// }

//* Dynamic Properties access
const users = [
  { id: 1, profile: { name: "Alice" } },
  { id: 2 },
  { id: 3, profile: { name: "Bob" } },
  { id: 4, profile: { name: "Nancy" } },
  { id: 4, profile: { name: "Maggie" } },
  { id: 4 },
];
// In this example, we have an array of users, where each user may or may not have a profile.

// Traditional Approach
const names = users.map((user) => {
  if (user && user.profile && user.profile.name) {
    return user.profile.name;
  } else {
    return "Unknown";
  }
});

console.log("Traditional Way: ", names);

const n_names = users.map((user) => {
  return user?.profile?.name || "Unknown";
});

console.log("Optional Chaining Way: ", names);
