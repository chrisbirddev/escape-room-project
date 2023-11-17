import inquirer from 'inquirer';
import chalk from 'chalk';
import * as PokemonModule from './classes.js';
import figlet from 'figlet';
import fs from 'fs';

let chosenPokemon;




const { Pokemon, Pikachu, Bulbasaur, Squirtle, Charmander} = PokemonModule;
const { WildPokemon } = PokemonModule;
const Wildmew = new WildPokemon("Mew", "psychic", 100, 60)
const Wildjynx = new WildPokemon("Jynx", "psychic", 100, 60);
const Wildalakazam = new WildPokemon("Alakazam", "psychic", 100, 60);
const Wildhypno = new WildPokemon("Hypno", "psychic", 100, 60);




console.log(chalk.yellow(figlet.textSync("Pokemon Escape Room", { horizontalLayout: 'full' })));

async function initiatePokemonSelection() {
      const usernameAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'username',
          message: chalk.bgGreenBright("What's your username:"),
        },
      ]);
  
      const username = usernameAnswer.username;
  
      chosenPokemon = await chooseYourPokemon();
      displayPokemonInfo(chosenPokemon);
    }

    async function chooseYourPokemon() {
        const pokemons = await inquirer.prompt([
            {
                type: "list",
                name: "pokemon",
                message: "Choose your pokemon:",
                choices: [
                    chalk.yellow("Pikachu"),
                    chalk.red("Charmander"),
                    chalk.blue("Squirtle"),
                    chalk.green("Bulbasaur"),
                ],
            },
        ]);
    
        chosenPokemon = createPokemonInstance(pokemons);
        displayPokemonInfo(chosenPokemon);
    
        const confirmation = await inquirer.prompt({
            type: "confirm",
            name: "confirm2",
            message: chalk.bgRed(`Are you sure you want to choose ${chosenPokemon.name}?`),
        });
    
        if (confirmation.confirm2) {
            await whereDoYouWannaGo1();
            return chosenPokemon;
        } else {
            console.log('Let\'s go back');
            return chooseYourPokemon();
        }
    }
    
    function createPokemonInstance(answers) {
        let pokemon;
        switch (answers.pokemon) {
            case chalk.yellow("Pikachu"):
                pokemon = new Pikachu();
                pokemon.filePath = "./pika.txt";
                logTxtFile(pokemon.filePath);
                return pokemon;
            case chalk.red("Charmander"):
                pokemon = new Charmander();
                pokemon.filePath = "./charm.txt";
                logTxtFile(pokemon.filePath);
                return pokemon;
            case chalk.blue("Squirtle"):
                pokemon = new Squirtle();
                pokemon.filePath = "./squirt.txt";
                logTxtFile(pokemon.filePath);
                return pokemon;
            case chalk.green("Bulbasaur"):
                pokemon = new Bulbasaur();
                pokemon.filePath = "./bulba.txt";
                logTxtFile(pokemon.filePath);
                return pokemon;
        }
    }
    
    function logTxtFile(filePath) {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
    }
function displayPokemonInfo(pokemon) {
    console.log(`${pokemon.name} | Type: ${pokemon.type} | Health: ${pokemon.health}| Power: ??`);
}


async function whereDoYouWannaGo1() {
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
        return whereDoYouWannaGo1()
    }
}

