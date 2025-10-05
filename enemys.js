class Enemys {
    constructor(name, speed, attackk, health, defend) {
        this.name = name;
        this.speed = speed;
        this.attackk = attackk;
        this.health = health;
        this.defend = defend;
    }

    attack() {
        console.log(`drian attack, attack = ${this.attackk}`);
    }

    walk() {
        console.log(`drian walk, speed = ${this.speed}`);
    }

    dash() {
        console.log(`drian dash, speed = ${this.attackk}`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed=${this.speed}, attack=${this.attackk}, health=${this.health}, dan defend=${this.defend}`);
    }
}

const enemy = new Enemys("drian", "2", "5", "100", "2");
enemy.attack();
enemy.walk();
enemy.dash();
enemy.getInformation();
