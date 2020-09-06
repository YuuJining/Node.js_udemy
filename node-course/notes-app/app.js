const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { describe } = require('yargs')

// Custoumize yargs version
yargs.version('1.1.0')

// Create add command
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
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

yargs.parse()
//console.log(yargs.argv)
// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.red.bold.inverse('Success!')
// console.log(greenMsg)


// console.log(process.argv[2])
// const add = require('./utils.js')

// const sum = add(5,100)

// console.log(sum)