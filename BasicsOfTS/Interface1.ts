
let obj = {
    "color": "orange",
    "status" : true,
    "Tyres": "MRF"
}

console.log(obj.status)
console.log(obj.Tyres)
console.log(obj.color)

export interface Vehicle{
    "color": string,
    "status" : boolean,
    "Tyres": string,
    "engine"?: number
}


function test(fourWheelers: Vehicle){
    console.log("Lorry color :" + fourWheelers.color)
    console.log("Lorry status :" + fourWheelers.status)
    console.log("Engine :" + fourWheelers.engine)
    console.log("Make of tyres :" + fourWheelers.Tyres)
}

let bmw = {
    "color": "Blue",
    "status" : false,
    "Tyres": "HONDA",
    "engine": 350
}

let AshokLeyland = {
    "color": "Blue",
    "status" : false,
    "Tyres": "HONDA"   
}

test(bmw);
test(AshokLeyland);
