class Animal {
    speak(){
        console.log("Animal make a sound");
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog sound like Guk Guk");
    }
}

class Cat extends Animal {
    speak(){
        console.log("Cat sound like Meow Meow");
    }
}

const dog = new Dog();
dog.speak();