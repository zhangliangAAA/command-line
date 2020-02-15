#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');

program.version('0.1.0').option('-c, --city <path>', 'enter cityName');
program.parse(process.argv);

console.log(colors.yellow('==========='));
console.log(colors.green(program.city));
console.log(colors.yellow('==========='));
