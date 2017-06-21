#!/usr/bin/env node

// var catMe = require('./')
// var argv = require('yargs')
//   .alias('h', 'help')
//   .help('help')
//   .usage('C A T   M E\nprint a cat to your console\n' + catMe())
//   .example('catMe')
//   .example('catMe nyan')
//   .alias('c', 'cats')
//   .describe('c', 'get list of cat names')
//   .alias('add', 'cats')
//   .describe('add', 'add a new cat')
//   .argv

// var choice = argv._.join(' ')

// var output = argv.c ? 'CAT OPTIONS: ' + catMe.catNames.join(', ') : catMe(choice)
// console.log(argv)

// process.stdout.write(output)
// process.stdout.write('\n')



var catMe = require('./')
var add = require('./add.js')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('C A T   M E\nprint a cat to your console\n' + catMe())
  .example('catMe')
  .example('catMe nyan')
  .alias('c', 'cats')
  .describe('c', 'get list of cat names')
  .alias('a', 'add')
  .describe('add', 'add a new cat')
  .argv

var choice = argv._.join(' ')

if(argv.c){
   var output = 'CAT OPTIONS: ' + catMe.catNames.join(', ')
}
else if (argv.add){
  var output = add()
}
else {
  var output = catMe(choice)
}

process.stdout.write(output)
process.stdout.write('\n')
