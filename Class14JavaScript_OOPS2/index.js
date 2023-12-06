/* // Car construction function
function Car(name, color, topSpeed){
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.drive = () => {
        console.log("drive");
    }
}

// Meomory created in heap
let car1 = new Car("alto", "red", "130kmph");
let car2 = new Car("safari", "black", "170kmph");

console.log(car1, car2); */

/*
// Class:
Blueprint of real entity/object
contains attributes/properties and behaviours
A class is a set of objects which shares common characteristics/behaviour/methods and common properties
collection of objects of similar types
*/

/* class Car {
    // initialise new instances of Car
    constructor(name, color, topSpeed){
        this.name = name,
        this.color = color,
        this.topSpeed = topSpeed
    }
}

// new keyword is used to create memory for object 
let car3 = new Car("alto", "red", "130kmph");
let car4 = new Car("safari", "black", "170kmph");

console.log(car3, car4); */