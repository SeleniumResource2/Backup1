"use strict";
exports.__esModule = true;
exports.tsClassDemo = void 0;
var tsClassDemo = /** @class */ (function () {
    // constructor(){
    //   console.log("Default constructor will be executed first in all classes");
    // }
    function tsClassDemo(twofactor) {
        this.twofactor = twofactor;
    }
    tsClassDemo.prototype.getUsername = function () {
        return this.userName;
    };
    tsClassDemo.prototype.setUsername = function (userName) {
        this.userName = userName;
    };
    tsClassDemo.prototype.getTwofactor = function () {
        return this.twofactor;
    };
    return tsClassDemo;
}());
exports.tsClassDemo = tsClassDemo;
var tcd = new tsClassDemo(234);
//tcd.setUsername("mamtha");
//console.log(tcd.getUsername());
//console.log(tcd.getTwofactor());
//tcd.setUsername("Sherin");
//console.log(tcd.getUsername());
//console.log(tcd.getTwofactor());
var bmw1 = {
    "color": "Blue",
    "status": false,
    "Tyres": "HONDA",
    "engine": 350
};
function test(fourWheelers) {
    console.log("Lorry color :" + fourWheelers.color);
    console.log("Lorry status :" + fourWheelers.status);
    console.log("Engine :" + fourWheelers.engine);
    console.log("Make of tyres :" + fourWheelers.Tyres);
}
test(bmw1);
