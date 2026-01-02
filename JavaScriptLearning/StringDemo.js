let fname="My name is Kanishk"
console.log(typeof fname)

let lname = new String("Manisha")
console.log(typeof lname) //object when defined with new keyword

console.log(fname.length)
console.log(fname[1]) //to get specific character by notifying with index

console.log(fname.includes("name")) //true
console.log(fname.includes("Name")) //false - case sensitive

console.log(fname.startsWith("My")) //true
console.log(fname.endsWith("Kanishk")) //true
console.log(fname.split(" "));

let arr = fname.split(" ")
console.log(arr[3]) //Kanishk
console.log(arr[5]) //value is not displayed on specific index then it displays undefined

console.log(fname.toUpperCase())
console.log("   " + fname.toLowerCase())
console.log(fname.trim()) //trim white space

console.log(fname.replace("Kanishk", "Krithika"))

let finalMsg = "Total price is 200 USD"
let value = finalMsg.split(" ")[3]
console.log(typeof value)
let price = parseInt(value) //String will be converted to number
console.log(typeof price)

if(price == 200){
    console.log("Pass")
}else{
    console.log("Fail")
}

let msg = "Final \tamount is \'300\' \nUSD"
console.log(msg)

let amount = 500

let msg1 = `Final ${amount} is converted "300" GBP` //replacing value dynamically from a variable
console.log(msg1)








