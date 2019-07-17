const inquirer = require('inquirer');

const chalk = require('chalk');

const prompt = inquirer.createPromptModule();

const question = [
  {
    type: 'input',
    name: 'name',
    message: 'What\'s your name?',
  },
  {
    type: 'input',
    name: 'yob',
    message: 'What\'s your year of birth?',
    validate(value) {
         const valid = !isNaN(parseInt(value, 10)) && (new Date().getFullYear() - value) >= 0;
         return valid || 'Please enter a vaild year of birth';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'hometown',
    message: 'What\'s your home town?',
  },
];

prompt(question).then((answers) => {
  console.log(`Thank you. Hello ${chalk.redBright(answers.name)}, so you are ${chalk.magenta(new Date().getFullYear() - answers.yob)} year old and from ${chalk.cyanBright(answers.hometown)}`);
});