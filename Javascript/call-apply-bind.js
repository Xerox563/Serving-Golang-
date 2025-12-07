let obj1 = {
  name: "Amit Gangwar",
  age: 23,
  Designation: "Software Engineer",
  firm: "Google",
  printDetails: function (city, visa) {
    console.log(this.name + " " + city + " also Visa Status:" + visa);
  },
};

let obj2 = {
  name: "Raj Shamani",
  age: 23,
  Designation: "Software Developer",
  firm: "Google",
  //   printDetails: function () {
  //     console.log(this.name);
  //   },
};

// Use case 1 So here we want that printDetails() is pointing to Obj1, we want it to point to obj2
obj1.printDetails.call(obj2, "Lucknow");

// Generic function
const getAge = function () {
  console.log(this.Designation);
};

getAge.call(obj2);

// Apply , instead of passing arguments side by side , use array list

let akshay = {
  name: "Akshay kumar Gangwar",
  age: 43,
  Designation: "UI/UX",
  firm: "Meta Ads",
  //   printDetails: function (city) {
  //     console.log(this.name + " " + city);
  //   },
};

obj1.printDetails.apply(akshay, ["New York", "Approved"]);

// Bind[like call + copy] : aap direct function call mt kro , uski copy bnalo and aap jb chahye us copy ko use kr lo
let fun = obj1.printDetails.bind(akshay, "New York", "Approved");
console.log(fun()); // using the copy in fun and invoking it later
