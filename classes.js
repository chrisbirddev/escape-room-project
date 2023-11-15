export class Pokemon {
    constructor(name, type, health, power) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.power = power;
    }

    usePower() {
        console.log(`${this.name} uses ${this.power}`);
    }
}

export class Pikachu extends Pokemon {
    constructor() {
        super("Pikachu", "electric", 100, 60);
    }
}

export class Bulbasaur extends Pokemon {
    constructor() {
        super("Bulbasaur", "grass", 100, 60);
    }
}

export class Squirtle extends Pokemon {
    constructor() {
        super("Squirtle", "water", 100, 60);
    }
}

export class Charmander extends Pokemon {
    constructor() {
        super("Charmander", "fire", 100, 60);
    }
}

