"use strict";
exports.__esModule = true;
var obj = {
    "color": "orange",
    "status": true,
    "Tyres": "MRF"
};
console.log(obj.status);
console.log(obj.Tyres);
console.log(obj.color);
function test(fourWheelers) {
    console.log("Lorry color :" + fourWheelers.color);
    console.log("Lorry status :" + fourWheelers.status);
    console.log("Engine :" + fourWheelers.engine);
    console.log("Make of tyres :" + fourWheelers.Tyres);
}
var bmw = {
    "color": "Blue",
    "status": false,
    "Tyres": "HONDA",
    "engine": 350
};
var AshokLeyland = {
    "color": "Blue",
    "status": false,
    "Tyres": "HONDA"
};
test(bmw);
test(AshokLeyland);
