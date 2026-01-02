console.log(10/5)
console.log(10/2.5)
console.log(10/0) //infinitiy
console.log(10/0.0) //infinity
console.log(10/null) //infinity
console.log(10/undefined) //NAN
console.log("Test"/0) //NAN

let result = 10+110+"Test"
console.log(result) //120Test

let result1 = "Tester"+10+110
console.log(result1) //Tester10110

let marks = "5"+5
console.log(marks) //55

let m1 = "5"-5
console.log(m1) //0

//in Javascript true is evaluated as 1 and false is evaluated as 0

console.log(10/true) //10
console.log(10/false) //infinity
console.log("5" * 5) //25
console.log("Test" * 5) //NAN

let num1 = "50"
console.log(typeof num1)
let num2 = 50
console.log(typeof num2)

if(num1 == num2){ //does type conversion before manipulation
    console.log("Matched")
}else{
    console.log("Not matched")
}

if(num1 ==- num2){ //does not do type conversion before manipulation
    console.log("Matched")
}else{
    console.log("Not matched")
}

console.log(16>10) //true
console.log(16<10) //false
console.log(16>=10) //true

console.log(10>8 && 10>5) //true
console.log(10<5 && 10>5) //false
console.log(10<5 || 10>5) //true
console.log(!true)
console.log(!false)

let str1 = "This is JS"
let str2 = "JS"
let str3 = "This is js"

if(str1.includes(str2)){
    console.log("Included")
}else{
    console.log("Not included")
}

if(str1.toLowerCase==str3.toLowerCase){
    console.log("Matched")
}else{
    console.log("Not matched")
}

let num3 = 10
num3 = num3+5
console.log(num3)
num3+=5
console.log(num3)
num3*=5
console.log(num3)
num3/=2
console.log(num3)

 