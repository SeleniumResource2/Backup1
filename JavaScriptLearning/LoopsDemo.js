/*for(let x=0; x<10; x++){
    console.log("Value is " + x)
}*/

let y=0
for(; y<5;){
    console.log("Value is " + y)
    y++;
}

let arr=[12, 43, "Test", true]
for(let x=0; x<arr.length; x++){
    console.log(arr[x])
}

//using foreach
arr.forEach(element=>{
    console.log("using for each ====> " + element)
})

//using for of will return values
//for of is used for arrays

for(let myarrays of arr){
    console.log("using for of ===>" + myarrays) 
}

//using for in will return index

for(let myarrays in arr){
    console.log("using for in ===>" + myarrays) //this returns just index
    console.log(arr[myarrays]) //this returns values
}

//using for of for a string then return would be character by character
let fname = "Testing"
for( x of fname){
    console.log(x)
}

//for in used for objects
let myobj = {
    "Name": "Yeshitha",
    marks:50,
    status:true
}

console.log(myobj)

for(let x in myobj){
    console.log(x) //returns only key
    console.log(myobj[x]) //returns the value of the corresponding key
}

let sum = 5

while(sum<15){
    console.log("Sum is : " + sum)
    if(sum===10){
        break; //comes out of the while
    }
    sum++
}

/*while(sum<15){
    console.log("Sum is : " + sum)
    if(sum===10){
        continue; //it will never stop
    }
    sum++
}*/

for(let i =0; i<10; i++){
    if(i==4){
        continue;
    }
    console.log("For loop skip the corresponding iteration of 4 and continues: " + i)
}

let yy =100
do{
    console.log("Value of y in dowhile : " + yy)
    yy++;
}while(yy<10)