const chalk=require('chalk');
const validator=require('validator');

console.log(validator.isEmail(`piyush@gmail.mom`)?chalk.green.inverse(`Valid Email`):chalk.red.inverse(`Invalid Email`));