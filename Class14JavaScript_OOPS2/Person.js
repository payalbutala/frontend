class Person {
    // properties
    constructor(name, age, gender, height, color){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.color = color; 
    }

    // behaviours/methods
    walk(){
        console.log(`${this.name} is walking towards station.`);
    }

    eat(){
        console.log(`${this.name} eats only veg.`);
    }

    sleep(){
        console.log(`${this.name} sleeps for 8 hours.`);
    }
}

const vishal = new Person("Vishal", "31", "male", "5:10", "whitish");
const payal = new Person("Payal",  "35", "female", "5:7", "whitish");

console.log(vishal);
console.log(payal);