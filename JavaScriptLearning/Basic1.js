module.exports=class Person{
    age = 40

    get location(){
        return "Canada"
    }

    constructor(firstname, lastname){
       this.firstname = firstname
       this.lastname = lastname
    }

    fullName(){
        console.log(this.firstname + " " + this.lastname)
    }
}

//let per = new Person("Harish", "Masjid")
//console.log(per.age)
//console.log(per.location)

//console.log(per.fullName())