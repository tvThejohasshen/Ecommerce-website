// in the Bookshelf ORM (and MOST ORM), a model represent one TABLE in your database
// you issue commands (in javascript) on the model,
//  and the model translate your commands to SQL (or whatever DB you are using)
// you require a file and it's a js file, you can omit the extension
//instead of 'const bookshelf = require('../bookshelf/index.js')'
//const bookshelf = require('..bookshelf/index)
// when you are requiring a file in a FOLDER and the file is'index'
// you can omit the index (you omit the file name)

const bookshelf = require('../bookshelf');

// create a product model
// one model represents one table in your database
// first argument : name of your model 
// second argument : a configuration object
const Product = bookshelf.model('Product', {
    tableName:'products'
} )

module.exports = { Product }