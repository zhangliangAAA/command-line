#!/usr/bin/env node
const program = require('commander');

program.version('0.1.0').option('-c, --city [city]', 'cheese city', '上海');

program.parse(process.argv);
console.log(program.opts());

var standard_input = process.stdin;
// Set input character encoding.
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function(data) {
	// User input exit.
	if (data === 'exit\n') {
		// Program exit.
		console.log('User input complete, program exit.');
		process.exit();
	} else {
		// Print user input in console.
		console.log('User Input Data : ' + data);
	}
});
