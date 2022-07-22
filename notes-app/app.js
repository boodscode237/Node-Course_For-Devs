const utils = require('./utils')
const getNotes = require('./notes')
const validate = require('validator')


let note = "lorem is when you have nothing to say"
const notes = getNotes(note)


console.log(utils(5 , 6))
console.log(notes)
console.log(validate.isEmail('foo@bar.com'))
console.log(validate.isEmail('foo@list.ru'))
console.log(validate.isURL('https://www.npmjs.com/package/validator'))

