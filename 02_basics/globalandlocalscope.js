// let a = 10
// const b = 20
// var c=30
let a=300
if(true){
  let a = 10
const b = 20
var c=30
// console.log("INNER:",a);
}
// console.log(a)
// console.log(b)
// console.log(c)
// for(let i=0;i<Array.length;i++){
//     const element=array[i];
// }
// console.log(a);
// function one(){
//     const username = "hitesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     console.log(username);
//     two()
// }
// one()
if(true){
    const username="hitesh"
    if(username === "hitesh"){
        const website=" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++ interesting +++++++++

function addone(num) // basic function
{
  return num+1
}

addone(5) // can be written on both below or above function

const addTwo = function(num) // expression
{
    return num+2
}

addTwo(5) // if written above expression it will not run and pass error