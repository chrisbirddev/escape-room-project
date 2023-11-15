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

class WildPokemon extends Pokemon {
    constructor() {
        super("Mew", "psychic", 100, 60);
    }
}

const jynx = new WildPokemon("Jynx", "psychic", 100, 60);
const alakazam = new WildPokemon("Alakazam", "psychic", 100, 60);
const hypno = new WildPokemon("Hypno", "psychic", 100, 60);

module.export = {Pokemon, Pikachu, Bulbasaur, Squirtle, Charmander, WildPokemon};

