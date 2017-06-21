  var prompt = require('prompt')
  var cats = require('./cats.json')
  var jsonfile = require('jsonfile')
  var _ = require('lodash')





module.exports = function () {

    var readline = require('readline');
    var input = [];

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var catName;
    var catAscii;
    rl.question('Please enter the name of cat: ', (name) => {
        console.log('Paste in your ascii cat followed by ^D')
        rl.on('line', function (cmd) {
            input.push(cmd);
        });
        catName = name;
        catAscii = input;
    });

    rl.on('close', function (cmd) {
        var returnCats = {}
        _.map(cats, (cat,name)=> {
            returnCats[name] = cat.split("\n")
        })

        returnCats[catName] = catAscii
        var buff = new Buffer.from(JSON.stringify(cats));
        var file = 'cats.json'
        jsonfile.writeFile(file, returnCats, function(err){
            console.log(err)
        })
    });

    return ""
}
