class Pokemon {
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

class Pikachu extends Pokemon {
    constructor() {
        super("Pikachu", "eletric", 100, 40);
    }
}

class Charmander extends Pokemon {
    constructor() {
        super("Charmander", "fire", 100, 40);
    }
}

class Squirtle extends Pokemon {
    constructor() {
        super("Squirtle", "water", 100, 40);
    }
}

class Bulbasaur extends Pokemon {
    constructor() {
        super("Bulbasaur", "grass", 100, 40);
    }
}

module.export = {Pokemon, Pikachu, Bulbasaur, Squirtle, Charmander};