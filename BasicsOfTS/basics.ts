var a = 100; // on using var key word for a variable, we can reinitialize
a = a+a;

//const aa = 400; //on using const keyword, we cannot reinitialize the variable. Its just final declaration and initialization
//aa = aa+aa;

//let = > blocks the usage of execution in asynchronous mode

for(let i = 0; i<5; i++){
    setTimeout(function(){console.log("index is : " + i)}, 100*i);
}

{
let name: string = "Harish";

let age : number = 40;

let status : boolean = true;

let source: any;

source = "sum";
source = 30;
source = false

let list: Array<number> = [1, 2, 3];
let listOne: Array<string> = ["we", "he", "me"];

console.log("name is : " + name)
console.log("age is : " + age)
console.log("status is : " + status)
console.log("source is : " + source)
console.log("list is : " + list)
console.log("listOne is : " + listOne)
}






