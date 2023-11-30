a = 10;
console.log(a);
// no strict mode : considered as

const obj = {};
Object.defineProperty(obj, "name", { writable: false });
obj.name = "Payal"; // non strict mode as name is readonly : not throwing error (silence error) but not added attribute in object.
obj.age = 25;
console.log(obj); // node o/p : {age:25} browser o/p {age: 25, name: undefined}
