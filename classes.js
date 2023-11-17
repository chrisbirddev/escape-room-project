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
        super("Pikachu", "electric", 100, 60);
    }
}

 class Bulbasaur extends Pokemon {
    constructor() {
        super("Bulbasaur", "grass", 100, 60);
    }
}

 class Squirtle extends Pokemon {
    constructor() {
        super("Squirtle", "water", 100, 60);
    }
}

 class Charmander extends Pokemon {
    constructor() {
        super("Charmander", "fire", 100, 60);
    }
}

class WildPokemon extends Pokemon {
    constructor(name, type, health, power) {
        super(name, type, health, power);
    }
}

const Wildmew = new WildPokemon("Mew", "psychic", 100, 20)
const Wildjynx = new WildPokemon("Jynx", "psychic", 100, 40);
const Wildalakazam = new WildPokemon("Alakazam", "psychic", 100, 80);
const Wildhypno = new WildPokemon("Hypno", "psychic", 100, 99);

export {Pokemon, Pikachu, Bulbasaur, Squirtle, Charmander, WildPokemon, Wildmew, Wildjynx, Wildalakazam, Wildhypno};

