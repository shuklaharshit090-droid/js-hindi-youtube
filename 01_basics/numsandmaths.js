// // const score=400
// // console.log(score);
// const balance=new Number(100)
// console.log(balance);

// // console.log(balance.toString());
// // console.log(balance.toString().length); 
// console.log(balance.toFixed(2));// 2 is the decimal value

// const othernum=123.8999;
// console.log(othernum.toPrecision(4));// 4 is the significant values

const hundreds=1000000
// console.log(hundreds.toLocaleString());//by default changes to us comma system
// console.log(hundreds.toLocaleString('en-IN'));
 // changes to indian comma system
 // 10,00,000
 

 //+++++++MATHS+++++

 // math is a library in javascript which is given by default
//  console.log(Math);// math is treated as object in javascript
//  console.log(Math.abs(-4)); //it converts the values in positivew form
//  console.log(Math.round(4.6));// round offs to next greater value when more than 5 is encountered after decimal
//  console.log(Math.ceil(4.2));// return the ceil value
//  console.log(Math.floor(4.9));//return the floor value;
//  console.log(Math.max(4,3,6,8));
//  console.log(Math.min(4,3,6,8));

console.log(Math.random());// chooses any random number generally decimal
console.log(Math.random()*10 + 1); //+1 guarantees value must be greater than 1;
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+ min)

