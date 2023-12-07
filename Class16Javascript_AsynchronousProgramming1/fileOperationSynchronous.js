// Synchronoues - File Handing (Read/Edit/Delete/Create etc.)

// import the fs(its a inbuild package of nodejs) module
const fs = require('fs');

console.log("Before");

// read file method
const data1 = fs.readFileSync('f1.txt');
console.log("Data from File 1" + data1);


const data2 = fs.readFileSync('f2.txt');
console.log("Data from File 2" + data2);


console.log("After");