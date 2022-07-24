const chalk = require('chalk')
const yargs = require('yargs')

const {getNotes, addNote, removeNotes} = require('./notes')


// customize yarn version
yargs.version('1.1.0')


// add, remove, read, list

// create add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    }, 
    handler: function(argv){
        removeNotes(argv.title)
    }
})

// create list commend
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function(){
        console.log('listing a new note')
    }
})

// create read commend
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a new note')
    }
})


yargs.parse()