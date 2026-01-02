const numbers = [1, 2, 3, 4, 5];
console.log(numbers)
let squared=[];
for(let i=0; i<numbers.length; i++){
    squared.push(numbers[i] * numbers[i]);
    
}
console.log(squared)

let sq = numbers.map(num=>num*num)
console.log(sq)
console.log("using reduce==============>")
let sqq = numbers.reduce(function(accumulator, currentvalue){
     accumulator.push(currentvalue * currentvalue)
     return accumulator;
}, [])
console.log(sqq)
//=====================
const fname = ["Krish", "Sunil", "Maria"]

let n = fname.map(nn=> nn + " xxx")
console.log(n)
//======filter===========
//filter provide the resulted array based on condition is true
const aa = [1, 2, 3, 4, 5]
let fil = aa.filter(num => num<3)
console.log(fil)

// using reduce in filter as well
console.log("*******using reduce in filter as well***********")

let fee = fil.reduce(function(accumulator, currentvalue){
    if(currentvalue<3){
      accumulator.push(currentvalue<3);
    }
     return accumulator;
}, [])

//=============Reduce====================

const red = [1,2,3,4,5]

let ree = red.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue;
}, 0)
console.log(ree)


