// Importance of call back : superpowerful way for handling async operations 

// console.log("Namaste");
// setTimeout(() => {
//   console.log("Javascript");
// }, 5000);

// console.log("Season 2");

// create order -> then proceed to the payment -> Show order summary -> update the wallet
// since proceed will take after order : so it should be wrapped inside call back funtion
const cart= ["shooes","Yoga "]

function apicreateOrder(cart,function () {
    apiproceeedToPayment(function () {
        // since we had given ShoworderSummary api to the proceedtopayment as a inside a call back function , then its the responsibility of the proceetopayment function to complte the payment and call the show orderummary api
        apishowOrderSummary(function () {
           apiupdateWallet();
         })
    });
}) 

// callback hell : this structure grows horizontally , pyramid of doom
// not maintainable , tough to manage , unreadable for prod.


// Risky [Inversion of control]
// proceed to payment is the important part of the code , and we are giving full control to the create order , we are trusting createOrder api that it will complete its athen will proceddtopayment api call , as its proceddtopayment api responsibility to call our fun , but what if it has bugs, and our function never called or our function runs twice .









