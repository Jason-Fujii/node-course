const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//console.log(yargs.argv)
yargs.parse()

//add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}).argv

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
}).argv

//Create list command
yargs.command({
    command: 'list',
    describe: 'List out all existing notes',
    handler(){
        notes.listNotes()
    }
}).argv

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read an existing note',
    builder: {
        title: {
            describe: 'Title of note you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
}).argv

// if(command === 'add') {
//     console.log('Adding note!')
// } else if(command === 'remove'){
//     console.log('Removing note!')
// }