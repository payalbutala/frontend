"use strict";

let a = 10; // ReferenceError : a is not defined
console.log(a);

const obj = {};
Object.defineProperty(obj, "name", { writeable: false });
obj.name = 99; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
obj.age = 35;
console.log(obj);
