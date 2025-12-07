// ** setTimeout(): Run Code Once After Delay

// setTimeout(callback, delay, arg1, arg2, ...);

// Basic example
// function run() {
//   setTimeout(() => {
//     console.log("Hello after 2 seconds");
//   }, 2000);
// }
// run();

// Passing arguments
// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// setTimeout(greet, 1500, "Aman");

/*
- setTimeout moves the callback to task queue
- It runs only when call stack is empty
- Even delay 0 means “run ASAP after current script finishes”
*/

// Cancel a timeout
// const id = setTimeout(() => {
//   console.log("Wont run");
// }, 3000);

// clearTimeout(id);

// ** setInterval() : Run Code Repeatedly

// setInterval(() => {
//   console.log("Running ...");
// }, 1000);

const id = setInterval(() => {
  console.log("Running ...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);

/*

before clearInterval
Running ...
Running ...
Running ...
Running ...

after clearInterval
*/

/*
Flow:
1.setTimeout schedules callback
2.Task is put in the timer queue after delay
3.Callback runs only when call stack is empty
*/

//* setTimeout -> delay a work
//* setInterval -> timers,counters
