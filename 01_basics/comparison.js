// console.log(2>1); // true
// console.log(2>=1); //true

// console.log("2">1);
// console.log("02">1);
// js automatically converts string to integer when > or < is used.
console.log(null > 0); // 0>0
console.log(null == 0); // different data types 
console.log(null >= 0); // 0>=0

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//=== -> checks values strictly both data types and values

console.log("2"===2); // false