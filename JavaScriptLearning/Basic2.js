const Person = require("./Basic1")

class Pet extends Person{
    get location(){
        return "Bluecross"
    }

    constructor(firstname, lastname){
        super(firstname, lastname)
    }


}

let p = new Pet("yello", "green")
console.log(p.fullName())