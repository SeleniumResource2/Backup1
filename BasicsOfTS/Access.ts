
import {tsClassDemo} from './tsClassDemo';

let tcc =new tsClassDemo(34556);
tcc.setUsername("Ganesh");
console.log(tcc.getUsername());
console.log(tcc.getTwofactor());

//function without return
function validate(value: string){
    console.log(value);    
}

validate("Protect the environment")

//function with return
function evaluate(value: number){
    return value*value;
}



console.log(evaluate(8));