async function wildPokemonEncounter() {
    const WildPokemon = Wildmew;
    console.log(`Wild ${WildPokemon.name} appeared!`)
    console.log(`type: ${WildPokemon.type} | health: ${WildPokemon.health} | power: ${WildPokemon.power}`)

        const encounterOptions = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What will you do?',
            choices: ['Run', 'Battle'],
        });

        if (encounterOptions.choice === 'Run') {
            if (chosenPokemon) {
                chosenPokemon.health -= 50;
                console.log(`You chose to run. ${chosenPokemon.name} loses some health points.`);
                console.log(`${chosenPokemon.name}'s health reduced to ${chosenPokemon.health}.`);
                console.log(`${chosenPokemon.name} has currently ${chosenPokemon.health} health. Be careful`);
            }
    
            const continueRunning = await inquirer.prompt({
                type: 'confirm',
                name: 'confirmContinueRunning',
                message: 'Lets continue',
            });
    
            if (continueRunning.confirmContinueRunning) {
                console.log('Continuing to the next location...');
                await whereDoYouWannaGo2();
            } else {
                console.log('You decided to stay and face the wild Pokemon.');
                console.log(`Let the battle begin!`);
                await letsBeginBattle(WildPokemon);
            }
        } else if (encounterOptions.choice === 'Battle') {
            console.log(`You chose to battle. Let the battle begin!`);
            await letsBeginBattle(WildPokemon);
        }
    }

    async function letsBeginBattle(WildPokemon) {
        console.log(`Wild ${WildPokemon.name} attacked and created a riddle!`)
        await runGame1();
    } if (runRiddle1.correctAnswer1 === "your name") {
        console.log("You passed")
        await nextfunction()
     } 

async function runGame1() {
  await runRiddle1(riddle1, correctAnswer1);
}

const riddle1 = {
    name: "riddle1",
    type: "input",
    message: "What belongs to you, but others use it more than you?",
  };
  const correctAnswer1 = "your name";


async function runRiddle1() {
  let correct = false;
  let attempts = 0;

  while (!correct && attempts < 3) {
    const userAnswer = await inquirer.prompt({
        name: riddle1.name,
        type: riddle1.type,
        message: riddle1.message,
    });

    if (userAnswer[riddle1.name].toLowerCase() === correctAnswer1.toLowerCase()) {
      console.log(`Nice. You Won! ${chosenPokemon.name} gets +20 health points!`);
      chosenPokemon.health += 20;
      correct = true;
      await whereDoYouWannaGo2();
    } else {
        attempts++
      console.log(`Incorrect. You have ${3 - attempts} attempts remaining.`);
    }
    if (attempts === 3) {
        console.log(chalk.red("Game Over. Start Again"));
    }
  }
}


async function whereDoYouWannaGo2() {
    const location1 = await inquirer.prompt([
        {
            type: "list",
            name: "location1",
            message: "Where do you want to go?:",
            choices: ["A", "B"],
        },
        {
            type: "confirm",
            name: "confirm4",
            message: "are you sure?",
        }
    ])

    if (location1.confirm4) {
        console.log(`you chose ${location1.location1}`);
        await wildPokemonEncounter2();
    } else {
        console.log("Where do you wanna go?")
        return whereDoYouWannaGo2()
    }
}

async function wildPokemonEncounter2() {
    const WildPokemon = Wildjynx;
    console.log(`Wild ${WildPokemon.name} appeared!`);
    console.log(`Type: ${WildPokemon.type} | Health: ${WildPokemon.health} | Power: ${WildPokemon.power}`);

    const encounterOptions = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: `What will you do?`,
        choices: ['Run', 'Battle'],
    });

    if (encounterOptions.choice === 'Run') {
        if (chosenPokemon) {
            console.log(`You chose to run. ${chosenPokemon.name} loses some health points.`);
            chosenPokemon.health -= 50;
            console.log(`${chosenPokemon.name}'s health reduced to ${chosenPokemon.health}.`);
            console.log(`${chosenPokemon.name} has currently ${chosenPokemon.health} health. Be careful`);
        }

        if (chosenPokemon.health <= 0) {
            console.log(chalk.bgRedBright('Oh no! Your Pokemon died. Game over.'));
            process.exit();
        }

        const continueRunning = await inquirer.prompt({
            type: 'confirm',
            name: 'confirmContinueRunning',
            message: 'Lets continue',
        });

        if (continueRunning.confirmContinueRunning) {
            console.log('Continuing to the next location...');
            await whereDoYouWannaGo3();
        } else {
            console.log('You decided to stay and face the wild Pokemon.');
            console.log(`Let the battle begin!`);
            await LetsBeginBattle3(WildPokemon);
        }
    } else if (encounterOptions.choice === 'Battle') {
        console.log(`You chose to battle. Let the battle begin!`);
        await LetsBeginBattle2(WildPokemon);
    }
}

