function sayHello(){
    console.log("This is JS")
}

//sayHello()
console.log(sayHello())

function showName(fname, lname){
    return fname +" "+ lname
}

console.log(showName("krithi" , "Suresh"))

console.log(typeof showName) //function

//assigning function to a variable
let myfunc = function f1(){
    console.log("I am room one")
    return 30
}

let result=myfunc()
console.log(result)
console.log(typeof myfunc) //function

let myfuncnew=function(n1,n2,n3){
    console.log("am in f2")
    return n1+n2+n3
}
myfuncnew()
console.log(myfuncnew(1,1,1))

//adding function to an object
let myobj = {
    "name": "cypress",
    f3: function(){
        console.log("Am inside object")
    }
}
myobj.f3() //calling the function inside the object

//calling function inside array

let arr = ["Tester", 1, f1=function(){
    console.log("Am function inside array")
}]

let y = arr[2]
y()

//arrow function
let z = (x1, x2)=>{
    console.log("Arrow function representation")
    return x1+x2
}

console.log(z(1,1))

let myAddr = (house, street) => console.log(`${house} ${street} chennai`)

myAddr("Ponni", "North")