import inquirer from 'inquirer';

let score = 0;

async function runRiddle(riddle, correctAnswer) {
  let correct = false;
  let attempts = 0;

  while (!correct && attempts < 2) {
    const userAnswer = await inquirer.prompt(riddle);

    if (userAnswer[riddle.name].toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct! You've earned 100 points'.");
      score += 100;
      correct = true;
    } else {
      console.log(`Incorrect. You have ${1 - attempts} attempt remaining.`);

      const retryOrSkip = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Retry for 80 points', 'Use your Pokemon power to skip this riddle'],
      });

      if (retryOrSkip.action === 'Retry for 80 points') {
        attempts++;
        score += 80;
      } else {
        console.log(`The correct answer is: ${correctAnswer}`);
        correct = true;
      }
    }
  }
}

const riddle1 = {
  name: "riddle1",
  type: "input",
  message: "What belongs to you, but others use it more than you?",
};
const correctAnswer1 = "your name";

const riddle2 = {
  name: "riddle2",
  type: "input",
  message: "The more you take, the more you leave behind. what am I?",
};
const correctAnswer2 = "footsteps";

const riddle3 = {
  name: "riddle3",
  type: "input",
  message: "What comes once in a minute, twice in a moment, but never in a thousand years?",
};
const correctAnswer3 = "the letter m";

const riddle4 = {
  name: "riddle4",
  type: "input",
  message: "The person who makes it doesn't want it. The person who buys it doesn't need it. The person who uses it doesn't know. What is it?",
};
const correctAnswer4 = "a coffin";

async function runGame() {
  await runRiddle(riddle1, correctAnswer1);
  await runRiddle(riddle2, correctAnswer2);
  await runRiddle(riddle3, correctAnswer3);
  await runRiddle(riddle4, correctAnswer4);

  console.log(`Your final score: ${score}`);
}

runGame();

