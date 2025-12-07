// Error -> when something goes wrong in code during runtime.
// [Propagation of error] If not caught up , eventuals bubbles up the call stack eventually crashing the execution context .
// function c() {
//   throw new Error("Something Went wrong !!");
// }
// function b() {
//   c();
// }
// function a() {
//   b();
// }
// a();

// error Propagation -> c : b : a : global scope

/* 
ReferenceError – Occurs when trying to access a variable that is not defined.
TypeError – Occurs when an operation is performed on a value of the wrong type.
RangeError – Occurs when a value is outside the allowable range.
SyntaxError – Occurs when there is a mistake in the syntax of the JavaScript code.
*/
// try, catch & finally

// try {
//   console.log("execution starts here");
//   abc;
//   console.log("execution ends here");
// } catch (err) {
//   console.error("An Error has occured", err);
// }

// function divideNumbers(x, y) {
//   if (y == 0) {
//     let err = "error : divisor cant be zero !!";
//     return err;
//   }
//   return x / y;
// }

// // console.log(divideNumbers(15, 3)); : 5
// console.log(divideNumbers(15, 0)); // err

// Handling JSON

// function parseJSONSafely(str) {
//   try {
//     return JSON.parse(str);
//     console.log("Parsed");
//   } catch (err) {
//     console.log("Not Parsed !!", err.message);
//   }
// }
// // const userData = parseJSONSafely('{"name": "tapaScript"}'); // Parsed
// // console.log(userData);
// const badData = parseJSONSafely("name: tapaScript"); // Handled gracefully
// console.log(badData); // undefined

// Error Object (err)
/*
An error message (err.message): This is a human-readable error message.
The error type (err.type): TypeError, ReferenceError, SyntaxError, and so on that we discussed above.
The stack trace (err.stack): This helps you navigate to the root of the error. It is a string containing the stack trace at the point the error was thrown.
*/

// function performTask() {
//   try {
//     console.log("Doing Something ..");
//     throw new Error("Oops !!");
//   } catch ({ message, type }) {
//     console.log(message);
//     console.log(type);
//   } finally {
//     console.log("I run always");
//   }
// }

// performTask();

/* * Issues with Finally */
function willThrow() {
  try {
    throw new Error("Original Error");
  } finally {
    throw new Error("Overriding Error"); // The original error is lost
  }
}

try {
  willThrow();
} catch (err) {
  console.log(err.message); // "Overriding Error"
}
/*
Here, the original error ("Original Error”) is swallowed. The finally block overrides the actual root cause.

When using finally:
Avoid returns and throws from finally as much as possible.
Avoid performing logic in the finally block that may impact the actual outcome. The try block is the best place for that.
Any critical decision-making must be avoided inside the finally block
Use finally for cleanup activities, such as closing files, connections, and stopping loading spinners, etc.
Ensure the finally block contains side-effect-free code.
 */

function setAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("age must be a number");
  }
  if (age < 0 || age > 150) {
    throw new RangeError("age must be between 0 and 150");
  }
  console.log("Age set to", age);
}

try {
  setAge("not a number");
} catch (err) {
  console.log(err.name); // TypeError
  console.log(err.message); // age must be a number
}
