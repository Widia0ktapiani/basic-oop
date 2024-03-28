//Teori OOP

/**Pilar utama dalam OOP
 * 1. Inheritance
 * 2. Polymorphism
 * 3. encapsulation
 * 4. abstraction
 */

//INHERITANCE


class Person{
    constructor(name, job, isGraduated, city, skills){
        this.name = name;
        this.job = job;
        this.skills = skills;
        this.isGraduated = isGraduated;
        this.city = city
        this.skills = skills
    }
}

class Developer extends Person {
    constructor(name, isGraduated, city, skills, status) {
        super(name, "developer", isGraduated, city, skills);
        this.status = status;
    }
}

class Designer extends Person {
    constructor(name, isGraduated, city, skills, tools) {
        super(name, "designer", isGraduated, city, skills);
        this.tools = tools;
    }
}

let developer = new Developer ("vincent", true, "Jakarta", ["js","python"], "taken")
let designer = new Designer ("widia", false, "Bandung", [], "canva")

console.log(developer)
console.log(designer)


