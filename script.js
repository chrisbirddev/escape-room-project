import inquirer from 'inquirer';
import chalk from 'chalk';
import * as PokemonModule from './classes.js';

const { Pokemon, Pikachu, Bulbasaur, Squirtle, Charmander } = PokemonModule;


console.log(chalk.bgRed.bold("Welcome to Pokemon Escape Room"));

async function initiatePokemonSelection() {
      const usernameAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'username',
          message: "What's your username:",
        },
      ]);
  
      const username = usernameAnswer.username;
  
      const chosenPokemon = await chooseYourPokemon();
    }

async function chooseYourPokemon() {
    const pokemons = await inquirer.prompt([
        {
            type: "list",
            name: "pokemon",
            message: "choose your pokemon:",
            choices: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
        },
        {
        type: "confirm",
        name: "confirm2",
        message: (answers) => {
            const chosenPokemon = createPokemonInstance(answers);
            displayPokemonInfo(chosenPokemon);
            return `Are you sure you want to choose ${chosenPokemon.name}?`;
        },
    }
]);
    if (pokemons.confirm2) {
        await whereDoYouWannaGo();
    } else {
        console.log('lets go back')
        return chooseYourPokemon();
    }
}

function createPokemonInstance(chosenPokemon) {
    switch (chosenPokemon.pokemon) {
        case 'Pikachu':
            return new Pikachu();
        case 'Charmander':
            return new Charmander();
        case 'Squirtle':
            return new Squirtle();
        case 'Bulbasaur':
            return new Bulbasaur();
    }
}

function displayPokemonInfo(pokemon) {
    console.log(`${pokemon.name} | Type: ${pokemon.type} | Health: ${pokemon.health} | Power: ??`);
}

async function whereDoYouWannaGo() {
    const location = await inquirer.prompt([
        {
            type: "list",
            name: "location",
            message: "Where do you want to go?:",
            choices: ["Kanto", "Johto", "Hoeen", "Sinnoh"],
        },
        {
            type: "confirm",
            name: "confirm3",
            message: "are you sure?",
        }
    ])

    if (location.confirm3) {
        console.log(`you chose ${location.location}`);
        await wildPokemonEncounter();
    } else {
        console.log("Where do you wanna go?")
        return whereDoYouWannaGo()
    }
}

async function wildPokemonEncounter() {
        const encounterOptions = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'Wild Pokemon encountered! What will you do?',
            choices: ['Run', 'Battle'],
        });

        if (encounterOptions.choice === 'Run') {
            console.log('You chose to run. You lose some health points.'); 
        } else if (encounterOptions.choice === 'Battle') {
            console.log(`You chose to battle. Let the battle begin!`); 
        }
    } 
    

initiatePokemonSelection()



export default initiatePokemonSelection;
