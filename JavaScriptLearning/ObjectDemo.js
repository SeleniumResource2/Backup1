let obj1 = {}
//console.log(obj1)
//console.log(typeof obj1)

let obj2 = {
    "Name": "Manju",
    "Address": "Chennai",
    "Number": "23423534534",
    status: false    
}
console.log(obj2)
console.log(typeof obj2)
console.log(obj2.Name)
console.log(obj2.salary) //output will be undefined becoz this is not declared or exist
//to add salary to object
obj2.salary=3000
obj2.experience = 4
console.log(obj2)
//to delete certain properties of an object
delete obj2.experience
console.log(obj2)

//one object can have another object
let obj3={
    "State": "TamilNadu",
    "Country" : "India"
}
obj2.fullAddress = obj3
console.log(obj2)
//we can add array inside the object
obj2.MyFamily = ["M1", "M2"]
console.log(obj2)

console.log(obj2.fullAddress["Country"])
console.log(obj2.MyFamily[1])

//we can add function inside the object
obj2.myFunction = function(){
    console.log("This is my function inside the object")
}

console.log(obj2) //here transaction inside the function will not be manipulated
obj2.myFunction() //this calls the exact function

//assigning object to a variable
let test = obj2
console.log(typeof test) //represt this variable also as an object, since object is assigned
console.log(test) //will print the values of obj2

//deleting the property in test will also delete in obj2. Becoz deletion happens since obj2 and test are working on same reference and not by values

delete test.fullAddress
console.log(obj2) //fullAddress property will be deleted in both test and obj2

//addition of values in obj2, will also get dispalyed in test object as well
obj2.randomnumber = 300
console.log(test) //randomnumber property will be added to test object as well
