const utils = require('./utils')
const getNotes = require('./notes')
const validate = require('validator')
const chalk = require('chalk')


let note = "lorem is when you have nothing to say"
const notes = getNotes(note)


console.log(utils(5 , 6))
console.log(notes)
console.log(validate.isEmail('foo@bar.com'))
console.log(validate.isEmail('foo@list.ru'))
console.log(validate.isURL('https://www.npmjs.com/package/validator'))

console.log(chalk.green('Success!'))

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