async function LetsBeginBattle2(wildPokemon) {
    console.log(`Wild ${wildPokemon.name} attacked and created a riddle!`)
        await runGame2();
    } if (runRiddle2.correctAnswer2 === "footsteps") {
        console.log("You passed")
     }

async function runGame2(){
    await runRiddle2(riddle2, correctAnswer2);
    }

    const riddle2 = {
        name: "riddle2",
        type: "input",
        message: "The more you take, the more you leave behind. what am I?",
      };
      const correctAnswer2 = "footsteps";

async function runRiddle2() {
    let correct = false;
    let attempts = 0;
  
    while (!correct && attempts < 3) {
      const userAnswer = await inquirer.prompt({
          name: riddle2.name,
          type: riddle2.type,
          message: riddle2.message,
      });
  
      if (userAnswer[riddle2.name].toLowerCase() === correctAnswer2.toLowerCase()) {
        console.log(`Nice, ${chosenPokemon.name} receives 20 health points `);
        chosenPokemon.health +=20;
        correct = true;
        await whereDoYouWannaGo3();
    } else {
        attempts++
      console.log(`Incorrect. You have ${3 - attempts} attempts remaining.`);
    }
    if (attempts === 3) {
        console.log(chalk.bgRedBright("Game Over. Start Again"));
    }
  }
}

  async function whereDoYouWannaGo3() {
        const location5 = await inquirer.prompt([
            {
                type: "list",
                name: "location5",
                message: "Where do you want to go?:",
                choices: ["A", "B"],
            },
            {
                type: "confirm",
                name: "confirm5",
                message: "are you sure?",
            }
        ])
    
        if (location5.confirm5) {
            console.log(`you chose ${location5.location5}`);
            await wildPokemonEncounter3();
        } else {
            console.log("Where do you wanna go?")
            return whereDoYouWannaGo3()
        }
  }

  async function wildPokemonEncounter3() {
    const WildPokemon = Wildalakazam;
    console.log(`Wild ${WildPokemon.name} appeared!`);
    console.log(`Type: ${WildPokemon.type} | Health: ${WildPokemon.health} | Power: ${WildPokemon.power}`);

    const encounterOptions = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: `What will you do?`,
        choices: ['Run', 'Battle'],
    });

    if (encounterOptions.choice === 'Run') {
        if (chosenPokemon) {
            console.log(`You chose to run. ${chosenPokemon.name} loses some health points.`);
            chosenPokemon.health -= 50;
            console.log(`${chosenPokemon.name}'s health reduced to ${chosenPokemon.health}.`);
            console.log(`${chosenPokemon.name} has currently ${chosenPokemon.health} health. Be careful`);

            if (chosenPokemon.health <= 0) {
                console.log(chalk.bgRedBright('Oh no! Your Pokemon died. Game over.'));
                process.exit();
            }
        }

        const continueRunning = await inquirer.prompt({
            type: 'confirm',
            name: 'confirmContinueRunning',
            message: 'Lets continue',
        });

        if (continueRunning.confirmContinueRunning) {
            console.log('Continuing to the next location...');
            await whereDoYouWannaGo4();
        } else {
            console.log('You decided to stay and face the wild Pokemon.');
            console.log(`Let the battle begin!`);
            await LetsBeginBattle3(WildPokemon);
        }
    } else if (encounterOptions.choice === 'Battle') {
        console.log(`You chose to battle. Let the battle begin!`);
        await LetsBeginBattle3(WildPokemon);
    }
}
async function LetsBeginBattle3(wildPokemon) {
    console.log(`Wild ${wildPokemon.name} attacked and created a riddle!`)
        await runGame3();
    } if (runRiddle3.correctAnswer3 === "the letter m") {
        console.log("You passed")
     }


