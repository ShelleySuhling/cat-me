var addCat = require('./addCat.js')
var keypress = require('keypress')
var readline = require('readline');

module.exports = function (catName) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var catInput = [];
    var time;
    
    keypress(process.stdin);

    console.log("A D D   A   C A T")
    console.log('paste in your ascii cat followed by the enter key: ')
    rl.on('line', function (cmd) {
        time === undefined ? time = new Date() : null
        catInput.push(cmd);
        process.stdin.on('keypress', function(chunk, key) {

            if(key && key.name === 'return'){
                time-new Date() < -100 ? rl.close() : null
            }
        })
        // // OTHER OPTION
        // cmd === "" ? rl.close() : null
    });
    
    rl.on('SIGINT', () => {
         process.exit(0);
    });

    rl.on('close', function (cmd) {
        addCat(catName, catInput).then((response)=>
        {
            response.success
            ? console.log("\n" + catName + " has been created!") 
            : console.log("Error: " + response.message)
        })
    });

    return ""
}
