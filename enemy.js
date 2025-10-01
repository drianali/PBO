class Enemys {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attackPower = 5;
        this.health = 100;
        this.defend = 2;
    }

    attack() {
        console.log(`enemy attack!, attack = ${this.attackPower}`);
    }

    walk() {
        console.log(`enemy walk, speed = ${this.speed}`);
    }

    dash() {
        console.log(`enemy dash, speed = 5`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`);
    }
}

const enemy1 = new Enemys("Goblin");
enemy1.getInformation();
enemy1.walk();
enemy1.attack();
enemy1.dash();

const enemy2 = new Enemys("Orc");
enemy2.getInformation();
enemy2.attack();
