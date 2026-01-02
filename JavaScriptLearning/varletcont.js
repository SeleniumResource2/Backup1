//var can be redeclared and reassigned
//var of ES5 engine and let/const on ES6 Engine
/*
var rate;
var greeter = "Say hi"
var gretter = "Hi Instead"

if(true){
    var greeter = "inside block accessing greeter"
}

console.log(greeter)
console.log(rate)
rate = "tesco"
*/
//let cant be redeclareted and only reassinged
/*
let test;
let greeter = "Say hi"
gretter = "Hi Instead"

if(true){
    let greeter = "inside block accessing greeter"
    console.log(greeter) //block scoped
}

console.log(greeter) //global one takes up
console.log(test)
test = "Kanishq"
*/

//const cant be redeclared and reassigned
const color = "Brown"
//color = "Grey"
console.log(color)


