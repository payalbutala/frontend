// window object : Point to window object when tried to used in globally
console.log("1",this);

// This inside the function : Points to an Global/window Object
function test() {
    console.log("2", this);
}
test();

// this keyword from a function inside object
// Prints obj { name: 'Payal', age: '35', getPrintInfo: [Function: getPrintInfo] }
let obj = {
  name: "Payal",
  age: 35,
  getFullInfo: function () {
    console.log("3", this);
  },
};

obj.getFullInfo();

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
        console.log(sum);
      console.log("5", this); // Points to Global/Window object BECAUSE this is not direct child of obj2 so it act as a global function which returns global/window object. Eg: function test()
    }
    g();
  },
};
obj2.testFunction();
