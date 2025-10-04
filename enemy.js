class Enemys {
    constructor(name) {
        this.name = ["Goblin"];
        this.speed = [2];
        this.attackk = [5];
        this.health = [100];
        this.defend = [2];
    }

    attack() {
        console.log(`enemy attack!, attack = ${this.attackk}`);
    }

    walk() {
        console.log(`enemy walk, speed = ${this.speed}`);
    }

    dash() {
        console.log(`enemy dash, speed = 5`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed=${this.speed}, attack=${this.attackk}, health=${this.health}, dan defend=${this.defend}`);
    }
}

const enemy = new Enemys("Goblin");
enemy.attack();
enemy.walk();
enemy.dash();
enemy.getInformation();