async function runGame3(){
    await runRiddle3(riddle3, correctAnswer3);
}


const riddle3 = {
  name: "riddle3",
  type: "input",
  message: "What comes once in a minute, twice in a moment, but never in a thousand years?",
};
const correctAnswer3 = "the letter m";

async function runRiddle3() {
    let correct = false;
    let attempts = 0;
  
    while (!correct && attempts < 3) {
      const userAnswer = await inquirer.prompt({
          name: riddle3.name,
          type: riddle3.type,
          message: riddle3.message,
      });
  
      if (userAnswer[riddle3.name].toLowerCase() === correctAnswer3.toLowerCase()) {
        console.log("Nice!! Your Pokemon received 20 health points.");
        chosenPokemon.health += 20;
        correct = true;
        await whereDoYouWannaGo4();
    } else {
        attempts++
      console.log(`Incorrect. You have ${3 - attempts} attempts remaining.`);
    }
    if (attempts === 3) {
        console.log(chalk.bgRedBright("Game Over. Start Again"));
    }
  }
}

  async function whereDoYouWannaGo4() {
        const location6 = await inquirer.prompt([
            {
                type: "list",
                name: "location6",
                message: "Where do you want to go?:",
                choices: ["A", "B"],
            },
            {
                type: "confirm",
                name: "confirm6",
                message: "are you sure?",
            }
        ])
    
        if (location6.confirm6) {
            console.log(`you chose ${location6.location6}`);
            await wildPokemonEncounter4();
        } else {
            console.log("Where do you wanna go?")
            return whereDoYouWannaGo4()
        }
  }

  async function wildPokemonEncounter4() {
    const WildPokemon = Wildhypno;
    const encounterOptions = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: `Wild ${WildPokemon.name} encountered! What will you do?\nType: ${WildPokemon.type} | Health: ${WildPokemon.health} | Power: ${WildPokemon.power}`,
        choices: ['Battle'],
    });

    
 if (encounterOptions.choice === 'Battle') {
        console.log(`You chose to battle. Let the battle begin!`);
        await LetsBeginBattle4(WildPokemon);
    }
}

async function LetsBeginBattle4(wildPokemon) {
    console.log(`Wild ${wildPokemon.name} attacked and created a riddle!`)
    await runGame4();
} if (runRiddle4.correctAnswer4 === "a coffin") {
        console.log("You passed");
    }

    async function runGame4(){
        await runRiddle4(riddle4, correctAnswer4);
    }

    const riddle4 = {
        name: "riddle4",
        type: "input",
        message: "The person who makes it doesn't want it. The person who buys it doesn't need it. The person who uses it doesn't know. What is it?",
    };
    const correctAnswer4 = "a coffin";

    async function runRiddle4() {
        let correct = false;
        let attempts = 0;

        while (!correct && attempts < 3) {
            const userAnswer = await inquirer.prompt({
                name: riddle4.name,
                type: riddle4.type,
                message: riddle4.message,
            });

            if (userAnswer[riddle4.name].toLowerCase() === correctAnswer4.toLowerCase()) {
                console.log("Correct Answer!");
                correct = true;
                await finishFunction();
            } else {
                attempts++
              console.log(`Incorrect. You have ${3 - attempts} attempts remaining.`);
            }
            if (attempts === 3) {
                console.log(chalk.bgRedBright("Game Over. Start Again"));
            }
          }
        }
    

        async function finishFunction() {
            console.log(chalk.green(figlet.textSync('You Won!', { horizontalLayout: 'full' })));
            process.exit();
        }





initiatePokemonSelection()
 // wildPokemonEncounter()


 


export default initiatePokemonSelection;
