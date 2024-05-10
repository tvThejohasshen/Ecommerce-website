
// all default starting file of a nodejs module is 'index.js'

// knex is necessary for bookshelf to work
const knex = require('knex')(
    {
        //client refers to what database technology we are using 
        client: 'mysql',
        connection :{
            user:'school',
            password:'college',
            database:'singschool',
            host: '127.0.0.1'   // aka 'local host'
        }
    }
);
 
//create bookshelf
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;

