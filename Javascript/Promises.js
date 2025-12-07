// asynchronous : when we we dont know how much time they will take to complete
// const cart = ["Banana", "Pants", "Shirts", "Jeans"];
// createOrder(cart); // creates order : return orderId
// proceedToPayment(orderId);

// using calbacks

// createOrder(cart, function () {
//   proceedToPayment();
// });

// Here CreateOrder api will call proceedTopayment whenever it wants to .[Passing a function]

// using promise : PromiseState :state in which promise is ,PromiseResult : data returned by promise
// const promise = createOrder(cart); // {data:undefined}
// This creates an empty object with undefined for now , since it takes time to create order after some time it will fill up the object when the create order is complete

// now data is filled with real- data
// attaching a function , once promise object fills the data in create order only then proceed topayment wil be called
// promise.then(function (orderId) {
//   proceedToPayment();
// });
// as soon as we have data in promise object , it will call proceedtopayment once when it has data : [It gives us trust]

// debugger :: console -> sources -> debugger -> scope

// const GITHUB_API = "https://api.github.com/users/xerox563";

// const user = fetch(GITHUB_API); // user object is immutable
// console.log(user); // promise

// user.then((data) => console.log(data));

// states : Pending : Fulfilled : rejected
// Promise is a js object [placeholder for a certain period of time , until some value comes from asynchronous operation and fills in it . ]
// Promise is an object that refers to eventual completetion or failure of an asynchronous operation.

// promise chaining

// function createOrder(cart,function () {
//     proceeedToPayment(orderId, function () {
//         showOrderSummary(paymentInfo, function () {
//            updateWallet();
//          })
//     });
// })

// Pyramid of doom

// createOrder(cart).then(function (orderId) {
//    return proceeedToPayment(orderId);
// })
// .then(function (paymentInfo) {
//    return showOrderSummary(paymentInfo);
// })
// .then(function () {
//    return updateWallet();
// })

// * Promise Creation

const cart = ["Pen", "Paper", "Egg", "Basket", "Pajama"];

// Since createOrder returns a promise : basically we care here consuming the promise
const promise = createOrder(cart);
console.log(promise);
promise
  .then(function (orderID) {
    console.log("Promise Resolved");
    console.log(orderID);
    return proceedToPayment(orderID);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });

// below catch all then will be called.
// above catch , catch will handle errors.

// promise creation
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // create an order
    // validate cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err); // not valid cart : Promise is rejected
    }
    // logic for creating order
    const orderID = "12456";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderID) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful");
  });
}
