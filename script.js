import inquirer from 'inquirer';
import chalk from 'chalk';


<<<<<<< HEAD
console.log(chalk.bgRed.bold("Welcome to Pokemon Escape Room"));

async function initiatePokemonSelection() {
    try {
      const usernameAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'username',
          message: "What's your username:",
        },
      ]);
  
      const username = usernameAnswer.username;
  
      const chosenPokemon = await chooseYourPokemon();
  
    } catch (error) {
        console.error('Error:', error);
    }
}

async function chooseYourPokemon() {
    const pokemons = await inquirer.prompt([
        {
            type: "list",
            name: "pokemon",
            message: "choose your pokemon:",
            choices: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        },
        {
        type: "confirm",
        name: "confirm2",
        message: "Are you sure?",
    }
    ])
    if (pokemons.confirm2) {
        console.log(`You chose ${pokemons.pokemon}`)
    } else {
        console.log('lets go back')
        return chooseYourPokemon();
    }
}

initiatePokemonSelection()











/* async function whereDoYouWannaGo() {
    const location = await inquirer.prompt({
        type: "list",
        name: "location",
        choices: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
}, 
{
    type: "confirm",
    name: "confirm3",
    message: "Are you sure?"
})
} */





/* inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: "What's your username:",
    },
  ])
  .then(async (answers) => {
    const userName = answers.username;
    console.log(`Hello, ${userName} welcome`);

  return inquirer.prompt([
    {
    type: 'list',
    name: 'choosenPokemon',
    message: 'Choose your Pokemon',
    choices: ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'],
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
    },
    {
        type:`list`,
        name:"Paths",
        message: "Where do you wanna go next?",
        choices: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
    },
    {
        type: 'confirm',
        name: 'confirm1',
        message: 'Are you sure?',
    },
]);
  */


export default initiatePokemonSelection;
=======
console.log("Welcome to Pokemon Escape Room");

>>>>>>> b0afa3e6edd9978055d0d3e48a86768d678278a3
