// Async function always return a promise
// async function getData() {
//   return "Namaste";
// }
// either u return a promise from here ,
// or if you dont a return a promise from this , lets say you return a "value" [non promise value] , thet async function just wraps the value inside the promise and returns it.

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// using await with async : async and await are used to handle promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved p1 !!");
  }, 5000);
});

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved p2 !!");
//   }, 1000);
// });

// Way-1 to handle Promise
async function handlePromise() {
  console.log("Hello Async Await ");
  // await can only be used inside async function
  const res = await p;
  console.log(res);
  console.log("End ");
  //   const res2 = await p2;
  //   console.log(res2);
}

handlePromise();

// In case of async await , first promise will be resolved only then the next lines will work, here Js engine waits for promise to be resolved when u use async await

// Way-2 to handle Promise
// function getData() {
//   // Js engine will not wait for promise to resolve ,it will directly move to the next line
//   p.then((data) => console.log(data));
//   console.log("Way 2 : Resolving using without await");
// }

// getData();

// Here Programmers used to think that, wait during the promise, till then other statements will work [Confusing for developers : that console.log() will happen only after the promise is resolved , but its not the case]
// with async await : JS engine does not waits for promise to resolved , it executes other statements
