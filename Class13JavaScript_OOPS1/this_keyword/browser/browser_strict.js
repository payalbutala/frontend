"use strict";

// window object : Point to window object when tried to used in globally
console.log("1", this);

// This inside the function : undefined : As obj is not defined don't use this keyword
function test() {
    console.log("2", this);
}

test();

// this keyword from a function inside object
// Prints obj { name: 'Payal', age: '35', getPrintInfo: [Function: getPrintInfo] }
let obj = {
  name: "Payal",
  age: "35",
  getPrintInfo: function () {
    console.log("3", this);
  },
};
obj.getPrintInfo();

// Points to Global/Window object when its inside function inside function 2 times
let obj2 = {
  name: "Vishal",
  age: 30,
  testFunction: function () {
    console.log("4", this); // Points to object { name: "Vishal", age: 30, ..}
    function g() {
      const a = 2;
      const b = 3;
      const sum = a + b;
      console.log("sum", sum); // 5
      console.log("5", this); // undefined : As obj is not defined don't use this keyword
    }
    g();
  },
};
obj2.testFunction();
