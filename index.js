#!/usr/bin/env node


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let p_name;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
      'Welcome Mate To The Game Of Sycho! UwU \n'
    );
  
    await sleep();
    rainbowTitle.stop();
  
    console.log(`
      ${chalk.bgBlue('HOW TO PLAY')} 
      I Am A CLI Game Made By My Master Sycho So He Can Know How Much Others Know About Him
      If You Get Any Questions Wrong I Will Be Saying ${chalk.bgRed('Thukka Chandi')}
      If You Complete The Game You Will Get A Surprise From My Master Sycho.
    `);
  }

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking Your Chandi Answer...').start();
    await sleep();

    if(isCorrect) {
        spinner.success({ text: `Arey! Milayeu Tw ${p_name} Mate` });
    } else {
        spinner.error({text:`Thukka Chandi! Bigarey ${p_name} Mate`});
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'p_name',
        type: 'input',
        message: 'What Is Your Name?',
        default(){
            return 'Player';
        }
    });

    p_name = answers.p_name;
}

function winner(){
    console.clear();
    figlet(`Badhaixa, ${p_name} !\n $ 1, 000, 000`, (err, data) => {
console.log(gradient.pastel.multiline(data) + '\n');

console.log(
    chalk.green(
        `You Know My Master Sycho As Much As He Let's You`
    )
);

process.exit(0);
    });
}
async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'What Is Sycho Real Name?\n',
      choices: [
        'Prince',
        'Digbijaya',
        'Concept',
        'PussyMan',
        'Not Listed Here ;9',
      ],
    });
  
    return handleAnswer(answers.question_1 === 'Not Listed Here ;9');
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What Is The Hometown Of Sycho?\n',
      choices: ['Syangja', 'Butwal', 'NewYork', 'Kathmandu'],
    });
    return handleAnswer(answers.question_2 === 'Butwal');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `What Is The Name Of Sycho's Current GF?\n`,
      choices: ['Sneha', 'Apekshya', 'Pramila', 'Alien'],
    });
  
    return handleAnswer(answers.question_3 === 'Alien');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'What Does Sycho Likes Most?\n',
      choices: [
        'Cursing Others',
        'Coding',
        'Watching Movie And Anime',
        'Playing Games',
        'Solving Math Riddles' // Correct
      ],
    });
    return handleAnswer(answers.question_4 === 'Coding');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'What Does Sycho Aspire To Be?\n',
      choices: ['Developer', 'Film-maker', 'Esport Player', 'Pornstar'],
    });
  
    return handleAnswer(answers.question_5 === 'Film-maker');
  }

  // Run the game
  console.clear();
  await welcome();
  await askName();
  await question1();
    await question2();
    await question3();
    await question4();
    await question5();
 winner();
