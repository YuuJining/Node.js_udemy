const chalk = require('chalk')
const getNotes = require('./notes.js')


const msg = getNotes()
console.log(msg)

const greenMsg = chalk.red.bold.inverse('Success!')
console.log(greenMsg)

// const add = require('./utils.js')

// const sum = add(5,100)

// console.log(sum)