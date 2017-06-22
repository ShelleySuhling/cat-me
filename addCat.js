var cats = require('./cats.json')
var catMe = require('./index.js')
var jsonfile = require('jsonfile')
var _ = require('lodash')


module.exports = function (catName, catAscii) {
    var returnCats = {}
    _.map(cats, (cat, name)=> {
        returnCats[name] = cat.split("\n")
    })

    returnCats[catName] = catAscii
    var buff = new Buffer.from(JSON.stringify(cats));
    var file = 'cats.json'
    
    return new Promise((fulfill, reject) => {
        jsonfile.writeFile(file, returnCats, function(err){
            if(err){
                reject({success: false, message: err})
            } else {
                fulfill({success: true, message: catMe(catName)})
            }
        })
    })
}
