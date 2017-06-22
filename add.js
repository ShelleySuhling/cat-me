var cats = require('./cats.json')
var jsonfile = require('jsonfile')
var _ = require('lodash')
var keypress = require('keypress')
var readline = require('readline');


module.exports = function (name) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var input = [];


    var catName;
    var catAscii;
    var time;
    

    keypress(process.stdin);

    console.log("A D D   A   C A T\n")
        console.log('Paste in your ascii cat followed by the enter key: ')
        rl.on('line', function (cmd) {
        time === undefined ? time = new Date() : null
        input.push(cmd);
        process.stdin.on('keypress', function(chunk, key) {

            if(key && key.name === 'return'){
                time-new Date() < -100 ? rl.close() : null
            }
        })
        // cmd === "" ? rl.close() : null
        });
        catName = name;
        catAscii = input;

    rl.on('close', function (cmd) {
        var returnCats = {}
        _.map(cats, (cat,name)=> {
            returnCats[name] = cat.split("\n")
        })

        returnCats[catName] = catAscii
        var buff = new Buffer.from(JSON.stringify(cats));
        var file = 'cats.json'
        jsonfile.writeFile(file, returnCats, function(err){
            if(err){
                console.log(err)
            }else
            {
                console.log("\n" + catName + " has been added!")
            }
        })
    });

    rl.on('SIGINT', () => {
         process.exit(0);
    });

    return ""
}
