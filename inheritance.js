//parent class
class Person {
    constructor(name){
        this.name = name;
    }

    getInformation(){
        console.log(`this person is ${this.name}`);
    }
}

//child class
class Professor extends Person{
    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }

    introduceSelf(){
        console.log(`My name is ${this.name}, and i will be your ${this.teaches} professor`)
    };
}

const professor = new Professor("Adrian", "Math");
console.log(professor.getInformation());
console.log(professor.introduceSelf());

// let person = new Person("Adrian");
// console.log(person.getInformation());