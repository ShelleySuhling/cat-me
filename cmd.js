#!/usr/bin/env node

var catMe = require('./')
var addComandLine = require('./addCommandLine.js')
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
var output = ""
if(argv.c){
   output = 'CAT OPTIONS: ' + catMe.catNames.join(', ')
}
else if (argv.add){
  addComandLine(argv.add)
}
else {
  output = catMe(choice)
}

process.stdout.write(output)
process.stdout.write('\n')
