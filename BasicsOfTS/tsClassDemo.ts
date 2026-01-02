import {Vehicle} from './Interface1'

export class tsClassDemo{

 userName: string;
 password: string;
 twofactor: number;

 getUsername(){ //retrieval of data
    return this.userName;
 }

 setUsername(userName: string){
    this.userName =userName;
 }

 getTwofactor(){
   return this.twofactor;
 }

// constructor(){
//   console.log("Default constructor will be executed first in all classes");
// }

 constructor(twofactor: number){
  this.twofactor=twofactor
 }

}


let tcd = new tsClassDemo(234);
//tcd.setUsername("mamtha");
//console.log(tcd.getUsername());
//console.log(tcd.getTwofactor());

//tcd.setUsername("Sherin");
//console.log(tcd.getUsername());
//console.log(tcd.getTwofactor());

let bmw1 = {
  "color": "Blue",
  "status" : false,
  "Tyres": "HONDA",
  "engine": 350
}

function test(fourWheelers: Vehicle){
  console.log("Lorry color :" + fourWheelers.color)
  console.log("Lorry status :" + fourWheelers.status)
  console.log("Engine :" + fourWheelers.engine)
  console.log("Make of tyres :" + fourWheelers.Tyres)
}

test(bmw1);

describe("Test Suite", () =>{
  it("Test Case", () =>{
   });
})