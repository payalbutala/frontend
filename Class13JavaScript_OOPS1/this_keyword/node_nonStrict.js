// empty object : Point to empty object when tried to used in globally
// console.log(this);

// This inside the function : Points to an Global/window Object
function test() {
  //   console.log(this);
}

test();

// this keyword from a function inside object
// Prints obj { name: 'Payal', age: '35', getPrintInfo: [Function: getPrintInfo] }
let obj = {
  name: "Payal",
  age: "35",
  getPrintInfo: function () {
    // console.log(this);
  },
};
obj.getPrintInfo();

// Points to Global/Window object when its inside function inside function 2 times
let obj2 = {
  name: "Vishal",
  age: 30,
  testFunction: function () {
    // console.log(this); // Points to object { name: "Vishal", age: 30, ..}
    function g() {
      const a = 2;
      const b = 3;
      const sum = a + b;
      console.log(sum);
      console.log(this); // Points to Global/Window object BECAUSE this is not direct child of obj2 so it act as a global function which returns global/window object. Eg: function test()
    }
    g();
  },
};
obj2.testFunction();
