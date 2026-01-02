let fname = "Testing"
console.log(fname)
console.log(typeof fname)

let marks = 50
console.log(marks)
console.log(typeof marks)

let marks1 = 50.23
console.log(marks1)
console.log(typeof marks1)

let status = true
console.log(status)
console.log(typeof status)

let active = false
console.log(active)
console.log(typeof active)

let lname
//when variable is not initialized
console.log(lname) //undefined
console.log(typeof lname) //undefined


let address = null
//when variable is declared as null
console.log(address) //null
console.log(typeof address) //object

//defining object
let person = {}
console.log(person) //blank value
person = {
    "Name": "Mindq",
    "Stock" : true
}
console.log(person)
console.log(typeof person) //object

//defining array
let colors = [1, 3, 5, 6]
console.log(colors) //values will be printed
console.log(typeof colors) //ojbect

//all non primitive are refered as object and in primitive when value is defined as null then typeof that variable will become an object

