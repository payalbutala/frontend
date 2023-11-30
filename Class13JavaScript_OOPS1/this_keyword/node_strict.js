"use strict";

// empty object : Point to empty object when tried to used in globally
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
