let arr = [10, 20, 30, "Umesh", true]
console.log(arr)
console.log(typeof arr)
console.log(arr[1]) //fetch values on specific index = 20
console.log(arr[4]) //when there are no values at specific index then it specifes undefined
console.log(arr.length) //5
console.log(arr[arr.length-2]) //to fetch second last value

arr.push(200) //to add value at the end of the arraylist
console.log(arr)
arr.unshift(111) //to add value at the start of the arraylist
console.log(arr)
arr.pop() //to remove last element from array list
console.log(arr)
arr.shift() //to remove first element from array list
console.log(arr)

arr.splice(1, 2) //from index one we will remove two values in the middle of the array list
console.log(arr)

//we can add array inside another array
let arr1 = [10, 20, 30, "Umesh", true]
let arr2 = ["java", "perl", "ruby"]
arr1.push(arr2)
console.log(arr1)
console.log(arr1[5][1])

//we can also add object inside the array
let obj1 = {
    "Name" : "Ananthi",
    "Language" : "English"
}

arr1.push(obj1)
console.log(arr1)

console.log(arr1[6]["Name"])
console.log(arr1[6].Language)
console.log("========> To print array values from looping")
let arr3 = [10, 20, 30, "Umesh", true]
for(let i =0; i<arr3.length; i++){
    console.log(arr3[i])
}