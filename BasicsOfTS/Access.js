"use strict";
exports.__esModule = true;
var tsClassDemo_1 = require("./tsClassDemo");
var tcc = new tsClassDemo_1.tsClassDemo(34556);
tcc.setUsername("Ganesh");
console.log(tcc.getUsername());
console.log(tcc.getTwofactor());
//function without return
function validate(value) {
    console.log(value);
}
validate("Protect the environment");
//function with return
function evaluate(value) {
    return value * value;
}
console.log(evaluate(8));
