// OBJECT LITERAL

let person = {
    name: "widia",
    age: 20,
    skill: ["js","python"],
};

// console.log(typeof person); //output 'object'


//CLASS

class Person {
    constructor(name, age, skills, address, status){
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.address = address;
        this.status = status

    }
}

// console.log(typeof Person) // output 'function'

// Instanciation = proses instansi / membuat sebuah objek class 
let jack = new Person("jack",23, ["illustrator"], "Jakarta", true)
let jake = new Person("jake", 12, [], "Bandung", false)

console.log(jack);
console.log(jake);